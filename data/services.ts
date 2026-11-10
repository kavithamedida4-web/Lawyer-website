export interface SubService {
  name: string;
  description: string;
  image?: string;
}

export function getSubServiceImage(subName: string, serviceSlug: string): string {
  const lower = subName.toLowerCase();
  
  // Specific criminal subservice mappings
  if (lower.includes('bail')) return '/criminal-01-bail.jpg';
  if (lower.includes('cheque') || lower.includes('138')) return '/criminal-02-cheque.jpg';
  if (lower.includes('police') || lower.includes('fir') || lower.includes('investigation') || lower.includes('inquiry')) return '/criminal-03-police.jpg';
  if (lower.includes('trial')) return '/criminal-04-trials.jpg';
  if (lower.includes('cyber') || lower.includes('ndps') || lower.includes('pocso')) return '/criminal-05-ndps-cyber.jpg';
  if (lower.includes('white collar') || lower.includes('economic') || lower.includes('cbi') || lower.includes('pmla')) return '/criminal-06-white-collar.jpg';
  
  // Civil
  if (lower.includes('suit') || lower.includes('decree')) return '/civil-01-suits.jpg';
  if (lower.includes('partition') || lower.includes('title')) return '/civil-02-partition.jpg';
  if (lower.includes('specific performance')) return '/civil-03-specific-performance.jpg';
  if (lower.includes('injunction') || lower.includes('stay')) return '/civil-04-injunctions.jpg';
  if (lower.includes('recovery')) return '/civil-05-recovery.jpg';
  if (lower.includes('trespass')) return '/civil-06-trespass.jpg';

  // Family
  if (lower.includes('divorce')) return '/fam-01-divorce.jpg';
  if (lower.includes('maintenance') || lower.includes('alimony')) return '/fam-02-alimony.jpg';
  if (lower.includes('domestic') || lower.includes('dv act')) return '/fam-03-domestic-violence.jpg';
  if (lower.includes('custody') || lower.includes('visitation')) return '/fam-04-child-custody.jpg';
  if (lower.includes('conjugal') || lower.includes('restitution')) return '/fam-05-conjugal.jpg';
  if (lower.includes('matrimonial') || lower.includes('marriage')) return '/fam-06-matrimonial.jpg';

  // Tribunals
  if (lower.includes('nclt') || lower.includes('ibc')) return '/tribunals-01-nclt-ibc.jpg';
  if (lower.includes('mact') || lower.includes('motor')) return '/tribunals-02-motor-accident.jpg';
  if (lower.includes('consumer forum')) return '/tribunals-03-consumer-commission.jpg';
  if (lower.includes('cat') || lower.includes('service matters')) return '/tribunals-06-telangana-high-court.jpg';

  // Tax
  if (lower.includes('income tax')) return '/tax-01-income-tax.jpg';
  if (lower.includes('gst')) return '/tax-02-gst-disputes.jpg';
  if (lower.includes('appeal') || lower.includes('itat')) return '/tax-03-appeals-itat.jpg';
  if (lower.includes('tds') || lower.includes('pan')) return '/tax-04-tds-pan.jpg';
  if (lower.includes('it act')) return '/tax-05-cyber-it-law.jpg';
  if (lower.includes('e-commerce') || lower.includes('ecommerce')) return '/tax-06-ecommerce-business.jpg';

  // RERA & Tenant
  if (lower.includes('rera')) return '/rera-01-complaints.jpg';
  if (lower.includes('eviction')) return '/tenant-01-eviction.jpg';
  if (lower.includes('rental agreement')) return '/tenant-02-rental-agreements.jpg';
  if (lower.includes('lease deed')) return '/tenant-04-lease-deed.jpg';
  if (lower.includes('premises') || lower.includes('commercial')) return '/tenant-05-premises-hyderabad.jpg';

  // Labour
  if (lower.includes('employee rights')) return '/labour-01-employee-rights.jpg';
  if (lower.includes('termination')) return '/labour-02-wrongful-termination.jpg';
  if (lower.includes('industrial disputes')) return '/labour-03-industrial-disputes.jpg';
  if (lower.includes('epf') || lower.includes('esi')) return '/labour-04-epf-esi.jpg';
  if (lower.includes('standing orders')) return '/labour-05-standing-orders.jpg';

  // Corporate & IPR
  if (lower.includes('incorporation')) return '/corp-01-incorporation.jpg';
  if (lower.includes('shareholder') || lower.includes('mou')) return '/corp-02-mou-shareholders.jpg';
  if (lower.includes('due diligence')) return '/corp-03-contracts-due-diligence.jpg';
  if (lower.includes('startup')) return '/corp-05-startup-support.jpg';
  if (lower.includes('trademark')) return '/ipr-01-trademark.jpg';
  if (lower.includes('copyright')) return '/ipr-02-copyright.jpg';
  if (lower.includes('patent')) return '/ipr-03-patent.jpg';
  if (lower.includes('design')) return '/ipr-04-design.jpg';

  // Immigration
  if (lower.includes('student visa')) return '/immig-01-student-visa.jpg';
  if (lower.includes('oci') || lower.includes('pio')) return '/immig-02-oci-pio.jpg';
  if (lower.includes('work visa')) return '/immig-03-work-visa.jpg';
  if (lower.includes('citizenship')) return '/immig-04-citizenship.jpg';
  if (lower.includes('business visa')) return '/immig-05-business-visa.jpg';

  // Other legal
  if (lower.includes('legal notice')) return '/other-01-legal-notice.jpg';
  if (lower.includes('power of attorney')) return '/other-02-power-of-attorney.jpg';
  if (lower.includes('will') || lower.includes('succession')) return '/other-05-will-succession.jpg';

  // Safe fallback to our framed Senior Advocate M. Umamaheshwar Reddy in courtroom
  return '/advocate-umamaheshwar-framed.jpg';
}

export interface ServiceHeroImages {
  card1: { src: string; alt: string };
  card2: { src: string; alt: string };
  card3: { src: string; alt: string };
  card4: { src: string; alt: string };
}

export interface LegalService {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  leadAdvocate: string;
  phone: string;
  whatsappMessage: string;
  iconType: string;
  courts: string[];
  heroImages: ServiceHeroImages;
  subServices: SubService[];
}

export const legalServices: LegalService[] = [
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    category: 'BAIL, TRIAL COURT & SPECIAL COURTS',
    shortDesc: 'Authoritative defense and trial representation across Sessions Courts, Special CBI/ACB Benches, and High Court appeals.',
    fullDesc:
      'UK Law Firm provides strategic, urgent, and aggressive criminal defense counsel across all stages of criminal proceedings in India. Our advocates have extensive courtroom experience handling anticipatory and regular bail petitions, quashing petitions under Section 482 Cr.P.C., criminal appeals, trial cross-examinations, and white-collar fraud defenses.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+916304856208',
    whatsappMessage: 'Hello Advocate Kamalakar, I need urgent legal counsel regarding Criminal Law / Bail.',
    iconType: 'scales',
    courts: ['Telangana High Court', 'Metropolitan Sessions Courts', 'Special CBI & ACB Courts', 'Chief Metropolitan Magistrate Courts'],
    heroImages: {
      card1: {
        src: '/real-inauguration-ribbon.jpg',
        alt: 'UK Law Firm Chambers Inauguration Ceremony',
      },
      card2: {
        src: '/real-kamalakar-standing-coat.jpg',
        alt: 'Advocate S. Kamalakar in Courtroom Attire',
      },
      card3: {
        src: '/real-umamaheshwar-desk-criminal.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Criminal Practice Desk',
      },
      card4: {
        src: '/real-partners-brass-lamp.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Bail & Anticipatory Bail',
        description: 'Urgent filing and forceful arguments for Anticipatory Bail (Sec 438 CrPC), Regular Bail (Sec 437/439 CrPC), and Interim Protection across Sessions Courts and High Courts.',
        image: '/criminal-01-bail.jpg',
      },
      {
        name: 'Cheque Bounce Cases',
        description: 'Prosecution and defense in Section 138 Negotiable Instruments Act complaints, statutory legal notices, defense against dishonored cheques, and settlement negotiations.',
        image: '/criminal-02-cheque.jpg',
      },
      {
        name: 'Police Complaints & Investigation',
        description: 'Assistance in drafting formal police complaints, FIR registration, challenging unlawful FIRs, assisting during CID/Crime Branch inquiries, and protection against police harassment.',
        image: '/criminal-03-police.jpg',
      },
      {
        name: 'Criminal Trials & Appeals',
        description: 'Comprehensive trial court advocacy, rigorous witness cross-examination, final arguments, criminal appeals, and revision petitions before Sessions Judges and the High Court.',
        image: '/criminal-04-trials.jpg',
      },
      {
        name: 'NDPS, POCSO, Cyber Crime',
        description: 'Specialized legal defense in Narcotics (NDPS Act), sensitive POCSO statutory trials, cyber financial frauds, and specialized criminal benches.',
        image: '/criminal-05-ndps-cyber.jpg',
      },
      {
        name: 'White Collar & Economic Offences',
        description: 'Defense against allegations of corporate embezzlement, criminal breach of trust (Sec 406/420 IPC), money laundering (PMLA), and financial fraud investigations.',
        image: '/criminal-06-white-collar.jpg',
      },
    ],
  },
  {
    slug: 'civil-law',
    title: 'Civil Law',
    category: 'PROPERTY, CONTRACTS & RIGHTS',
    shortDesc: 'Comprehensive civil litigation, title declarations, specific performance, and injunction suits across Trial Courts and High Courts.',
    fullDesc:
      'Our civil practice covers complex disputes concerning landed properties, title declarations, partition suits among family co-parceners, contractual enforcement, money recovery, and high-stakes stay orders. We protect your civil and proprietary rights with rigorous evidentiary preparation and authoritative courtroom arguments.',
    leadAdvocate: 'M. Umamaheshwar Reddy (Senior Advocate)',
    phone: '+919866775034',
    whatsappMessage: 'Hello Senior Advocate Umamaheshwar Reddy, I would like to consult regarding a Civil Law matter.',
    iconType: 'document',
    courts: ['Telangana High Court', 'City Civil Courts', 'Senior Civil Judge Courts', 'Junior Civil Judge Courts'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy in Formal Court Suit',
      },
      card2: {
        src: '/hero-advocate-kamalakar-portrait.jpg',
        alt: 'Advocate S. Kamalakar — Executive Consultation',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Civil Practice Desk',
      },
      card4: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners Umamaheshwar Reddy & Kamalakar at UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Civil Suits & Decrees',
        description: 'Filing, prosecuting, and defending comprehensive civil suits, obtaining preliminary and final decrees, and executing court orders.',
        image: '/civil-01-suits.jpg',
      },
      {
        name: 'Partition & Title Disputes',
        description: 'Ancestral and joint family property division, genealogical verification, suits for partition and separate possession, and title declaration suits.',
        image: '/civil-02-partition.jpg',
      },
      {
        name: 'Specific Performance',
        description: 'Enforcement of registered and unregistered Agreements of Sale, compelling property transfers, and defending against invalid contract claims.',
        image: '/civil-03-specific-performance.jpg',
      },
      {
        name: 'Injunctions & Stay Orders',
        description: 'Securing ex-parte ad-interim temporary injunctions (Order 39 Rules 1 & 2 CPC), perpetual injunctions against illegal dispossession, and status-quo orders.',
        image: '/civil-04-injunctions.jpg',
      },
      {
        name: 'Recovery Suits',
        description: 'Summary suits under Order 37 CPC, money recovery from business debtors, breach of loan agreements, and attachment of properties before judgment.',
        image: '/civil-05-recovery.jpg',
      },
      {
        name: 'Consumer, Trespass & Other Civil Matters',
        description: 'Suits for damages, prevention of illegal encroachment, nuisance, easementary rights, and boundary demarcation disputes.',
        image: '/civil-06-trespass.jpg',
      },
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    category: 'MARRIAGE, DIVORCE & RELATIONSHIPS',
    shortDesc: 'Empathetic yet resolute advocacy for matrimonial disputes, mutual & contested divorces, child custody, and alimony settlements.',
    fullDesc:
      'Family disputes require sensitivity, dignity, and unwavering legal resolve. UK Law Firm advises clients through divorce proceedings, alimony and permanent maintenance calculations, protection against domestic violence, child custody petitions, and fair division of matrimonial assets.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+919866775034',
    whatsappMessage: 'Hello UK Law Firm, I seek legal guidance regarding Family / Matrimonial Law.',
    iconType: 'family',
    courts: ['Family Courts (Hyderabad & Secunderabad)', 'Telangana High Court', 'Metropolitan Magistrate Courts'],
    heroImages: {
      card1: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners UK Law Firm Chambers',
      },
      card2: {
        src: '/real-umamaheshwar-desk-reading.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy Reviewing Case Briefs',
      },
      card3: {
        src: '/hero-advocate-kamalakar-library.jpg',
        alt: 'Advocate S. Kamalakar in Chambers Law Library',
      },
      card4: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy — Chambers',
      },
    },
    subServices: [
      {
        name: 'Divorce (Mutual & Contested)',
        description: 'Fast-track mutual consent divorce petitions with cooling-off waivers, as well as contested divorce petitions on grounds of cruelty, desertion, or adultery.',
        image: '/fam-01-divorce.jpg',
      },
      {
        name: 'Maintenance / Alimony',
        description: 'Interim maintenance applications under Section 125 CrPC and Section 24 Hindu Marriage Act, permanent financial alimony, and child support calculations.',
        image: '/fam-02-alimony.jpg',
      },
      {
        name: 'Domestic Violence (DV Act)',
        description: 'Securing residence orders, protection orders, and monetary relief under the Protection of Women from Domestic Violence Act, as well as defending against false allegations.',
        image: '/fam-03-domestic-violence.jpg',
      },
      {
        name: 'Child Custody & Visitation Rights',
        description: 'Petitions under Guardians and Wards Act for legal guardianship, physical custody, interim visitation schedules, and international travel permissions.',
        image: '/fam-04-child-custody.jpg',
      },
      {
        name: 'Restitution of Conjugal Rights',
        description: 'Filing Section 9 petitions for restitution of marital relations and exploring court-monitored mediation for amicable reunion.',
        image: '/fam-05-conjugal.jpg',
      },
      {
        name: 'Matrimonial Disputes',
        description: 'Resolution of complex dowry harassment complaints (Sec 498A IPC), stridhan recovery, comprehensive settlement deeds, and mutual releases.',
        image: '/fam-06-matrimonial.jpg',
      },
    ],
  },
  {
    slug: 'tribunals-and-forums',
    title: 'Tribunals & Forums',
    category: 'SPECIALISED REPRESENTATION',
    shortDesc: 'Specialized litigation before NCLT, NCLAT, MACT, Consumer Forums, RERA Tribunals, and Central Administrative Tribunal (CAT).',
    fullDesc:
      'India’s quasi-judicial tribunals operate with specialized procedural rules and expedited benches. UK Law Firm represents corporate entities, accident victims, aggrieved consumers, and civil servants before quasi-judicial appellate tribunals across Telangana and South India.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+916304856208',
    whatsappMessage: 'Hello Advocate Kamalakar, I need legal representation before a Tribunal / Forum.',
    iconType: 'tribunal',
    courts: ['NCLT Hyderabad Bench', 'NCLAT', 'Telangana Real Estate Appellate Tribunal (REAT)', 'State & National Consumer Disputes Redressal Commission', 'MACT Courts'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-bookshelf.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy in Law Library',
      },
      card2: {
        src: '/advocate-lapels-neckband.jpg',
        alt: 'UK Law Firm Advocate in Official Court Robes and Neckband',
      },
      card3: {
        src: '/real-umamaheshwar-desk-criminal.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Briefing Desk',
      },
      card4: {
        src: '/real-partners-brass-lamp.jpg',
        alt: 'Founding Partners UK Law Firm beside Traditional Brass Lamp',
      },
    },
    subServices: [
      {
        name: 'NCLT, NCLAT & IBC Matters',
        description: 'Corporate Insolvency Resolution Process (CIRP) petitions under the Insolvency and Bankruptcy Code (IBC), operational/financial debt claims, and company oppression/mismanagement suits.',
        image: '/tribunals-01-nclt-ibc.jpg',
      },
      {
        name: 'Motor Accident Claims (MACT)',
        description: 'Substantial compensation claims for road traffic accident victims, third-party liability disputes, permanent disability claims, and insurance claim appeals.',
        image: '/tribunals-02-motor-accident.jpg',
      },
      {
        name: 'Consumer Disputes Forum',
        description: 'Representing consumers against deficient goods and unfair trade practices before District, State, and National Consumer Commissions.',
        image: '/tribunals-03-consumer-commission.jpg',
      },
      {
        name: 'RERA – Real Estate Matters',
        description: 'Appellate litigation before the Real Estate Appellate Tribunal against developer defaults, unfair contract clauses, and delay in handover.',
        image: '/tribunals-04-rera-hyderabad.jpg',
      },
      {
        name: 'GST, Income Tax & Other Tribunals',
        description: 'Appeals before ITAT, CESTAT, and appellate authorities challenging tax levies, penalty notices, and assessment orders.',
        image: '/tribunals-05-itat-gst.jpg',
      },
      {
        name: 'Service Matters & CAT',
        description: 'Government service matters, wrongful departmental charge-sheets, promotion disputes, and pension claims before the Central Administrative Tribunal (CAT).',
        image: '/tribunals-06-telangana-high-court.jpg',
      },
    ],
  },
  {
    slug: 'taxation-and-it-law',
    title: 'Taxation & IT Law',
    category: 'BUSINESS & COMPLIANCE',
    shortDesc: 'Direct and indirect tax dispute resolution, GST notices, scrutiny assessments, and legal advisory for tech-driven enterprises.',
    fullDesc:
      'We combine legal statutory mastery with financial acumen to assist corporations, business proprietors, and individuals with tax litigation, GST appeals, search-and-seizure inquiries, and digital business regulatory mandates under the Information Technology Act.',
    leadAdvocate: 'S. Kamalakar (B.B.M., M.C.A., LL.B.)',
    phone: '+916304856208',
    whatsappMessage: 'Hello Advocate Kamalakar, I need consultation on Taxation & IT Law.',
    iconType: 'taxation',
    courts: ['Telangana High Court (Tax Benches)', 'ITAT Hyderabad', 'GST Appellate Authorities', 'Adjudicating Officer (IT Act)'],
    heroImages: {
      card1: {
        src: '/hero-card-umamaheshwar.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy',
      },
      card2: {
        src: '/hero-advocate-kamalakar-library.jpg',
        alt: 'Advocate S. Kamalakar Reviewing Statutory Commentaries',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Executive Desk',
      },
      card4: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Income Tax Matters',
        description: 'Defense against Section 148 reopening notices, Section 143(3) scrutiny assessments, unaccounted cash allegations, and appellate review before CIT(Appeals).',
        image: '/tax-01-income-tax.jpg',
      },
      {
        name: 'GST Registration & Disputes',
        description: 'Resolving show-cause notices (SCNs), input tax credit (ITC) blockages, cancellation of GST registrations, and tax demand challenges.',
        image: '/tax-02-gst-disputes.jpg',
      },
      {
        name: 'Tax Appeals & Assessments',
        description: 'Formulation of appeals, stay of demand applications, and substantive representation before the Income Tax Appellate Tribunal (ITAT).',
        image: '/tax-03-appeals-itat-new.jpg',
      },
      {
        name: 'TDS, PAN & Compliance',
        description: 'Legal vetting of withholding tax liabilities, prosecution notices under Section 276B, and penalty waiver petitions.',
        image: '/tax-04-tds-pan.jpg',
      },
      {
        name: 'IT Act & Cyber Law',
        description: 'Advisory on intermediary liability, data protection, digital evidence admissibility under Section 65B of the Indian Evidence Act, and cyber compliance.',
        image: '/tax-05-cyber-it-law.jpg',
      },
      {
        name: 'E-commerce & Digital Business',
        description: 'Drafting terms of service, platform privacy policies, vendor agreements, payment gateway contracts, and e-commerce regulatory compliance.',
        image: '/tax-06-ecommerce-business.jpg',
      },
    ],
  },
  {
    slug: 'rera-and-builder-buyer',
    title: 'RERA & Builder - Buyer',
    category: 'REAL ESTATE LAW',
    shortDesc: 'Dedicated advocacy for homebuyers and investors facing possession delays, developer defaults, and misleading real estate projects.',
    fullDesc:
      'Real estate investments in Hyderabad and Telangana often encounter builder delays, structural deviations, missing occupancy certificates, and refusal to refund advance payments. UK Law Firm aggressively prosecutes developer defaults before TSRERA and the Real Estate Appellate Tribunal.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+919866775034',
    whatsappMessage: 'Hello UK Law Firm, I need assistance regarding a RERA / Builder-Buyer dispute.',
    iconType: 'realEstate',
    courts: ['Telangana State RERA (TSRERA)', 'Telangana Real Estate Appellate Tribunal', 'Consumer Disputes Redressal Commission'],
    heroImages: {
      card1: {
        src: '/real-inauguration-ribbon.jpg',
        alt: 'UK Law Firm Inauguration Ribbon Cutting Ceremony',
      },
      card2: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy before Law & Justice Wall',
      },
      card3: {
        src: '/real-umamaheshwar-desk-reading.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy Analyzing Builder Contracts',
      },
      card4: {
        src: '/hero-advocate-kamalakar-portrait.jpg',
        alt: 'Advocate S. Kamalakar — RERA Practice',
      },
    },
    subServices: [
      {
        name: 'RERA Complaints',
        description: 'Drafting and filing formal complaints under Section 31 of RERA for delayed possession, failure to register layout, or unilateral project changes.',
        image: '/rera-01-complaints.jpg',
      },
      {
        name: 'Builder - Buyer Disputes',
        description: 'Challenging one-sided clauses in builder-buyer agreements, arbitrary escalation of costs, and demands for illegal additional charges.',
        image: '/rera-02-builder-dispute-v2.jpg',
      },
      {
        name: 'Delay in Possession',
        description: 'Securing statutory monthly interest at prescribed bank rates for every month of delayed handover of residential and commercial apartments.',
        image: '/rera-03-delay-possession.jpg',
      },
      {
        name: 'Refund & Compensation',
        description: 'Enforcing the buyer’s statutory right to withdraw from defaulted projects with complete refund of principal along with punitive interest and legal costs.',
        image: '/rera-04-refund-compensation.jpg',
      },
      {
        name: 'Agreement & Project Related Issues',
        description: 'Title investigation of layout permissions, RERA registration authenticity verification, Occupancy Certificate (OC) enforcement, and builder association formation.',
        image: '/rera-05-agreement-project.jpg',
      },
    ],
  },
  {
    slug: 'landlord-and-tenant',
    title: 'Landlord & Tenant',
    category: 'PROPERTY MATTERS',
    shortDesc: 'Speedy eviction proceedings, lease drafting, security deposit recoveries, and dispute management for commercial and residential estates.',
    fullDesc:
      'We counsel property owners, multinational tenants, and high-street commercial landlords through tenancy agreements, eviction litigation, breach of lease covenants, rent default recovery, and peaceful vacant possession.',
    leadAdvocate: 'M. Umamaheshwar Reddy',
    phone: '+919866775034',
    whatsappMessage: 'Hello Advocate Umamaheshwar Reddy, I need legal help regarding Landlord & Tenant law.',
    iconType: 'briefcase',
    courts: ['Rent Control Courts', 'City Civil Courts', 'Telangana High Court'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-bookshelf.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy Reviewing Tenancy Treatises',
      },
      card2: {
        src: '/real-kamalakar-standing-coat.jpg',
        alt: 'Advocate S. Kamalakar in Courtroom Attire',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Consultation Desk',
      },
      card4: {
        src: '/real-partners-brass-lamp.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Eviction & Possession',
        description: 'Instituting fast-track eviction suits for willful default in rent, unauthorized subletting, bona fide personal requirement, or expiry of lease term.',
        image: '/tenant-01-eviction.jpg',
      },
      {
        name: 'Rental Agreements',
        description: 'Bespoke drafting and registration of bulletproof commercial lease deeds, residential rent agreements, escalation clauses, and lock-in covenants.',
        image: '/tenant-02-rental-agreements.jpg',
      },
      {
        name: 'Disputes between Landlord & Tenant',
        description: 'Resolution of conflicts concerning maintenance charges, structural repairs, security deposit withholding, and arbitrary rent hikes.',
        image: '/tenant-03-landlord-disputes-new.jpg',
      },
      {
        name: 'Lease Deed & Renewal',
        description: 'Structuring renewal options, notices of termination, peaceful handover protocols, and forfeiture notices for covenant violations.',
        image: '/tenant-04-lease-deed.jpg',
      },
      {
        name: 'Commercial & Residential Premises',
        description: 'Protection of landlords from tenant overstaying in prime IT corridors (Gachibowli, Hitec City, Madhapur) and recovery of mesne profits.',
        image: '/tenant-05-premises-hyderabad.jpg',
      },
    ],
  },
  {
    slug: 'labour-and-employment',
    title: 'Labour & Employment',
    category: 'WORKPLACE LAW',
    shortDesc: 'Workplace dispute defense, executive employment contracts, POSH inquiry handling, and statutory labour tribunal litigation.',
    fullDesc:
      'UK Law Firm handles industrial and employment legalities for both corporate employers and senior personnel. We advise on wrongful termination, severance packages, non-compete enforcement, POSH compliance, and representation before Labour Courts and Industrial Tribunals.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+916304856208',
    whatsappMessage: 'Hello Advocate Kamalakar, I need counsel regarding Labour & Employment law.',
    iconType: 'workplace',
    courts: ['Labour Courts & Industrial Tribunals', 'Telangana High Court (Writ Benches)', 'Labour Commissioner Offices'],
    heroImages: {
      card1: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners Umamaheshwar Reddy & Kamalakar',
      },
      card2: {
        src: '/hero-advocate-kamalakar-library.jpg',
        alt: 'Advocate S. Kamalakar in Law Library',
      },
      card3: {
        src: '/real-umamaheshwar-desk-reading.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy Reviewing Employment Briefs',
      },
      card4: {
        src: '/hero-card-umamaheshwar.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy',
      },
    },
    subServices: [
      {
        name: 'Employee Rights & Service Matters',
        description: 'Advisory on statutory wages, gratuity claims, maternity benefits, wrongful demotions, and denial of earned incentives.',
        image: '/labour-01-employee-rights.jpg',
      },
      {
        name: 'Wrongful Termination',
        description: 'Challenging arbitrary terminations, unlawful retrenchments, breach of contractual notice periods, and claim of damages.',
        image: '/labour-02-wrongful-termination.jpg',
      },
      {
        name: 'Industrial Disputes',
        description: 'Conciliation proceedings before Labour Officers, reference to Industrial Tribunals, strike management, and collective bargaining advisory.',
        image: '/labour-03-industrial-disputes.jpg',
      },
      {
        name: 'EPF, ESI & Labour Law Compliance',
        description: 'Handling statutory inspection notices, Section 7A inquiries under the EPF Act, and ESI compliance audits for enterprises.',
        image: '/labour-04-epf-esi.jpg',
      },
      {
        name: 'Standing Orders & HR Policies',
        description: 'Drafting employee code of conduct, non-disclosure agreements (NDAs), POSH internal complaint committee frameworks, and disciplinary inquiry rules.',
        image: '/labour-05-standing-orders.jpg',
      },
    ],
  },
  {
    slug: 'consumer-protection',
    title: 'Consumer Protection',
    category: 'CONSUMER DISPUTES FORUM',
    shortDesc: 'Vigorous prosecution of corporate deficiencies, defective products, medical negligence, and deceptive online trade practices.',
    fullDesc:
      'Under the Consumer Protection Act 2019, consumers enjoy expansive rights against substandard goods and deceptive trade conduct. UK Law Firm files and fights consumer complaints against automobile makers, real estate promoters, healthcare providers, e-commerce giants, and insurance firms.',
    leadAdvocate: 'M. Umamaheshwar Reddy',
    phone: '+919866775034',
    whatsappMessage: 'Hello Advocate Umamaheshwar Reddy, I need assistance with a Consumer Dispute.',
    iconType: 'shield',
    courts: ['District Consumer Disputes Redressal Commissions (Hyderabad, Ranga Reddy)', 'Telangana State Consumer Commission', 'NCDRC New Delhi'],
    heroImages: {
      card1: {
        src: '/about-inauguration.jpg',
        alt: 'Chambers Inauguration Ceremony with Founding Partners',
      },
      card2: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy at Consultation Desk',
      },
      card4: {
        src: '/hero-advocate-kamalakar-portrait.jpg',
        alt: 'Advocate S. Kamalakar',
      },
    },
    subServices: [
      {
        name: 'Defective Goods & Services',
        description: 'Legal notices and complaints for manufacturing flaws, spurious products, and refusal of manufacturers to honor warranties.',
        image: '/consumer-01-defective-goods.jpg',
      },
      {
        name: 'Refund & Replacement',
        description: 'Enforcing complete statutory refunds, price deductions, and mandatory replacement of defective machinery, vehicles, and electronics.',
        image: '/consumer-02-refund-replacement.jpg',
      },
      {
        name: 'Deficiency in Service',
        description: 'Holding banking, insurance, healthcare, aviation, and hospitality providers accountable for negligent service and monetary loss.',
        image: '/consumer-03-deficiency-service.jpg',
      },
      {
        name: 'E-commerce Consumer Issues',
        description: 'Remedies against online marketplace fraud, dark pattern traps, misleading advertisements, and non-delivery of purchased goods.',
        image: '/consumer-04-ecommerce-issues.jpg',
      },
      {
        name: 'Filing Complaints & Representation',
        description: 'Filing complaints on the e-Daakhil portal, presenting oral arguments, executing consumer decrees, and securing punitive compensation.',
        image: '/consumer-05-filing-complaints.jpg',
      },
    ],
  },
  {
    slug: 'corporate-and-commercial',
    title: 'Corporate & Commercial',
    category: 'BUSINESS, CONTRACTS & STRUCTURE',
    shortDesc: 'Strategic corporate counsel, shareholder pacts, commercial litigation, mergers, startup advisory, and contract negotiations.',
    fullDesc:
      'From entity formation and shareholder agreements to complex commercial cross-border contracts and dispute resolution, our corporate practice provides actionable, business-focused legal clarity to founders, SMEs, and established companies.',
    leadAdvocate: 'S. Kamalakar (B.B.M., M.C.A., LL.B.)',
    phone: '+916304856208',
    whatsappMessage: 'Hello Advocate Kamalakar, I would like to consult on Corporate & Commercial Law.',
    iconType: 'corporate',
    courts: ['Telangana High Court (Commercial Benches)', 'Commercial Courts (City Civil Court)', 'NCLT Hyderabad'],
    heroImages: {
      card1: {
        src: '/real-inauguration-ribbon.jpg',
        alt: 'UK Law Firm Chambers Inauguration Ceremony',
      },
      card2: {
        src: '/hero-advocate-kamalakar-portrait.jpg',
        alt: 'Advocate S. Kamalakar Commercial Litigation Counsel',
      },
      card3: {
        src: '/real-umamaheshwar-desk-reading.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy Analyzing Corporate Agreements',
      },
      card4: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Company Incorporation',
        description: 'Structuring Private Limited companies, LLPs, Section 8 non-profits, drafting MOA & AOA, and corporate governance roadmaps.',
        image: '/corp-01-incorporation.jpg',
      },
      {
        name: 'MOU, Shareholders Agreements',
        description: 'Drafting founders’ agreements, term sheets, shareholder pacts (SHA), voting trusts, and investor protective provisions.',
        image: '/corp-02-mou-shareholders.jpg',
      },
      {
        name: 'Business Contracts & Legal Due Diligence',
        description: 'Comprehensive vetting of vendor master agreements, licensing deals, franchise contracts, and risk assessment audits.',
        image: '/corp-03-contracts-due-diligence.jpg',
      },
      {
        name: 'Commercial Disputes',
        description: 'Fast-track litigation before dedicated Commercial Courts, pre-institution mediation, and emergency interim applications.',
        image: '/corp-04-commercial-disputes.jpg',
      },
      {
        name: 'Start-up Legal Support',
        description: 'End-to-end legal onboarding for startups in Hyderabad’s tech corridor: IP assignment, ESOP frameworks, and compliance policies.',
        image: '/corp-05-startup-support.jpg',
      },
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property (IPR)',
    category: 'BRANDS, IDEAS & CREATIONS',
    shortDesc: 'Securing, safeguarding, and prosecuting trademarks, copyrights, patent filings, and proprietary design rights in India.',
    fullDesc:
      'Intellectual property is a company’s most valuable asset. UK Law Firm provides proactive registration and courtroom enforcement against trademark infringers, counterfeiters, copyright violators, and digital piracy across India.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+916304856208',
    whatsappMessage: 'Hello UK Law Firm, I need consultation on Intellectual Property (IPR).',
    iconType: 'bulb',
    courts: ['Intellectual Property Division (Telangana High Court)', 'Trade Marks Registry (Chennai)', 'Copyright Office'],
    heroImages: {
      card1: {
        src: '/ipr-hero-kamalakar-library.jpg',
        alt: 'Senior Advocate S. Kamalakar Reviewing IP Treatises in Law Library',
      },
      card2: {
        src: '/ipr-hero-umamaheshwar-standing.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy in Formal Court Attire',
      },
      card3: {
        src: '/ipr-hero-umamaheshwar-desk.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Consultation Desk',
      },
      card4: {
        src: '/ipr-hero-partners-lamp.jpg',
        alt: 'Founding Partners Umamaheshwar Reddy & Kamalakar at UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Trademark Registration & Opposition',
        description: 'Trademark search, filing, reply to examination reports, conducting opposition hearings, and securing registration certificates.',
        image: '/ipr-01-trademark.jpg',
      },
      {
        name: 'Copyright Protection',
        description: 'Registration of software source code, literary works, audiovisual creations, and statutory licensing agreements.',
        image: '/ipr-02-copyright.jpg',
      },
      {
        name: 'Patent Filing & Advisory',
        description: 'Patentability analysis, provisional and complete specification drafting, and prior-art search consultation.',
        image: '/ipr-03-patent-new.jpg',
      },
      {
        name: 'Design Registration',
        description: 'Protection of unique industrial shapes, configurations, and surface patterns under the Designs Act 2000.',
        image: '/ipr-04-design.jpg',
      },
      {
        name: 'IPR Disputes & Enforcement',
        description: 'Cease-and-desist notices, filing suits for trademark infringement and passing off, Anton Piller ex-parte search orders, and damages.',
        image: '/ipr-05-enforcement.jpg',
      },
    ],
  },
  {
    slug: 'cyber-crime',
    title: 'Cyber Crime',
    category: 'DIGITAL LAW & ONLINE FRAUD',
    shortDesc: 'Decisive legal action and defense against financial cyber scams, data breach, extortion, and offences under the IT Act.',
    fullDesc:
      'With the exponential rise in digital transactions and online interactions, cyber offences require immediate legal intervention. Led by Advocate S. Kamalakar (with specialized MCA tech background), our firm guides victims and corporate defendants through cyber forensics, FIR registration, bank account freezes, and trial defense.',
    leadAdvocate: 'S. Kamalakar (B.B.M., M.C.A., LL.B.)',
    phone: '+916304856208',
    whatsappMessage: 'Hello Advocate Kamalakar, I need urgent legal counsel regarding Cyber Crime / Online Fraud.',
    iconType: 'document',
    courts: ['Cyber Crime Police Stations (Hyderabad, Cyberabad, Rachakonda)', 'Adjudicating Officer (IT Act)', 'Metropolitan Courts'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy',
      },
      card2: {
        src: '/advocate-lapels-neckband.jpg',
        alt: 'Advocate in High Court Robes and Neckband',
      },
      card3: {
        src: '/real-umamaheshwar-desk-criminal.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy at Cyber Defense Desk',
      },
      card4: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Online Fraud & Financial Crime',
        description: 'Immediate coordination with Cyber Police and banks to freeze fraudulent money transfers, phishing scams, and OTP fraud accounts.',
        image: '/cyber-01-online-fraud.jpg',
      },
      {
        name: 'Cyber Bullying & Harassment',
        description: 'Legal action against cyber stalking, identity theft, impersonation, defamatory posts, and offensive messaging under Sec 66D/67 IT Act.',
        image: '/cyber-02-bullying-harassment.jpg',
      },
      {
        name: 'Social Media Offences',
        description: 'Takedown requests, digital defamation suits, and filing FIRs against malicious social media profiles and forged content.',
        image: '/cyber-03-social-media.jpg',
      },
      {
        name: 'Data Theft & Privacy Breach',
        description: 'Prosecution and defense in corporate data exfiltration, source code theft, non-disclosure breaches, and unauthorized server intrusions.',
        image: '/cyber-04-data-theft.jpg',
      },
      {
        name: 'Cyber Complaints & Investigation',
        description: 'Drafting structured technical-legal complaints for the National Cyber Crime Portal and representing clients before investigating officers.',
        image: '/cyber-05-cyber-complaints.jpg',
      },
    ],
  },
  {
    slug: 'immigration',
    title: 'Immigration',
    category: 'VISA, OCI & GLOBAL MOBILITY',
    shortDesc: 'Comprehensive immigration advisory, OCI/PIO assistance, visa appeals, citizenship queries, and international travel documentation.',
    fullDesc:
      'UK Law Firm assists NRIs, international students, corporate transferees, and overseas citizens with complex Indian immigration formalities, visa rejections, OCI card disputes, and statutory documentation before the FRRO and Ministry of External Affairs.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+919866775034',
    whatsappMessage: 'Hello UK Law Firm, I need guidance regarding Immigration & OCI matters.',
    iconType: 'globe',
    courts: ['Telangana High Court (Writ Petitions)', 'FRRO Hyderabad', 'Ministry of Home Affairs'],
    heroImages: {
      card1: {
        src: '/about-inauguration.jpg',
        alt: 'Chambers Opening Ceremony',
      },
      card2: {
        src: '/hero-advocate-kamalakar-portrait.jpg',
        alt: 'Advocate S. Kamalakar',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy at Consultation Desk',
      },
      card4: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy — Chambers',
      },
    },
    subServices: [
      {
        name: 'Student Visa',
        description: 'Legal vetting of sponsorship agreements, financial affidavits, educational verification, and resolving student visa status queries.',
        image: '/immig-01-student-visa.jpg',
      },
      {
        name: 'OCI & PIO',
        description: 'Applications for Overseas Citizen of India (OCI) registration, resolving dual citizenship complexities, and restoration of canceled OCI cards.',
        image: '/immig-02-oci-pio.jpg',
      },
      {
        name: 'Work Visa & Employment',
        description: 'Employment visa legal compliance for foreign nationals working in India, FRRO registration, and tax residency declarations.',
        image: '/immig-03-work-visa.jpg',
      },
      {
        name: 'Citizenship Matters',
        description: 'Renunciation of Indian citizenship, registration under the Citizenship Act 1955, and challenging nationality determination orders.',
        image: '/immig-04-citizenship.jpg',
      },
      {
        name: 'Business Visa',
        description: 'Structuring documentation for foreign business visitors, cross-border commercial visits, and trade event legal permissions.',
        image: '/immig-05-business-visa.jpg',
      },
      {
        name: 'Legal Documentation & Advisory',
        description: 'Apostille certification, foreign document legalization, NRI power of attorney attestations, and statutory travel clearances.',
        image: '/immig-06-legal-docs.jpg',
      },
    ],
  },
  {
    slug: 'other-legal-services',
    title: 'Other Legal Services',
    category: 'ADVISORY & REPRESENTATION',
    shortDesc: 'Drafting of legal notices, registered wills, General Power of Attorney, legal opinions, and customized legal representation.',
    fullDesc:
      'In addition to courtroom litigation, UK Law Firm offers extensive preventive legal advisory, deed drafting, title search reports, and general statutory assistance tailored to individuals, families, and commercial entities.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+919866775034',
    whatsappMessage: 'Hello UK Law Firm, I need legal drafting and advisory services.',
    iconType: 'users',
    courts: ['Sub-Registrar Offices', 'Civil Courts', 'Telangana High Court'],
    heroImages: {
      card1: {
        src: '/real-partners-brass-lamp.jpg',
        alt: 'Founding Partners Beside Traditional Brass Lamp',
      },
      card2: {
        src: '/hero-advocate-kamalakar-library.jpg',
        alt: 'Advocate S. Kamalakar in Chambers Law Library',
      },
      card3: {
        src: '/real-umamaheshwar-bookshelf.jpg',
        alt: 'Senior Advocate Umamaheshwar Reddy in Legal Library',
      },
      card4: {
        src: '/hero-card-umamaheshwar.jpg',
        alt: 'Senior Advocate M. Umamaheshwar Reddy',
      },
    },
    subServices: [
      {
        name: 'Legal Notice Drafting',
        description: 'Formulation and issuance of stern statutory legal notices for contract breaches, unpaid debts, civil trespass, and defamation.',
        image: '/other-01-legal-notice.jpg',
      },
      {
        name: 'Power of Attorney',
        description: 'Drafting, adjudication, and registration of General Power of Attorney (GPA) and Special Power of Attorney (SPA) for NRIs and local owners.',
        image: '/other-02-power-of-attorney.jpg',
      },
      {
        name: 'Agreement & Contract Drafting',
        description: 'Custom formulation of partnership deeds, memorandum of understanding (MOU), settlement deeds, gift deeds, and release deeds.',
        image: '/other-03-agreement-drafting.jpg',
      },
      {
        name: 'Legal Opinion & Advisory',
        description: 'Comprehensive title search reports (30-year search), legal opinions on agricultural/commercial land titles, and litigation risk audits.',
        image: '/other-04-legal-opinion-new.jpg',
      },
      {
        name: 'Will, Inheritance & Succession',
        description: 'Drafting and registering bulletproof Wills, codicils, succession certificates, letters of administration, and probate proceedings.',
        image: '/other-05-will-succession.jpg',
      },
      {
        name: 'Any Other Legal Matter',
        description: 'Bespoke representation for unique legal challenges across administrative authorities, government revenue offices, and statutory bodies.',
        image: '/other-06-other-matters.jpg',
      },
    ],
  },
];
