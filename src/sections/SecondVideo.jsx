import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const SecondVideo = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.set('.second-vd-section', { marginTop: '-60vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.second-vd-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true,
      },
    });

    tl.to('.second-vd-section', { opacity: 1, duration: 1, ease: 'power1.inOut' });

    const handleVideo = () => {
      if (videoRef.current && videoRef.current.duration) {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current.duration,
            duration: 3,
            ease: 'power1.inOut',
          },
          '<'
        );
      }
    };

    if (videoRef.current) {
      if (videoRef.current.readyState >= 1) {
        handleVideo();
      } else {
        videoRef.current.onloadedmetadata = handleVideo;
      }
    }
  });

  return (
    <section className="second-vd-section">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd md:[object-position:15%_0%] [object-position:50%_center]"
        />
      </div>
    </section>
  );
};

export default SecondVideo;
