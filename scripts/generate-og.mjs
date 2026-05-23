import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const width = 1200;
const height = 630;
const profilePath = fileURLToPath(new URL('../public/profile.png', import.meta.url));
const outputPath = fileURLToPath(new URL('../public/og-image.jpg', import.meta.url));

const icons = [
  'M5 4.75A2.75 2.75 0 0 1 7.75 2H20v16.5h-9.75A2.25 2.25 0 0 0 8 20.75V5.5A.75.75 0 0 0 7.25 4.75H5Zm0 0v15.5A1.75 1.75 0 0 0 6.75 22H20M11 6h5m-5 4h6m-6 4h4',
  'M12 2.75 14.15 7.1l4.8.7-3.47 3.38.82 4.78L12 13.7l-4.3 2.26.82-4.78L5.05 7.8l4.8-.7L12 2.75Zm0 11v7.5m-4 0h8',
  'M4 7.5h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H4v-11Zm13 3 3-2v9l-3-2M7 10.5h4m-4 3h6',
  'M4 7h7l2 2h7v9.5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5V7Zm0 0V5h6l2 2'
];

const iconMarkup = icons
  .map(
    (path, index) => `
      <g transform="translate(${714 + index * 82} 456)">
        <rect width="54" height="54" fill="#ffffff" stroke="#d6d6d0"/>
        <svg x="15" y="15" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="${path}"/>
        </svg>
      </g>`
  )
  .join('');

const frameSvg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#f7f7f4"/>
    <rect x="76" y="56" width="1048" height="518" fill="#ffffff" stroke="#d6d6d0"/>
    <text x="126" y="226" fill="#111111" font-family="Georgia, serif" font-size="56" font-weight="700" letter-spacing="-2.2">Sandya Baratha Raj</text>
    <line x1="126" y1="268" x2="618" y2="268" stroke="#d6d6d0" stroke-width="2"/>
    <text x="126" y="320" fill="#666666" font-family="Georgia, serif" font-size="30">Data Science and AI Leader</text>
    <text x="126" y="372" fill="#666666" font-family="Georgia, serif" font-size="30">Sydney, Australia</text>
    <text x="126" y="518" fill="#666666" font-family="Georgia, serif" font-size="27" font-style="italic">sandy-braj.github.io</text>
    ${iconMarkup}
  </svg>`;

const profileMask = Buffer.from(`
  <svg width="248" height="248" viewBox="0 0 248 248" xmlns="http://www.w3.org/2000/svg">
    <circle cx="124" cy="124" r="118" fill="#ffffff"/>
  </svg>`);

const profile = await sharp(profilePath)
  .resize(248, 248, {
    fit: 'cover',
    position: 'attention'
  })
  .composite([{ input: profileMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp({
  create: {
    width,
    height,
    channels: 4,
    background: '#f7f7f4'
  }
})
  .composite([
    { input: Buffer.from(frameSvg) },
    { input: profile, left: 840, top: 96 }
  ])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(outputPath);
