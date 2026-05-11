import React from 'react';
import { ArrowRightIcon, MapPinIcon, GlobeAmericasIcon, BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Locale, Translation } from '../i18n';

const ASSETS = {
  heroPortrait: new URL('../assets/hero-portrait.jpg', import.meta.url).href,
  aboutProfessional: new URL('../assets/about-professional.jpg', import.meta.url).href,
  travelHero: new URL('../assets/travel-hero.jpg', import.meta.url).href,
  radlyApp: '/radly-illustration.jpg',
  gallery: [
    new URL('../assets/gallery-columns.jpg', import.meta.url).href,
    'https://placehold.co/800x800/e7e5e4/44403c?text=Gallery+2',
    'https://placehold.co/600x400/e7e5e4/44403c?text=Gallery+3',
    'https://placehold.co/600x800/e7e5e4/44403c?text=Gallery+4',
    'https://placehold.co/600x600/e7e5e4/44403c?text=Gallery+5',
  ],
};

type SectionProps = {
  locale: Locale;
  copy: Translation;
  isRtl: boolean;
};

type HomeProps = SectionProps & {
  onNavigate: (page: string) => void;
};

const arrowClass = (isRtl: boolean, className = 'w-4 h-4') =>
  `${className} ${isRtl ? 'rotate-180' : ''}`;

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 md:mb-16 text-center">
    {subtitle && <span className="block text-stone-500 text-sm uppercase tracking-[0.2em] mb-3">{subtitle}</span>}
    <h2 className="font-serif text-4xl md:text-5xl text-stone-900">{title}</h2>
    <div className="w-16 h-px bg-stone-300 mx-auto mt-6"></div>
  </div>
);

const ButtonPrimary = ({ children, onClick, href }: { children: React.ReactNode, onClick?: () => void, href?: string }) => {
  const className = 'inline-flex items-center justify-center px-8 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform';
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  return <button onClick={onClick} className={className}>{children}</button>;
};

export const Home = ({ onNavigate, copy, isRtl }: HomeProps) => (
  <>
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fdfbf7]">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-stone-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20 lg:pt-0 relative z-10">
        <div className={`lg:col-span-7 z-10 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} order-2 lg:order-1`}>
          <span className="inline-block mb-6 text-sm md:text-base tracking-[0.3em] text-stone-500 uppercase animate-fade-in-up font-medium">
            {copy.home.eyebrow}
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-900 leading-[0.9] tracking-normal mb-8 animate-fade-in-up delay-100">
            {copy.home.titleLine1} <br />
            <span className={`italic text-stone-600 font-light ${isRtl ? 'mr-4' : 'ml-4'}`}>{copy.home.titleAccent}</span> <br />
            {copy.home.titleLine2}
          </h1>
          <p className="max-w-2xl lg:mx-0 mx-auto text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-12 animate-fade-in-up delay-200">
            {copy.home.intro}
          </p>
          <div className={`flex flex-col sm:flex-row items-center ${isRtl ? 'lg:justify-end' : 'lg:justify-start'} justify-center gap-4 animate-fade-in-up delay-300`}>
            <ButtonPrimary onClick={() => onNavigate('radly')}>{copy.home.primaryCta}</ButtonPrimary>
            <button onClick={() => onNavigate('about')} className="px-8 py-3 border border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-all uppercase text-sm tracking-widest hover:-translate-y-0.5">
              {copy.home.secondaryCta}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2 animate-fade-in-up delay-200 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-stone-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob opacity-50 shadow-inner"></div>
            <div className="absolute inset-4 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group transition-all duration-700 hover:rounded-[50%]">
              <img
                src={ASSETS.heroPortrait}
                alt={copy.home.heroAlt}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>
            </div>
            <div className={`absolute bottom-12 ${isRtl ? '-right-8 border-r-4' : '-left-8 border-l-4'} bg-white/90 backdrop-blur p-6 shadow-xl rounded-lg border-stone-900 animate-bounce-slow hidden md:block transform -rotate-2 hover:rotate-0 transition-transform`}>
              <p className="font-serif text-stone-900 text-xl">{copy.home.badgeTitle}</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{copy.home.badgeSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white relative z-20 -mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {copy.home.quickLinks.map((item, idx) => {
          const Icon = [SparklesIcon, GlobeAmericasIcon, BookOpenIcon][idx];
          const page = ['radly', 'travel', 'books'][idx];

          return (
            <div key={item.title} onClick={() => onNavigate(page)} className="group relative p-10 border border-stone-200 bg-stone-50/30 hover:bg-white hover:border-stone-400 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl overflow-hidden rounded-sm">
              <div className={`absolute top-0 ${isRtl ? 'left-0 -translate-x-4 group-hover:translate-x-0' : 'right-0 translate-x-4 group-hover:translate-x-0'} p-6 opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                <ArrowRightIcon className={arrowClass(isRtl, 'w-6 h-6 text-stone-300')} />
              </div>
              <div className="w-14 h-14 bg-white border border-stone-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors duration-500 shadow-sm">
                <Icon className="w-7 h-7 text-stone-400 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-8 group-hover:text-stone-600 transition-colors">{item.desc}</p>
              <div className="w-12 h-px bg-stone-300 group-hover:w-full group-hover:bg-stone-900 transition-all duration-700"></div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export const About = ({ copy, isRtl }: SectionProps) => (
  <div className="animate-fade-in-up">
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={copy.about.title} subtitle={copy.about.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="prose prose-stone prose-lg text-stone-600 font-light leading-loose lg:sticky lg:top-32 max-w-none">
            {copy.about.paragraphs.map((paragraph, idx) => (
              <p
                key={paragraph}
                className={idx === 0 && !isRtl ? 'first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-stone-900' : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className={`relative ${isRtl ? 'lg:pr-10' : 'lg:pl-10'}`}>
            <div className="aspect-[3/4] bg-stone-100 p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-full overflow-hidden border border-stone-200">
                <img
                  src={ASSETS.aboutProfessional}
                  alt={copy.about.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <p className="text-center font-serif text-stone-400 italic mt-6 text-sm">{copy.about.caption}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Radly = ({ copy, isRtl }: SectionProps) => (
  <div className="animate-fade-in-up">
    <section className="pt-60 pb-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase mb-4 block font-semibold">{copy.radly.eyebrow}</span>
          <h2 className="font-serif text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{copy.radly.title}</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
            {copy.radly.intro}
          </p>
          <ul className="space-y-4 text-slate-300 mb-10 font-light">
            {copy.radly.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <SparklesIcon className={`w-5 h-5 ${isRtl ? 'ml-3' : 'mr-3'} text-cyan-400 shrink-0`} />
                <span>{feature}</span>
              </li>
            ))}
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
                  alt={copy.radly.appStoreAlt}
                  className="h-12"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.radly.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 h-12 px-5 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
              >
                <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2c.316 0 .573.256.573.573v18.854a.573.573 0 01-.573.573H6.477a.573.573 0 01-.573-.573V2.573c0-.317.256-.573.573-.573h11.046zM12 18.5a1 1 0 100 2 1 1 0 000-2zm4-14H8v12h8v-12z" />
                </svg>
                <div>
                  <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">{copy.common.android}</p>
                  <p className="text-sm text-white font-medium">{copy.common.googlePlay}</p>
                </div>
              </a>
            </div>
            <a
              href="https://radly.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all text-sm uppercase tracking-widest font-medium w-fit group"
              style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
            >
              <span className="border-b border-cyan-400/50 group-hover:border-cyan-300 pb-1">{copy.radly.visit}</span>
              <span className={`${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>→</span>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group bg-white/5 backdrop-blur-md">
              <img
                src={ASSETS.radlyApp}
                alt={copy.radly.imageAlt}
                className="w-full h-auto object-contain animate-[float_6s_ease-in-out_infinite]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
            </div>
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

export const Travel = ({ copy, isRtl }: SectionProps) => (
  <div className="animate-fade-in-up">
    <section className="bg-[#f8f4ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[72vh] mb-24">
          <div className="lg:col-span-6">
            <span className="block text-sm uppercase tracking-[0.28em] text-amber-700 mb-5">{copy.travel.eyebrow}</span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-stone-950 mb-8">
              {copy.travel.title}
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-stone-700 font-light max-w-2xl mb-10">
              {copy.travel.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <ButtonPrimary href="https://passporttrails.com">{copy.travel.primaryCta}</ButtonPrimary>
              <a
                href="#passport-trails-app"
                className="inline-flex items-center justify-center px-8 py-3 border border-stone-300 text-stone-800 text-sm tracking-widest uppercase hover:border-stone-900 hover:text-stone-950 transition-all duration-300"
              >
                {copy.travel.helperCta}
              </a>
            </div>
            <div className={`${isRtl ? 'border-r pr-6' : 'border-l pl-6'} border-stone-300 max-w-xl`}>
              <p className="font-serif text-2xl leading-relaxed text-stone-900">
                {copy.travel.quote}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative max-w-md lg:max-w-lg mx-auto">
              <div className="absolute -inset-6 border border-stone-300 hidden sm:block"></div>
              <div className="relative bg-white p-3 shadow-2xl">
                <img
                  src={ASSETS.travelHero}
                  alt={copy.travel.imageAlt}
                  className="w-full aspect-[3/4] object-cover object-center"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-stone-500 text-center">
                {copy.travel.imageCaption}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500">{copy.travel.lensEyebrow}</span>
            <h3 className="font-serif text-4xl text-stone-900 mt-4 leading-tight">{copy.travel.lensTitle}</h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.travel.lensParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-stone-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-stone-500">{copy.travel.featuredEyebrow}</span>
              <h3 className="font-serif text-4xl text-stone-900 mt-3">{copy.travel.featuredTitle}</h3>
            </div>
            <a
              href="https://passporttrails.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors w-fit"
            >
              {copy.common.visitPassportTrails} <ArrowRightIcon className={arrowClass(isRtl)} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.travel.stories.map((story) => (
              <a
                key={story.title}
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-stone-200 p-7 min-h-[260px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.22em] text-amber-700">{story.label}</span>
                  <h4 className="font-serif text-2xl text-stone-900 mt-5 mb-4 leading-tight">{story.title}</h4>
                  <p className="text-stone-600 leading-relaxed">{story.desc}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-stone-900">
                  {copy.common.readArticle} <ArrowRightIcon className={`${arrowClass(isRtl)} group-hover:translate-x-1 transition-transform`} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-stone-900 shadow-2xl">
              <img
                src="/travel-collage.jpg"
                alt={copy.travel.visualAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500">{copy.travel.visualEyebrow}</span>
            <h3 className="font-serif text-4xl text-stone-900 mt-4 mb-6 leading-tight">
              {copy.travel.visualTitle}
            </h3>
            {copy.travel.visualParagraphs.map((paragraph, idx) => (
              <p key={paragraph} className={`${idx === 0 ? 'text-lg text-stone-700 mb-6' : 'text-stone-600'} leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500">{copy.travel.destinationsEyebrow}</span>
            <h3 className="font-serif text-4xl text-stone-900 mt-3">{copy.travel.destinationsTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {copy.travel.destinations.map(([country, flag, desc]) => (
              <div key={country} className="bg-[#f8f4ee] p-6 md:p-8 min-h-[220px] hover:bg-white transition-colors duration-300">
                <div className="flex items-center justify-between mb-7">
                  <span className="text-4xl">{flag}</span>
                  <MapPinIcon className="w-5 h-5 text-stone-400" />
                </div>
                <h4 className="font-serif text-2xl text-stone-900 mb-3">{country}</h4>
                <p className="text-stone-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="passport-trails-app" className="bg-stone-950 text-white p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-300">{copy.travel.helperEyebrow}</span>
            <h3 className="font-serif text-4xl md:text-5xl mt-4 mb-6">{copy.travel.helperTitle}</h3>
            <p className="text-stone-300 text-lg leading-relaxed mb-8">
              {copy.travel.helperIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {copy.travel.helperFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-stone-300">
                  <SparklesIcon className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">{copy.travel.getApp}</p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="https://apps.apple.com/us/app/passport-trails/id6761397513"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt={copy.travel.appStoreAlt}
                  className="h-11"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.passporttrails.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 h-11 px-4 bg-white/10 border border-white/15 rounded-lg transition-all hover:-translate-y-1 hover:bg-white/15 duration-300"
              >
                <svg className="w-6 h-6 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2c.316 0 .573.256.573.573v18.854a.573.573 0 01-.573.573H6.477a.573.573 0 01-.573-.573V2.573c0-.317.256-.573.573-.573h11.046zM12 18.5a1 1 0 100 2 1 1 0 000-2zm4-14H8v12h8v-12z" />
                </svg>
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">{copy.common.android}</p>
                  <p className="text-sm text-white font-medium">{copy.common.googlePlay}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Books = ({ copy }: SectionProps) => (
  <div className="animate-fade-in-up">
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f5f5f0] opacity-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle title={copy.books.title} subtitle={copy.books.subtitle} />

        <div className="max-w-3xl mx-auto mb-16 text-center">
          {copy.books.intro.map((paragraph) => (
            <p key={paragraph} className="text-stone-600 text-lg leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {copy.books.items.map((book, idx) => (
            <div key={book.title} className="flex flex-col items-center text-center group perspective-1000">
              <div className={`w-56 h-80 shadow-2xl mb-10 relative transition-all duration-500 transform-style-3d ${idx === 0 ? 'group-hover:rotate-y-12' : 'group-hover:rotate-y-[-12deg]'} group-hover:rotate-x-6 group-hover:scale-105`}>
                <img
                  src={idx === 0 ? '/unraveling-infj-enigma.jpg' : '/finding-your-soulmate.jpg'}
                  alt={book.alt}
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className={`absolute ${idx === 0 ? 'left-0 -translate-x-full origin-right rotate-y-90' : 'right-0 translate-x-full origin-left rotate-y-[-90deg]'} top-0 bottom-0 w-4 bg-white/20 transform`}></div>
              </div>
              <h3 className="font-serif text-3xl mb-3 text-stone-900">{book.title}</h3>
              <p className="text-stone-500 mb-6 max-w-xs leading-relaxed">{book.desc}</p>
              <a
                href={idx === 0 ? 'https://www.amazon.com/Unraveling-INFJ-Enigma-Understanding-Compassionate/dp/B0BS1FNS7F' : 'https://www.amazon.com/Finding-Your-Soulmate-Zodiac-Perfect-ebook/dp/B0BRNVWK9Y'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-stone-900 pb-1 text-stone-900 hover:text-amber-700 hover:border-amber-700 transition-colors uppercase text-xs tracking-widest"
              >
                {copy.common.viewAmazon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const Gallery = ({ copy }: SectionProps) => (
  <div className="animate-fade-in-up">
    <section className="pt-60 pb-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white">{copy.gallery.title}</h2>
          <div className="w-16 h-px bg-stone-700 mx-auto mt-6"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {ASSETS.gallery.map((src, idx) => (
            <div
              key={src}
              className="break-inside-avoid relative group overflow-hidden rounded-sm cursor-zoom-in animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <img
                src={src}
                alt={copy.gallery.alts[idx]}
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

export const Contact = ({ copy }: SectionProps) => (
  <div className="animate-fade-in-up">
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle title={copy.contact.title} subtitle={copy.contact.subtitle} />
        <p className="text-lg text-stone-600 mb-12 font-light">
          {copy.contact.intro}
        </p>

        <div className="bg-white p-8 md:p-16 shadow-2xl border border-stone-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-stone-50 rounded-bl-full -mr-10 -mt-10"></div>

          <div className="relative z-10 space-y-12">
            <div className="text-center">
              <p className="text-stone-500 uppercase tracking-widest text-xs mb-4">{copy.contact.emailLabel}</p>
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

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-stone-200"></div>
              <span className="text-stone-400 text-xs uppercase tracking-widest">{copy.contact.divider}</span>
              <div className="flex-1 h-px bg-stone-200"></div>
            </div>

            <div className="flex justify-center gap-6">
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
