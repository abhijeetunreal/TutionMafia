import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

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
    <section className="post-card" id="studio">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700">
        <img src="/images/overlay.webp" alt="Studio Overlay" />

        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transition duration-700 font-extrabold uppercase tracking-wider text-black">
          Explore Creative Studio
        </button>
      </div>
    </section>
  );
};

export default PostCard;
