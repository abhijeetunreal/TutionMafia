import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import FirstVideo from './sections/FirstVideo';
import Scholar from './sections/Scholar';
import SecondVideo from './sections/SecondVideo';
import Masterminds from './sections/Masterminds';
import PostCard from './sections/PostCard';
import Final from './sections/Final';
import Outro from './sections/Outro';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />

      <Hero />

      <FirstVideo />
      <Scholar />

      <SecondVideo />
      <Masterminds />

      <PostCard />

      <Final />

      <Outro />
    </main>
  );
};

export default App;
