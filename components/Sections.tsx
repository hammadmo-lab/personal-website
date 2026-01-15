
import React from 'react';
import { ArrowRightIcon, MapPinIcon, GlobeAmericasIcon, BookOpenIcon, HeartIcon, SparklesIcon, CubeIcon } from '@heroicons/react/24/outline';

// Assets are now referenced directly as URLs in the ASSETS object below

// --- CONFIGURATION ---
// IMPORTANT: Replace these URLs with the actual links to your uploaded photos.
const ASSETS = {
  // Hero portrait for Home section
  heroPortrait: new URL('../assets/hero-portrait.jpg', import.meta.url).href,

  // Professional photo for About section
  aboutProfessional: new URL('../assets/about-professional.jpg', import.meta.url).href,

  // Radly app screenshot
  radlyApp: "/radly-illustration.jpg",

  // Gallery images
  gallery: [
    new URL('../assets/gallery-columns.jpg', import.meta.url).href,
    "https://placehold.co/800x800/e7e5e4/44403c?text=Gallery+2",
    "https://placehold.co/600x400/e7e5e4/44403c?text=Gallery+3",
    "https://placehold.co/600x800/e7e5e4/44403c?text=Gallery+4",
    "https://placehold.co/600x600/e7e5e4/44403c?text=Gallery+5"
  ]
};

// --- SHARED COMPONENTS ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 md:mb-16 text-center">
    {subtitle && <span className="block text-stone-500 text-sm uppercase tracking-[0.2em] mb-3">{subtitle}</span>}
    <h2 className="font-serif text-4xl md:text-5xl text-stone-900">{title}</h2>
    <div className="w-16 h-px bg-stone-300 mx-auto mt-6"></div>
  </div>
);

const ButtonPrimary = ({ children, onClick, href }: { children: React.ReactNode, onClick?: () => void, href?: string }) => {
  const className = "inline-flex items-center px-8 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform";
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  return <button onClick={onClick} className={className}>{children}</button>;
};

// --- HOME SECTION ---

export const Home = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fdfbf7]">
      {/* Organic Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-stone-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20 lg:pt-0 relative z-10">

        {/* Text Content */}
        <div className="lg:col-span-7 z-10 text-center lg:text-left order-2 lg:order-1">
          <span className="inline-block mb-6 text-sm md:text-base tracking-[0.3em] text-stone-500 uppercase animate-fade-in-up font-medium">
            Dr. Mohamed Amin Hammad
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-900 leading-[0.9] tracking-tighter mb-8 animate-fade-in-up delay-100">
            Medicine <br />
            <span className="italic text-stone-600 font-light ml-4">meets</span> <br />
            Exploration
          </h1>
          <p className="max-w-2xl lg:mx-0 mx-auto text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-12 animate-fade-in-up delay-200">
            I'm a radiologist who codes, travels, and writes. Sometimes all three make sense together.
            Other times, I'm just trying to figure it out like everyone else.
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-fade-in-up delay-300">
            <ButtonPrimary onClick={() => onNavigate('radly')}>Explore Innovation</ButtonPrimary>
            <button onClick={() => onNavigate('about')} className="px-8 py-3 border border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-all uppercase text-sm tracking-widest hover:-translate-y-0.5">
              My Story
            </button>
          </div>
        </div>

        {/* Hero Image Slot - Mapped to "Sunglasses Selfie" */}
        <div className="lg:col-span-5 relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2 animate-fade-in-up delay-200 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md mx-auto">
            {/* Abstract background shape - Morphing Blob */}
            <div className="absolute inset-0 bg-stone-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob opacity-50 shadow-inner"></div>

            {/* Image Container */}
            <div className="absolute inset-4 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group transition-all duration-700 hover:rounded-[50%]">
              <img
                src={ASSETS.heroPortrait}
                alt="Dr. Mohamed Amin Hammad - Explorer"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              {/* Gradient overlay for text readability if needed, slightly warm */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-12 -left-8 bg-white/90 backdrop-blur p-6 shadow-xl rounded-lg border-l-4 border-stone-900 animate-bounce-slow hidden md:block transform -rotate-2 hover:rotate-0 transition-transform">
              <p className="font-serif text-stone-900 text-xl">Global Citizen</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">10+ Countries Visited</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Quick Links Grid */}
    <section className="py-24 bg-white relative z-20 -mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Radly App', desc: 'AI-Powered Radiology Reporting', icon: SparklesIcon, action: () => onNavigate('radly') },
          { title: 'Passport Trails', desc: 'Travel Blog & Photography', icon: GlobeAmericasIcon, action: () => onNavigate('travel') },
          { title: 'Books', desc: 'Psychology & Personality', icon: BookOpenIcon, action: () => onNavigate('books') },
        ].map((item, idx) => (
          <div key={idx} onClick={item.action} className="group relative p-10 border border-stone-200 bg-stone-50/30 hover:bg-white hover:border-stone-400 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
              <ArrowRightIcon className="w-6 h-6 text-stone-300" />
            </div>

            <div className="w-14 h-14 bg-white border border-stone-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors duration-500 shadow-sm">
              <item.icon className="w-7 h-7 text-stone-400 group-hover:text-white transition-colors duration-500" />
            </div>

            <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
            <p className="text-stone-500 leading-relaxed mb-8 group-hover:text-stone-600 transition-colors">{item.desc}</p>

            <div className="w-12 h-px bg-stone-300 group-hover:w-full group-hover:bg-stone-900 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  </>
);

// --- ABOUT SECTION ---

export const About = () => (
  <div className="animate-fade-in-up">
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="My Story" subtitle="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Biography Text - Sticky Sidebar Effect */}
          <div className="prose prose-stone prose-lg text-stone-600 font-light leading-loose lg:sticky lg:top-32">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-stone-900">
              <strong>I'm</strong> Dr. Mohamed Amin Hammad, an Egyptian radiologist who ended up creating software and traveling the world when I wasn't planning to do either.
              Life has a way of revealing paths you didn't know you were looking for. As Head of Radiology at a private hospital, I spend my days helping people find answers through imaging,
              but I've learned that the real answers often come from asking better questions.
            </p>
            <p>
              Radiology reporting can be painfully repetitive. After writing the same patterns hundreds of times, I couldn't ignore the inefficiency anymore.
              So I built <strong>Radly</strong>, an AI assistant that handles the repetitive parts so radiologists can focus on the diagnostic thinking that actually matters.
              It's not about replacing doctors. It's about giving them their time back to do what only humans can do: connect the dots that machines miss.
            </p>
            <p>
              When I'm not at the hospital or coding, I travel. Not the Instagram kind of travel, but the kind where you sit in a café in Dubrovnik or walk through Reykjavik at midnight
              and realize how much you don't know. Through <strong>Passport Trails</strong>, I share what I've learned across 12 countries with Arabic speakers who want practical guidance, not just pretty pictures.
              Travel taught me that understanding different perspectives isn't optional if you want to build things that actually help people.
            </p>


          </div>

          {/* Personal Image Slot - Mapped to "White Coat Selfie" */}
          <div className="relative pl-0 lg:pl-10">
            <div className="aspect-[3/4] bg-stone-100 p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-full overflow-hidden border border-stone-200">
                <img
                  src={ASSETS.aboutProfessional}
                  alt="Dr. Hammad at Radiology Desk"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <p className="text-center font-serif text-stone-400 italic mt-6 text-sm">Diagnostics & Dedication</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- RADLY SECTION ---

export const Radly = () => (
  <div className="animate-fade-in-up">
    <section className="pt-60 pb-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden relative">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase mb-4 block font-semibold">The Startup</span>
          <h2 className="font-serif text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Radly Assistant</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
            After writing my thousandth "no acute findings" report, I had a choice: keep complaining or build something.
            So I built Radly, an AI assistant that handles the boring parts of radiology reporting. It's not perfect, but it gives radiologists
            their time back to actually think about the cases that matter.
          </p>
          <ul className="space-y-4 text-slate-300 mb-10 font-light">
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-3 text-cyan-400 shrink-0" /> Automated Reporting Workflows</li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-3 text-cyan-400 shrink-0" /> AI-Driven Analysis</li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-3 text-cyan-400 shrink-0" /> Built by a Radiologist, for Radiologists</li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-3 text-cyan-400 shrink-0" /> Available on iOS</li>
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://apps.apple.com/app/radly-assistant/id6754604993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
              <div className="flex items-center gap-3 h-12 px-5 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl backdrop-blur-sm">
                <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2c.316 0 .573.256.573.573v18.854a.573.573 0 01-.573.573H6.477a.573.573 0 01-.573-.573V2.573c0-.317.256-.573.573-.573h11.046zM12 18.5a1 1 0 100 2 1 1 0 000-2zm4-14H8v12h8v-12z" />
                </svg>
                <div>
                  <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">Android</p>
                  <p className="text-sm text-white font-medium">Coming Soon</p>
                </div>
              </div>
            </div>
            <a
              href="https://radly.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all text-sm uppercase tracking-widest font-medium w-fit group"
              style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
            >
              <span className="border-b border-cyan-400/50 group-hover:border-cyan-300 pb-1">Or visit Radly.app</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Radly Image Slot - Mapped to Illustration */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Illustration Container with Glassmorphism */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group bg-white/5 backdrop-blur-md">
              <img
                src={ASSETS.radlyApp}
                alt="Radly Illustration"
                className="w-full h-auto object-contain animate-[float_6s_ease-in-out_infinite]"
              />
              {/* Reflection/Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
            </div>
            {/* Glow effect - Updated to Cyan/Indigo */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
    <style>{`
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    `}</style>
  </div>
);



// --- TRAVEL SECTION ---



export const Travel = () => (
  <div className="animate-fade-in-up">
    <section className="py-24 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Split Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <SectionTitle title="Passport Trails" subtitle="Global Exploration" />
            <p className="text-2xl font-serif text-stone-800 leading-relaxed mb-8 italic relative z-10">
              <span className="text-6xl text-amber-200 absolute -top-8 -left-4 -z-10">"</span>
              Travel is not about escaping life—it's about discovering it in places you've never been,
              through eyes you've never seen with.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-lg">
              From the frozen landscapes of Iceland to the ancient souks of the Middle East, I've spent years
              exploring the intersection of culture, history, and human connection.
            </p>
            <ButtonPrimary href="https://passporttrails.com">Read the Travel Blog</ButtonPrimary>
          </div>

          {/* Right Image - Small Polaroid Style */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100 rounded-full blur-3xl -z-10 opacity-60"></div>

            <div className="relative transform rotate-3 hover:rotate-0 transition-all duration-500 group">
              <div className="bg-white p-4 pb-16 shadow-2xl max-w-sm transform transition-transform group-hover:scale-105">
                <div className="overflow-hidden border border-stone-100">
                  <img
                    src="/travel-collage.jpg"
                    alt="Travel Moments"
                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-stone-500 text-xl rotate-[-2deg]">
                  Memories & Miles
                </div>
              </div>
              {/* Tape effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/80 backdrop-blur-sm shadow-sm transform -rotate-2"></div>
            </div>
          </div>
        </div>

        {/* Minimal Stats Strip */}
        <div className="border-y border-stone-200 py-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Countries' },
              { number: '3', label: 'Continents' },
              { number: '100+', label: 'Guides' },
              { number: '∞', label: 'Stories' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-serif text-stone-900 mb-1">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Featured Destinations - Horizontal Scroll Cards */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <h3 className="font-serif text-3xl text-stone-900">Countries Explored</h3>
            <div className="hidden md:flex gap-2 text-stone-400">
              <span className="text-sm uppercase tracking-wider">12 destinations</span>
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
            {[
              {
                country: 'Egypt',
                flag: '🇪🇬',
                desc: 'My homeland, the land of pharaohs. Where the Nile whispers ancient stories and every sunset over the pyramids reminds me of timeless wonder.',
                color: 'bg-gradient-to-br from-amber-50 to-yellow-50'
              },
              {
                country: 'Iceland',
                flag: '🇮🇸',
                desc: 'Fire and ice dance in perfect harmony. Where glaciers meet volcanoes and the Northern Lights paint the sky with magic.',
                color: 'bg-gradient-to-br from-blue-50 to-cyan-50'
              },
              {
                country: 'Norway',
                flag: '🇳🇴',
                desc: 'Majestic fjords and midnight sun. A land where nature\'s grandeur humbles the soul and Viking heritage lives in every stone.',
                color: 'bg-gradient-to-br from-indigo-50 to-blue-50'
              },
              {
                country: 'Turkey',
                flag: '🇹🇷',
                desc: 'Where East meets West in a symphony of cultures. Istanbul\'s call to prayer echoes through millennia of empires and stories.',
                color: 'bg-gradient-to-br from-red-50 to-rose-50'
              },
              {
                country: 'Spain',
                flag: '🇪🇸',
                desc: 'Passionate spirit and endless sunshine. Flamenco rhythms, tapas at twilight, and a joie de vivre that\'s utterly contagious.',
                color: 'bg-gradient-to-br from-yellow-50 to-orange-50'
              },
              {
                country: 'Italy',
                flag: '🇮🇹',
                desc: 'Art, history, and la dolce vita. Every cobblestone street tells a Renaissance tale, every meal a celebration of life.',
                color: 'bg-gradient-to-br from-green-50 to-emerald-50'
              },
              {
                country: 'Saudi Arabia',
                flag: '🇸🇦',
                desc: 'Desert mystique and spiritual depth. From the holy cities to the dunes of the Empty Quarter, a journey into the heart of Arabia.',
                color: 'bg-gradient-to-br from-emerald-50 to-teal-50'
              },
              {
                country: 'Latvia',
                flag: '🇱🇻',
                desc: 'Baltic charm and Art Nouveau elegance. Riga\'s spires pierce the sky while forests whisper ancient Baltic legends.',
                color: 'bg-gradient-to-br from-rose-50 to-pink-50'
              },
              {
                country: 'Russia',
                flag: '🇷🇺',
                desc: 'Vast, enigmatic, and breathtaking. Onion domes, literary souls, and landscapes that stretch beyond imagination.',
                color: 'bg-gradient-to-br from-blue-50 to-indigo-50'
              },
              {
                country: 'Lithuania',
                flag: '🇱🇹',
                desc: 'Medieval castles and resilient spirit. Vilnius\' baroque beauty and the haunting beauty of the Curonian Spit.',
                color: 'bg-gradient-to-br from-amber-50 to-yellow-50'
              },
              {
                country: 'Croatia',
                flag: '🇭🇷',
                desc: 'Adriatic jewel with azure waters. Ancient Dubrovnik walls and island-dotted coastlines that redefine paradise.',
                color: 'bg-gradient-to-br from-sky-50 to-blue-50'
              },
              {
                country: 'Bosnia & Herzegovina',
                flag: '🇧🇦',
                desc: 'Resilience and beauty intertwined. Sarajevo\'s rich tapestry of culture, Mostar\'s iconic bridge spanning history.',
                color: 'bg-gradient-to-br from-slate-50 to-stone-50'
              }
            ].map((dest, i) => (
              <div key={i} className={`min-w-[280px] md:min-w-[320px] p-6 rounded-lg border border-stone-200 ${dest.color} hover:shadow-xl transition-all snap-center group cursor-default`}>
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{dest.flag}</div>
                <h4 className="font-serif text-2xl text-stone-900 mb-3">{dest.country}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{dest.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Philosophy - Minimal Text */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-stone-900 mb-6">The Philosophy</h3>
          <p className="text-stone-600 leading-relaxed text-lg">
            I don't collect countries. I collect moments where things finally make sense. Through <span className="font-semibold text-stone-900">PassportTrails</span>,
            I share what actually works when you're trying to navigate a new place, especially for Arabic speakers who want real advice, not influencer content.
          </p>
        </div>

      </div>
    </section>
  </div>
);

// --- BOOKS SECTION ---

export const Books = () => (
  <div className="animate-fade-in-up">
    <section className="py-24 relative overflow-hidden">
      {/* Paper Texture Background */}
      <div className="absolute inset-0 bg-[#f5f5f0] opacity-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle title="Written Works" subtitle="Author" />

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            I've always been curious about why people are the way they are. As an INFJ, I spent years trying to understand my own patterns before I realized
            other people might have the same questions. So I wrote about it.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            These books aren't academic. They're what I wish someone had told me when I was trying to figure out personality types, relationships,
            and why some connections just work. Written for people who think too much and feel too deeply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Book 1 */}
          <div className="flex flex-col items-center text-center group perspective-1000">
            <div className="w-56 h-80 shadow-2xl mb-10 relative transition-all duration-500 transform-style-3d group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105">
              <img
                src="/unraveling-infj-enigma.jpg"
                alt="Unraveling the INFJ Enigma Book Cover"
                className="w-full h-full object-cover rounded-sm"
              />
              {/* Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-white/20 transform -translate-x-full origin-right rotate-y-90"></div>
            </div>
            <h3 className="font-serif text-3xl mb-3 text-stone-900">Unraveling the INFJ Enigma</h3>
            <p className="text-stone-500 mb-6 max-w-xs leading-relaxed">Understanding the most rare personality type with compassion and depth.</p>
            <a href="https://www.amazon.com/Unraveling-INFJ-Enigma-Understanding-Compassionate/dp/B0BS1FNS7F" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-stone-900 pb-1 text-stone-900 hover:text-amber-700 hover:border-amber-700 transition-colors uppercase text-xs tracking-widest">View on Amazon</a>
          </div>

          {/* Book 2 */}
          <div className="flex flex-col items-center text-center group perspective-1000">
            <div className="w-56 h-80 shadow-2xl mb-10 relative transition-all duration-500 transform-style-3d group-hover:rotate-y-[-12deg] group-hover:rotate-x-6 group-hover:scale-105">
              <img
                src="/finding-your-soulmate.jpg"
                alt="Finding Your Soulmate Book Cover"
                className="w-full h-full object-cover rounded-sm"
              />
              {/* Spine Effect */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 transform translate-x-full origin-left rotate-y-[-90deg]"></div>
            </div>
            <h3 className="font-serif text-3xl mb-3 text-stone-900">Finding Your Soulmate</h3>
            <p className="text-stone-500 mb-6 max-w-xs leading-relaxed">Using the Zodiac and Natal Charts to find your perfect match.</p>
            <a href="https://www.amazon.com/Finding-Your-Soulmate-Zodiac-Perfect-ebook/dp/B0BRNVWK9Y" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-stone-900 pb-1 text-stone-900 hover:text-amber-700 hover:border-amber-700 transition-colors uppercase text-xs tracking-widest">View on Amazon</a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- GALLERY SECTION ---

export const Gallery = () => (
  <div className="animate-fade-in-up">
    <section className="pt-60 pb-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Visual Diary</h2>
          <div className="w-16 h-px bg-stone-700 mx-auto mt-6"></div>
        </div>

        {/* Masonry Grid for Mixed Aspect Ratios */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {ASSETS.gallery.map((src, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative group overflow-hidden rounded-sm cursor-zoom-in animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// --- CONTACT SECTION ---

export const Contact = () => (
  <div className="animate-fade-in-up">
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle title="Get in Touch" subtitle="Contact" />
        <p className="text-lg text-stone-600 mb-12 font-light">
          Whether you're interested in radiology consultation, Radly partnership, or just want to discuss travel and books, I'd love to hear from you.
        </p>

        <div className="bg-white p-8 md:p-16 shadow-2xl border border-stone-100 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-stone-50 rounded-bl-full -mr-10 -mt-10"></div>

          <div className="relative z-10 space-y-12">
            {/* Email CTA */}
            <div className="text-center">
              <p className="text-stone-500 uppercase tracking-widest text-xs mb-4">Email Me Directly</p>
              <a
                href="mailto:contact@m.mohamedhammad.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white text-sm tracking-[0.15em] uppercase hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contact@m.mohamedhammad.com</span>
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-stone-200"></div>
              <span className="text-stone-400 text-xs uppercase tracking-widest">Or Connect On</span>
              <div className="flex-1 h-px bg-stone-200"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/mohamed-h-47953589"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-stone-50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-xs text-stone-500 uppercase tracking-wider group-hover:text-stone-900 transition-colors">LinkedIn</span>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/thisishammadmo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-stone-50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-xs text-stone-500 uppercase tracking-wider group-hover:text-stone-900 transition-colors">X / Twitter</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/ThisIsHammadMo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-stone-50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-xs text-stone-500 uppercase tracking-wider group-hover:text-stone-900 transition-colors">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
