/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const vCardData = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Choudhary;Aakhir;;Ar.;',
  'FN:Ar. Aakhir Choudhary',
  'ORG:Bombay Studio',
  'TITLE:Founder & Principal Architect',
  'TEL;TYPE=CELL,VOICE,PREF:+917070704181',
  'TEL;TYPE=WORK,VOICE:+919664384181',
  'EMAIL;TYPE=WORK,INTERNET:aakhir@bombaystudio.in',
  'EMAIL;TYPE=PREF,INTERNET:info@bombaystudio.in',
  'URL:https://bombaystudio.in',
  'ADR;TYPE=WORK:;;111, Evershine Mall, Chincholi Bunder Mindspace;Malad West, Mumbai;Maharashtra;400064;India',
  'X-SOCIALPROFILE;type=instagram:https://www.instagram.com/bombaystudio/',
  'X-SOCIALPROFILE;type=linkedin:https://www.linkedin.com/company/bombay-studio-in/',
  'NOTE:Bombay Studio — Architecture & Luxury Turnkey Interiors. Est. 1992.',
  'END:VCARD'
].join('\r\n');

async function run() {
  const publicDir = path.join(__dirname, '../public');
  
  // 1. Save .vcf file for direct one-tap download
  const vcfPath = path.join(publicDir, 'founder-vcard.vcf');
  fs.writeFileSync(vcfPath, vCardData, 'utf8');
  console.log('Saved .vcf file to:', vcfPath);

  // 2. Generate crisp high-contrast QR Code PNG encoding the raw vCard
  const qrPngPath = path.join(publicDir, 'founder-vcard-qr.png');
  await QRCode.toFile(qrPngPath, vCardData, {
    errorCorrectionLevel: 'M',
    margin: 2,
    scale: 8,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  });
  console.log('Saved QR PNG to:', qrPngPath, 'bytes:', fs.statSync(qrPngPath).size);

  // 3. Also generate SVG for perfect vector scalability
  const qrSvgPath = path.join(publicDir, 'founder-vcard-qr.svg');
  const svgString = await QRCode.toString(vCardData, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  });
  fs.writeFileSync(qrSvgPath, svgString, 'utf8');
  console.log('Saved QR SVG to:', qrSvgPath);
}

run().catch(err => {
  console.error('Error generating vcard QR:', err);
  process.exit(1);
});
