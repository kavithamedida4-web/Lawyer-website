export interface SubService {
  name: string;
  description: string;
  image?: string;
}

export function getSubServiceImage(subName: string): string {
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
  if (lower.includes('appeal') || lower.includes('itat')) return '/tax-03-appeals-itat-v3.jpg';
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
  if (lower.includes('design')) return '/ipr-04-design-v3.jpg';

  // Immigration
  if (lower.includes('student visa')) return '/immig-01-student-visa-v2.jpg';
  if (lower.includes('oci') || lower.includes('pio')) return '/immig-02-oci-pio-v2.jpg';
  if (lower.includes('work visa')) return '/immig-03-work-visa.jpg';
  if (lower.includes('citizenship')) return '/immig-04-citizenship.jpg';
  if (lower.includes('business visa')) return '/immig-05-business-visa.jpg';

  // Other legal
  if (lower.includes('legal notice')) return '/other-01-legal-notice.jpg';
  if (lower.includes('power of attorney')) return '/other-02-power-of-attorney.jpg';
  if (lower.includes('will') || lower.includes('succession')) return '/other-05-will-succession.jpg';

  // Safe fallback to our framed Advocate M. Umamaheshwar Reddy in courtroom
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
    title: 'Criminal Defence',
    category: 'BAIL, TRIAL COURT & SPECIAL COURTS',
    shortDesc: 'Legal help for bail, anticipatory bail, police cases, cheque bounce, and court trials.',
    fullDesc:
      'UK Law Firm helps you with criminal cases in Hyderabad and Telangana. Our Advocates handle bail applications, anticipatory bail, quashing of FIRs, cheque bounce cases, and trial court hearings with clear guidance at every step.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Kamalakar, I need urgent legal counsel regarding Criminal Law / Bail.',
    iconType: 'scales',
    courts: ['High Court for the State of Telangana', 'Metropolitan Sessions Courts', 'Special CBI & ACB Courts', 'Chief Metropolitan Magistrate Courts'],
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
        alt: 'Advocate M. Umamaheshwar Reddy at Criminal Practice Desk',
      },
      card4: {
        src: '/real-partners-brass-lamp.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Bail & Anticipatory Bail',
        description: 'Filing and representation for Anticipatory Bail and Regular Bail applications before Sessions Courts and the High Court.',
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
        description: 'Complete representation during court trials, questioning witnesses, and filing criminal appeals.',
        image: '/criminal-04-trials.jpg',
      },
      {
        name: 'NDPS, POCSO, Cyber Crime',
        description: 'Dedicated defense for drug-related cases (NDPS), POCSO matters, and online cyber fraud.',
        image: '/criminal-05-ndps-cyber.jpg',
      },
      {
        name: 'White Collar & Economic Offences',
        description: 'Legal representation and defense in business fraud, cheating offences under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) (erstwhile Section 420 IPC), and financial investigations.',
        image: '/criminal-06-white-collar.jpg',
      },
    ],
  },
  {
    slug: 'civil-law',
    title: 'Civil Litigation',
    category: 'PROPERTY, CONTRACTS & RIGHTS',
    shortDesc: 'Legal help for property disputes, land partition, stay orders, agreements, and money recovery.',
    fullDesc:
      'Our advocates handle property and land disputes, partition of family property, stay orders (injunctions), sale agreement issues, and money recovery cases across civil courts and the High Court.',
    leadAdvocate: 'M. Umamaheshwar Reddy',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Umamaheshwar Reddy, I would like to consult regarding a Civil Law matter.',
    iconType: 'document',
    courts: ['High Court for the State of Telangana', 'City Civil Courts', 'Senior Civil Judge Courts', 'Junior Civil Judge Courts'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy in Formal Court Suit',
      },
      card2: {
        src: '/hero-advocate-kamalakar-portrait.jpg',
        alt: 'Advocate S. Kamalakar — Executive Consultation',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy at Civil Practice Desk',
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
        description: 'Filing applications for interim injunctions and stay orders before civil courts in matters involving unauthorized construction or property encroachment.',
        image: '/civil-04-injunctions.jpg',
      },
      {
        name: 'Recovery Suits',
        description: 'Summary suits under Order 37 CPC, money recovery from business debtors, breach of loan agreements, and attachment of properties before judgment.',
        image: '/civil-05-recovery.jpg',
      },
      {
        name: 'Consumer, Trespass & Other Civil Matters',
        description: 'Legal action against illegal land entry, boundary disputes, and property damages.',
        image: '/civil-06-trespass.jpg',
      },
    ],
  },
  {
    slug: 'family-law',
    title: 'Family and Matrimonial Matters',
    category: 'MARRIAGE, DIVORCE & RELATIONSHIPS',
    shortDesc: 'Help with divorce, child custody, maintenance, and family property settlements.',
    fullDesc:
      'We guide you through sensitive family and marriage matters with care and complete privacy. Our advocates help with mutual divorce, contested divorce, child custody, monthly maintenance, and settlement of disputes.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+918897847788',
    whatsappMessage: 'Hello UK Law Firm, I seek legal guidance regarding Family / Matrimonial Law.',
    iconType: 'family',
    courts: ['Family Courts (Hyderabad & Secunderabad)', 'High Court for the State of Telangana', 'Metropolitan Magistrate Courts'],
    heroImages: {
      card1: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners UK Law Firm Chambers',
      },
      card2: {
        src: '/real-umamaheshwar-desk-reading.jpg',
        alt: 'Advocate Umamaheshwar Reddy Reviewing Case Briefs',
      },
      card3: {
        src: '/hero-advocate-kamalakar-library.jpg',
        alt: 'Advocate S. Kamalakar in Chambers Law Library',
      },
      card4: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy — Chambers',
      },
    },
    subServices: [
      {
        name: 'Divorce (Mutual & Contested)',
        description: 'Filing mutual consent divorce petitions, or representing clients in contested divorce proceedings before Family Courts.',
        image: '/fam-01-divorce.jpg',
      },
      {
        name: 'Maintenance / Alimony',
        description: 'Maintenance applications under Section 144 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) (erstwhile Section 125 CrPC) and Section 24 of the Hindu Marriage Act, 1955, permanent alimony, and child support matters.',
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
        description: 'Matrimonial cruelty and dowry-related proceedings under Section 85 of the Bharatiya Nyaya Sanhita, 2023 (BNS) (erstwhile Section 498A IPC), stridhan recovery, and mediated family settlements.',
        image: '/fam-06-matrimonial.jpg',
      },
    ],
  },
  {
    slug: 'tribunals-and-forums',
    title: 'Tribunals & Statutory Forums',
    category: 'SPECIALISED REPRESENTATION',
    shortDesc: 'Representation before NCLT, Consumer Commissions, MACT, REAT, Tax Tribunals, and CAT.',
    fullDesc:
      'We represent clients before specialized tribunals and statutory forums in Hyderabad, including the National Company Law Tribunal (NCLT), Consumer Commissions, Motor Accident Claims Tribunal (MACT), Telangana Real Estate Appellate Tribunal (REAT), tax appellate tribunals (ITAT/CESTAT), and Central Administrative Tribunal (CAT).',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Kamalakar, I need legal representation before a Tribunal / Forum.',
    iconType: 'tribunal',
    courts: ['NCLT Hyderabad Bench', 'NCLAT', 'Telangana Real Estate Appellate Tribunal (REAT)', 'State & National Consumer Disputes Redressal Commission', 'MACT Courts'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-bookshelf.jpg',
        alt: 'Advocate Umamaheshwar Reddy in Law Library',
      },
      card2: {
        src: '/advocate-lapels-neckband.jpg',
        alt: 'UK Law Firm Advocate in Official Court Robes and Neckband',
      },
      card3: {
        src: '/real-umamaheshwar-desk-criminal.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy at Briefing Desk',
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
        description: 'Filing and pursuing compensation claims before Motor Accident Claims Tribunals for road accident injuries or fatal accidents.',
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
    shortDesc: 'Legal advice for income tax notices, GST disputes, tax appeals, and IT compliance.',
    fullDesc:
      'We help individuals, traders, and companies reply to income tax notices, resolve GST disputes, file tax appeals, and follow digital business laws.',
    leadAdvocate: 'S. Kamalakar (B.B.M., M.C.A., LL.B.)',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Kamalakar, I need consultation on Taxation & IT Law.',
    iconType: 'taxation',
    courts: ['High Court for the State of Telangana (Tax Benches)', 'ITAT Hyderabad', 'GST Appellate Authorities', 'Adjudicating Officer (IT Act)'],
    heroImages: {
      card1: {
        src: '/hero-card-umamaheshwar.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy',
      },
      card2: {
        src: '/kamalakar-desk-justice.jpg',
        alt: 'Advocate S. Kamalakar at Chambers Desk',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy at Executive Desk',
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
        image: '/tax-03-appeals-itat-v3.jpg',
      },
      {
        name: 'TDS, PAN & Compliance',
        description: 'Legal vetting of withholding tax liabilities, prosecution notices under Section 276B, and penalty waiver petitions.',
        image: '/tax-04-tds-pan.jpg',
      },
      {
        name: 'IT Act & Cyber Law',
        description: 'Advisory on intermediary liability, data protection, admissibility of electronic records under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), and cyber compliance.',
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
    title: 'Property and Real Estate Matters',
    category: 'REAL ESTATE LAW',
    shortDesc: 'Legal help for homebuyers facing delayed possession, builder disputes, and refund claims.',
    fullDesc:
      'If your builder delayed handing over your flat, changed building plans without permission, or refused to refund your money, our advocates file complaints before TSRERA to get your flat, interest, or compensation.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+918897847788',
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
        alt: 'Advocate M. Umamaheshwar Reddy before Law & Justice Wall',
      },
      card3: {
        src: '/real-umamaheshwar-desk-reading.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy Analyzing Builder Contracts',
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
        description: 'Filing claims before RERA authorities for statutory interest on delayed handover of residential and commercial apartments.',
        image: '/rera-03-delay-possession.jpg',
      },
      {
        name: 'Refund & Compensation',
        description: 'Pursuing refund, statutory interest, and compensation claims before RERA authorities in cases of project abandonment or prolonged delay.',
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
    shortDesc: 'Drafting rental agreements, eviction of non-paying tenants, and resolving rent disputes.',
    fullDesc:
      'We help property owners and tenants with clear rental and lease agreements, getting delayed rent paid, vacating tenants who refuse to leave, and protecting property rights.',
    leadAdvocate: 'M. Umamaheshwar Reddy',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Umamaheshwar Reddy, I need legal help regarding Landlord & Tenant law.',
    iconType: 'briefcase',
    courts: ['Rent Control Courts', 'City Civil Courts', 'High Court for the State of Telangana'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-bookshelf.jpg',
        alt: 'Advocate Umamaheshwar Reddy Reviewing Tenancy Treatises',
      },
      card2: {
        src: '/real-kamalakar-standing-coat.jpg',
        alt: 'Advocate S. Kamalakar in Courtroom Attire',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy at Consultation Desk',
      },
      card4: {
        src: '/real-partners-brass-lamp.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Eviction & Possession',
        description: 'Filing court cases to evict tenants for non-payment of rent, lease expiry, or personal property use.',
        image: '/tenant-01-eviction.jpg',
      },
      {
        name: 'Rental Agreements',
        description: 'Drafting clear commercial and residential rent agreements with fair terms for both sides.',
        image: '/tenant-02-rental-agreements.jpg',
      },
      {
        name: 'Disputes between Landlord & Tenant',
        description: 'Resolution of conflicts concerning maintenance charges, structural repairs, security deposit withholding, and arbitrary rent hikes.',
        image: '/tenant-03-landlord-disputes-v3.jpg',
      },
      {
        name: 'Lease Deed & Renewal',
        description: 'Structuring renewal options, notices of termination, peaceful handover protocols, and forfeiture notices for covenant violations.',
        image: '/tenant-04-lease-deed.jpg',
      },
      {
        name: 'Commercial & Residential Premises',
        description: 'Legal action to recover unpaid rent and clear possession of commercial shops, offices, and homes.',
        image: '/tenant-05-premises-hyderabad.jpg',
      },
    ],
  },
  {
    slug: 'labour-and-employment',
    title: 'Labour and Employment Matters',
    category: 'WORKPLACE LAW',
    shortDesc: 'Legal help for employment contracts, wrongful termination, unpaid salary, and workplace disputes.',
    fullDesc:
      'We advise employees and employers on job contracts, wrongful firing, unpaid wages, notice period disputes, POSH rules, and labour court proceedings.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Kamalakar, I need counsel regarding Labour & Employment law.',
    iconType: 'workplace',
    courts: ['Labour Courts & Industrial Tribunals', 'High Court for the State of Telangana (Writ Benches)', 'Labour Commissioner Offices'],
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
        alt: 'Advocate Umamaheshwar Reddy Reviewing Employment Briefs',
      },
      card4: {
        src: '/hero-card-umamaheshwar.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy',
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
    title: 'Consumer Disputes',
    category: 'CONSUMER DISPUTES FORUM',
    shortDesc: 'Filing court cases for defective products, poor services, and getting refunds and compensation.',
    fullDesc:
      'If a company sold you a defective product, an insurance company rejected your genuine claim, or a hospital/airline gave poor service, we file cases in Consumer Court to get you compensation.',
    leadAdvocate: 'M. Umamaheshwar Reddy',
    phone: '+918897847788',
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
        alt: 'Advocate M. Umamaheshwar Reddy',
      },
      card3: {
        src: '/real-umamaheshwar-desk-smiling.jpg',
        alt: 'Advocate Umamaheshwar Reddy at Consultation Desk',
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
        description: 'Filing consumer complaints seeking refund, replacement, or compensation for defective goods, vehicles, or appliances.',
        image: '/consumer-02-refund-replacement.jpg',
      },
      {
        name: 'Deficiency in Service',
        description: 'Taking legal action against banks, insurance firms, travel companies, and builders for poor service.',
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
        image: '/service-consumer.jpg',
      },
    ],
  },
  {
    slug: 'corporate-and-commercial',
    title: 'Business and Commercial Matters',
    category: 'BUSINESS, CONTRACTS & STRUCTURE',
    shortDesc: 'Company registration, partner agreements, contract drafting, and business dispute resolution.',
    fullDesc:
      'We help startups, business owners, and companies register new businesses, draft agreements between partners, prepare client contracts, and resolve business disputes.',
    leadAdvocate: 'S. Kamalakar (B.B.M., M.C.A., LL.B.)',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Kamalakar, I would like to consult on Corporate & Commercial Law.',
    iconType: 'corporate',
    courts: ['High Court for the State of Telangana (Commercial Benches)', 'Commercial Courts (City Civil Court)', 'NCLT Hyderabad'],
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
        alt: 'Advocate M. Umamaheshwar Reddy Analyzing Corporate Agreements',
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
        description: 'Commercial litigation before designated Commercial Courts, statutory pre-institution mediation, and applications for interim relief.',
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
    shortDesc: 'Registering trademarks, logos, brand names, copyrights, and patents to protect your work.',
    fullDesc:
      'We help businesses and individuals protect their brand names, logos, inventions, and creative work by registering trademarks, copyrights, and patents, and taking legal action if someone copies them.',
    leadAdvocate: 'S. Kamalakar & M. Umamaheshwar Reddy',
    phone: '+918897847788',
    whatsappMessage: 'Hello UK Law Firm, I need consultation on Intellectual Property (IPR).',
    iconType: 'bulb',
    courts: ['Intellectual Property Division (High Court for the State of Telangana)', 'Trade Marks Registry (Chennai)', 'Copyright Office'],
    heroImages: {
      card1: {
        src: '/ipr-hero-kamalakar-library.jpg',
        alt: 'Advocate S. Kamalakar Reviewing IP Treatises in Law Library',
      },
      card2: {
        src: '/ipr-hero-umamaheshwar-standing.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy in Formal Court Attire',
      },
      card3: {
        src: '/ipr-hero-umamaheshwar-desk.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy at Consultation Desk',
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
        image: '/ipr-04-design-v3.jpg',
      },
      {
        name: 'IPR Disputes & Enforcement',
        description: 'Sending legal notices and filing court cases against people or companies who copy your brand.',
        image: '/ipr-05-enforcement.jpg',
      },
    ],
  },
  {
    slug: 'cyber-crime',
    title: 'Cyber Crime',
    category: 'DIGITAL LAW & ONLINE FRAUD',
    shortDesc: 'Legal help for online bank fraud, social media harassment, identity theft, and hacking.',
    fullDesc:
      'If you lost money in an online scam, had your social media hacked, or face online harassment, our advocates help you file complaints with the Cyber Crime Police and take legal action.',
    leadAdvocate: 'S. Kamalakar (B.B.M., M.C.A., LL.B.)',
    phone: '+918897847788',
    whatsappMessage: 'Hello Advocate Kamalakar, I need urgent legal counsel regarding Cyber Crime / Online Fraud.',
    iconType: 'document',
    courts: ['Cyber Crime Police Stations (Hyderabad, Cyberabad, Rachakonda)', 'Adjudicating Officer (IT Act)', 'Metropolitan Courts'],
    heroImages: {
      card1: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy',
      },
      card2: {
        src: '/advocate-lapels-neckband.jpg',
        alt: 'Advocate in High Court Robes and Neckband',
      },
      card3: {
        src: '/real-umamaheshwar-desk-criminal.jpg',
        alt: 'Advocate Umamaheshwar Reddy at Cyber Defense Desk',
      },
      card4: {
        src: '/hero-partners-uk-law-firm.jpg',
        alt: 'Founding Partners UK Law Firm',
      },
    },
    subServices: [
      {
        name: 'Online Fraud & Financial Crime',
        description: 'Helping freeze stolen funds, reporting UPI and bank fraud, and filing police complaints.',
        image: '/cyber-01-online-fraud.jpg',
      },
      {
        name: 'Cyber Bullying & Harassment',
        description: 'Legal action against cyber stalking, identity theft, impersonation, defamatory posts, and offensive messaging.',
        image: '/cyber-02-bullying-harassment.jpg',
      },
      {
        name: 'Social Media Offences',
        description: 'Taking down fake accounts, digital defamation suits, and filing FIRs against online abusers.',
        image: '/cyber-03-social-media.jpg',
      },
      {
        name: 'Data Theft & Privacy Breach',
        description: 'Legal action against corporate data theft, source code copying, and hacking.',
        image: '/cyber-04-data-theft.jpg',
      },
      {
        name: 'Cyber Complaints & Investigation',
        description: 'Drafting clear technical complaints for the National Cyber Crime Portal and following up with police.',
        image: '/cyber-05-cyber-complaints.jpg',
      },
    ],
  },
  {
    slug: 'immigration',
    title: 'Immigration',
    category: 'VISA, OCI & GLOBAL MOBILITY',
    shortDesc: 'Legal guidance for student visas, work visas, OCI cards, visa rejections, and travel documents.',
    fullDesc:
      'We help students, professionals, and families with visa application documents, OCI cards, appealing rejected visas, and clearing immigration legal issues.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+918897847788',
    whatsappMessage: 'Hello UK Law Firm, I need guidance regarding Immigration & OCI matters.',
    iconType: 'globe',
    courts: ['High Court for the State of Telangana (Writ Petitions)', 'FRRO Hyderabad', 'Ministry of Home Affairs'],
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
        alt: 'Advocate M. Umamaheshwar Reddy at Consultation Desk',
      },
      card4: {
        src: '/real-umamaheshwar-standing-suit.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy — Chambers',
      },
    },
    subServices: [
      {
        name: 'Student Visa',
        description: 'Legal vetting of sponsorship agreements, financial affidavits, educational verification, and resolving student visa status queries.',
        image: '/immig-01-student-visa-v2.jpg',
      },
      {
        name: 'OCI & PIO',
        description: 'Applications for Overseas Citizen of India (OCI) registration, resolving dual citizenship complexities, and restoration of canceled OCI cards.',
        image: '/immig-02-oci-pio-v2.jpg',
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
    title: 'Documentation and Legal Notices',
    category: 'ADVISORY & REPRESENTATION',
    shortDesc: 'Drafting legal notices, registered wills, Power of Attorney (GPA), and property legal opinions.',
    fullDesc:
      'We prepare essential legal documents including legal notices, registered wills, General Power of Attorney (GPA), gift deeds, and written property title check opinions before you buy real estate.',
    leadAdvocate: 'M. Umamaheshwar Reddy & S. Kamalakar',
    phone: '+918897847788',
    whatsappMessage: 'Hello UK Law Firm, I need legal drafting and advisory services.',
    iconType: 'users',
    courts: ['Sub-Registrar Offices', 'Civil Courts', 'High Court for the State of Telangana'],
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
        alt: 'Advocate Umamaheshwar Reddy in Legal Library',
      },
      card4: {
        src: '/hero-card-umamaheshwar.jpg',
        alt: 'Advocate M. Umamaheshwar Reddy',
      },
    },
    subServices: [
      {
        name: 'Legal Notice Drafting',
        description: 'Drafting and issuing formal legal notices, as well as preparing structured legal replies to notices received.',
        image: '/other-01-legal-notice.jpg',
      },
      {
        name: 'Power of Attorney',
        description: 'Drafting and registering General Power of Attorney (GPA) and Special Power of Attorney (SPA) for property and business use.',
        image: '/other-02-power-of-attorney.jpg',
      },
      {
        name: 'Agreement & Contract Drafting',
        description: 'Preparing partnership deeds, MOUs, settlement deeds, gift deeds, and property release deeds.',
        image: '/other-03-agreement-drafting.jpg',
      },
      {
        name: 'Legal Opinion & Advisory',
        description: 'Checking 30-year property link documents to verify clear title before you buy land or flats.',
        image: '/other-04-legal-opinion-new.jpg',
      },
      {
        name: 'Will, Inheritance & Succession',
        description: 'Drafting and registration of wills and testamentary instruments to record your intended succession of property.',
        image: '/other-05-will-succession.jpg',
      },
      {
        name: 'Any Other Legal Matter',
        description: 'Legal help for unique challenges before revenue offices, municipal bodies, and government departments.',
        image: '/other-06-other-matters.jpg',
      },
    ],
  },
];
