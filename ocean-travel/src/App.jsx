import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PackagesSection from './components/PackagesSection'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30 selection:text-primary">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <PackagesSection />
          <ReservationSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
