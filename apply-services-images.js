const fs = require('fs');
const path = require('path');

const SERVICES_FILE = path.join(__dirname, 'data', 'services.ts');
let code = fs.readFileSync(SERVICES_FILE, 'utf8');

// Mapping of service slug to subservice image assignments
const mapping = {
  'criminal-law': [
    ['Bail & Anticipatory Bail', '/crim-01-bail.jpg'],
    ['Cheque Bounce Cases', '/crim-02-cheque.jpg'],
    ['Police Complaints & Investigation', '/crim-03-police.jpg'],
    ['Criminal Trials & Appeals', '/crim-04-trials.jpg'],
    ['NDPS, POCSO, Cyber Crime', '/crim-05-ndps.jpg'],
    ['White Collar & Economic Offences', '/crim-06-white-collar.jpg'],
  ],
  'civil-law': [
    ['Civil Suits & Decrees', '/civil-01-suits.jpg'],
    ['Partition & Title Disputes', '/civil-02-partition.jpg'],
    ['Specific Performance', '/civil-03-specific-performance.jpg'],
    ['Injunctions & Stay Orders', '/civil-04-injunctions.jpg'],
    ['Recovery Suits', '/civil-05-recovery.jpg'],
    ['Consumer, Trespass & Other Civil Matters', '/civil-06-trespass.jpg'],
  ],
  'family-law': [
    ['Divorce (Mutual & Contested)', '/fam-01-divorce.jpg'],
    ['Maintenance / Alimony', '/fam-02-alimony.jpg'],
    ['Domestic Violence (DV Act)', '/fam-03-domestic-violence.jpg'],
    ['Child Custody & Visitation Rights', '/fam-04-child-custody.jpg'],
    ['Restitution of Conjugal Rights', '/fam-05-conjugal.jpg'],
    ['Matrimonial Disputes', '/fam-06-matrimonial.jpg'],
  ],
  'tribunals-and-forums': [
    ['NCLT, NCLAT & IBC Matters', '/trib-01-nclt.jpg'],
    ['Motor Accident Claims (MACT)', '/trib-02-mact.jpg'],
    ['Consumer Disputes Forum', '/trib-03-consumer.jpg'],
    ['RERA – Real Estate Matters', '/trib-04-rera.jpg'],
    ['GST, Income Tax & Other Tribunals', '/trib-05-itat.jpg'],
    ['Service Matters & CAT', '/trib-06-cat.jpg'],
  ],
  'taxation-and-it-law': [
    ['Income Tax Matters', '/tax-01-income-tax.jpg'],
    ['GST Registration & Disputes', '/tax-02-gst-disputes.jpg'],
    ['Tax Appeals & Assessments', '/tax-03-appeals-itat.jpg'],
    ['TDS, PAN & Compliance', '/tax-04-tds-pan.jpg'],
    ['IT Act & Cyber Law', '/tax-05-cyber-it-law.jpg'],
    ['E-commerce & Digital Business', '/tax-06-ecommerce-business.jpg'],
  ],
  'rera-and-builder-buyer': [
    ['RERA Complaints', '/rera-01-complaints.jpg'],
    ['Builder - Buyer Disputes', '/rera-02-builder-disputes.jpg'],
    ['Delay in Possession', '/rera-03-delay-possession.jpg'],
    ['Refund & Compensation', '/rera-04-refund-compensation.jpg'],
    ['Agreement & Project Related Issues', '/rera-05-agreement-project.jpg'],
  ],
  'landlord-and-tenant': [
    ['Eviction & Possession', '/tenant-01-eviction.jpg'],
    ['Rental Agreements', '/tenant-02-rental-agreements.jpg'],
    ['Disputes between Landlord & Tenant', '/tenant-03-landlord-disputes.jpg'],
    ['Lease Deed & Renewal', '/tenant-04-lease-deed.jpg'],
    ['Commercial & Residential Premises', '/tenant-05-premises-hyderabad.jpg'],
  ],
  'labour-and-employment': [
    ['Employee Rights & Service Matters', '/labour-01-employee-rights.jpg'],
    ['Wrongful Termination', '/labour-02-wrongful-termination.jpg'],
    ['Industrial Disputes', '/labour-03-industrial-disputes.jpg'],
    ['EPF, ESI & Labour Law Compliance', '/labour-04-epf-esi.jpg'],
    ['Standing Orders & HR Policies', '/labour-05-standing-orders.jpg'],
  ],
  'consumer-protection': [
    ['Defective Goods & Services', '/consumer-01-defective-goods.jpg'],
    ['Refund & Replacement', '/consumer-02-refund-replacement.jpg'],
    ['Deficiency in Service', '/consumer-03-deficiency-service.jpg'],
    ['E-commerce Consumer Issues', '/consumer-04-ecommerce-issues.jpg'],
    ['Filing Complaints & Representation', '/consumer-05-filing-complaints.jpg'],
  ],
  'corporate-and-commercial': [
    ['Company Incorporation', '/corp-01-incorporation.jpg'],
    ['MOU, Shareholders Agreements', '/corp-02-mou-shareholders.jpg'],
    ['Business Contracts & Legal Due Diligence', '/corp-03-contracts-due-diligence.jpg'],
    ['Commercial Disputes', '/corp-04-commercial-disputes.jpg'],
    ['Start-up Legal Support', '/corp-05-startup-support.jpg'],
  ],
  'intellectual-property': [
    ['Trademark Registration & Opposition', '/ipr-01-trademark.jpg'],
    ['Copyright Protection', '/ipr-02-copyright.jpg'],
    ['Patent Filing & Advisory', '/ipr-03-patent.jpg'],
    ['Design Registration', '/ipr-04-design.jpg'],
    ['IPR Disputes & Enforcement', '/ipr-05-enforcement.jpg'],
  ],
  'cyber-crime': [
    ['Online Fraud & Financial Crime', '/cyber-01-online-fraud.jpg'],
    ['Cyber Bullying & Harassment', '/cyber-02-bullying-harassment.jpg'],
    ['Social Media Offences', '/cyber-03-social-media.jpg'],
    ['Data Theft & Privacy Breach', '/cyber-04-data-theft.jpg'],
    ['Cyber Complaints & Investigation', '/cyber-05-cyber-complaints.jpg'],
  ],
  'immigration': [
    ['Student Visa', '/immig-01-student-visa.jpg'],
    ['OCI & PIO', '/immig-02-oci-pio.jpg'],
    ['Work Visa & Employment', '/immig-03-work-visa.jpg'],
    ['Citizenship Matters', '/immig-04-citizenship.jpg'],
    ['Business Visa', '/immig-05-business-visa.jpg'],
    ['Legal Documentation & Advisory', '/immig-06-legal-docs.jpg'],
  ],
  'other-legal-services': [
    ['Legal Notice Drafting', '/other-01-legal-notice.jpg'],
    ['Power of Attorney', '/other-02-power-of-attorney.jpg'],
    ['Agreement & Contract Drafting', '/other-03-agreement-drafting.jpg'],
    ['Legal Opinion & Advisory', '/other-04-legal-opinion.jpg'],
    ['Will, Inheritance & Succession', '/other-05-will-succession.jpg'],
    ['Any Other Legal Matter', '/other-06-other-matters.jpg'],
  ],
};

// Update each subservice in the code
for (const [slug, subList] of Object.entries(mapping)) {
  for (const [subName, imgPath] of subList) {
    // Look for name: 'subName', followed by optional existing image or description
    const regex = new RegExp(`(name:\\s*['"]${escapeRegex(subName)}['"],\\s*\\n\\s*description:\\s*['"][^'"]*['"])(?:,\\s*\\n\\s*image:\\s*['"][^'"]*['"])?`, 'g');
    if (regex.test(code)) {
      code = code.replace(regex, `$1,\n        image: '${imgPath}'`);
      console.log(`[UPDATED] ${slug} -> ${subName} -> ${imgPath}`);
    } else {
      console.warn(`[NOT FOUND] ${slug} -> ${subName}`);
    }
  }
}

// Update getSubServiceImage function to never return headless suit or foreign boardroom
const updatedGetSubServiceImage = `export function getSubServiceImage(subName: string, serviceSlug: string): string {
  const lower = subName.toLowerCase();
  
  // Specific criminal subservice mappings
  if (lower.includes('bail')) return '/crim-01-bail.jpg';
  if (lower.includes('cheque') || lower.includes('138')) return '/crim-02-cheque.jpg';
  if (lower.includes('police') || lower.includes('fir') || lower.includes('investigation') || lower.includes('inquiry')) return '/crim-03-police.jpg';
  if (lower.includes('trial')) return '/crim-04-trials.jpg';
  if (lower.includes('cyber') || lower.includes('ndps') || lower.includes('pocso')) return '/crim-05-ndps.jpg';
  if (lower.includes('white collar') || lower.includes('economic') || lower.includes('cbi') || lower.includes('pmla')) return '/crim-06-white-collar.jpg';
  
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
  if (lower.includes('nclt') || lower.includes('ibc')) return '/trib-01-nclt.jpg';
  if (lower.includes('mact') || lower.includes('motor')) return '/trib-02-mact.jpg';
  if (lower.includes('consumer forum')) return '/trib-03-consumer.jpg';
  if (lower.includes('cat') || lower.includes('service matters')) return '/trib-06-cat.jpg';

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
}`;

const fnRegex = /export function getSubServiceImage[\s\S]*?^}/m;
if (fnRegex.test(code)) {
  code = code.replace(fnRegex, updatedGetSubServiceImage);
  console.log('[SUCCESS] Replaced getSubServiceImage function');
} else {
  console.warn('[WARNING] Could not find getSubServiceImage function to replace');
}

fs.writeFileSync(SERVICES_FILE, code, 'utf8');
console.log('[COMPLETED] Updated services.ts with all subservice images!');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

