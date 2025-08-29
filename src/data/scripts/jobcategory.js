/**
 * Build + download: [{ id, category, jobs: [...] }]
 * Parent: #job_interest_id  |  Child: #profile_role_id
 * Skips first option of parent and first option of child (placeholders).
 */
(async function buildCategoryJobsAndDownload({
  parentSelect = "#job_interest_id",
  childSelect = "#profile_role_id",
  skipParentFirst = true,
  skipChildFirst = true,
  placeholderValues = new Set(["", "0"]),
  placeholderTextRegex = /^(select|choose|--)/i,
  minChildOptionsAfterSkip = 1,
  timeoutMs = 15000,
  pollInterval = 100,
  stabilityMs = 250, // require the same child list twice this far apart
  settleMs = 100, // tiny pause after change event
  filename = `category_jobs_${new Date()
    .toISOString()
    .slice(0, 19)
    .replace(/[:T]/g, "-")}.json`,
  pretty = true,
} = {}) {
  // ---------- utils ----------
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const $ = (sel) => {
    const el = document.querySelector(sel);
    if (!el) throw new Error(`No element matches selector: ${sel}`);
    return el;
  };

  const triggerReactFriendlyChange = (el) => {
    const proto = Object.getOwnPropertyDescriptor(
      HTMLSelectElement.prototype,
      "value"
    );
    if (proto && proto.set) proto.set.call(el, el.value);
    else el.value = el.value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const isPlaceholderOption = (
    opt,
    idx,
    { skipFirst, placeholderValues, placeholderTextRegex }
  ) => {
    if (!opt) return true;
    if (skipFirst && idx === 0) return true; // index 0 placeholder
    if (opt.disabled) return true;
    const val = String(opt.value ?? "").trim();
    const txt = String(opt.textContent ?? "").trim();
    if (placeholderValues.has(val)) return true; // '' / '0' / etc.
    if (placeholderTextRegex.test(txt)) return true; // "Select...", "Choose...", "-- ..."
    return false;
  };

  const getChildLabels = () => {
    const select = document.querySelector(childSelect);
    if (!select) return [];
    return Array.from(select.options)
      .filter(
        (o, i) =>
          !isPlaceholderOption(o, i, {
            skipFirst: skipChildFirst,
            placeholderValues,
            placeholderTextRegex,
          })
      )
      .map((o) => o.textContent.trim())
      .filter(Boolean);
  };

  const signature = (labels) => JSON.stringify(labels);

  // Wait until: (a) labels differ from previous signature, (b) labels length ok,
  // (c) labels stay the same for `stabilityMs` (two identical reads)
  const waitForChildChangedAndStable = async (
    prevSig,
    { minLen = 1, timeout = 10000, interval = 100, stability = 250 } = {}
  ) => {
    const start = performance.now();

    while (true) {
      const labels1 = getChildLabels();
      const sig1 = signature(labels1);

      const changed = sig1 !== prevSig;
      const okLen = labels1.length >= minLen;

      if (changed && okLen) {
        // confirm stability
        await sleep(stability);
        const labels2 = getChildLabels();
        const sig2 = signature(labels2);
        if (sig2 === sig1) return labels2; // stable
      }

      if (performance.now() - start > timeout)
        throw new Error("Timeout waiting for child to update.");
      await sleep(interval);
    }
  };

  const downloadJSON = (data, name) => {
    const json = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // ---------- main ----------
  const parentEl = $(parentSelect);

  // Snapshot the parent options up-front
  let rawParents = Array.from(parentEl.options);
  if (skipParentFirst && rawParents.length) rawParents = rawParents.slice(1);

  const parentOptions = rawParents.filter(
    (o, i) =>
      !isPlaceholderOption(o, i, {
        skipFirst: false, // we already sliced
        placeholderValues,
        placeholderTextRegex,
      })
  );

  const finalResult = [];
  let idCounter = 1;

  for (const pOpt of parentOptions) {
    const category = (pOpt.textContent || "").trim();

    // Capture pre-change child signature BEFORE switching parent
    const preSig = signature(getChildLabels());

    // Select parent and fire change
    parentEl.value = pOpt.value;
    triggerReactFriendlyChange(parentEl);
    await sleep(settleMs);

    // Now wait until the child actually changes & stabilizes
    let jobs = [];
    try {
      jobs = await waitForChildChangedAndStable(preSig, {
        minLen: minChildOptionsAfterSkip,
        timeout: timeoutMs,
        interval: pollInterval,
        stability: stabilityMs,
      });
    } catch {
      console.warn(`⚠️ Child options timed out for "${category}"`);
      jobs = [];
    }

    finalResult.push({ id: idCounter++, category, jobs });
    console.log(`✅ ${category} →`, jobs);
  }

  console.log("Final result:", finalResult);
  downloadJSON(finalResult, filename);
  return finalResult;
})();
