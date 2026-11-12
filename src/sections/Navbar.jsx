import { useState, useEffect } from 'react';
import TrialModal from '../components/TrialModal';

const navData = {
  en: [
    { label: 'HOME', targetId: 'hero', isYellow: true, hasArrow: false },
    { label: 'EXPERIENCE', targetId: 'briefing', hasArrow: true },
    { label: 'MODERN SCHOLAR', targetId: 'scholar', hasArrow: false },
    { label: 'MASTERMINDS', targetId: 'masterminds', hasArrow: true },
    { label: 'CREATIVE STUDIO', targetId: 'studio', hasArrow: true },
    { label: 'ADMISSIONS 2026-27', targetId: 'admissions', hasArrow: false, openModal: true },
  ],
  hi: [
    { label: 'होम', targetId: 'hero', isYellow: true, hasArrow: false },
    { label: 'अनुभव', targetId: 'briefing', hasArrow: true },
    { label: 'आधुनिक विद्वान', targetId: 'scholar', hasArrow: false },
    { label: 'मास्टरमाइंड्स', targetId: 'masterminds', hasArrow: true },
    { label: 'क्रिएटिव स्टूडियो', targetId: 'studio', hasArrow: true },
    { label: 'प्रवेश 2026-27', targetId: 'admissions', hasArrow: false, openModal: true },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('tm_lang') || 'en';
  });
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tm_lang', lang);
    window.dispatchEvent(new CustomEvent('tm-lang-change', { detail: { lang } }));
  }, [lang]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsLangOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsLangOpen(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavigate = (item) => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
    setTimeout(() => {
      if (item.targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(item.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (item.openModal) {
        setTimeout(() => setIsTrialOpen(true), 600);
      }
    }, 200);
  };

  const currentLinks = navData[lang] || navData.en;

  return (
    <>
      <nav>
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <img
              src="./images/nav-logo.svg"
              alt="Tuition Mafia"
              className="h-10 md:h-11 object-contain"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="p-1 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <img
            src="./images/menu.svg"
            alt="menu-svg"
            className="w-9 md:w-10"
          />
        </button>
      </nav>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/65 backdrop-blur-sm z-[110] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsLangOpen(false);
        }}
        aria-hidden="true"
      />

      {/* Slide-out side panel */}
      <aside
        className={`fixed top-0 right-0 h-dvh w-full sm:w-[520px] md:w-[560px] max-w-full bg-[radial-gradient(circle_at_100%_0%,#1e1938_0%,#120e24_45%,#0b0916_100%)] text-white z-[120] px-7 sm:px-12 py-8 sm:py-10 flex flex-col justify-between shadow-[-15px_0_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-label="Navigation Menu"
        aria-modal="true"
      >
        {/* Top Header - Tuition Mafia branding */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3.5">
            <img
              src="./images/tution/mascot_student_light.png"
              alt="Tuition Mafia"
              className="h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
            />

            <div className="w-[1px] h-[18px] bg-white/30" />

            <span className="text-[#edeafc] text-sm sm:text-[15px] font-bold tracking-[0.3px] whitespace-nowrap">
              {lang === 'hi' ? 'ट्यूशन माफिया' : 'Tuition Mafia'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              setIsLangOpen(false);
            }}
            className="w-11 h-11 rounded-full bg-[#27243c] hover:bg-[#363254] flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#a4a0c8"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Tuition Mafia Navigation List */}
        <div className="flex flex-col gap-3 sm:gap-4 my-auto py-6">
          {currentLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigate(item)}
              className="group flex items-center justify-between text-left cursor-pointer transition-transform duration-200 hover:translate-x-1"
            >
              <span
                className={`uppercase tracking-normal whitespace-nowrap transition-colors duration-200 ${
                  lang === 'hi'
                    ? 'font-extrabold text-[2.2rem] xs:text-[2.6rem] sm:text-[2.9rem] md:text-[3.2rem] leading-[1.1]'
                    : 'font-long leading-[0.9] text-[2.75rem] xs:text-[3.25rem] sm:text-[3.75rem] md:text-[4rem]'
                } ${
                  item.isYellow
                    ? 'text-yellow hover:text-[#fffde0]'
                    : 'text-[#c5c2ed] group-hover:text-white'
                }`}
              >
                {item.label}
              </span>
              {item.hasArrow && (
                <span className="text-[#c5c2ed] group-hover:text-white transition-all duration-200 group-hover:translate-x-1 pl-4 flex items-center">
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2 2 8 8 2 14" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Bottom Bar: Language Selector (English / हिन्दी) & Motion */}
        <div className="flex items-center justify-between pt-4 select-none relative">
          {/* Language Dropdown Menu */}
          <div className="relative">
            {isLangOpen && (
              <div className="absolute bottom-11 left-0 z-50 bg-[#1d1933] border border-white/20 rounded-xl p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col gap-1 min-w-[140px] backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => {
                    setLang('en');
                    setIsLangOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                    lang === 'en'
                      ? 'bg-white/15 text-[#fff9cb]'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>English</span>
                  {lang === 'en' && <span className="text-[#fff9cb]">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLang('hi');
                    setIsLangOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                    lang === 'hi'
                      ? 'bg-white/15 text-[#fff9cb]'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>हिन्दी (Hindi)</span>
                  {lang === 'hi' && <span className="text-[#fff9cb]">✓</span>}
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-[#edeafc] text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Change Language"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#edeafc"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{lang === 'hi' ? 'हिन्दी' : 'English'}</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#edeafc"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>

          {/* Motion Toggle */}
          <button
            type="button"
            onClick={() => setMotionEnabled(!motionEnabled)}
            className="flex items-center gap-1.5 text-[#edeafc] text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span>{lang === 'hi' ? 'मोशन' : 'Motion'}</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#edeafc"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${motionEnabled ? '' : 'rotate-180'}`}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </aside>

      {/* Trial Modal via Portal */}
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </>
  );
};

export default Navbar;
