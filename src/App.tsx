
import './App.css'
import AboutUs from './components/about-us'
import Curriculum from './components/curriculum'
import Footer from './components/footer'
import Highlights from './components/highlights'
import JoiningMHS from './components/JoiningMHS'
import LatestNews from './components/LatestNews'
import LeadershipTeam from './components/LeadershipTeam'
import LifeAtMHS from './components/life-at-mhs'
import OurPromise from './components/our-promise'
import SchoolLandingPage from './components/school-landing-page'
import ParentTestimonials from './components/testimonials'

// import sample from "./assets/pdf/sample.pdf"

function App() {

  return (
    <div className='flex flex-col'>

      <SchoolLandingPage />
      <AboutUs />
      <Highlights />
      <OurPromise />
      <Curriculum />
      <LifeAtMHS />
      <ParentTestimonials />
      <JoiningMHS />
      <LeadershipTeam />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default App
