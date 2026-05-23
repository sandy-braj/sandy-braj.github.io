import sharp from 'sharp';

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f7f7f4"/>
  <rect x="96" y="82" width="1008" height="466" fill="#ffffff" stroke="#d6d6d0"/>
  <path d="M176 150v330" stroke="#d6d6d0" stroke-width="2"/>
  <rect x="157" y="178" width="38" height="30" fill="#ffffff" stroke="#111111"/>
  <rect x="157" y="296" width="38" height="30" fill="#ffffff" stroke="#111111"/>
  <rect x="157" y="414" width="38" height="30" fill="#ffffff" stroke="#111111"/>
  <text x="165" y="199" fill="#111111" font-family="Georgia, serif" font-size="16">Pi</text>
  <text x="166" y="317" fill="#111111" font-family="Georgia, serif" font-size="16">Pt</text>
  <text x="164" y="435" fill="#111111" font-family="Georgia, serif" font-size="16">Px</text>
  <text x="238" y="252" fill="#111111" font-family="Georgia, serif" font-size="78" font-weight="700" letter-spacing="-4">Sandya Baratha Raj</text>
  <path d="M240 292h700" stroke="#d6d6d0" stroke-width="2"/>
  <text x="240" y="358" fill="#333333" font-family="Georgia, serif" font-size="32">Publications · Patents · Media · Projects</text>
  <text x="240" y="432" fill="#666666" font-family="Georgia, serif" font-size="28" font-style="italic">Sydney, Australia · sandy-braj.github.io</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 92, mozjpeg: true }).toFile('public/og-image.jpg');
