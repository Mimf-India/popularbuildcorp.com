import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Menu, X, ChevronRight, ArrowRight, Clock, 
  Sparkles, CheckCircle, Home, Building2, Factory, KeyRound, 
  Wrench, Map as MapIcon, Paintbrush, Zap, Users, Briefcase, 
  HeartHandshake, Coins, MessageSquare, Compass, FileCheck, 
  Hammer, ShieldCheck, Award, Check
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  SERVICES, 
  TURNKEY_STEPS, 
  TURNKEY_PROVIDES, 
  TURNKEY_BADGES, 
  WHY_CHOOSE_ITEMS, 
  WHY_CHOOSE_BADGES, 
  RESIDENTIAL_WE_BUILD, 
  RESIDENTIAL_SERVICES, 
  RESIDENTIAL_STAGES, 
  RESIDENTIAL_BADGES 
} from './data';
// @ts-ignore
import popularLogo from './assets/images/popular_logo_1782294649041.jpg';
// @ts-ignore
import heroVilla from './assets/images/hero_residential_villa_1782291559403.jpg';
// @ts-ignore
import commercialBuilding from './assets/images/commercial_building_1782291583892.jpg';
// @ts-ignore
import interiorDesign from './assets/images/interior_design_1782291625981.jpg';

// Map icon string names to actual Lucide component classes safely
const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home, 
  Building2, 
  Factory, 
  KeyRound, 
  Wrench, 
  Map: MapIcon, 
  Paintbrush, 
  Zap,
  Users, 
  Sparkles, 
  Clock, 
  Briefcase, 
  HeartHandshake, 
  Coins
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);

  // Contact / consultation form state
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential Construction',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Monitor window scroll for styling the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for contacting/submitting the form to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;

    // Create a highly professional structured message for WhatsApp integration
    const messageText = 
      `*POPULAR BUILD CORP - INQUIRY FORM*\n\n` +
      `• *Name:* ${contactForm.name}\n` +
      `• *Phone:* ${contactForm.phone}\n` +
      `• *Email:* ${contactForm.email || 'Not specified'}\n` +
      `• *Interested Service:* ${contactForm.serviceType}\n` +
      `• *Message:* ${contactForm.message || 'I am looking for expert advice on my project.'}\n\n` +
      `Please contact me to discuss my construction project. Thank you!`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919130737878?text=${encodedText}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      // Reset form
      setContactForm({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Residential Construction',
        message: ''
      });
    }, 1200);
  };

  const handleServiceClick = (serviceTitle: string) => {
    setContactForm(prev => ({
      ...prev,
      serviceType: serviceTitle,
      message: `I saw your service "${serviceTitle}" on your flyer list and I would like to get a custom construction solution & quote.`
    }));
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans selection:bg-[#800F1C] selection:text-white antialiased scroll-smooth">
      
      {/* Floating Action Bars for Quick Reach */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a 
          href="https://wa.me/919130737878"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all border-2 border-white"
          title="WhatsApp Us"
          id="floating-whatsapp-btn"
        >
          <Phone size={24} className="fill-white rotate-90" />
        </a>
        <a 
          href="tel:+919130737878"
          className="w-14 h-14 bg-[#5c0d18] rounded-full flex items-center justify-center text-[#ffcc4d] shadow-xl hover:scale-105 active:scale-95 transition-all border-2 border-[#ffcc4d]/40"
          title="Call Us Today"
          id="floating-call-btn"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* --- TOP BRANDING STRIP --- */}
      <div className="bg-[#4c050e] text-white text-xs py-2.5 px-4 md:px-8 border-b border-[#ffcc4d]/20 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium tracking-wide">
          <span className="flex items-center gap-1.5 text-[#ffcc4d]">
            <MapPin size={13} className="text-[#ffcc4d]" /> {COMPANY_INFO.contacts.location}
          </span>
          <span className="hidden sm:inline-block text-white/20">|</span>
          <span className="flex items-center gap-1.5 text-neutral-200">
            <Clock size={13} className="text-[#ffcc4d]/80" /> Office Hours: 9 AM - 7 PM
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-semibold text-neutral-100">
          <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-[#ffcc4d] transition-colors flex items-center gap-1.5">
            <Mail size={13} /> {COMPANY_INFO.contacts.email}
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="text-[#ffcc4d] tracking-widest uppercase font-mono text-[10px]">
            {COMPANY_INFO.contacts.website}
          </span>
        </div>
      </div>

      {/* --- STICKY MAIN NAVIGATION HEADER --- */}
      <header 
        className={`sticky top-0 z-30 bg-white transition-all duration-300 ${
          headerShadow ? 'shadow-md py-2 border-b border-neutral-100' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a href="#" className="flex items-center group py-1">
            <img 
              src={popularLogo} 
              alt="Popular Build Corp Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold uppercase tracking-widest text-neutral-600">
            <a href="#welcome-intro" className="hover:text-[#5c0d18] transition-colors">About</a>
            <a href="#services" className="hover:text-[#5c0d18] transition-colors">Our Services</a>
            <a href="#turnkey" className="hover:text-[#5c0d18] transition-colors">Turnkey Process</a>
            <a href="#residential" className="hover:text-[#5c0d18] transition-colors">Residential</a>
            <a href="#why-choose-us" className="hover:text-[#5c0d18] transition-colors">Why Choose Us</a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right">
              <span className="text-[9px] text-neutral-400 font-extrabold block uppercase tracking-widest">Speak Directly</span>
              <a 
                href={`tel:${COMPANY_INFO.contacts.phone1.replace(/\s+/g, '')}`} 
                className="text-xs font-black text-[#5c0d18] font-mono tracking-tight hover:text-amber-600 transition-colors block"
              >
                {COMPANY_INFO.contacts.phone1}
              </a>
            </div>
            <a 
              href="#contact-us"
              className="bg-[#5c0d18] hover:bg-[#460810] text-[#ffcc4d] font-bold text-xs uppercase px-5 py-3 rounded-xl transition-all shadow-md border border-[#ffcc4d]/20 flex items-center gap-2"
            >
              Get Free Advice <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 px-4 py-5 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-neutral-700">
              <a 
                href="#welcome-intro" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-50 flex justify-between items-center"
              >
                About Popular Build Corp <ChevronRight size={15} className="text-neutral-300" />
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-50 flex justify-between items-center"
              >
                Our Services <ChevronRight size={15} className="text-neutral-300" />
              </a>
              <a 
                href="#turnkey" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-50 flex justify-between items-center"
              >
                Turnkey Solutions <ChevronRight size={15} className="text-neutral-300" />
              </a>
              <a 
                href="#residential" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-50 flex justify-between items-center"
              >
                Residential Homes <ChevronRight size={15} className="text-neutral-300" />
              </a>
              <a 
                href="#why-choose-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-50 flex justify-between items-center"
              >
                Why Choose Us <ChevronRight size={15} className="text-neutral-300" />
              </a>
              <a 
                href="#contact-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#5c0d18] text-[#ffcc4d] text-center py-3.5 rounded-xl mt-2 font-extrabold tracking-widest border border-[#ffcc4d]/20"
              >
                Draft Proposal Request
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO BANNER STACK --- */}
      <section className="relative bg-gradient-to-b from-[#2e0409] via-[#4c050e] to-[#1a0104] text-white pt-16 pb-24 md:py-36 overflow-hidden">
        
        {/* Background Subtle Rendering overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <img 
            src={heroVilla} 
            alt="Popular Construction background" 
            className="w-full h-full object-cover filter saturate-50 blur-[2px]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-32 right-0 w-[45rem] h-[45rem] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#ffcc4d]/15 text-[#ffcc4d] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border border-[#ffcc4d]/20 shadow-inner">
              <Sparkles size={13} className="text-[#ffcc4d] animate-pulse" /> Certified Quality Builders In Aurangabad
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans leading-tight">
              Building Trust,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc4d] to-amber-300 font-serif">
                Delivering Excellence.
              </span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base max-w-xl leading-relaxed">
              We deliver durable, architecturally stunning, and safety-tested structures. From custom luxury residential bungalows to heavy commercial centers, our veteran engineers manage every micro-milestone with absolute professionalism.
            </p>

            {/* Quick Badges matching Flyer text */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center">
                <span className="text-[#ffcc4d] text-base font-black block font-mono">100%</span>
                <span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider mt-0.5 block">Premium Materials</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center">
                <span className="text-[#ffcc4d] text-base font-black block font-mono">On Time</span>
                <span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider mt-0.5 block">Project Delivery</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center col-span-2 sm:col-span-1">
                <span className="text-[#ffcc4d] text-base font-black block font-mono">Complete</span>
                <span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider mt-0.5 block">Turnkey Solutions</span>
              </div>
            </div>

            {/* Simple CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact-us" 
                className="bg-[#ffcc4d] hover:bg-amber-400 text-[#4c050e] font-black px-8 py-4 rounded-xl text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-lg border-t border-white"
              >
                Discuss Your Project <ArrowRight size={14} />
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 transition-all border border-white/10"
              >
                Explore Flyer Services
              </a>
            </div>
          </div>

          {/* Right Visual Frame: Polaroid Gallery showcasing authentic designs */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#ffcc4d]/5 rounded-3xl blur-xl"></div>
              
              <div className="bg-white p-3 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-neutral-100 relative z-10">
                <img 
                  src={heroVilla} 
                  alt="Modern Residential Bungalow" 
                  className="w-full h-64 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="pt-3 px-1 text-neutral-800">
                  <span className="text-[10px] text-amber-600 font-extrabold uppercase tracking-widest block font-mono">Modern Residential Design</span>
                  <p className="text-xs font-black mt-0.5">{COMPANY_INFO.bottomSlogan}</p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#5c0d18] border border-[#ffcc4d]/30 px-4 py-3 rounded-xl shadow-xl max-w-[180px] hidden sm:block z-20">
                <span className="text-[9px] text-[#ffcc4d] font-black uppercase tracking-wider block">Company Vision</span>
                <p className="text-[11px] text-white/90 leading-tight mt-1">
                  "Quality Construction, On-Time Delivery."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 1: WELCOME INTRO --- */}
      <section id="welcome-intro" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side Image Render block */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffcc4d]/20 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#5c0d18]/5 rounded-2xl -z-10"></div>
                
                <img 
                  src={commercialBuilding} 
                  alt="Modern commercial steel structure" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border border-neutral-100"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-4 right-4 bg-[#5c0d18] text-[#ffcc4d] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md border border-[#ffcc4d]/20">
                  Sleek Commercial Design
                </div>
              </div>
            </div>

            {/* Right side Texts based exactly on Welcome Block of Image 1 */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 font-mono">Established Integrity</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5c0d18] tracking-tight leading-tight">
                {COMPANY_INFO.welcomeTitle}
              </h2>
              <div className="w-16 h-1 bg-[#ffcc4d] rounded-full"></div>
              
              <h3 className="text-lg font-bold text-neutral-800 leading-snug">
                {COMPANY_INFO.welcomeSubtitle}
              </h3>
              
              <p className="text-neutral-600 text-sm leading-relaxed">
                {COMPANY_INFO.welcomePromo}
              </p>

              <div className="bg-amber-50 border-l-4 border-[#ffcc4d] p-4 rounded-r-xl">
                <span className="text-xs text-amber-800 font-extrabold uppercase tracking-wide block">Our Structural Vow</span>
                <p className="text-xs text-neutral-700 italic mt-1">
                  "At Popular Build Corp, we don't just build houses or commercial structures; we form lasting professional bonds anchored in superior raw materials and absolute safety compliance."
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700">
                  <Check size={14} className="text-amber-600" /> Quality Construction
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700">
                  <Check size={14} className="text-amber-600" /> Experienced Engineers
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700">
                  <Check size={14} className="text-amber-600" /> Transparent Rates
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: OUR SERVICES GRID --- */}
      <section id="services" className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600 font-mono">Our Construction Suite</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5c0d18] tracking-tight leading-tight">
              OUR SERVICES
            </h2>
            <div className="w-16 h-1 bg-[#ffcc4d] mx-auto rounded-full"></div>
            <p className="text-neutral-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              {COMPANY_INFO.bottomSlogan}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((serv, idx) => {
              const DynamicIcon = IconMap[serv.iconName] || Home;
              return (
                <div 
                  key={idx}
                  onClick={() => handleServiceClick(serv.title)}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/60 shadow-sm hover:shadow-xl hover:border-[#ffcc4d]/40 transition-all cursor-pointer group flex flex-col justify-between"
                  id={`service-card-${idx}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#5c0d18]/5 rounded-xl flex items-center justify-center text-[#5c0d18] group-hover:bg-[#5c0d18] group-hover:text-[#ffcc4d] transition-all border border-[#5c0d18]/10 shadow-inner">
                      <DynamicIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-neutral-800 group-hover:text-[#5c0d18] transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-3 border-t border-neutral-50 flex items-center justify-between text-[11px] font-black text-amber-600 group-hover:text-[#5c0d18]">
                    <span>INQUIRE SERVICE</span>
                    <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: TURNKEY PROJECTS (FLYER 5) --- */}
      <section id="turnkey" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Turnkey Intro Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 bg-[#5c0d18]/5 text-[#5c0d18] px-3.5 py-1.5 rounded-full text-2xs font-extrabold uppercase tracking-widest border border-[#5c0d18]/15">
                <KeyRound size={12} /> One Company. One Responsibility.
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5c0d18] tracking-tight leading-tight">
                TURNKEY PROJECTS
              </h2>
              <h3 className="text-lg font-bold text-amber-600 -mt-2">
                Complete Peace of Mind.
              </h3>
              <p className="text-neutral-500 font-semibold text-xs uppercase tracking-wider font-mono">
                You Dream It, We Build It. Ready-to-Use Project Handover.
              </p>
              
              <div className="bg-[#5c0d18] text-white p-6 rounded-2xl border border-[#ffcc4d]/20 shadow-md">
                <span className="text-[10px] text-[#ffcc4d] font-black uppercase tracking-wider block font-mono">What is Turnkey Project?</span>
                <p className="text-xs text-neutral-200 leading-relaxed mt-1.5 font-medium">
                  Turnkey means we take complete responsibility of your project from start to finish and handover a ready-to-use space. We deal with layout sanctions, plumbing layouts, core construction, and custom premium interiors.
                </p>
              </div>
            </div>

            {/* Turnkey Side Panel Image Grid */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <img 
                  src={interiorDesign} 
                  alt="Luxury turnkey living room finish" 
                  className="w-full h-52 object-cover rounded-xl shadow-inner border border-neutral-200"
                  referrerPolicy="no-referrer"
                />
                
                <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider mt-4">WHAT WE PROVIDE:</h4>
                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  {TURNKEY_PROVIDES.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-neutral-700 text-[11px] font-bold">
                      <CheckCircle size={12} className="text-[#5c0d18] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Turnkey 6 Steps Timeline (Strictly from Turnkey Flyer) */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest text-center">OUR TURNKEY PROCESS</h3>
            <div className="w-12 h-0.5 bg-[#ffcc4d] mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TURNKEY_STEPS.map((step) => (
                <div 
                  key={step.step}
                  className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 hover:border-[#ffcc4d] transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-2 right-4 text-5xl font-black font-mono text-neutral-200/50 group-hover:text-[#ffcc4d]/20 select-none">
                    0{step.step}
                  </div>
                  
                  <div className="w-8 h-8 bg-[#5c0d18] text-[#ffcc4d] rounded-lg flex items-center justify-center font-bold font-mono text-xs shadow-md mb-3">
                    {step.step}
                  </div>

                  <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider">{step.title}</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed mt-1 font-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Turnkey Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10 pt-6 border-t border-neutral-100">
            {TURNKEY_BADGES.map((badge, idx) => (
              <span 
                key={idx}
                className="bg-neutral-100 text-neutral-700 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-neutral-200"
              >
                ✓ {badge}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 4: RESIDENTIAL CONSTRUCTION (FLYER 6) --- */}
      <section id="residential" className="py-20 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,13,24,0.15),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Left Texts */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-black text-[#ffcc4d] font-mono">Specialized Architecture</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight leading-tight">
                RESIDENTIAL CONSTRUCTION
              </h2>
              <h3 className="text-lg font-bold text-[#ffcc4d] leading-snug -mt-2">
                BUILDING DREAM HOMES, CREATING LIFETIME MEMORIES.
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                At Popular Build Corp, we design and construct high-quality, comfortable, and sustainable homes that reflect your style and suit your needs.
              </p>

              {/* WE BUILD detailed bullet points */}
              <div className="space-y-3.5 bg-white/5 p-6 rounded-2xl border border-white/10">
                <span className="text-[10px] text-[#ffcc4d] font-black uppercase tracking-widest block font-mono">WE BUILD:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RESIDENTIAL_WE_BUILD.map((wb, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#ffcc4d] rounded-full"></span>
                        {wb.title}
                      </span>
                      <p className="text-[10px] text-neutral-400 leading-normal pl-3 font-medium">{wb.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right List Box: Residential Range */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[10px] text-[#ffcc4d] font-black uppercase tracking-widest block font-mono mb-4">OUR RESIDENTIAL SERVICES:</span>
              <div className="grid grid-cols-1 gap-2.5">
                {RESIDENTIAL_SERVICES.map((serv, idx) => (
                  <div key={idx} className="bg-neutral-800/60 p-3 rounded-xl flex items-center justify-between border border-white/5 hover:border-[#ffcc4d]/20 transition-all">
                    <span className="text-xs font-bold text-white">{serv}</span>
                    <span className="text-[10px] text-[#ffcc4d] font-mono">Popular Standard</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Process steps visual layout */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block text-center">OUR ARCHITECTURAL TIMELINE</span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {RESIDENTIAL_STAGES.map((st, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-sm group">
                  <div className="h-32 bg-neutral-800 overflow-hidden relative">
                    <img 
                      src={st.image} 
                      alt={st.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-[#5c0d18] text-[#ffcc4d] text-[10px] font-black font-mono px-2 py-0.5 rounded">
                      Stage 0{i + 1}
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">{st.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom residential badges strictly from Flyer 6 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 bg-white/5 p-4 rounded-xl border border-white/10">
            {RESIDENTIAL_BADGES.map((badge, idx) => (
              <div key={idx} className="text-center p-2">
                <span className="text-xs font-black text-[#ffcc4d] block uppercase tracking-wide">{badge.title}</span>
                <span className="text-[10px] text-neutral-400 block mt-0.5 font-medium">{badge.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US (FLYER 3) --- */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600 font-mono">Our Quality Promise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5c0d18] tracking-tight leading-tight">
              WHY CHOOSE US?
            </h2>
            <div className="w-16 h-1 bg-[#ffcc4d] mx-auto rounded-full"></div>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold">
              {COMPANY_INFO.welcomeSubtitle}
            </p>
            <p className="text-neutral-500 text-xs max-w-lg mx-auto">
              At Popular Build Corp, we combine experience, quality and commitment to deliver construction solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const ChoiceIcon = IconMap[item.iconName] || Users;
              return (
                <div 
                  key={idx}
                  className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/60 shadow-sm flex gap-4"
                >
                  <div className="w-10 h-10 bg-[#5c0d18]/5 rounded-xl flex items-center justify-center text-[#5c0d18] shrink-0 border border-[#5c0d18]/10">
                    <ChoiceIcon size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-neutral-800 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slogan badge panel */}
          <div className="mt-12 bg-gradient-to-r from-[#5c0d18] to-[#3a0309] rounded-2xl p-6 text-center text-white border-2 border-[#ffcc4d]/20 shadow-md">
            <span className="text-2xs text-[#ffcc4d] font-black uppercase tracking-widest block font-mono">
              {COMPANY_INFO.visionCommitment}
            </span>
            <h3 className="text-base sm:text-lg font-serif font-bold mt-1 uppercase">
              We don't just BUILD STRUCTURES, we build RELATIONSHIPS.
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-4 text-[10px] uppercase font-bold tracking-wider text-neutral-300">
              {WHY_CHOOSE_BADGES.map((b, i) => (
                <span key={i} className="bg-white/5 px-3 py-1 rounded-md border border-white/10">
                  ★ {b}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 6: CONTACT US (FLYER 4) --- */}
      <section id="contact-us" className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 font-mono">Instant Support</span>
            <h2 className="text-3xl font-serif font-bold text-[#5c0d18] tracking-tight">
              CONTACT US
            </h2>
            <h3 className="text-base font-bold text-neutral-800 leading-snug -mt-2">
              Let's Build Something Great Together!
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Have a project in mind? Get in touch with us today for expert advice, detailing, and a customized construction solution.
            </p>

            {/* Direct listings */}
            <div className="space-y-3.5">
              <a 
                href={`tel:${COMPANY_INFO.contacts.phone1.replace(/\s+/g, '')}`}
                className="flex items-start gap-4 bg-white p-4 rounded-xl border border-neutral-200 hover:border-[#ffcc4d] transition-all group"
              >
                <div className="w-9 h-9 bg-[#5c0d18] text-[#ffcc4d] rounded-lg flex items-center justify-center shrink-0 border border-[#ffcc4d]/20 group-hover:scale-105 transition-all">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-widest block font-mono">CALL US Today</span>
                  <span className="text-xs font-black text-neutral-800 font-mono mt-0.5 block">
                    {COMPANY_INFO.contacts.phone1} / {COMPANY_INFO.contacts.phone2}
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.contacts.email}`}
                className="flex items-start gap-4 bg-white p-4 rounded-xl border border-neutral-200 hover:border-[#ffcc4d] transition-all group"
              >
                <div className="w-9 h-9 bg-[#5c0d18] text-[#ffcc4d] rounded-lg flex items-center justify-center shrink-0 border border-[#ffcc4d]/20 group-hover:scale-105 transition-all">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-widest block font-mono">EMAIL US Directly</span>
                  <span className="text-xs font-black text-neutral-800 block mt-0.5">
                    {COMPANY_INFO.contacts.email}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-neutral-200">
                <div className="w-9 h-9 bg-[#5c0d18] text-[#ffcc4d] rounded-lg flex items-center justify-center shrink-0 border border-[#ffcc4d]/20">
                  <MapPin size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-widest block font-mono">VISIT US Office</span>
                  <span className="text-xs font-black text-neutral-800 block mt-0.5 leading-snug">
                    {COMPANY_INFO.contacts.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Circular Help widget strictly from Contact Flyer */}
            <div className="bg-[#5c0d18] text-white p-6 rounded-2xl border border-[#ffcc4d]/30 shadow-md">
              <span className="text-[10px] text-[#ffcc4d] font-black uppercase tracking-wider block font-mono">WE ARE HERE TO HELP YOU</span>
              <span className="text-xs font-bold text-white block mt-1">From Concept to Completion, We Are With You Every Step.</span>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-[10px] text-neutral-200 font-bold">
                <li>• Timely Project Delivery</li>
                <li>• Quality Construction</li>
                <li>• Experienced Team</li>
                <li>• Transparent Communication</li>
                <li className="col-span-2">• End-to-End Turnkey Solutions</li>
              </ul>
            </div>

          </div>

          {/* Right inquiry form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-neutral-200/80 shadow-md">
            <div>
              <h3 className="text-base font-black text-neutral-800 uppercase tracking-wider">Inquiry & Proposal Drafting</h3>
              <p className="text-xs text-neutral-500 mt-1 leading-normal">Submit your construction requirements below. We will coordinate on architectural elevations, layouts, and quotes.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-6 rounded-xl text-center space-y-2.5 mt-6">
                <CheckCircle size={28} className="text-emerald-600 mx-auto" />
                <span className="text-xs font-extrabold uppercase tracking-wider block">Requirement Drafted!</span>
                <p className="text-xs text-emerald-800 font-medium">Opening WhatsApp application to transmit structural specifications...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-neutral-600 block uppercase tracking-wider">Your Name (Required)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Chavan" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 font-semibold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-neutral-600 block uppercase tracking-wider">WhatsApp Phone No.</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +91 98765 43210" 
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-neutral-600 block uppercase tracking-wider">Inquiry Category</label>
                  <select
                    value={contactForm.serviceType}
                    onChange={(e) => setContactForm({ ...contactForm, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 font-bold"
                  >
                    {SERVICES.map((s, idx) => (
                      <option key={idx} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-neutral-600 block uppercase tracking-wider">Brief Project details / Plot area</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your site details, plot location in Aurangabad, and material finishing grade options..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 leading-relaxed font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5c0d18] hover:bg-[#460810] text-[#ffcc4d] font-black py-3.5 px-6 rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer border-t border-[#ffcc4d]/20"
                >
                  Draft Request & Open WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t-4 border-[#ffcc4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <img 
                src={popularLogo} 
                alt="Popular Build Corp Logo" 
                className="h-20 md:h-24 w-auto object-contain bg-white p-3 rounded-2xl border border-[#ffcc4d]/20 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.welcomePromo}
            </p>
            <p className="text-[#ffcc4d] text-xs font-black uppercase font-serif tracking-wider">
              {COMPANY_INFO.bottomSlogan}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] text-[#ffcc4d] font-black uppercase tracking-widest block font-mono">Quick Navigation</span>
            <ul className="space-y-2 text-xs text-neutral-400 font-bold uppercase">
              <li><a href="#welcome-intro" className="hover:text-[#ffcc4d] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#ffcc4d] transition-colors">Our Services</a></li>
              <li><a href="#turnkey" className="hover:text-[#ffcc4d] transition-colors">Turnkey Solutions</a></li>
              <li><a href="#residential" className="hover:text-[#ffcc4d] transition-colors">Residential Construction</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#ffcc4d] transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Core certifications */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] text-[#ffcc4d] font-black uppercase tracking-widest block font-mono">Registered Office</span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {COMPANY_INFO.contacts.address}
            </p>
            <div className="pt-2 text-3xs text-neutral-500 leading-normal font-mono space-y-1">
              <p>• Aurangabad Municipal Corporation Sanction compliant.</p>
              <p>• Licensed Structural design parameters & Cube tests verified.</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-[10px] font-bold uppercase tracking-wider space-y-2">
          <p>© {new Date().getFullYear()} Popular Build Corp. All Rights Reserved.</p>
          <p className="text-neutral-600 font-mono tracking-normal capitalize">QUALITY CONSTRUCTION. ON TIME DELIVERY. COMPLETE SATISFACTION.</p>
        </div>
      </footer>

    </div>
  );
}
