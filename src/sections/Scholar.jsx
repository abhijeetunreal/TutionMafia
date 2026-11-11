import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Scholar = () => {
  useGSAP(() => {
    gsap.set('.scholar-section', { marginTop: '-80vh' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.scholar-section',
          start: 'top 90%',
          end: '10% center',
          scrub: 2,
        },
      })
      .to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to(
      '.scholar-section .img-box',
      {
        scrollTrigger: {
          trigger: '.scholar-section',
          start: 'top center',
          end: '80% center',
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: 'power1.inOut',
      },
      '<'
    );
  });

  return (
    <section className="scholar-section" id="scholar">
      <div className="max-w-lg scholar-content">
        <h1>The Modern Scholar</h1>
        <h2>Why memorize for hours when you can conquer concepts through creative logic?</h2>
        <p>
          Traditional schools treat your brain like a filing cabinet—forcing exhausting
          rote memory until burnout strikes. At Tuition Mafia, we invert the paradigm.
          We transform abstract calculus, complex organic mechanisms, and algorithms into
          vivid visual models, real-world simulations, and instinctive mental shortcuts.
        </p>

        <div className="scholar-2">
          <img src="/images/scholar-2.webp" alt="Creative Collaborative Lab" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="scholar-1">
          <img src="/images/scholar-1.webp" alt="Modern Student Focus" />
        </div>
        <div className="scholar-3">
          <img src="/images/scholar-3.webp" alt="High-Speed Learning Sprint" />
        </div>
      </div>
    </section>
  );
};

export default Scholar;
