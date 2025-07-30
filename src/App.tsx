import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
