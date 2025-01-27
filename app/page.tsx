import HeroSection from '../app/components/HeroSection/index';
import About from '../app/About/index';
import Navbar from '../app/components/Navbar/index';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <About/>
    </div>
  );
}
