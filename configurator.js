/* ==========================================================================
   ROCKDOOR COMPOSITE DOORS - 3D INTERACTIVE DOOR CONFIGURATOR ENGINE
   Handles dynamic canvas/SVG rendering, style selection, color tinting,
   glass pattern overlays, hardware finish compositing, custom house photo uploader,
   and instant specification/quote modal triggers.
   ========================================================================== */

class DoorConfigurator {
  constructor(canvasContainerId, controlsContainerId) {
    this.canvasContainer = document.getElementById(canvasContainerId);
    this.controlsContainer = document.getElementById(controlsContainerId);
    
    // State
    this.state = {
      style: 'arden', // arden, windsor, malvern, heritage
      color: 'anthracite', // anthracite, black, agate, slate, white, chartwell, duckegg, golden_oak, irish_oak, rosewood
      glass: 'diamond', // clear, satin, diamond, horizon
      hardware: 'chrome', // chrome, black, brass, satin
      letterplate: true,
      knocker: true,
      customHouseImage: null,
      doorScale: 1.0,
      doorOffsetX: 0,
      doorOffsetY: 0
    };

    // Color definitions
    this.colors = {
      anthracite: { name: 'Anthracite Grey', hex: '#2f353b', ral: 'RAL 7016' },
      black: { name: 'Midnight Black', hex: '#18191b', ral: 'RAL 9005' },
      agate: { name: 'Agate Grey', hex: '#7d847c', ral: 'RAL 7038' },
      slate: { name: 'Slate Grey', hex: '#4b5258', ral: 'RAL 7015' },
      white: { name: 'Pebble White', hex: '#e8e7e3', ral: 'RAL 9016' },
      chartwell: { name: 'Chartwell Green', hex: '#7a967f', ral: 'BS 14C35' },
      duckegg: { name: 'Duck Egg Blue', hex: '#8da8a6', ral: 'RAL 210 70 10' },
      golden_oak: { name: 'Golden Oak', hex: '#96582a', ral: 'Timber Grain' },
      irish_oak: { name: 'Irish Oak', hex: '#b57f49', ral: 'Timber Grain' },
      rosewood: { name: 'Rosewood', hex: '#472217', ral: 'Timber Grain' }
    };

    // Style definitions
    this.styles = {
      arden: { name: 'Arden', category: 'Modern', basePrice: 1250, description: 'Contemporary linear 3-panel glazing design' },
      windsor: { name: 'Windsor', category: 'Traditional', basePrice: 1180, description: 'Classic arched twin glazing with moulded lower panel' },
      malvern: { name: 'Malvern', category: 'Cottage', basePrice: 1320, description: 'Vertical tongue & groove cottage plank with diamond aperture' },
      heritage: { name: 'Heritage Stable', category: 'Stable', basePrice: 1450, description: 'Dual-opening horizontal split door with quad upper glazing' }
    };

    this.hardwareFinshes = {
      chrome: { name: 'Polished Chrome', color: '#e2e8f0', gradient: 'linear-gradient(135deg, #f8fafc, #94a3b8)' },
      black: { name: 'Matt Black', color: '#1e293b', gradient: 'linear-gradient(135deg, #334155, #0f172a)' },
      brass: { name: 'Antique Brass', color: '#d4af37', gradient: 'linear-gradient(135deg, #fef08a, #b45309)' },
      satin: { name: 'Brushed Stainless', color: '#cbd5e1', gradient: 'linear-gradient(135deg, #e2e8f0, #64748b)' }
    };

    this.init();
  }

  init() {
    this.renderCanvas();
    this.bindEvents();
    this.updatePriceEstimate();
  }

  setState(key, value) {
    this.state[key] = value;
    this.renderCanvas();
    this.updatePriceEstimate();
    this.triggerCustomEvent('doorConfigChange', this.state);
  }

  renderCanvas() {
    if (!this.canvasContainer) return;

    const currentColor = this.colors[this.state.color] || this.colors.anthracite;
    const currentStyle = this.state.style;
    const currentGlass = this.state.glass;
    const currentHardware = this.state.hardware;
    const hwColor = this.hardwareFinshes[currentHardware]?.color || '#e2e8f0';

    let glassPatternSVG = '';
    if (currentGlass === 'diamond') {
      glassPatternSVG = `<polygon points="30,10 50,40 30,70 10,40" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
                         <line x1="10" y1="40" x2="50" y2="40" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
                         <line x1="30" y1="10" x2="30" y2="70" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>`;
    } else if (currentGlass === 'horizon') {
      glassPatternSVG = `<line x1="5" y1="15" x2="55" y2="15" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
                         <line x1="5" y1="35" x2="55" y2="35" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
                         <line x1="5" y1="55" x2="55" y2="55" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>`;
    } else if (currentGlass === 'satin') {
      glassPatternSVG = `<rect width="100%" height="100%" fill="rgba(255,255,255,0.25)" />`;
    }

    let doorPanelsSVG = '';
    if (currentStyle === 'arden') {
      // 3 vertical glazing strips
      doorPanelsSVG = `
        <rect x="25" y="40" width="45" height="140" fill="url(#glassGrad)" stroke="#1e293b" stroke-width="2" rx="2" />
        <rect x="775" y="40" width="45" height="140" fill="url(#glassGrad)" stroke="#1e293b" stroke-width="2" rx="2" />
        <g transform="translate(25, 40)">${glassPatternSVG}</g>
        <rect x="25" y="200" width="150" height="220" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="3" rx="4" />
      `;
    } else if (currentStyle === 'windsor') {
      // Twin arched glass
      doorPanelsSVG = `
        <path d="M 30,90 A 20,20 0 0,1 70,90 L 70,180 L 30,180 Z" fill="url(#glassGrad)" stroke="#1e293b" stroke-width="2"/>
        <path d="M 130,90 A 20,20 0 0,1 170,90 L 170,180 L 130,180 Z" fill="url(#glassGrad)" stroke="#1e293b" stroke-width="2"/>
        <g transform="translate(35, 100)">${glassPatternSVG}</g>
        <g transform="translate(135, 100)">${glassPatternSVG}</g>
        <rect x="30" y="220" width="140" height="200" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="3" rx="4" />
      `;
    } else if (currentStyle === 'malvern') {
      // Cottage plank with diamond window
      doorPanelsSVG = `
        <!-- Vertical plank lines -->
        <line x1="40" y1="20" x2="40" y2="440" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <line x1="80" y1="20" x2="80" y2="440" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <line x1="120" y1="20" x2="120" y2="440" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <line x1="160" y1="20" x2="160" y2="440" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <!-- Diamond aperture -->
        <polygon points="100,50 140,100 100,150 60,100" fill="url(#glassGrad)" stroke="#1e293b" stroke-width="2" />
        <g transform="translate(70, 70)">${glassPatternSVG}</g>
      `;
    } else if (currentStyle === 'heritage') {
      // Stable door split
      doorPanelsSVG = `
        <line x1="20" y1="230" x2="180" y2="230" stroke="#000000" stroke-width="4" />
        <rect x="35" y="40" width="130" height="150" fill="url(#glassGrad)" stroke="#1e293b" stroke-width="2" rx="4" />
        <g transform="translate(45, 50)">${glassPatternSVG}</g>
        <rect x="35" y="250" width="130" height="170" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="3" rx="4" />
      `;
    }

    // Hardware elements
    let hardwareSVG = `
      <!-- Handle -->
      <rect x="165" y="235" width="8" height="60" fill="${hwColor}" rx="3" filter="drop-shadow(2px 2px 3px rgba(0,0,0,0.4))" />
      <circle cx="169" cy="245" r="4" fill="${hwColor}" />
    `;

    if (this.state.letterplate) {
      hardwareSVG += `
        <!-- Letterplate -->
        <rect x="50" y="320" width="100" height="24" fill="${hwColor}" rx="2" stroke="rgba(0,0,0,0.3)" filter="drop-shadow(1px 2px 4px rgba(0,0,0,0.3))" />
        <rect x="55" y="325" width="90" height="14" fill="rgba(0,0,0,0.2)" rx="1" />
      `;
    }

    if (this.state.knocker) {
      hardwareSVG += `
        <!-- Urn Knocker -->
        <path d="M 100,160 Q 100,180 90,195 Q 100,205 110,195 Q 100,180 100,160 Z" fill="${hwColor}" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.4))" />
        <circle cx="100" cy="160" r="6" fill="${hwColor}" />
      `;
    }

    const svgHTML = `
      <svg width="100%" height="100%" viewBox="0 0 200 460" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="doorFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
          </linearGradient>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.85"/>
            <stop offset="50%" stop-color="#bae6fd" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.8"/>
          </linearGradient>
          <filter id="doorShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="4" dy="8" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/>
          </filter>
        </defs>

        <!-- Outer Frame -->
        <rect x="5" y="5" width="190" height="450" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4" rx="4" filter="url(#doorShadow)" />
        <rect x="12" y="12" width="176" height="436" fill="#1e293b" />

        <!-- Door Slab -->
        <rect x="18" y="18" width="164" height="424" fill="${currentColor.hex}" rx="2" />
        <rect x="18" y="18" width="164" height="424" fill="url(#doorFrameGrad)" rx="2" />

        <!-- Door Panels & Glazing -->
        ${doorPanelsSVG}

        <!-- Hardware & Furniture -->
        ${hardwareSVG}
      </svg>
    `;

    const bgImageHTML = this.state.customHouseImage 
      ? `<img src="${this.state.customHouseImage}" class="house-photo-bg" alt="Custom House Background" />`
      : `<img src="assets/hero_composite_door.jpg" class="house-photo-bg" alt="House Background" style="filter: brightness(0.65);" />`;

    this.canvasContainer.innerHTML = `
      ${bgImageHTML}
      <div class="canvas-wrapper" style="max-width: 90%; max-height: 90%; margin: auto; transform: scale(${this.state.doorScale}) translate(${this.state.doorOffsetX}px, ${this.state.doorOffsetY}px);">
        ${svgHTML}
      </div>
    `;
  }

  updatePriceEstimate() {
    const styleObj = this.styles[this.state.style] || this.styles.arden;
    let price = styleObj.basePrice;

    if (this.state.glass === 'diamond') price += 85;
    if (this.state.glass === 'horizon') price += 60;
    if (this.state.hardware === 'brass') price += 45;
    if (this.state.color.includes('oak') || this.state.color === 'rosewood') price += 110;

    const priceMin = Math.round(price * 0.95);
    const priceMax = Math.round(price * 1.08);

    const priceEl = document.getElementById('config-price-display');
    if (priceEl) {
      priceEl.textContent = `£${priceMin} - £${priceMax}`;
    }

    const summaryStyleEl = document.getElementById('summary-door-style');
    if (summaryStyleEl) summaryStyleEl.textContent = styleObj.name;

    const summaryColorEl = document.getElementById('summary-door-color');
    if (summaryColorEl) summaryColorEl.textContent = this.colors[this.state.color]?.name || this.state.color;
  }

  bindEvents() {
    // Custom House Upload
    const uploadInput = document.getElementById('house-photo-input');
    if (uploadInput) {
      uploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.setState('customHouseImage', event.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  triggerCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    window.dispatchEvent(event);
  }
}

// Global initialization helper
window.DoorConfigurator = DoorConfigurator;
