import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const TrialModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Grade 10',
    track: 'Board Exam Mastery (95%+)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setSubmitted(false);
    };
    window.addEventListener('open-trial-modal', handleOpen);
    return () => window.removeEventListener('open-trial-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#110f1a] border border-red-500/40 rounded-2xl shadow-[0_0_50px_rgba(230,32,46,0.35)] p-6 md:p-8 text-white overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Close"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/tution/mascot_student_light.png"
                alt="Tuition Mafia Mascot"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
                  Exclusive Syndicate Admission
                </span>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Join Tuition Mafia
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Experience our unconventional creative learning methodology. Get a
              free 1-on-1 diagnostic test, personalized concept breakdown, and a
              live trial masterclass.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  Student / Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Aryan Sharma"
                  className="w-full bg-[#1b1728] border border-gray-700 focus:border-red-500 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#1b1728] border border-gray-700 focus:border-red-500 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Student Grade
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                    className="w-full bg-[#1b1728] border border-gray-700 focus:border-red-500 rounded-lg px-3 py-2.5 text-white outline-none transition text-sm"
                  >
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11 (Science)</option>
                    <option>Grade 12 (Science)</option>
                    <option>Grade 11/12 (Commerce)</option>
                    <option>Foundation / Coding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Target Track
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) =>
                      setFormData({ ...formData, track: e.target.value })
                    }
                    className="w-full bg-[#1b1728] border border-gray-700 focus:border-red-500 rounded-lg px-3 py-2.5 text-white outline-none transition text-sm"
                  >
                    <option>Board Exam Mastery (95%+)</option>
                    <option>JEE / NEET Track</option>
                    <option>Cambridge / IGCSE / IB</option>
                    <option>Creative Math & AI Coding</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold uppercase tracking-wider rounded-lg shadow-[0_0_25px_rgba(230,32,46,0.5)] transition duration-300 transform active:scale-95 cursor-pointer"
              >
                Claim Free Masterclass & Blueprint ⚡
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-6 text-[11px] text-gray-400 uppercase tracking-widest">
              <span>✓ 100% Free Trial</span>
              <span>✓ No Commitment</span>
              <span>✓ 25 Seats Per Batch</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-red-600/20 text-red-500 border border-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Welcome to the Syndicate!
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>! Your
              diagnostic trial masterclass request has been received. Our chief
              academic mentor will connect with you at{' '}
              <span className="text-red-400">{formData.phone}</span> within 2 hours.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-6 text-left text-xs text-gray-300 space-y-1.5">
              <p>
                <strong>Track:</strong> {formData.track}
              </p>
              <p>
                <strong>Grade:</strong> {formData.grade}
              </p>
              <p>
                <strong>Motto:</strong> Learn Smart. Grow Big.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-white text-black font-bold uppercase rounded-lg hover:bg-yellow transition cursor-pointer"
            >
              Back to Experience
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default TrialModal;
