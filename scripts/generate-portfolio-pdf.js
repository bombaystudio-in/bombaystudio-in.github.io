/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');

// Helper to convert images to base64
function getBase64Image(relPath) {
  try {
    const fullPath = path.join(projectRoot, 'public', relPath);
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase();
      let mime = 'image/jpeg';
      if (ext === '.png') mime = 'image/png';
      else if (ext === '.svg') mime = 'image/svg+xml';
      else if (ext === '.webp') mime = 'image/webp';
      const data = fs.readFileSync(fullPath).toString('base64');
      return `data:${mime};base64,${data}`;
    }
  } catch (e) {
    console.warn("Could not read image:", relPath, e);
  }
  return '';
}

console.log("Compiling Comprehensive 12-Page Bombay Studio Architectural Monograph...");

// Assets
const logoImg = getBase64Image('logo.png');
const founderImg = getBase64Image('team/akhir-chaudhary-founder-portrait.png');
const kalamuddinImg = getBase64Image('team/kalamuddin-choudhary.png');

// Team Members
const razzakImg = getBase64Image('team/razzak-khan.png');
const arpitaImg = getBase64Image('team/arpita-kanojia.png');
const arshiyaImg = getBase64Image('team/arshiya-shaikh.png');
const varshaImg = getBase64Image('team/varsha-dongre.png');
const azharImg = getBase64Image('team/azhar-akram.png');
const sunilImg = getBase64Image('team/sunil-jaiswal.png');
const rajeshImg = getBase64Image('team/rajesh-vishwakarma.png');
const merajImg = getBase64Image('team/meraj-usmani.png');

// Flagship Projects
const ajinkya01 = getBase64Image('projects/ajinkya-kamble-4bhk-kandivali/photo-01.jpg');
const ajinkya02 = getBase64Image('projects/ajinkya-kamble-4bhk-kandivali/photo-03.jpg');
const ajinkya03 = getBase64Image('projects/ajinkya-kamble-4bhk-kandivali/photo-07.jpg');

const sewri01 = getBase64Image('projects/ashwini-dingare-4bhk-sewri/photo-01.jpg');
const sewri02 = getBase64Image('projects/ashwini-dingare-4bhk-sewri/photo-04.jpg');

const mulund01 = getBase64Image('projects/arunima-panchal-4bhk-mulund/photo-01.jpg');
const mulund02 = getBase64Image('projects/arunima-panchal-4bhk-mulund/photo-03.jpg');

const charni01 = getBase64Image('projects/yash-jain-3bhk-charni-road/photo-01.jpg');
const wadala01 = getBase64Image('projects/dr-sunil-mhatre-3bhk-wadala/photo-01.jpg');
const bandra01 = getBase64Image('projects/gautam-trivedi-3bhk-bandra/photo-01.jpg');
const goregaon01 = getBase64Image('projects/nitin-pendbhaje-3bhk-goregaon/photo-01.jpg');
const vileparle01 = getBase64Image('projects/amit-ranka-3bhk-vileparle/photo-01.jpg');
const powai01 = getBase64Image('projects/ujesh-shetty-3bhk-hiranandani-powai/photo-01.jpg');
const joshi01 = getBase64Image('projects/jayant-joshi-2bhk-vileparle/photo-01.jpg');
const malad01 = getBase64Image('projects/vaibhav-beriwal-2bhk-malad/photo-01.jpg');

// Real Site Work Photos
const siteCarpentry = getBase64Image('portfolio/carpentry-crew-site-execution.jpg');
const siteConsult = getBase64Image('portfolio/client-consultation-material-selection.jpg');
const siteDrawing = getBase64Image('portfolio/drawing-review-with-contractors.jpg');
const siteInspection = getBase64Image('portfolio/carved-wall-panel-inspection.jpg');

// Testimonials
const adrijaImg = getBase64Image('testimonials/actress-adrija-sinha.jpg');
const ishaImg = getBase64Image('testimonials/actress-isha-vikas-talwar.jpg');
const swarajImg = getBase64Image('testimonials/swaraj-singh-producer.jpg');
const mayuriImg = getBase64Image('testimonials/anchor-mayuri-malandkar.jpg');
const miteshImg = getBase64Image('testimonials/adv-mitesh-pabari.jpg');
const praveenImg = getBase64Image('testimonials/adv-praveen-singh.jpg');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bombay Studio - Official Architectural Monograph &amp; Turnkey Portfolio</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      margin: 0;
      padding: 0;
      background: #080808;
      color: #E4E4E7;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 10pt;
      line-height: 1.5;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      height: 297mm;
      padding: 16mm 18mm 14mm 18mm;
      position: relative;
      page-break-after: always;
      background: #090909;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    /* Fonts identical to bombaystudio.in */
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .font-sans {
      font-family: 'DM Sans', sans-serif;
    }

    .gold { color: #D4AF37; }
    .gold-light { color: #FCF6BA; }
    .gold-gradient-text {
      background: linear-gradient(135deg, #D4AF37 0%, #FCF6BA 50%, #D4AF37 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .card {
      background: #111111;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      overflow: hidden;
    }

    .gold-box {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(20, 20, 20, 0.9) 100%);
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-radius: 10px;
      padding: 14px;
    }

    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5mm;
      border-bottom: 1px solid rgba(212, 175, 55, 0.25);
    }
    .doc-header .brand-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 13pt;
      letter-spacing: 1px;
      font-weight: 700;
      color: #FFFFFF;
    }
    .doc-header .brand-sub {
      font-size: 7.5pt;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #D4AF37;
      font-weight: 600;
    }
    .doc-header .header-meta {
      font-size: 8pt;
      color: #A1A1AA;
      text-align: right;
    }

    .doc-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5mm;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 7.5pt;
      color: #71717A;
    }

    .section-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 18pt;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 3mm 0;
      letter-spacing: -0.2px;
      line-height: 1.2;
    }
    .section-badge {
      display: inline-block;
      font-size: 7pt;
      font-family: monospace;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #D4AF37;
      background: rgba(212, 175, 55, 0.12);
      border: 1px solid rgba(212, 175, 55, 0.3);
      padding: 2.5px 8px;
      border-radius: 20px;
      margin-bottom: 2mm;
    }

    .pill {
      display: inline-block;
      font-size: 7pt;
      padding: 2px 7px;
      border-radius: 4px;
      background: rgba(212, 175, 55, 0.15);
      color: #D4AF37;
      border: 1px solid rgba(212, 175, 55, 0.3);
      font-weight: 600;
    }

    .stat-card {
      background: rgba(18, 18, 18, 0.9);
      border: 1px solid rgba(212, 175, 55, 0.3);
      padding: 10px;
      border-radius: 8px;
      text-align: center;
    }
    .stat-val {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 16pt;
      font-weight: 700;
      color: #FCF6BA;
    }
    .stat-lbl {
      font-size: 7pt;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #A1A1AA;
    }
  </style>
</head>
<body>

  <!-- ======================================================================= -->
  <!-- PAGE 1: HERO & BRAND POSITIONING (Cover) -->
  <!-- ======================================================================= -->
  <div class="page" style="background: radial-gradient(circle at 80% 20%, #1A170A 0%, #080808 70%); justify-content: space-between;">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3mm;">
        ${logoImg ? `<img src="${logoImg}" style="height: 42px; object-fit: contain;" alt="Bombay Studio">` : `<h1 class="font-serif" style="font-size: 22pt; color: #fff; margin:0;">BOMBAY STUDIO</h1>`}
        <span class="pill" style="font-size: 7.5pt; padding: 4px 10px;">Architectural Monograph 2026</span>
      </div>
      <h2 class="font-serif" style="font-size: 20pt; color: #FFFFFF; margin: 3mm 0 1mm 0; line-height: 1.15;">
        Three Decades of Architectural Craftsmanship
      </h2>
      <p style="font-size: 9.5pt; letter-spacing: 2px; text-transform: uppercase; color: #D4AF37; margin: 0; font-weight: 600;">
        Designing Timeless Spaces Across Mumbai · Est. 1992
      </p>
    </div>

    <div>
      <img src="${ajinkya01}" style="width: 100%; height: 126mm; object-fit: cover; border-radius: 14px; border: 1px solid rgba(212, 175, 55, 0.4); box-shadow: 0 20px 40px rgba(0,0,0,0.85);" alt="Flagship Handover">
    </div>

    <div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 4mm;">
        <div class="stat-card">
          <div class="stat-val">30+ Yrs</div>
          <div class="stat-lbl">Civil Pedigree (1992)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">200+</div>
          <div class="stat-lbl">Turnkey Handovers</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">100%</div>
          <div class="stat-lbl">IS 710 Marine Wood</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">4.9 ★</div>
          <div class="stat-lbl">Verified Rating</div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 8pt; color: #A1A1AA; padding-top: 2mm; border-top: 1px solid rgba(255,255,255,0.1);">
        <span>Principal Architect: <strong style="color: #fff;">Ar. Aakhir Choudhary</strong></span>
        <span>Studio Direct Line: <strong class="gold">+91 707070 4181</strong></span>
        <span>Website: <strong class="gold">bombaystudio.in</strong></span>
      </div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 2: 30-YEAR ORIGIN LEGACY & STUDIO LEADERSHIP -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Architectural Monograph</div>
      </div>
      <div class="header-meta">Section 01 · Origin Legacy &amp; Leadership</div>
    </div>

    <div style="flex: 1; padding: 6mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Est. 1992 · Noor Engineering Co.</span>
        <h2 class="section-title">A 30-Year Architectural Journey</h2>
        <p style="color: #D4D4D8; font-size: 9.5pt; line-height: 1.6; margin-bottom: 5mm;">
          Founded in 1992 by civil patriarch <strong>Mr. Kalamuddin Choudhary</strong> as Noor Engineering Company, Bombay Studio was built on three uncompromising principles: structural truth, artisan craftsmanship, and zero-compromise engineering. Today, under the creative leadership of <strong>Principal Architect Ar. Aakhir Choudhary</strong>, the practice brings modern spatial elegance and turnkey execution to Mumbai’s prime residences.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 5mm;">
          <!-- Kalamuddin Choudhary -->
          <div class="card" style="padding: 12px; display: flex; gap: 12px; align-items: center;">
            <img src="${kalamuddinImg}" style="width: 72px; height: 96px; border-radius: 8px; object-fit: contain; background: #000; border: 1px solid rgba(212,175,55,0.3);" alt="Founder">
            <div>
              <p style="font-size: 7.5pt; color: #D4AF37; font-family: monospace; text-transform: uppercase;">Founder Emeritus (1992)</p>
              <h4 class="font-serif" style="font-size: 11pt; color: #fff; margin: 2px 0;">Mr. Kalamuddin Choudhary</h4>
              <p style="font-size: 7.5pt; color: #A1A1AA; line-height: 1.35;">Founder of Noor Engineering Company. Established the 30-year civil and structural foundation across Mumbai.</p>
            </div>
          </div>

          <!-- Ar. Aakhir Choudhary -->
          <div class="card" style="padding: 12px; display: flex; gap: 12px; align-items: center;">
            <img src="${founderImg}" style="width: 72px; height: 96px; border-radius: 8px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.3);" alt="Principal Architect">
            <div>
              <p style="font-size: 7.5pt; color: #D4AF37; font-family: monospace; text-transform: uppercase;">Principal Architect &amp; Founder</p>
              <h4 class="font-serif" style="font-size: 11pt; color: #fff; margin: 2px 0;">Ar. Aakhir Choudhary</h4>
              <p style="font-size: 7.5pt; color: #A1A1AA; line-height: 1.35;">Guiding turnkey residential architecture, spatial innovation, material procurement, and personal on-site delivery.</p>
            </div>
          </div>
        </div>

        <!-- Timeline Milestones -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
          <div class="card" style="padding: 9px; text-align: center;">
            <span class="gold" style="font-family: monospace; font-size: 7.5pt; font-weight: bold;">1992</span>
            <p class="font-serif" style="font-size: 9pt; color: #fff; margin: 2px 0;">Civil Genesis</p>
            <p style="font-size: 7pt; color: #A1A1AA; margin: 0;">Noor Engineering Co. founded in Mumbai.</p>
          </div>
          <div class="card" style="padding: 9px; text-align: center;">
            <span class="gold" style="font-family: monospace; font-size: 7.5pt; font-weight: bold;">2004</span>
            <p class="font-serif" style="font-size: 9pt; color: #fff; margin: 2px 0;">Infrastructure</p>
            <p style="font-size: 7pt; color: #A1A1AA; margin: 0;">High-rise residential civil contracting.</p>
          </div>
          <div class="card" style="padding: 9px; text-align: center;">
            <span class="gold" style="font-family: monospace; font-size: 7.5pt; font-weight: bold;">2014</span>
            <p class="font-serif" style="font-size: 9pt; color: #fff; margin: 2px 0;">Turnkey Interiors</p>
            <p style="font-size: 7pt; color: #A1A1AA; margin: 0;">Expansion into luxury residential interiors.</p>
          </div>
          <div class="card" style="padding: 9px; text-align: center;">
            <span class="gold" style="font-family: monospace; font-size: 7.5pt; font-weight: bold;">2026</span>
            <p class="font-serif" style="font-size: 9pt; color: #fff; margin: 2px 0;">Bombay Studio</p>
            <p style="font-size: 7pt; color: #A1A1AA; margin: 0;">Architectural firm with 200+ handovers.</p>
          </div>
        </div>
      </div>

      <div class="gold-box">
        <p class="font-serif" style="font-size: 11pt; color: #fff; margin: 0 0 2px 0;">Studio Credo: &ldquo;Design. Detail. Delivered.&rdquo;</p>
        <p style="font-size: 8pt; color: #D4D4D8; margin: 0;">We take complete single-point turnkey responsibility from initial 3D visualization to structural execution, bespoke joinery, and final key handover.</p>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 02</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 3: CORE STUDIO STANDARDS & WHY CHOOSE US -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Architectural Monograph</div>
      </div>
      <div class="header-meta">Section 02 · Core Studio Standards</div>
    </div>

    <div style="flex: 1; padding: 6mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">The Bombay Studio Difference</span>
        <h2 class="section-title">The Four Pillars of Architectural Integrity</h2>
        <p style="font-size: 9.5pt; color: #A1A1AA; margin-bottom: 6mm;">
          Every residence designed by Bombay Studio is executed in accordance with our scientific four-pillar framework, eliminating common renovation hazards such as material substitution, cost overruns, and timeline delays.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 6mm;">
          <div class="card" style="padding: 14px; border-left: 3px solid #D4AF37;">
            <span class="gold" style="font-size: 7.5pt; font-family: monospace; font-weight: bold;">PILLAR 01</span>
            <h3 class="font-serif" style="font-size: 12pt; color: #fff; margin: 2px 0 4px 0;">Spatial Flow &amp; Ergonomics</h3>
            <p style="font-size: 8pt; color: #A1A1AA; line-height: 1.45; margin: 0;">
              Every layout is tailored to natural light axes, cross-ventilation, and effortless circulation. We maximize storage within concealed wall niches to eliminate clutter.
            </p>
          </div>

          <div class="card" style="padding: 14px; border-left: 3px solid #D4AF37;">
            <span class="gold" style="font-size: 7.5pt; font-family: monospace; font-weight: bold;">PILLAR 02</span>
            <h3 class="font-serif" style="font-size: 12pt; color: #fff; margin: 2px 0 4px 0;">100% Pure Certified Materials</h3>
            <p style="font-size: 8pt; color: #A1A1AA; line-height: 1.45; margin: 0;">
              We refuse commercial grade particle boards. All woodwork is fabricated exclusively in 100% IS 710 BWP Marine Plywood with Blum and Hafele German hardware.
            </p>
          </div>

          <div class="card" style="padding: 14px; border-left: 3px solid #D4AF37;">
            <span class="gold" style="font-size: 7.5pt; font-family: monospace; font-weight: bold;">PILLAR 03</span>
            <h3 class="font-serif" style="font-size: 12pt; color: #fff; margin: 2px 0 4px 0;">Itemized BOQ Price Transparency</h3>
            <p style="font-size: 8pt; color: #A1A1AA; line-height: 1.45; margin: 0;">
              Our clients receive comprehensive Bill of Quantities (BOQ) with transparent per-unit rates. Once finalized, pricing is locked with 0% unapproved escalation.
            </p>
          </div>

          <div class="card" style="padding: 14px; border-left: 3px solid #D4AF37;">
            <span class="gold" style="font-size: 7.5pt; font-family: monospace; font-weight: bold;">PILLAR 04</span>
            <h3 class="font-serif" style="font-size: 12pt; color: #fff; margin: 2px 0 4px 0;">60–90 Day Guaranteed Handover</h3>
            <p style="font-size: 8pt; color: #A1A1AA; line-height: 1.45; margin: 0;">
              Turnkey milestones are locked into a legally binding contract. Full-time site supervisors ensure daily progress tracking without contractor stalling.
            </p>
          </div>
        </div>

        <div class="gold-box" style="padding: 14px;">
          <h4 class="font-serif" style="font-size: 10.5pt; color: #fff; margin: 0 0 4px 0;">Direct Supervision by Ar. Aakhir Choudhary</h4>
          <p style="font-size: 8pt; color: #D4D4D8; line-height: 1.45; margin: 0;">
            Unlike design brokerages that outsource site management to third-party sub-contractors, Principal Architect Ar. Aakhir Choudhary personally conducts on-site milestone audits across every active residence in Mumbai.
          </p>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 03</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 4: DIRECT CLIENT FEEDBACK & CELEBRITY TRUST (TestimonialsSection) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Client Stories &amp; Testimonials</div>
      </div>
      <div class="header-meta">Section 03 · Popularity &amp; Client Trust</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Client Social Proof</span>
        <h2 class="section-title">Trusted by Mumbai’s Prominent Personalities</h2>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <!-- Actress Adrija Sinha -->
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: flex-start;">
          <img src="${adrijaImg}" style="width: 48px; height: 58px; border-radius: 6px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.4); flex-shrink: 0;" alt="Adrija Sinha">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 class="font-serif" style="font-size: 9pt; color: #fff; margin: 0;">Actress Adrija Sinha</h4>
              <span class="pill" style="font-size: 6pt;">Celebrity</span>
            </div>
            <p style="font-size: 7.2pt; color: #D4D4D8; margin-top: 3px; line-height: 1.35;">
              &ldquo;Bombay Studio made our home look beautiful and comfortable, just the way we wanted. The team was patient with our suggestions and helped us make the right choices.&rdquo;
            </p>
          </div>
        </div>

        <!-- Actress Isha & Vikas Talwar -->
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: flex-start;">
          <img src="${ishaImg}" style="width: 48px; height: 58px; border-radius: 6px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.4); flex-shrink: 0;" alt="Isha Talwar">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 class="font-serif" style="font-size: 9pt; color: #fff; margin: 0;">Isha &amp; Vikas Talwar</h4>
              <span class="pill" style="font-size: 6pt;">Celebrity</span>
            </div>
            <p style="font-size: 7.2pt; color: #D4D4D8; margin-top: 3px; line-height: 1.35;">
              &ldquo;We didn’t have to keep chasing people for updates. We’re really happy with our home and the way everything came together!&rdquo;
            </p>
          </div>
        </div>

        <!-- Swaraj Singh -->
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: flex-start;">
          <img src="${swarajImg}" style="width: 48px; height: 58px; border-radius: 6px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.4); flex-shrink: 0;" alt="Swaraj Singh">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 class="font-serif" style="font-size: 9pt; color: #fff; margin: 0;">Swaraj Singh</h4>
              <span class="pill" style="font-size: 6pt;">Film Producer</span>
            </div>
            <p style="font-size: 7.2pt; color: #D4D4D8; margin-top: 3px; line-height: 1.35;">
              &ldquo;The work was done with good attention to detail, and we are really happy with how our space has turned out!&rdquo;
            </p>
          </div>
        </div>

        <!-- Mayuri Malandkar -->
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: flex-start;">
          <img src="${mayuriImg}" style="width: 48px; height: 58px; border-radius: 6px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.4); flex-shrink: 0;" alt="Mayuri Malandkar">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 class="font-serif" style="font-size: 9pt; color: #fff; margin: 0;">Mayuri Malandkar</h4>
              <span class="pill" style="font-size: 6pt;">Media Anchor</span>
            </div>
            <p style="font-size: 7.2pt; color: #D4D4D8; margin-top: 3px; line-height: 1.35;">
              &ldquo;We didn’t have to follow up on every small thing. The team managed everything well and kept things moving on time.&rdquo;
            </p>
          </div>
        </div>

        <!-- Adv. Mitesh Pabari -->
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: flex-start;">
          <img src="${miteshImg}" style="width: 48px; height: 58px; border-radius: 6px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.4); flex-shrink: 0;" alt="Adv. Mitesh Pabari">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 class="font-serif" style="font-size: 9pt; color: #fff; margin: 0;">Adv. Mitesh Pabari</h4>
              <span class="pill" style="font-size: 6pt;">Advocate</span>
            </div>
            <p style="font-size: 7.2pt; color: #D4D4D8; margin-top: 3px; line-height: 1.35;">
              &ldquo;Architect Aakhir Choudhary was helpful and guided us whenever we needed support. We are happy with the outcome!&rdquo;
            </p>
          </div>
        </div>

        <!-- Adv. Praveen Singh -->
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: flex-start;">
          <img src="${praveenImg}" style="width: 48px; height: 58px; border-radius: 6px; object-fit: cover; object-position: top; border: 1px solid rgba(212,175,55,0.4); flex-shrink: 0;" alt="Adv. Praveen Singh">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 class="font-serif" style="font-size: 9pt; color: #fff; margin: 0;">Adv. Praveen Singh</h4>
              <span class="pill" style="font-size: 6pt;">Advocate</span>
            </div>
            <p style="font-size: 7.2pt; color: #D4D4D8; margin-top: 3px; line-height: 1.35;">
              &ldquo;Everything was explained clearly at every stage. Architect Aakhir Choudhary made sure the work was planned well.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div class="gold-box" style="padding: 10px;">
        <p style="font-size: 7.5pt; color: #FCF6BA; margin: 0; text-align: center;">
          Over <strong>200+ homeowners</strong> have entrusted Bombay Studio with their turnkey handovers across Mumbai.
        </p>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 04</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 5: 4BHK FLAGSHIP - AJINKYA KAMBLE (KANDIVALI) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Delivered Flagship Residences</div>
      </div>
      <div class="header-meta">Section 04 · 4BHK Grand Residence</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3mm;">
          <div>
            <span class="pill">Flagship 4BHK · Kandivali, Mumbai</span>
            <h2 class="section-title" style="margin-top: 2mm;">Ajinkya Kamble Residence</h2>
          </div>
          <div style="text-align: right; font-size: 8pt; color: #A1A1AA;">
            <strong class="gold" style="font-size: 11pt;">17 Handover Photographs</strong><br>
            Complete Turnkey Handover
          </div>
        </div>

        <div style="height: 108mm; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12); margin-bottom: 4mm;">
          <img src="${ajinkya01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Living Room Handover">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 4mm;">
          <div style="height: 54mm; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="${ajinkya02}" style="width: 100%; height: 100%; object-fit: cover;" alt="Master Bedroom">
          </div>
          <div style="height: 54mm; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="${ajinkya03}" style="width: 100%; height: 100%; object-fit: cover;" alt="Bar & Dining Nook">
          </div>
        </div>

        <div class="card" style="padding: 10px 14px; border-left: 3px solid #D4AF37;">
          <p style="font-size: 8pt; color: #FCF6BA; font-style: italic; margin: 0 0 2px 0;">
            &ldquo;Bombay Studio did a great job with our home interiors. The team was helpful, listened to our ideas, and made sure everything was done properly. Architect Aakhir Choudhary guided us well throughout the process. Really happy with the final result!&rdquo;
          </p>
          <p style="font-size: 7.5pt; color: #A1A1AA; margin: 0;">— <strong>Ajinkya Kamble</strong>, Verified 4BHK Homeowner · Handover Completed</p>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 05</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 6: 4BHK SEWRI & MULUND FLAGSHIPS -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Delivered Flagship Residences</div>
      </div>
      <div class="header-meta">Section 04 · 4BHK Luxury Residences</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <!-- Project 02: Sewri 4BHK -->
      <div style="margin-bottom: 5mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2mm;">
          <div>
            <span class="pill">4BHK · Sewri, South-Central Mumbai</span>
            <h3 class="font-serif" style="font-size: 13pt; color: #fff; margin: 2px 0;">Ashwini Dingare Residence</h3>
          </div>
          <span style="font-size: 7.5pt; color: #A1A1AA;">16 Photos Documented</span>
        </div>
        <p style="font-size: 7.5pt; color: #A1A1AA; margin-bottom: 3mm;">High-rise sea-facing panoramic apartment. Minimalist fluted wall paneling, Italian Statuario floor, concealed ambient cove lighting.</p>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; height: 62mm;">
          <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="${sewri01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Living Panorama">
          </div>
          <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="${sewri02}" style="width: 100%; height: 100%; object-fit: cover;" alt="Joinery Detail">
          </div>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.1); margin: 2mm 0;"></div>

      <!-- Project 03: Mulund 4BHK -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2mm;">
          <div>
            <span class="pill">4BHK · Mulund, Central Mumbai</span>
            <h3 class="font-serif" style="font-size: 13pt; color: #fff; margin: 2px 0;">Arunima Panchal Residence</h3>
          </div>
          <span style="font-size: 7.5pt; color: #A1A1AA;">12 Photos Documented</span>
        </div>
        <p style="font-size: 7.5pt; color: #A1A1AA; margin-bottom: 3mm;">Dual-living zone configuration designed for multi-generational comfort. Warm charcoal veneer finishes with bespoke brass accents.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 10px; height: 62mm;">
          <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="${mulund02}" style="width: 100%; height: 100%; object-fit: cover;" alt="Dining Foyer">
          </div>
          <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="${mulund01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Main Lounge">
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 06</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 7: 3BHK & 2BHK DELIVERED PORTFOLIO -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Delivered 3BHK &amp; 2BHK Residences</div>
      </div>
      <div class="header-meta">Section 04 · 3BHK &amp; 2BHK Handovers</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Signature 3BHK &amp; 2BHK Portfolio</span>
        <h2 class="section-title">Urban Elegance Across Mumbai</h2>
      </div>

      <!-- 3BHK Highlights -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 4mm;">
        <!-- Yash Jain -->
        <div class="card" style="padding: 10px;">
          <div style="height: 48mm; border-radius: 8px; overflow: hidden; margin-bottom: 8px;">
            <img src="${charni01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Yash Jain Charni Road">
          </div>
          <span class="pill" style="font-size: 6.5pt;">3BHK · Charni Road</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 4px 0 2px 0;">Yash Jain Residence</h4>
          <p style="font-size: 7pt; color: #A1A1AA; line-height: 1.3;">South Mumbai luxury with walkthrough video tour.</p>
        </div>

        <!-- Dr. Sunil Mhatre -->
        <div class="card" style="padding: 10px;">
          <div style="height: 48mm; border-radius: 8px; overflow: hidden; margin-bottom: 8px;">
            <img src="${wadala01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Dr. Sunil Mhatre Wadala">
          </div>
          <span class="pill" style="font-size: 6.5pt;">3BHK · Wadala</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 4px 0 2px 0;">Dr. Sunil Mhatre</h4>
          <p style="font-size: 7pt; color: #A1A1AA; line-height: 1.3;">25-photo complete handover with bespoke study suite.</p>
        </div>

        <!-- Gautam Trivedi -->
        <div class="card" style="padding: 10px;">
          <div style="height: 48mm; border-radius: 8px; overflow: hidden; margin-bottom: 8px;">
            <img src="${bandra01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Gautam Trivedi Bandra">
          </div>
          <span class="pill" style="font-size: 6.5pt;">3BHK · Bandra</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 4px 0 2px 0;">Gautam Trivedi</h4>
          <p style="font-size: 7pt; color: #A1A1AA; line-height: 1.3;">18-photo Bandra apartment in champagne aesthetic.</p>
        </div>
      </div>

      <!-- 2BHK Highlights -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: center;">
          <div style="width: 80px; height: 60px; border-radius: 6px; overflow: hidden; flex-shrink: 0;">
            <img src="${joshi01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Jayant Joshi 2BHK">
          </div>
          <div>
            <span class="pill" style="font-size: 6.5pt;">2BHK · Vile Parle East</span>
            <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">Jayant Joshi Residence</h4>
            <p style="font-size: 7pt; color: #FCF6BA; font-style: italic; margin: 0;">&ldquo;The work was completed nicely, result looks even better!&rdquo;</p>
          </div>
        </div>

        <div class="card" style="padding: 10px; display: flex; gap: 10px; align-items: center;">
          <div style="width: 80px; height: 60px; border-radius: 6px; overflow: hidden; flex-shrink: 0;">
            <img src="${malad01}" style="width: 100%; height: 100%; object-fit: cover;" alt="Vaibhav Beriwal 2BHK">
          </div>
          <div>
            <span class="pill" style="font-size: 6.5pt;">2BHK · Malad West</span>
            <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">Vaibhav Beriwal Residence</h4>
            <p style="font-size: 7pt; color: #A1A1AA; margin: 0;">13-photo complete handover with dual-function dining console.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 07</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 8: SPECIALIZED SERVICES & TYPOLOGIES (ServicesSection & ProjectCategories) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Turnkey Capabilities</div>
      </div>
      <div class="header-meta">Section 05 · Services &amp; Typologies</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Comprehensive Architectural Services</span>
        <h2 class="section-title">Specialized Turnkey Capabilities</h2>
      </div>

      <!-- 6 Services Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 5mm;">
        <div class="card" style="padding: 10px;">
          <span class="gold" style="font-size: 7pt; font-family: monospace;">01</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">Turnkey Architecture</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.35; margin: 0;">End-to-end design, civil contracting, joinery, and key delivery.</p>
        </div>

        <div class="card" style="padding: 10px;">
          <span class="gold" style="font-size: 7pt; font-family: monospace;">02</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">2D Space Planning</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.35; margin: 0;">Ergonomic circulation layout, Vastu compliance, and storage mapping.</p>
        </div>

        <div class="card" style="padding: 10px;">
          <span class="gold" style="font-size: 7pt; font-family: monospace;">03</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">3D Photorealistic CGI</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.35; margin: 0;">High-fidelity 3D visualization and walkthrough video animation.</p>
        </div>

        <div class="card" style="padding: 10px;">
          <span class="gold" style="font-size: 7pt; font-family: monospace;">04</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">Modular Kitchens</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.35; margin: 0;">German Blum/Hafele hardware, quartz countertops, anti-scratch finishes.</p>
        </div>

        <div class="card" style="padding: 10px;">
          <span class="gold" style="font-size: 7pt; font-family: monospace;">05</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">Civil Demolition &amp; MEP</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.35; margin: 0;">Structural alterations, plumbing conduits, and Finolex electrical ducting.</p>
        </div>

        <div class="card" style="padding: 10px;">
          <span class="gold" style="font-size: 7pt; font-family: monospace;">06</span>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 2px 0;">BOQ &amp; Procurement</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.35; margin: 0;">Direct factory procurement, itemized pricing, and material authenticity audit.</p>
        </div>
      </div>

      <!-- Project Typologies Banner -->
      <div class="gold-box" style="padding: 12px;">
        <h4 class="font-serif" style="font-size: 10.5pt; color: #fff; margin: 0 0 4px 0;">Residential &amp; Commercial Typologies Handled</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
          <span class="pill">4BHK Luxury Residences</span>
          <span class="pill">3BHK High-Rise Apartments</span>
          <span class="pill">2BHK Urban Precision Homes</span>
          <span class="pill">Penthouses &amp; Sea-Facing Duplexes</span>
          <span class="pill">Executive Studios &amp; Boutique Offices</span>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 08</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 9: CRAFTSMANSHIP & SITE WORK (PortfolioGallery) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Craftsmanship &amp; Execution</div>
      </div>
      <div class="header-meta">Section 06 · Site Work &amp; Behind the Scenes</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Real Site Evidence</span>
        <h2 class="section-title">Site Work &amp; Artisan Execution</h2>
        <p style="font-size: 8.5pt; color: #A1A1AA; margin-bottom: 5mm;">
          Every home we design is backed by rigorous on-site supervision. Explore real, unedited photographs of our craftsmen, material showroom audits, joinery installations, and final handovers across Mumbai.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 4mm;">
        <div class="card" style="padding: 8px;">
          <div style="height: 52mm; border-radius: 6px; overflow: hidden; margin-bottom: 6px;">
            <img src="${siteCarpentry}" style="width: 100%; height: 100%; object-fit: cover;" alt="Carpentry Crew">
          </div>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 0 0 2px 0;">IS 710 Marine Wood Framing</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.3; margin: 0;">Joinery fabrication on-site with boiling water proof marine plywood.</p>
        </div>

        <div class="card" style="padding: 8px;">
          <div style="height: 52mm; border-radius: 6px; overflow: hidden; margin-bottom: 6px;">
            <img src="${siteConsult}" style="width: 100%; height: 100%; object-fit: cover;" alt="Material Selection">
          </div>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 0 0 2px 0;">Material &amp; Veneer Showroom Audits</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.3; margin: 0;">Personal client showroom walkthroughs to select marble and veneers.</p>
        </div>

        <div class="card" style="padding: 8px;">
          <div style="height: 52mm; border-radius: 6px; overflow: hidden; margin-bottom: 6px;">
            <img src="${siteDrawing}" style="width: 100%; height: 100%; object-fit: cover;" alt="Drawing Review">
          </div>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 0 0 2px 0;">Architectural Drawing Coordination</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.3; margin: 0;">Ar. Aakhir Choudhary reviewing MEP and electrical ceiling plans on-site.</p>
        </div>

        <div class="card" style="padding: 8px;">
          <div style="height: 52mm; border-radius: 6px; overflow: hidden; margin-bottom: 6px;">
            <img src="${siteInspection}" style="width: 100%; height: 100%; object-fit: cover;" alt="Wall Panel Inspection">
          </div>
          <h4 class="font-serif" style="font-size: 9.5pt; color: #fff; margin: 0 0 2px 0;">Fluted Panel &amp; Joinery Quality Sign-Off</h4>
          <p style="font-size: 7.2pt; color: #A1A1AA; line-height: 1.3; margin: 0;">Multi-stage quality checkpoints before final coat PU polishing.</p>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 09</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 10: STUDIO TEAM & LEADERSHIP HIERARCHY (TeamSection) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Team &amp; Leadership</div>
      </div>
      <div class="header-meta">Section 07 · Organizational Hierarchy</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Studio Structure</span>
        <h2 class="section-title">The Multidisciplinary Architectural Team</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 4mm;">
        <!-- Level 01: Kalamuddin -->
        <div class="card" style="padding: 8px; text-align: center;">
          <img src="${kalamuddinImg}" style="width: 60px; height: 75px; object-fit: contain; background: #000; border-radius: 6px; margin: 0 auto 4px auto; border: 1px solid rgba(212,175,55,0.3);" alt="Kalamuddin">
          <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0; font-weight: bold;">Mr. Kalamuddin</p>
          <p style="font-size: 6.5pt; color: #D4AF37; margin: 0;">Founder Emeritus</p>
        </div>

        <!-- Level 02: Aakhir -->
        <div class="card" style="padding: 8px; text-align: center;">
          <img src="${founderImg}" style="width: 60px; height: 75px; object-fit: cover; object-position: top; border-radius: 6px; margin: 0 auto 4px auto; border: 1px solid rgba(212,175,55,0.3);" alt="Aakhir">
          <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0; font-weight: bold;">Ar. Aakhir Choudhary</p>
          <p style="font-size: 6.5pt; color: #D4AF37; margin: 0;">Principal Architect</p>
        </div>

        <!-- Level 03: Razzak -->
        <div class="card" style="padding: 8px; text-align: center;">
          <img src="${razzakImg}" style="width: 60px; height: 75px; object-fit: cover; object-position: top; border-radius: 6px; margin: 0 auto 4px auto; border: 1px solid rgba(255,255,255,0.1);" alt="Razzak">
          <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0; font-weight: bold;">Razzak Khan</p>
          <p style="font-size: 6.5pt; color: #D4AF37; margin: 0;">Associate Lead</p>
        </div>

        <!-- Level 04: Arpita -->
        <div class="card" style="padding: 8px; text-align: center;">
          <img src="${arpitaImg}" style="width: 60px; height: 75px; object-fit: cover; object-position: top; border-radius: 6px; margin: 0 auto 4px auto; border: 1px solid rgba(255,255,255,0.1);" alt="Arpita">
          <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0; font-weight: bold;">Arpita Kanojia</p>
          <p style="font-size: 6.5pt; color: #D4AF37; margin: 0;">Senior Architect</p>
        </div>
      </div>

      <!-- Design & Site Coordinators Row -->
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px;">
        <div class="card" style="padding: 6px; text-align: center;">
          <img src="${arshiyaImg}" style="width: 48px; height: 58px; object-fit: cover; object-position: top; border-radius: 4px; margin: 0 auto 3px auto;" alt="Arshiya">
          <p style="font-size: 7pt; color: #fff; margin: 0; font-weight: bold;">Arshiya</p>
          <p style="font-size: 6pt; color: #A1A1AA; margin: 0;">Interior Design</p>
        </div>
        <div class="card" style="padding: 6px; text-align: center;">
          <img src="${varshaImg}" style="width: 48px; height: 58px; object-fit: cover; object-position: top; border-radius: 4px; margin: 0 auto 3px auto;" alt="Varsha">
          <p style="font-size: 7pt; color: #fff; margin: 0; font-weight: bold;">Varsha</p>
          <p style="font-size: 6pt; color: #A1A1AA; margin: 0;">Interior Design</p>
        </div>
        <div class="card" style="padding: 6px; text-align: center;">
          <img src="${azharImg}" style="width: 48px; height: 58px; object-fit: cover; object-position: top; border-radius: 4px; margin: 0 auto 3px auto;" alt="Azhar">
          <p style="font-size: 7pt; color: #fff; margin: 0; font-weight: bold;">Azhar</p>
          <p style="font-size: 6pt; color: #A1A1AA; margin: 0;">3D Visualization</p>
        </div>
        <div class="card" style="padding: 6px; text-align: center;">
          <img src="${sunilImg}" style="width: 48px; height: 58px; object-fit: cover; object-position: top; border-radius: 4px; margin: 0 auto 3px auto;" alt="Sunil">
          <p style="font-size: 7pt; color: #fff; margin: 0; font-weight: bold;">Sunil</p>
          <p style="font-size: 6pt; color: #A1A1AA; margin: 0;">Project Head</p>
        </div>
        <div class="card" style="padding: 6px; text-align: center;">
          <img src="${rajeshImg}" style="width: 48px; height: 58px; object-fit: cover; object-position: top; border-radius: 4px; margin: 0 auto 3px auto;" alt="Rajesh">
          <p style="font-size: 7pt; color: #fff; margin: 0; font-weight: bold;">Rajesh</p>
          <p style="font-size: 6pt; color: #A1A1AA; margin: 0;">Site Coord.</p>
        </div>
        <div class="card" style="padding: 6px; text-align: center;">
          <img src="${merajImg}" style="width: 48px; height: 58px; object-fit: cover; object-position: top; border-radius: 4px; margin: 0 auto 3px auto;" alt="Meraj">
          <p style="font-size: 7pt; color: #fff; margin: 0; font-weight: bold;">Meraj</p>
          <p style="font-size: 6pt; color: #A1A1AA; margin: 0;">Site Coord.</p>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 10</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 11: COST ESTIMATOR & BUDGETING (CostCalculatorSection) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">Turnkey Cost Estimates</div>
      </div>
      <div class="header-meta">Section 08 · Transparent BOQ Pricing</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Cost Transparency</span>
        <h2 class="section-title">Turnkey Investment &amp; Timelines</h2>
        <p style="font-size: 8.5pt; color: #A1A1AA; margin-bottom: 5mm;">
          Clear, all-inclusive budgets based on genuine high-grade materials and verified artisan craftsmanship across Mumbai.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 5mm;">
        <!-- 2BHK -->
        <div class="card" style="padding: 14px; text-align: center;">
          <span class="pill" style="font-size: 7pt;">2BHK Turnkey</span>
          <h3 class="font-serif" style="font-size: 18pt; color: #FCF6BA; margin: 6px 0 2px 0;">₹18–25 L</h3>
          <p style="font-size: 7.5pt; color: #D4AF37; font-family: monospace;">60–75 Days Handover</p>
          <ul style="text-align: left; font-size: 7pt; color: #A1A1AA; padding-left: 14px; margin-top: 6px; line-height: 1.45;">
            <li>Full civil &amp; vitrified flooring</li>
            <li>Modular kitchen with Blum runners</li>
            <li>Concealed MEP &amp; LED cove lights</li>
            <li>Custom master bedroom wardrobes</li>
            <li>10-Year anti-termite warranty</li>
          </ul>
        </div>

        <!-- 3BHK -->
        <div class="card" style="padding: 14px; text-align: center; border: 1px solid rgba(212,175,55,0.4); background: #141414;">
          <span class="pill" style="font-size: 7pt;">3BHK Turnkey</span>
          <h3 class="font-serif" style="font-size: 18pt; color: #FCF6BA; margin: 6px 0 2px 0;">₹28–40 L</h3>
          <p style="font-size: 7.5pt; color: #D4AF37; font-family: monospace;">75–90 Days Handover</p>
          <ul style="text-align: left; font-size: 7pt; color: #A1A1AA; padding-left: 14px; margin-top: 6px; line-height: 1.45;">
            <li>Italian marble / quartz counters</li>
            <li>Fluted wall paneling &amp; TV unit</li>
            <li>Custom bar counter &amp; dining buffet</li>
            <li>Hafele soft-close hardware</li>
            <li>Smart ambient lighting zones</li>
          </ul>
        </div>

        <!-- 4BHK / Villa -->
        <div class="card" style="padding: 14px; text-align: center;">
          <span class="pill" style="font-size: 7pt;">4BHK / Penthouse</span>
          <h3 class="font-serif" style="font-size: 18pt; color: #FCF6BA; margin: 6px 0 2px 0;">₹45–75 L+</h3>
          <p style="font-size: 7.5pt; color: #D4AF37; font-family: monospace;">90–120 Days Handover</p>
          <ul style="text-align: left; font-size: 7pt; color: #A1A1AA; padding-left: 14px; margin-top: 6px; line-height: 1.45;">
            <li>Full home spatial remodeling</li>
            <li>Bespoke walk-in wardrobe suites</li>
            <li>Acoustic home theater insulation</li>
            <li>Imported designer sanitaryware</li>
            <li>Dedicated site project manager</li>
          </ul>
        </div>
      </div>

      <div class="card" style="padding: 12px;">
        <h4 class="font-serif" style="font-size: 10pt; color: #fff; margin: 0 0 4px 0;">Scope of Turnkey Inclusions</h4>
        <p style="font-size: 7.5pt; color: #A1A1AA; line-height: 1.45; margin: 0;">
          All packages include: Demolition, debris disposal, IS 710 marine carpentry, internal painting (Asian Paints Royale), concealed wiring (Finolex/Polycab), false ceilings (Gyproc), architectural lighting, modular hardware, hardware installation, and comprehensive post-handover cleaning.
        </p>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 11</div>
    </div>
  </div>

  <!-- ======================================================================= -->
  <!-- PAGE 12: FAQ, DIRECT CONTACT & BACK COVER (FaqSection & ContactSection) -->
  <!-- ======================================================================= -->
  <div class="page">
    <div class="doc-header">
      <div>
        <div class="brand-title">BOMBAY STUDIO</div>
        <div class="brand-sub">FAQ &amp; Architectural Walkthrough</div>
      </div>
      <div class="header-meta">Section 09 · Inquiries &amp; Consultations</div>
    </div>

    <div style="flex: 1; padding: 5mm 0; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="section-badge">Client FAQs</span>
        <h2 class="section-title">Frequently Asked Questions</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 5mm;">
          <div class="card" style="padding: 10px;">
            <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0 0 3px 0; font-weight: bold;">What is the cost per sqft for turnkey interiors?</p>
            <p style="font-size: 7.2pt; color: #A1A1AA; margin: 0;">Typically ₹1,800 to ₹3,500/sqft depending on finishes (Italian marble, veneer vs laminate, automation). Every project has an itemized BOQ.</p>
          </div>
          <div class="card" style="padding: 10px;">
            <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0 0 3px 0; font-weight: bold;">What is the handover timeline?</p>
            <p style="font-size: 7.2pt; color: #A1A1AA; margin: 0;">2BHK: 60–75 days. 3BHK: 75–90 days. 4BHK: 90–120 days. Milestones are contractually guaranteed with zero unapproved delays.</p>
          </div>
          <div class="card" style="padding: 10px;">
            <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0 0 3px 0; font-weight: bold;">What warranty does Bombay Studio provide?</p>
            <p style="font-size: 7.2pt; color: #A1A1AA; margin: 0;">A formal 10-Year Warranty on IS 710 Marine Plywood joinery and anti-termite treatment, plus manufacturer warranties on Blum/Hafele hardware.</p>
          </div>
          <div class="card" style="padding: 10px;">
            <p class="font-serif" style="font-size: 8.5pt; color: #fff; margin: 0 0 3px 0; font-weight: bold;">Do you handle municipal &amp; society approvals?</p>
            <p style="font-size: 7.2pt; color: #A1A1AA; margin: 0;">Yes. We handle structural load-bearing assessments, societies liaisoning, work permissions, and debris disposal permits across Mumbai.</p>
          </div>
        </div>

        <!-- Consultation Booking Card -->
        <div class="gold-box" style="padding: 16px; text-align: center;">
          <h3 class="font-serif" style="font-size: 14pt; color: #FFFFFF; margin: 0 0 4px 0;">
            Schedule an Architectural Walkthrough
          </h3>
          <p style="font-size: 8.5pt; color: #E4E4E7; max-width: 440px; margin: 0 auto 10px auto; line-height: 1.4;">
            Book a site assessment, layout discussion, and transparent turnkey BOQ estimate with Principal Architect Ar. Aakhir Choudhary.
          </p>

          <div style="display: flex; justify-content: center; gap: 16px; font-size: 8.5pt; margin-top: 8px;">
            <div style="background: #141414; padding: 8px 16px; border-radius: 8px; border: 1px solid rgba(212,175,55,0.4);">
              <span style="color: #A1A1AA; font-size: 7pt; text-transform: uppercase;">Direct Line</span><br>
              <strong style="color: #FCF6BA; font-size: 11pt;">+91 707070 4181</strong>
            </div>
            <div style="background: #141414; padding: 8px 16px; border-radius: 8px; border: 1px solid rgba(212,175,55,0.4);">
              <span style="color: #A1A1AA; font-size: 7pt; text-transform: uppercase;">Direct Email</span><br>
              <strong style="color: #FCF6BA; font-size: 11pt;">info@bombaystudio.in</strong>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; font-size: 7.5pt; color: #A1A1AA;">
        <p style="margin: 0;"><strong>BOMBAY STUDIO ARCHITECTURAL OFFICE</strong></p>
        <p style="margin: 2px 0;">Studio 4B, Western Heights, Link Road, Andheri West, Mumbai 400053, Maharashtra, India</p>
        <p style="margin: 2px 0; color: #D4AF37;">Website: https://bombaystudio.in</p>
      </div>
    </div>

    <div class="doc-footer">
      <div>Developed in Germany 🇩🇪 by Nordible ↗</div>
      <div>bombaystudio.in · +91 707070 4181</div>
      <div>Page 12 (Conclusion)</div>
    </div>
  </div>

</body>
</html>`;

const outHtml = path.join(projectRoot, 'public', 'portfolio-monograph-preview.html');
const outPdf = path.join(projectRoot, 'public', 'bombay-studio-portfolio.pdf');

fs.writeFileSync(outHtml, htmlContent, 'utf8');
console.log("HTML Monograph saved to:", outHtml);

console.log("Rendering PDF via Microsoft Edge Headless engine...");
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const result = spawnSync(edgePath, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${outPdf}`,
  outHtml,
], { stdio: 'inherit' });

if (result.error) {
  console.error("Spawn error:", result.error);
}

if (fs.existsSync(outPdf)) {
  const stat = fs.statSync(outPdf);
  const buf = fs.readFileSync(outPdf);
  const pageMatches = buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g);
  const pageCount = pageMatches ? pageMatches.length : 0;
  console.log(`SUCCESS! Generated ${pageCount}-page branded portfolio PDF: ${outPdf} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
} else {
  console.error("Failed to generate PDF!");
}
