import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Jobs from './pages/Jobs'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import CountrySelect from './pages/CountrySelect'
import JobCategories from './pages/JobCategories'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/select-country" element={<CountrySelect />} />
            <Route path="/job-categories" element={<JobCategories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 