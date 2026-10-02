import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public/images/landings/solea-sneakers');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to create studio sneaker SVGs
function createSneakerSVG(brand: string, model: string, primaryColor: string, secondaryColor: string, accentColor: string, bgGradient: string[]) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="${bgGradient[0]}" />
      <stop offset="100%" stop-color="${bgGradient[1]}" />
    </radialGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#000" flood-opacity="0.18"/>
    </filter>
    <filter id="soleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${primaryColor}" />
      <stop offset="50%" stop-color="${secondaryColor}" />
      <stop offset="100%" stop-color="${accentColor}" />
    </linearGradient>
    <linearGradient id="upperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${secondaryColor}" />
      <stop offset="100%" stop-color="${primaryColor}" />
    </linearGradient>
  </defs>

  <!-- Studio Background -->
  <rect width="800" height="600" fill="url(#bgGrad)" />

  <!-- Studio Floor Ellipse Shadow -->
  <ellipse cx="400" cy="480" rx="280" ry="24" fill="#000" opacity="0.12" filter="blur(10px)" />
  <ellipse cx="400" cy="475" rx="220" ry="14" fill="#000" opacity="0.18" filter="blur(6px)" />

  <!-- Sneaker Graphic Group (rotated slightly for dynamic editorial stance) -->
  <g transform="translate(400, 290) rotate(-6) translate(-360, -200)" filter="url(#softShadow)">

    <!-- Outer Midsole / Cushioning Pods -->
    <path d="M 120,330 C 120,330 180,360 280,360 C 380,360 480,355 580,320 C 610,310 630,280 620,250 C 600,240 560,245 520,250 C 420,260 320,265 220,250 C 160,240 130,270 120,330 Z" fill="${accentColor}" opacity="0.9" />

    <!-- Main Midsole Layer -->
    <path d="M 125,325 C 190,350 290,350 390,345 C 490,340 570,315 610,275 C 600,260 560,262 500,265 C 400,270 290,270 200,260 C 150,255 130,280 125,325 Z" fill="${primaryColor}" />

    <!-- Air Cushioning Pod Windows -->
    <g fill="${accentColor}" opacity="0.85">
      <rect x="220" y="305" width="45" height="18" rx="9" />
      <rect x="280" y="310" width="50" height="18" rx="9" />
      <rect x="340" y="310" width="50" height="18" rx="9" />
      <rect x="400" y="305" width="45" height="18" rx="9" />
    </g>

    <!-- Upper Body Mesh Base -->
    <path d="M 140,270 C 170,220 220,170 300,150 C 360,135 430,160 490,200 C 530,225 570,245 605,260 C 560,268 480,268 380,262 C 280,256 180,255 140,270 Z" fill="url(#upperGrad)" />

    <!-- Layered Overlay Panels -->
    <path d="M 220,260 C 260,210 320,180 390,175 C 440,172 480,195 520,225 C 470,235 400,240 320,238 C 260,236 230,248 220,260 Z" fill="${secondaryColor}" opacity="0.9" />

    <!-- Heel Counter / Ankle Collar -->
    <path d="M 140,270 C 130,230 145,185 185,160 C 215,140 250,150 275,185 C 240,210 180,240 140,270 Z" fill="${primaryColor}" />
    <path d="M 180,165 C 195,145 225,140 245,160 C 220,185 195,190 180,165 Z" fill="${accentColor}" />

    <!-- Dynamic Swoosh / Stripe Motif -->
    <path d="M 260,230 C 330,190 420,190 510,235 C 460,220 380,210 300,225 Z" fill="${accentColor}" opacity="0.95" />

    <!-- Lacing Cage & Eyelets -->
    <g stroke="${primaryColor}" stroke-width="4" stroke-linecap="round" opacity="0.8">
      <line x1="330" y1="170" x2="350" y2="200" />
      <line x1="360" y1="175" x2="380" y2="205" />
      <line x1="390" y1="182" x2="410" y2="210" />
      <line x1="420" y1="190" x2="440" y2="218" />
      <line x1="450" y1="200" x2="470" y2="225" />
    </g>

    <!-- Outsole Grip Accents -->
    <path d="M 120,330 C 130,345 160,355 200,358 L 195,368 C 150,365 125,350 115,335 Z" fill="#111" />
    <path d="M 520,335 C 560,325 595,305 615,280 L 622,290 C 600,318 560,338 515,348 Z" fill="#111" />
  </g>

  <!-- High-End Typographic Studio Watermark -->
  <text x="50%" y="11%" text-anchor="middle" fill="${primaryColor}" opacity="0.08" font-family="sans-serif" font-weight="900" font-size="72" letter-spacing="12">${brand}</text>
  <text x="50%" y="92%" text-anchor="middle" fill="#111111" opacity="0.3" font-family="sans-serif" font-weight="600" font-size="14" letter-spacing="4">SOLEA STUDIO ARCHIVE — ${model.toUpperCase()}</text>
</svg>`;
}

// Helper to create category banner SVGs
function createCategorySVG(title: string, bgGradient: string[], accentColor: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}" />
      <stop offset="100%" stop-color="${bgGradient[1]}" />
    </linearGradient>
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#catGrad)" />
  <rect width="800" height="500" fill="url(#gridPattern)" />

  <!-- Abstract Sport Motion Lines -->
  <path d="M-100,400 C200,300 400,500 900,200" fill="none" stroke="${accentColor}" stroke-width="3" opacity="0.25" />
  <path d="M-50,450 C250,350 450,550 950,250" fill="none" stroke="${accentColor}" stroke-width="1.5" opacity="0.15" />

  <!-- Editorial Watermark -->
  <text x="50%" y="55%" text-anchor="middle" fill="#ffffffffffff" opacity="0.06" font-family="sans-serif" font-weight="900" font-size="120" letter-spacing="16">${title}</text>
</svg>`;
}

// Sneaker assets list
const sneakers = [
  { file: 'hero-sneaker.svg', brand: 'SOLEA', model: 'AIR MAX DN LUXE', primary: '#111111', secondary: '#3A3A3A', accent: '#A89B84', bg: ['#D0D8D5', '#BAC5C1'] },
  { file: 'sneaker-nike-dn.svg', brand: 'NIKE', model: 'AIR MAX DN', primary: '#181818', secondary: '#4A4A4A', accent: '#A89B84', bg: ['#F1F1EE', '#E3E3DE'] },
  { file: 'sneaker-samba.svg', brand: 'ADIDAS', model: 'SAMBA OG', primary: '#FAFAF7', secondary: '#111111', accent: '#C8A97E', bg: ['#F4F4F0', '#E5E5DF'] },
  { file: 'sneaker-nb9060.svg', brand: 'NEW BALANCE', model: '9060 DRIFT', primary: '#A3A39A', secondary: '#4F4F48', accent: '#111111', bg: ['#EAEAE5', '#DDDCD5'] },
  { file: 'sneaker-kayano.svg', brand: 'ASICS', model: 'GEL-KAYANO 30', primary: '#2D3748', secondary: '#718096', accent: '#A89B84', bg: ['#EDF2F7', '#E2E8F0'] },
  { file: 'sneaker-jordan.svg', brand: 'JORDAN', model: 'LUKA 2 NEXT', primary: '#1A202C', secondary: '#2D3748', accent: '#CBD5E0', bg: ['#E2E8F0', '#CBD5E0'] },
  { file: 'sneaker-palermo.svg', brand: 'PUMA', model: 'PALERMO RETRO', primary: '#C5A880', secondary: '#534B42', accent: '#111111', bg: ['#F7F5F0', '#EAE5D9'] },
  { file: 'sneaker-vomero.svg', brand: 'NIKE', model: 'ZOOM VOMERO 5', primary: '#8C8C84', secondary: '#2C2C28', accent: '#A89B84', bg: ['#EBEBE6', '#DCDCD5'] },
  { file: 'sneaker-ultraboost.svg', brand: 'ADIDAS', model: 'ULTRABOOST LIGHT', primary: '#181818', secondary: '#383838', accent: '#A89B84', bg: ['#F0F0EC', '#E2E2DC'] },
  { file: 'sneaker-nb530.svg', brand: 'NEW BALANCE', model: '530 HERITAGE', primary: '#E2E2DC', secondary: '#888880', accent: '#111111', bg: ['#F5F5F0', '#E8E8E0'] },
  { file: 'sneaker-campus.svg', brand: 'ADIDAS', model: 'CAMPUS 00S', primary: '#2A2A2A', secondary: '#141414', accent: '#FAFAF7', bg: ['#ECECE6', '#DDDCD5'] },
  { file: 'sneaker-airmax1.svg', brand: 'NIKE', model: 'AIR MAX 1 86', primary: '#8B0000', secondary: '#FAFAF7', accent: '#111111', bg: ['#F8F6F2', '#EFECE6'] },
  { file: 'sneaker-cloudmonster.svg', brand: 'ON RUNNING', model: 'CLOUDMONSTER 2', primary: '#222222', secondary: '#555555', accent: '#A89B84', bg: ['#EEEEEA', '#E0E0DA'] },
];

for (const s of sneakers) {
  const content = createSneakerSVG(s.brand, s.model, s.primary, s.secondary, s.accent, s.bg);
  fs.writeFileSync(path.join(outputDir, s.file), content, 'utf-8');
}

// Category & Banners
const catRunning = createCategorySVG('RUNNING', ['#1C2120', '#0E1110'], '#A89B84');
fs.writeFileSync(path.join(outputDir, 'cat-running.svg'), catRunning, 'utf-8');

const catTraining = createCategorySVG('TRAINING', ['#252321', '#121110'], '#C8A97E');
fs.writeFileSync(path.join(outputDir, 'cat-training.svg'), catTraining, 'utf-8');

const catBasketball = createCategorySVG('BASKETBALL', ['#1B1D22', '#0E0F12'], '#8A9B93');
fs.writeFileSync(path.join(outputDir, 'cat-basketball.svg'), catBasketball, 'utf-8');

const catLifestyle = createCategorySVG('LIFESTYLE', ['#201F1D', '#11100F'], '#A89B84');
fs.writeFileSync(path.join(outputDir, 'cat-lifestyle.svg'), catLifestyle, 'utf-8');

const editorialStory = createCategorySVG('EDITORIAL', ['#18191A', '#0D0E0F'], '#A89B84');
fs.writeFileSync(path.join(outputDir, 'editorial-story.svg'), editorialStory, 'utf-8');

const limitedBg = createCategorySVG('LIMITED DROP', ['#151515', '#0A0A0A'], '#A89B84');
fs.writeFileSync(path.join(outputDir, 'limited-drop-bg.svg'), limitedBg, 'utf-8');

const preview = createSneakerSVG('SOLEA', 'LIMITED COLLECTION', '#111111', '#333333', '#A89B84', ['#C8D1CE', '#A8B4B0']);
fs.writeFileSync(path.join(outputDir, 'solea-preview.svg'), preview, 'utf-8');

console.log('Successfully generated local sneaker assets!');
