import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { NAV_LINKS, SERVICES_DATA } from '../data/site';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop hover
  const [expandedCategory, setExpandedCategory] = useState(null); // accordion-open category
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const servicesRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setExpandedCategory(null);
    setMobileServicesOpen(false);
    setMobileExpandedCategory(null);
  }, [location.pathname]);

  // Click outside closes dropdown
  useEffect(() => {
    const onClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Helper: toggle which category is open in accordion (only one at a time)
  const toggleCategory = (id) => {
    setExpandedCategory(prev => (prev === id ? null : id));
  };
  const toggleMobileCategory = (id) => {
    setMobileExpandedCategory(prev => (prev === id ? null : id));
  };

  // Hover handlers with small delay to prevent flicker
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setExpandedCategory(null);
    }, 200);
  };

  // Click on "Services" link should navigate to /services page
  const handleServicesClick = (e) => {
    setServicesOpen(false);
    setExpandedCategory(null);
    // Let the default Link navigation happen
  };

  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-ink/5 py-2 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        {/* Logo block */}
        <Link to="/" className="flex flex-col items-center gap-0.5 group">
          <img
            src="/images/pklogo.png"
            alt="Prashant Kadhao Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
          <span className={`text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold text-center transition-colors ${
            solid ? 'text-emerald-600' : 'text-emerald-400'
          }`}>
            Coach · Consultant · Leader
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.to}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={link.to}
                    onClick={handleServicesClick}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-semibold transition-colors inline-flex items-center gap-1 ${
                        solid
                          ? isActive ? 'text-emerald-600' : 'text-ink hover:text-emerald-600'
                          : isActive ? 'text-emerald-400' : 'text-white/90 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </NavLink>

                  {/* Vertical Accordion Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-[340px] transition-all duration-300 ${
                      servicesOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl shadow-ink/20 border border-slate-100 overflow-hidden">
                      {/* Header strip */}
                      <div className="bg-gradient-to-r from-ink to-indigo-700 px-5 py-3">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold">
                          Explore
                        </div>
                        <div className="text-white text-sm font-semibold">All Services & Programs</div>
                      </div>

                      {/* Accordion list */}
                      <div className="py-2 max-h-[60vh] overflow-y-auto">
                        {SERVICES_DATA.map((svc) => {
                          const isExpanded = expandedCategory === svc.id;
                          return (
                            <div key={svc.id} className="border-b border-slate-50 last:border-0">
                              {/* Category header — click to toggle */}
                              <button
                                onClick={() => toggleCategory(svc.id)}
                                className={`w-full px-5 py-3 flex items-center justify-between gap-3 transition-colors text-left ${
                                  isExpanded ? 'bg-emerald-50' : 'hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                                    isExpanded ? 'bg-emerald-500' : 'bg-slate-300'
                                  }`} />
                                  <span className={`font-display font-bold text-sm transition-colors ${
                                    isExpanded ? 'text-emerald-600' : 'text-ink'
                                  }`}>
                                    {svc.title}
                                  </span>
                                </div>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                                  isExpanded ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                                }`}>
                                  {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
                                </div>
                              </button>

                              {/* Sub-options — expand/collapse */}
                              <div
                                className={`overflow-hidden transition-all duration-300 ease-out ${
                                  isExpanded ? 'max-h-96' : 'max-h-0'
                                }`}
                              >
                                <ul className="py-2 pl-9 pr-3 bg-white">
                                  {svc.sub.map(s => (
                                    <li key={s.slug}>
                                      <Link
                                        to={`/services/${s.slug}`}
                                        onClick={() => {
                                          setServicesOpen(false);
                                          setExpandedCategory(null);
                                        }}
                                        className="group flex items-center gap-2 py-2 px-3 rounded-lg text-xs text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                                      >
                                        <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="flex-1 leading-snug">{s.title}</span>
                                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Bottom CTA */}
                      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                        <button
                          onClick={() => {
                            setServicesOpen(false);
                            onOpenModal();
                          }}
                          className="w-full text-xs font-bold text-ink hover:text-emerald-600 transition-colors inline-flex items-center justify-between"
                        >
                          <span>Need a custom program?</span>
                          <span className="text-emerald-600 inline-flex items-center gap-1">
                            Enquire <ArrowRight size={12} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    solid
                      ? isActive ? 'text-emerald-600' : 'text-ink hover:text-emerald-600'
                      : isActive ? 'text-emerald-400' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
          <button
            onClick={onOpenModal}
            className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-semibold text-sm rounded-full hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Corporate Training
            <ArrowRight size={16} />
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          className={`lg:hidden p-2 rounded-lg ${solid ? 'text-ink' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x pt-4 pb-6 bg-white border-t border-slate-100 mt-3 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.to}>
                  {/* Row: Services link + expand toggle */}
                  <div className="flex items-stretch rounded-lg overflow-hidden">
                    <NavLink
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 px-4 py-3 font-semibold transition-colors ${
                          isActive ? 'bg-emerald-50 text-emerald-600' : 'text-ink hover:bg-slate-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileServicesOpen(!mobileServicesOpen);
                      }}
                      className="px-4 hover:bg-slate-50 text-slate-500 flex items-center justify-center"
                      aria-label="Toggle services menu"
                    >
                      <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Mobile accordion expand area */}
                  <div className={`overflow-hidden transition-all duration-500 ${mobileServicesOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className="pl-2 pr-1 py-2 space-y-1">
                      {SERVICES_DATA.map(svc => {
                        const isExpanded = mobileExpandedCategory === svc.id;
                        return (
                          <div key={svc.id} className="bg-slate-50 rounded-lg overflow-hidden">
                            <button
                              onClick={() => toggleMobileCategory(svc.id)}
                              className={`w-full px-4 py-2.5 flex items-center justify-between text-left transition-colors ${
                                isExpanded ? 'bg-emerald-50' : ''
                              }`}
                            >
                              <span className={`font-display font-bold text-sm ${isExpanded ? 'text-emerald-600' : 'text-ink'}`}>
                                {svc.title}
                              </span>
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                                isExpanded ? 'bg-emerald-500 text-white' : 'bg-white text-slate-500'
                              }`}>
                                {isExpanded ? <Minus size={10} /> : <Plus size={10} />}
                              </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                              <ul className="py-1 pl-6 pr-3 pb-2 bg-white">
                                {svc.sub.map(s => (
                                  <li key={s.slug}>
                                    <Link
                                      to={`/services/${s.slug}`}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 px-2 text-xs text-slate-600 hover:text-emerald-600 transition-colors border-l-2 border-emerald-500/30 hover:border-emerald-500 pl-3"
                                    >
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-semibold transition-colors ${
                    isActive ? 'bg-emerald-50 text-emerald-600' : 'text-ink hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
          <button
            onClick={() => { onOpenModal(); setMobileOpen(false); }}
            className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 text-white font-semibold rounded-full"
          >
            Corporate Training <ArrowRight size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}
