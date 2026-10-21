// ============================================================
//  SEO CONFIGURATION  —  Per-route metadata, keywords, schemas
//  Single source of truth for all SEO data across the site.
//
//  KEYWORD STRATEGY (34 finalized keywords):
//   5 PRIMARY (every page): public speaker, corporate trainer,
//     business coach, motivational speaker, leadership coach
//     (with best/top + nagpur/india variations)
//   TIER 1 (Nagpur, easy)   : applied on Home + Services + relevant pages
//   TIER 2 (Nagpur, medium) : applied across Home, Services, About
//   TIER 3 (India, national): woven into Home, Services, broader pages
//   Both "best" + "top" variations used.
// ============================================================

export const SEO_DEFAULTS = {
  siteName: "Prashant Kadhao — Public Speaker, Corporate Trainer, Business Coach, Motivational Speaker & Leadership Coach",
  siteUrl: "https://www.prashantkadhao.com",
  defaultImage: "/images/og-cover.jpg",
  twitterHandle: "@prashantkadhao",
  locale: "en_IN",
  author: "Prashant Kadhao"
};

/**
 * Route → SEO metadata map.
 * Every page includes the 5 PRIMARY keywords in some form, plus
 * tier-appropriate Nagpur (primary) and India (secondary) keywords.
 */
export const SEO_ROUTES = {
  "/": {
    // Title leads with the 5 primary roles + Nagpur (primary location)
    title: "Best Public Speaker, Corporate Trainer & Business Coach in Nagpur | Prashant Kadhao",
    description: "Prashant Kadhao — best public speaker, corporate trainer, business coach, motivational speaker & leadership coach in Nagpur. 19+ years experience. Top motivational speaker for college students & corporate events. Executive coach & soft skills trainer serving Nagpur & all India.",
    keywords: "public speaker in nagpur, best public speaker in nagpur, top public speaker in nagpur, public speaking coach nagpur, leadership coach in nagpur, best leadership coach in nagpur, top leadership coach in nagpur, motivational speaker for college students nagpur, motivational speaker for corporate events nagpur, soft skills trainer nagpur, leadership trainer nagpur, executive coach nagpur, motivational speaker in nagpur, best motivational speaker in nagpur, top motivational speaker in nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, top corporate trainer in nagpur, business coach in nagpur, best business coach in nagpur, corporate training company nagpur, public speaker in india, best public speaker in india, corporate trainer in india, best corporate trainer in india, business coach in india, best business coach in india, motivational speaker in india, best motivational speaker in india, leadership coach in india, executive coach in india, Prashant Kadhao",
    canonical: "/",
    ogImage: "/images/og-cover.jpg",
    ogType: "website"
  },
  "/about": {
    title: "About Prashant Kadhao | Public Speaker, Corporate Trainer & Leadership Coach Nagpur",
    description: "About Prashant Kadhao — public speaker, corporate trainer, business coach, motivational speaker & leadership coach in Nagpur, India. 19+ years. Founder of PSK Technologies, JCI Nagpur Fortune President, Bharat Udyogratna Awardee, executive coach & soft skills trainer.",
    keywords: "Prashant Kadhao, best public speaker in nagpur, leadership coach in nagpur, best leadership coach in nagpur, top leadership coach in nagpur, executive coach nagpur, motivational speaker in nagpur, best motivational speaker in nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, business coach in nagpur, best business coach in nagpur, leadership trainer nagpur, soft skills trainer nagpur, public speaker in india, best public speaker in india, corporate trainer in india, business coach in india, motivational speaker in india, leadership coach in india, best leadership coach in india, executive coach in india, founder PSK Technologies, JCI Nagpur Fortune President, Bharat Udyogratna Award winner",
    canonical: "/about",
    ogImage: "/images/Prashant sir.webp",
    ogType: "profile"
  },
  "/services": {
    title: "Corporate Trainer, Business Coach & Public Speaking Services in Nagpur | Prashant Kadhao",
    description: "Hire Prashant Kadhao — best corporate trainer, business coach, public speaker, motivational speaker & leadership coach in Nagpur. Corporate training company offering leadership, soft skills, public speaking & executive coaching across Nagpur and India.",
    keywords: "corporate trainer in nagpur, best corporate trainer in nagpur, top corporate trainer in nagpur, corporate training company nagpur, business coach in nagpur, best business coach in nagpur, public speaker in nagpur, best public speaker in nagpur, public speaking coach nagpur, motivational speaker for corporate events nagpur, motivational speaker in nagpur, best motivational speaker in nagpur, leadership coach in nagpur, best leadership coach in nagpur, leadership trainer nagpur, soft skills trainer nagpur, executive coach nagpur, corporate trainer in india, best corporate trainer in india, top corporate trainer in india, business coach in india, best business coach in india, public speaker in india, motivational speaker in india, leadership coach in india",
    canonical: "/services",
    ogImage: "/images/og-cover.jpg",
    ogType: "website"
  },
  "/gallery": {
    title: "Gallery | Prashant Kadhao — Public Speaker & Corporate Trainer Nagpur",
    description: "Gallery of Prashant Kadhao — motivational speaker, public speaker, corporate trainer, business coach & leadership coach in Nagpur. Keynote speeches, corporate training, expert talks at colleges, JCI events & Bharat Udyogratna Award 2024.",
    keywords: "Prashant Kadhao gallery, public speaker in nagpur, motivational speaker in nagpur, best motivational speaker in nagpur, corporate trainer in nagpur, business coach in nagpur, leadership coach in nagpur, motivational speaker for college students nagpur, motivational speaker for corporate events nagpur, public speaker in india, motivational speaker in india, corporate trainer in india, JCI Nagpur Fortune events, Bharat Udyogratna Award photos",
    canonical: "/gallery",
    ogImage: "/images/og-cover.jpg",
    ogType: "website"
  },
  "/contact": {
    title: "Contact Prashant Kadhao | Book Public Speaker & Corporate Trainer in Nagpur",
    description: "Contact Prashant Kadhao to book the best public speaker, corporate trainer, business coach, motivational speaker & leadership coach in Nagpur. Executive coach & soft skills trainer serving Nagpur and all India. Call +91 99752 88300.",
    keywords: "contact Prashant Kadhao, book public speaker in nagpur, best public speaker in nagpur, hire corporate trainer in nagpur, best corporate trainer in nagpur, book business coach in nagpur, best business coach in nagpur, motivational speaker in nagpur, best motivational speaker in nagpur, motivational speaker for corporate events nagpur, leadership coach in nagpur, best leadership coach in nagpur, executive coach nagpur, public speaker in india, corporate trainer in india, business coach in india, motivational speaker in india, leadership coach in india, PSK Technologies Nagpur address",
    canonical: "/contact",
    ogImage: "/images/og-cover.jpg",
    ogType: "website"
  }
};

/**
 * SEO metadata per service-detail slug (/services/:slug)
 * Each weaves the 5 primary keywords + the specific service + Nagpur/India.
 */
export const SEO_SERVICE_DETAILS = {
  "communication-presentation": {
    title: "Communication & Presentation Skills Training Nagpur | Prashant Kadhao",
    description: "Communication & presentation skills training by Prashant Kadhao — best public speaker, corporate trainer & soft skills trainer in Nagpur. For professionals, managers & teams across Nagpur and India.",
    keywords: "communication skills training nagpur, presentation skills workshop nagpur, public speaker in nagpur, best public speaker in nagpur, public speaking coach nagpur, corporate trainer in nagpur, soft skills trainer nagpur, corporate trainer in india, public speaker in india, Prashant Kadhao communication trainer",
    category: "Corporate Training"
  },
  "time-stress-management": {
    title: "Time & Stress Management Training Nagpur | Corporate Trainer Prashant Kadhao",
    description: "Time & stress management training by Prashant Kadhao — best corporate trainer & soft skills trainer in Nagpur. Productivity workshops for professionals & teams across Nagpur and India.",
    keywords: "time management training nagpur, stress management workshop nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, soft skills trainer nagpur, corporate training company nagpur, corporate trainer in india, best corporate trainer in india, productivity training nagpur, Prashant Kadhao",
    category: "Corporate Training"
  },
  "corporate-etiquette-grooming": {
    title: "Corporate Etiquette & Grooming Training Nagpur | Prashant Kadhao",
    description: "Corporate etiquette & grooming training by Prashant Kadhao — best corporate trainer & soft skills trainer in Nagpur. Professional image workshops for teams across Nagpur and India.",
    keywords: "corporate etiquette training nagpur, grooming workshop nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, soft skills trainer nagpur, business etiquette course nagpur, corporate trainer in india, professional image training, Prashant Kadhao",
    category: "Corporate Training"
  },
  "team-building-accountability": {
    title: "Team Building & Accountability Training Nagpur | Leadership Coach Prashant Kadhao",
    description: "Team building & accountability training by Prashant Kadhao — best leadership coach & corporate trainer in Nagpur. Leadership workshops for managers across Nagpur and India.",
    keywords: "team building training nagpur, leadership coach in nagpur, best leadership coach in nagpur, leadership trainer nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, executive coach nagpur, leadership coach in india, corporate trainer in india, Prashant Kadhao",
    category: "Leadership Development"
  },
  "conflict-management": {
    title: "Conflict Management Training Nagpur | Leadership Coach Prashant Kadhao",
    description: "Conflict management training by Prashant Kadhao — best leadership coach & corporate trainer in Nagpur. Workshops for managers & HR across Nagpur and India.",
    keywords: "conflict management training nagpur, leadership coach in nagpur, best leadership coach in nagpur, top leadership coach in nagpur, leadership trainer nagpur, corporate trainer in nagpur, executive coach nagpur, leadership coach in india, best leadership coach in india, Prashant Kadhao",
    category: "Leadership Development"
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence (EQ) Training Nagpur | Leadership Coach Prashant Kadhao",
    description: "Emotional intelligence training by Prashant Kadhao — best leadership coach & executive coach in Nagpur. EQ workshops for leaders & managers across Nagpur and India.",
    keywords: "emotional intelligence training nagpur, EQ workshop nagpur, leadership coach in nagpur, best leadership coach in nagpur, executive coach nagpur, leadership trainer nagpur, corporate trainer in nagpur, leadership coach in india, executive coach in india, Prashant Kadhao",
    category: "Leadership Development"
  },
  "interview-gd-preparation": {
    title: "Interview & GD Preparation Training Nagpur | Prashant Kadhao",
    description: "Interview & group discussion preparation by Prashant Kadhao — best public speaker & soft skills trainer in Nagpur. Career coaching for students across Nagpur and India.",
    keywords: "interview preparation training nagpur, group discussion coaching nagpur, public speaker in nagpur, public speaking coach nagpur, soft skills trainer nagpur, motivational speaker for college students nagpur, corporate trainer in nagpur, public speaker in india, Prashant Kadhao",
    category: "Employability & Life Skills"
  },
  "resume-building": {
    title: "Resume Building Workshop Nagpur | ATS Resume Training | Prashant Kadhao",
    description: "Resume building workshop by Prashant Kadhao — best soft skills trainer & corporate trainer in Nagpur. ATS-friendly resume & LinkedIn training for students across Nagpur and India.",
    keywords: "resume building workshop nagpur, ATS resume training nagpur, soft skills trainer nagpur, public speaking coach nagpur, motivational speaker for college students nagpur, corporate trainer in nagpur, public speaker in nagpur, LinkedIn optimization nagpur, Prashant Kadhao",
    category: "Employability & Life Skills"
  },
  "confidence-development": {
    title: "Confidence & Public Speaking Workshop Nagpur | Prashant Kadhao",
    description: "Confidence development & public speaking workshop by Prashant Kadhao — best public speaker & motivational speaker in Nagpur. For students & professionals across Nagpur and India.",
    keywords: "confidence training nagpur, public speaking course nagpur, public speaker in nagpur, best public speaker in nagpur, public speaking coach nagpur, motivational speaker for college students nagpur, motivational speaker in nagpur, soft skills trainer nagpur, public speaker in india, Prashant Kadhao",
    category: "Employability & Life Skills"
  },
  "aspiring-trainer": {
    title: "Train The Trainer Course Nagpur | Become a Corporate Trainer | Prashant Kadhao",
    description: "Train the trainer course by Prashant Kadhao — best corporate trainer & public speaker in Nagpur. Become a professional corporate trainer; program serves Nagpur and all India.",
    keywords: "train the trainer course nagpur, become corporate trainer nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, top corporate trainer in nagpur, public speaker in nagpur, soft skills trainer nagpur, corporate trainer in india, best corporate trainer in india, top corporate trainer in india, Prashant Kadhao",
    category: "Train The Trainer"
  },
  "teacher": {
    title: "Teacher Training Program Nagpur | Corporate Trainer Prashant Kadhao",
    description: "Teacher training program by Prashant Kadhao — best corporate trainer & soft skills trainer in Nagpur. Modern pedagogy workshops for teachers across Nagpur and India.",
    keywords: "teacher training program nagpur, corporate trainer in nagpur, best corporate trainer in nagpur, soft skills trainer nagpur, leadership trainer nagpur, public speaker in nagpur, corporate trainer in india, faculty development program nagpur, Prashant Kadhao",
    category: "Train The Trainer"
  },
  "public-speaker": {
    title: "Public Speaker Training Course Nagpur | Keynote Speaking | Prashant Kadhao",
    description: "Public speaker training by Prashant Kadhao — best public speaker & motivational speaker in Nagpur. Become a paid keynote & public speaker; course serves Nagpur and all India.",
    keywords: "public speaking course nagpur, public speaker training nagpur, public speaker in nagpur, best public speaker in nagpur, top public speaker in nagpur, public speaking coach nagpur, motivational speaker in nagpur, best motivational speaker in nagpur, public speaker in india, best public speaker in india, motivational speaker in india, Prashant Kadhao",
    category: "Train The Trainer"
  }
};

/**
 * Build absolute URL from a path.
 */
export const absoluteUrl = (path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SEO_DEFAULTS.siteUrl}${clean === "/" ? "" : clean}`;
};
