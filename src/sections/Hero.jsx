import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ComingSoon from './ComingSoon';
import { useMaskSettings } from '../../constants';

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      webkitMaskPosition: initialMaskPos,
      maskSize: initialMaskSize,
      webkitMaskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', {
      marginTop: '-100vh',
      opacity: 0,
    });
    gsap.set('.entrance-message', {
      marginTop: '0vh',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2,
        end: '+=200%',
        pin: true,
      },
    });

    // Step 1: First screen logo disappears first on scroll
    tl.to('.fade-out', {
      opacity: 0,
      ease: 'power1.out',
      duration: 0.8,
    })
      // Step 2: AFTER the first logo disappears, the masking logo begins zooming down
      .to(
        '.scale-out',
        {
          scale: 1,
          ease: 'power1.inOut',
          duration: 2.2,
        },
        '>'
      )
      .to(
        '.mask-wrapper',
        {
          maskSize,
          webkitMaskSize: maskSize,
          maskPosition: maskPos,
          webkitMaskPosition: maskPos,
          ease: 'power1.inOut',
          duration: 2.2,
        },
        '<'
      )
      // Step 3: Mask seamlessly cross-dissolves into overlay-logo at the final position
      .to('.mask-wrapper', {
        opacity: 0,
        duration: 0.6,
      })
      .to(
        '.overlay-logo',
        {
          opacity: 1,
          duration: 0.6,
          onComplete: () => {
            gsap.to('.overlay-logo', { opacity: 0, duration: 0.4 });
          },
        },
        '<'
      )
      .to(
        '.entrance-message',
        {
          duration: 1,
          ease: 'power1.inOut',
          maskImage:
            'radial-gradient(circle at 50% 0vh,black,transparent 100%)',
          webkitMaskImage:
            'radial-gradient(circle at 50% 0vh,black,transparent 100%)',
        },
        '<'
      );
  });

  return (
    <section className="hero-section" id="hero">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="Tuition Mafia Modern Classroom"
          className="scale-out"
        />
        <img
          src="/images/big-hero-text.svg"
          alt="Tuition Mafia"
          className="title-logo fade-out"
        />
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      {/* Seamless overlay logo matching entrance-logo pixel-for-pixel */}
      <div className="fake-logo-wrapper pointer-events-none">
        <img
          src="/images/big-hero-text.svg"
          alt="wrapper-logo"
          className="overlay-logo hero-brand-logo"
        />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;



