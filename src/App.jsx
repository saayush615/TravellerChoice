import './App.css'
import Herosection from './components/Herosection'
import TravelGuidesSection from './components/TravelGuidesSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Herosection />
      {/* main-section */}
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <TravelGuidesSection />
      </div>

      <Footer />
    </>
  )
}

export default App