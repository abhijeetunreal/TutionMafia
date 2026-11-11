import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Masterminds = () => {
  useGSAP(() => {
    gsap.set('.masterminds-section', { marginTop: '-80vh' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.masterminds-section',
          start: 'top 80%',
          end: '10% center',
          scrub: 2,
        },
      })
      .to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to(
      '.masterminds-section .img-box',
      {
        scrollTrigger: {
          trigger: '.masterminds-section',
          start: 'top center',
          end: '80% center',
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: 'power1.inOut',
      },
      '<'
    );
  });

  return (
    <section className="masterminds-section" id="masterminds">
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96">
        <div className="masterminds-1">
          <img src="/images/masterminds-1.webp" alt="Elite Syndicate Faculty" />
        </div>
        <div className="masterminds-3">
          <img src="/images/masterminds-3.webp" alt="Victory & Academic Success" />
        </div>
      </div>

      <div className="lg:w-1/2 masterminds-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>The Masterminds</h1>
          <h2>Direct personal guidance from educators who cracked the summit first.</h2>
          <p>
            You don't learn strategy from someone who merely read the textbook.
            At Tuition Mafia, every mentor is a battle-tested veteran—Olympiad champions,
            top-tier engineers, and master educators. Armed with real-time feedback loops
            and 24/7 doubt warfare, we replace academic anxiety with unstoppable competence.
          </p>
        </div>

        <div className="masterminds-2">
          <img src="/images/masterminds-2.webp" alt="The Masterclass Workshop" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          We hold a sacred promise: No student gets left behind in an overcrowded classroom.
          With small syndicate cohorts, customized tracking dashboards, and 24/7 direct mentor
          access, your academic victory is guaranteed.
        </p>
      </div>
    </section>
  );
};

export default Masterminds;
