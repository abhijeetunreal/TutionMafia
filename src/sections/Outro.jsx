import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      },
    });

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' });
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <section className="final-message" id="contact">
      <div className="h-full col-center gap-8 md:gap-10 px-4 text-center">
        <img
          src="./images/logo.webp"
          alt="Tuition Mafia Logo"
          className="md:w-72 w-52 object-contain drop-shadow-[0_10px_25px_rgba(230,32,46,0.6)]"
        />

        <div>
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-red-500 bg-red-950/50 border border-red-500/30 px-5 py-2 rounded-full inline-block mb-4">
            Admissions Open • Academic Year 2026-2027
          </span>
          <h3 className="gradient-title">
            LEARN SMART <br /> GROW BIG <br /> 2026-27
          </h3>
        </div>

        <div className="flex-center gap-4 md:gap-8 flex-wrap">
          <div className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            📘 CBSE & ICSE
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            ⚛️ JEE & NEET
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            🌍 Cambridge & IB
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outro;
