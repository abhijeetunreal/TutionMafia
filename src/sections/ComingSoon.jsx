const ComingSoon = () => {
  return (
    <section className="entrance-message">
      {/* Entrance Logo: perfectly matches overlay-logo via shared hero-brand-logo class */}
      <img
        src="/images/big-hero-text.svg"
        alt="Tuition Mafia Logo"
        className="entrance-logo hero-brand-logo"
      />

      {/* Content positioned cleanly below the logo */}
      <div className="entrance-content-box">
        <div className="text-wrapper">
          <span className="text-xs md:text-sm uppercase font-extrabold tracking-[0.3em] text-red-500 bg-red-950/60 border border-red-500/40 px-5 py-1.5 rounded-full inline-block mb-3">
            Admissions Open • Batch 2026-2027
          </span>
          <h3 className="gradient-title">
            LEARN SMART <br /> GROW BIG
          </h3>
        </div>

        <div className="flex-center gap-2.5 md:gap-5 max-w-3xl flex-wrap justify-center mt-3">
          <div className="px-4 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            🎓 Expert Guidance
          </div>
          <div className="px-4 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            💡 Interactive Learning
          </div>
          <div className="px-4 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            📈 Better Results
          </div>
          <div className="px-4 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            🏆 Success In Life
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

