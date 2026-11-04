const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BRAIN_DIR = 'C:/Users/Medida Kavitha/.gemini/antigravity/brain/2605a149-06fe-4d67-8a3b-6fa4868896d5';
const UPLOAD_DIR = path.join(BRAIN_DIR, '.user_uploaded');
const PUBLIC_DIR = path.join(__dirname, 'public');

// Base source assets in BRAIN_DIR
const ASSETS = {
  bail: path.join(BRAIN_DIR, 'subservice_bail_1793766503991.jpg'),
  cheque: path.join(BRAIN_DIR, 'subservice_cheque_bounce_1793766525185.jpg'),
  police: path.join(BRAIN_DIR, 'subservice_police_investigation_179366548234.jpg') || path.join(BRAIN_DIR, 'subservice_police_investigation_1793766548234.jpg'),
  police_alt: path.join(BRAIN_DIR, 'subservice_police_investigation_1793766548234.jpg'),
  trial: path.join(BRAIN_DIR, 'subservice_criminal_trial_1793768117492.jpg'),
  ndps: path.join(BRAIN_DIR, 'subservice_ndps_cyber_1793766547972.jpg'),
  white_collar: path.join(BRAIN_DIR, 'subservice_white_collar_1793766570345.jpg'),
  divorce: path.join(BRAIN_DIR, 'subservice_divorce_1793767049535.jpg'),
  alimony: path.join(BRAIN_DIR, 'subservice_alimony_1793767070487.jpg'),
  domestic_violence: path.join(BRAIN_DIR, 'subservice_domestic_violence_1793767094339.jpg'),
  child_custody: path.join(BRAIN_DIR, 'subservice_child_custody_1793767057458.jpg'),
  conjugal: path.join(BRAIN_DIR, 'subservice_restitution_conjugal_1793767079052.jpg'),
  matrimonial: path.join(BRAIN_DIR, 'subservice_matrimonial_disputes_1793767101624.jpg'),
  civil_dossier: path.join(BRAIN_DIR, 'service_civil_1793603424159.jpg'),
  property_deed: path.join(BRAIN_DIR, 'service_property_1793603625028.jpg'),
  criminal_code: path.join(BRAIN_DIR, 'service_criminal_1793603406512.jpg'),
  supreme_court: path.join(BRAIN_DIR, 'indian_supreme_court_hero_1793601787413.jpg'),
  lady_justice: path.join(BRAIN_DIR, 'lady_justice_hero_1793601167342.jpg'),
  gavel_wooden: path.join(BRAIN_DIR, 'services_hero_gavel_bg_1793707294574.jpg'),
  gavel_book: path.join(BRAIN_DIR, 'services_hero_gavel_book_navy_1793707346712.jpg'),
  gavel_navy: path.join(BRAIN_DIR, 'services_hero_gavel_navy_bg_1793707322485.jpg'),
  hitec_city: path.join(PUBLIC_DIR, 'test-hitech.jpg'),
  blueprint: path.join(PUBLIC_DIR, 'test-blueprint.jpg'),
  
  // Lawyer authentic assets
  kamalakar_portrait: path.join(UPLOAD_DIR, 'media_1793767983438_0d3a6316.jpg'),
  kamalakar_crest: path.join(PUBLIC_DIR, 'advocate-standing-crest.jpg'),
  umamaheshwar_court: path.join(PUBLIC_DIR, 'subservice-senior-advocate.jpg'),
  umamaheshwar_bookshelf: path.join(PUBLIC_DIR, 'advocate-reading-bookshelf.jpg'),
  umamaheshwar_desk: path.join(PUBLIC_DIR, 'advocate-reading-procedure-desk.jpg'),
  
  // Chambers & Offices
  exec_desk: path.join(PUBLIC_DIR, 'chambers-executive-desk.jpg'),
  lounge: path.join(PUBLIC_DIR, 'chambers-client-lounge.jpg'),
  conf_room: path.join(PUBLIC_DIR, 'chambers-conference-room.jpg'),
};

// Verify all source assets exist
console.log('Verifying source assets...');
for (const [key, p] of Object.entries(ASSETS)) {
  if (!fs.existsSync(p)) {
    console.warn(`WARNING: Missing asset [${key}]: ${p}`);
  } else {
    console.log(`  [OK] ${key} -> ${path.basename(p)} (${fs.statSync(p).size} bytes)`);
  }
}

// Function to generate 800x480 card with calibrated parameters
async function makeCard(srcPath, outName, opts = {}) {
  const outPath = path.join(PUBLIC_DIR, outName);
  const {
    position = 'center',
    extract = null,
    brightness = 1.0,
    saturation = 1.0,
    tint = null,
    quality = 90
  } = opts;

  let pipeline = sharp(srcPath);

  if (extract) {
    pipeline = pipeline.extract(extract);
  }

  pipeline = pipeline.resize(800, 480, {
    fit: 'cover',
    position: position
  });

  if (brightness !== 1.0 || saturation !== 1.0) {
    pipeline = pipeline.modulate({ brightness, saturation });
  }

  if (tint) {
    pipeline = pipeline.tint(tint);
  }

  await pipeline.jpeg({ quality, progressive: true }).toFile(outPath);
  console.log(`Generated: ${outName}`);
}

async function run() {
  console.log('--- Generating All Calibrated 800x480 Subservice Images ---');

  // 1. Advocate S. Kamalakar Framed Card (Full Head + Face + Shoulders + Neckband Centered)
  {
    const lawyerBuf = await sharp(ASSETS.kamalakar_portrait)
      .extract({ left: 40, top: 110, width: 600, height: 620 })
      .resize(460, 480, { fit: 'cover', position: 'top' })
      .toBuffer();

    const bgBuf = await sharp({
      create: {
        width: 800,
        height: 480,
        channels: 3,
        background: { r: 242, g: 244, b: 247 }
      }
    }).jpeg().toBuffer();

    await sharp(bgBuf)
      .composite([{ input: lawyerBuf, left: 170, top: 0 }])
      .jpeg({ quality: 92 })
      .toFile(path.join(PUBLIC_DIR, 'advocate-kamalakar-framed.jpg'));

    // Also overwrite advocate-kamalakar.jpg so any component won't show headless suit!
    await sharp(bgBuf)
      .composite([{ input: lawyerBuf, left: 170, top: 0 }])
      .jpeg({ quality: 92 })
      .toFile(path.join(PUBLIC_DIR, 'advocate-kamalakar.jpg'));
    console.log('Updated: advocate-kamalakar-framed.jpg & advocate-kamalakar.jpg');
  }

  // 2. Senior Advocate M. Umamaheshwar Reddy Framed Card
  {
    await sharp(ASSETS.umamaheshwar_court)
      .resize(800, 480, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 92 })
      .toFile(path.join(PUBLIC_DIR, 'advocate-umamaheshwar-framed.jpg'));

    await sharp(ASSETS.umamaheshwar_court)
      .resize(800, 480, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 92 })
      .toFile(path.join(PUBLIC_DIR, 'advocate-umamaheshwar-reddy.jpg'));
    console.log('Updated: advocate-umamaheshwar-framed.jpg & advocate-umamaheshwar-reddy.jpg');
  }

  // -------------------------------------------------------------
  // CRIMINAL LAW (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.bail, 'crim-01-bail.jpg', { position: 'center' });
  await makeCard(ASSETS.cheque, 'crim-02-cheque.jpg', { position: 'center' });
  await makeCard(ASSETS.police_alt, 'crim-03-police.jpg', { position: 'center' });
  await makeCard(ASSETS.umamaheshwar_court, 'crim-04-trials.jpg', { position: 'top' });
  await makeCard(ASSETS.trial, 'crim-05-ndps.jpg', { position: 'center' });
  await makeCard(ASSETS.white_collar, 'crim-06-white-collar.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // CIVIL LAW (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.civil_dossier, 'civil-01-suits.jpg', { position: 'center' });
  await makeCard(ASSETS.property_deed, 'civil-02-partition.jpg', { position: 'top' });
  await makeCard(ASSETS.civil_dossier, 'civil-03-specific-performance.jpg', { position: 'bottom', brightness: 1.05 });
  await makeCard(ASSETS.gavel_navy, 'civil-04-injunctions.jpg', { position: 'center' });
  await makeCard(ASSETS.alimony, 'civil-05-recovery.jpg', { position: 'bottom' });
  await makeCard(ASSETS.property_deed, 'civil-06-trespass.jpg', { position: 'bottom', brightness: 0.95 });

  // -------------------------------------------------------------
  // FAMILY LAW (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.divorce, 'fam-01-divorce.jpg', { position: 'center' });
  await makeCard(ASSETS.alimony, 'fam-02-alimony.jpg', { position: 'center' });
  await makeCard(ASSETS.domestic_violence, 'fam-03-domestic-violence.jpg', { position: 'center' });
  await makeCard(ASSETS.child_custody, 'fam-04-child-custody.jpg', { position: 'center' });
  await makeCard(ASSETS.conjugal, 'fam-05-conjugal.jpg', { position: 'center' });
  await makeCard(ASSETS.matrimonial, 'fam-06-matrimonial.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // TRIBUNALS & FORUMS (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.supreme_court, 'trib-01-nclt.jpg', { position: 'center' });
  await makeCard(ASSETS.white_collar, 'trib-02-mact.jpg', { position: 'bottom', brightness: 1.05 });
  await makeCard(ASSETS.lady_justice, 'trib-03-consumer.jpg', { position: 'center' });
  await makeCard(ASSETS.blueprint, 'trib-04-rera.jpg', { position: 'center' });
  await makeCard(ASSETS.cheque, 'trib-05-itat.jpg', { position: 'top', brightness: 1.05 });
  await makeCard(ASSETS.umamaheshwar_desk, 'trib-06-cat.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // TAXATION & IT LAW (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.alimony, 'tax-01-income-tax.jpg', { position: 'center' });
  await makeCard(ASSETS.cheque, 'tax-02-gst-disputes.jpg', { position: 'center' });
  await makeCard(ASSETS.kamalakar_crest, 'tax-03-appeals-itat.jpg', { position: 'center' });
  await makeCard(ASSETS.gavel_book, 'tax-04-tds-pan.jpg', { position: 'center' });
  await makeCard(ASSETS.ndps, 'tax-05-cyber-it-law.jpg', { position: 'center' });
  await makeCard(ASSETS.domestic_violence, 'tax-06-ecommerce-business.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // RERA & BUILDER - BUYER (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.bail, 'rera-01-complaints.jpg', { position: 'top' });
  await makeCard(ASSETS.umamaheshwar_bookshelf, 'rera-02-builder-disputes.jpg', { position: 'center' });
  await makeCard(ASSETS.property_deed, 'rera-03-delay-possession.jpg', { position: 'center' });
  await makeCard(ASSETS.alimony, 'rera-04-refund-compensation.jpg', { position: 'top' });
  await makeCard(ASSETS.blueprint, 'rera-05-agreement-project.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // LANDLORD & TENANT (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.gavel_wooden, 'tenant-01-eviction.jpg', { position: 'center' });
  await makeCard(ASSETS.cheque, 'tenant-02-rental-agreements.jpg', { position: 'bottom' });
  await makeCard(ASSETS.umamaheshwar_bookshelf, 'tenant-03-landlord-disputes.jpg', { position: 'center' });
  await makeCard(ASSETS.property_deed, 'tenant-04-lease-deed.jpg', { position: 'bottom' });
  await makeCard(ASSETS.hitec_city, 'tenant-05-premises-hyderabad.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // LABOUR & EMPLOYMENT (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.child_custody, 'labour-01-employee-rights.jpg', { position: 'top' });
  await makeCard(ASSETS.white_collar, 'labour-02-wrongful-termination.jpg', { position: 'top' });
  await makeCard(ASSETS.gavel_navy, 'labour-03-industrial-disputes.jpg', { position: 'top' });
  await makeCard(ASSETS.alimony, 'labour-04-epf-esi.jpg', { position: 'top', brightness: 1.05 });
  await makeCard(ASSETS.exec_desk, 'labour-05-standing-orders.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // CONSUMER PROTECTION (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.domestic_violence, 'consumer-01-defective-goods.jpg', { position: 'center' });
  await makeCard(ASSETS.alimony, 'consumer-02-refund-replacement.jpg', { position: 'center', brightness: 1.05 });
  await makeCard(ASSETS.cheque, 'consumer-03-deficiency-service.jpg', { position: 'center' });
  await makeCard(ASSETS.ndps, 'consumer-04-ecommerce-issues.jpg', { position: 'center' });
  await makeCard(ASSETS.gavel_book, 'consumer-05-filing-complaints.jpg', { position: 'bottom' });

  // -------------------------------------------------------------
  // CORPORATE & COMMERCIAL (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.civil_dossier, 'corp-01-incorporation.jpg', { position: 'top' });
  await makeCard(ASSETS.matrimonial, 'corp-02-mou-shareholders.jpg', { position: 'top' });
  await makeCard(ASSETS.domestic_violence, 'corp-03-contracts-due-diligence.jpg', { position: 'bottom' });
  await makeCard(ASSETS.gavel_wooden, 'corp-04-commercial-disputes.jpg', { position: 'top' });
  await makeCard(ASSETS.hitec_city, 'corp-05-startup-support.jpg', { position: 'bottom' });

  // -------------------------------------------------------------
  // INTELLECTUAL PROPERTY (IPR) (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.civil_dossier, 'ipr-01-trademark.jpg', { position: 'bottom' });
  await makeCard(ASSETS.domestic_violence, 'ipr-02-copyright.jpg', { position: 'top' });
  await makeCard(ASSETS.blueprint, 'ipr-03-patent.jpg', { position: 'center' });
  await makeCard(path.join(PUBLIC_DIR, 'advocate-kamalakar-framed.jpg'), 'ipr-04-design.jpg', { position: 'center' });
  await makeCard(ASSETS.gavel_navy, 'ipr-05-enforcement.jpg', { position: 'bottom' });

  // -------------------------------------------------------------
  // CYBER CRIME (5 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.cheque, 'cyber-01-online-fraud.jpg', { position: 'top' });
  await makeCard(ASSETS.ndps, 'cyber-02-bullying-harassment.jpg', { position: 'top' });
  await makeCard(ASSETS.trial, 'cyber-03-social-media.jpg', { position: 'top' });
  await makeCard(ASSETS.white_collar, 'cyber-04-data-theft.jpg', { position: 'bottom' });
  await makeCard(ASSETS.police_alt, 'cyber-05-cyber-complaints.jpg', { position: 'bottom' });

  // -------------------------------------------------------------
  // IMMIGRATION (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.child_custody, 'immig-01-student-visa.jpg', { position: 'center' });
  await makeCard(ASSETS.supreme_court, 'immig-02-oci-pio.jpg', { position: 'top' });
  await makeCard(ASSETS.civil_dossier, 'immig-03-work-visa.jpg', { position: 'center' });
  await makeCard(ASSETS.domestic_violence, 'immig-04-citizenship.jpg', { position: 'center' });
  await makeCard(ASSETS.hitec_city, 'immig-05-business-visa.jpg', { position: 'center' });
  await makeCard(ASSETS.property_deed, 'immig-06-legal-docs.jpg', { position: 'center' });

  // -------------------------------------------------------------
  // OTHER LEGAL SERVICES (6 subservices)
  // -------------------------------------------------------------
  await makeCard(ASSETS.cheque, 'other-01-legal-notice.jpg', { position: 'bottom' });
  await makeCard(ASSETS.property_deed, 'other-02-power-of-attorney.jpg', { position: 'top' });
  await makeCard(ASSETS.civil_dossier, 'other-03-agreement-drafting.jpg', { position: 'center' });
  await makeCard(ASSETS.umamaheshwar_bookshelf, 'other-04-legal-opinion.jpg', { position: 'center' });
  await makeCard(ASSETS.divorce, 'other-05-will-succession.jpg', { position: 'bottom' });
  await makeCard(ASSETS.gavel_book, 'other-06-other-matters.jpg', { position: 'center' });

  console.log('--- ALL 77 SUBSERVICE CARDS GENERATED SUCCESSFULLY! ---');
}

run().catch(console.error);

