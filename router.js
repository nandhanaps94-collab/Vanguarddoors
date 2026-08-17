/* ==========================================================================
   VANGUARD COMPOSITE DOORS - FULL PAGE SPA ROUTER ENGINE
   Handles dynamic FULL PAGE view rendering for 30+ routes with zero modals.
   ========================================================================== */

class AppRouter {
  constructor() {
    this.routes = {
      '/': { title: 'Vanguard Composite Doors | Style, Security & British Engineering', type: 'home' },
      '/home': { title: 'Vanguard Composite Doors | Style, Security & British Engineering', type: 'home' },
      
      '/doors': { title: 'All Composite Doors Range | Vanguard Doors', type: 'page', category: 'doors', name: 'All Composite Doors' },
      '/modern-doors': { title: 'Modern Composite Doors Range | Vanguard Doors', type: 'page', category: 'doors', name: 'Modern Doors' },
      
      '/doors/front-doors': { title: 'Front Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Front Entrance Doors' },
      '/front-doors': { title: 'Front Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Front Entrance Doors' },

      '/doors/back-doors': { title: 'Back Doors & Utility Entrances | Vanguard Doors', type: 'page', category: 'doors', name: 'Back Composite Doors' },
      '/back-doors': { title: 'Back Doors & Utility Entrances | Vanguard Doors', type: 'page', category: 'doors', name: 'Back Composite Doors' },

      '/doors/double-doors': { title: 'Double Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Double Entrance Doors' },
      '/double-doors': { title: 'Double Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Double Entrance Doors' },

      '/doors/french-doors': { title: 'French Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'French Composite Doors' },
      '/french-doors': { title: 'French Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'French Composite Doors' },

      '/doors/stable-doors': { title: 'Stable Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Stable Doors' },
      '/stable-doors': { title: 'Stable Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Stable Doors' },

      '/doors/cottage-doors': { title: 'Cottage Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Cottage Composite Doors' },
      '/cottage-doors': { title: 'Cottage Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Cottage Composite Doors' },

      '/doors/arden': { title: 'Arden Modern Composite Door | Vanguard Doors', type: 'product', model: 'arden', name: 'Arden Modern Linear' },
      '/doors/windsor': { title: 'Windsor Traditional Composite Door | Vanguard Doors', type: 'product', model: 'windsor', name: 'Windsor Traditional Arch' },
      '/doors/malvern': { title: 'Malvern Cottage Composite Door | Vanguard Doors', type: 'product', model: 'malvern', name: 'Malvern Cottage Plank' },
      '/doors/heritage': { title: 'Heritage Split Stable Door | Vanguard Doors', type: 'product', model: 'heritage', name: 'Heritage Split Stable' },

      '/colours': { title: 'Colour Collections | Vanguard Composite Doors', type: 'page', category: 'colours', name: 'Architectural Colour Palette' },
      '/colours/classic': { title: 'Classic Colours | Vanguard Doors', type: 'page', category: 'colours', name: 'Classic Heritage Colours' },
      '/colours/modern': { title: 'Modern Architectural Colours | Vanguard Doors', type: 'page', category: 'colours', name: 'Modern Greys & Blacks' },
      '/colours/trending': { title: 'Trending Door Colours | Vanguard Doors', type: 'page', category: 'colours', name: 'Trending Shades 2026' },
      '/colours/wood': { title: 'Natural Timber Woodgrain Finishes | Vanguard Doors', type: 'page', category: 'colours', name: 'Woodgrain Timber Finishes' },

      '/styles': { title: 'Door Styles | Vanguard Composite Doors', type: 'page', category: 'styles', name: 'Door Styles & Designs' },
      '/styles/modern': { title: 'Modern Contemporary Door Styles | Vanguard Doors', type: 'page', category: 'styles', name: 'Modern Style Collection' },
      '/styles/traditional': { title: 'Traditional Door Styles | Vanguard Doors', type: 'page', category: 'styles', name: 'Traditional Style Collection' },
      '/traditional-doors': { title: 'Traditional Composite Doors | Vanguard Doors', type: 'page', category: 'doors', name: 'Traditional Composite Doors' },

      '/discover': { title: 'Discover Vanguard Engineering | Vanguard Doors', type: 'page', category: 'discover', name: 'Discover Vanguard Engineering' },
      '/discover/unique-doors': { title: 'Unique Engineered Doors | Vanguard Doors', type: 'page', category: 'discover', name: 'Unique Engineered Doors' },
      '/discover/custom-glass': { title: 'Customised Decorative Glass | Vanguard Doors', type: 'page', category: 'discover', name: 'Customised Security Glass' },
      '/discover/colours': { title: 'Standout Durable Colours | Vanguard Doors', type: 'page', category: 'discover', name: 'Standout UV Resistant Colours' },
      '/discover/security': { title: 'High Security Composite Doors | Vanguard Doors', type: 'page', category: 'discover', name: 'Advanced Security Engineering' },
      '/discover/thermal-performance': { title: 'Thermal Performance & A+ Efficiency | Vanguard Doors', type: 'page', category: 'discover', name: 'A+ Rated Thermal Efficiency' },

      '/inspiration': { title: 'Inspiration Gallery | Real Home Entrances', type: 'page', category: 'gallery', name: 'Inspiration Gallery' },
      '/case-studies': { title: 'Real Homes. Real Doors. | Vanguard Case Studies', type: 'page', category: 'cases', name: 'Homeowner Case Studies' },
      '/blog': { title: 'Latest News & Architectural Guides | Vanguard Blog', type: 'page', category: 'blog', name: 'Articles & Design Guides' },
      '/brochures': { title: 'Download Official Brochures | Vanguard Doors', type: 'page', category: 'downloads', name: 'Brochures & Spec Sheets' },
      '/faqs': { title: 'Frequently Asked Questions | Vanguard Doors', type: 'page', category: 'help', name: 'Frequently Asked Questions' },
      '/prices': { title: 'Pricing Guide & Instant Estimates | Vanguard Doors', type: 'page', category: 'pricing', name: 'Composite Door Pricing Guide' },
      '/installer-finder': { title: 'Find an Approved Local Installer | Vanguard Doors', type: 'page', category: 'installer', name: 'Approved Installer Directory' },
      '/door-finder': { title: 'Interactive Door Style Finder Tool | Vanguard Doors', type: 'page', category: 'finder', name: 'Interactive Door Style Finder' },
      '/door-designer': { title: '3D Interactive Door Designer | Vanguard Doors', type: 'page', category: 'designer', name: '3D Door Designer Studio' },
      '/about': { title: 'About Vanguard Doors | British Engineering Heritage', type: 'page', category: 'about', name: 'About Vanguard Composite Doors' },
      '/contact': { title: 'Contact Us | Vanguard Doors Support', type: 'page', category: 'contact', name: 'Contact Vanguard Customer Service' }
    };

    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#/"]');
      if (link) {
        const hashPath = link.getAttribute('href');
        if (hashPath && hashPath.startsWith('#/')) {
          window.location.hash = hashPath;
        }
      }
    });

    if (!window.location.hash) {
      window.location.hash = '#/';
    } else {
      this.handleRoute();
    }
  }

  handleRoute() {
    let rawHash = window.location.hash.replace(/^#/, '') || '/';
    
    // Alias normalizations
    const aliases = {
      '/home': '/',
      '/front-doors': '/doors/front-doors',
      '/back-doors': '/doors/back-doors',
      '/double-doors': '/doors/double-doors',
      '/french-doors': '/doors/french-doors',
      '/stable-doors': '/doors/stable-doors',
      '/cottage-doors': '/doors/cottage-doors'
    };

    const targetRoute = aliases[rawHash] || rawHash;
    const routeObj = this.routes[targetRoute] || { title: 'Vanguard Composite Doors', type: 'page', name: 'Page Details' };

    document.title = routeObj.title;

    this.updateActiveNavLinks(targetRoute);

    const mainContent = document.getElementById('main-content');
    const subpageContainer = document.getElementById('subpage-view-container');

    if (targetRoute === '/' || targetRoute === '/home') {
      if (mainContent) mainContent.style.display = 'block';
      if (subpageContainer) subpageContainer.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Hide homepage main content, show subpage container
    if (mainContent) mainContent.style.display = 'none';
    if (subpageContainer) {
      subpageContainer.style.display = 'block';
      subpageContainer.innerHTML = this.buildFullPageHTML(routeObj, targetRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.bindPageInteractions(targetRoute);
    }
  }

  updateActiveNavLinks(path) {
    const normPath = (path === '/' || path === '/home') ? '/' : path;
    document.querySelectorAll('.top-nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = href.replace(/^#/, '') || '/';
      
      let isActive = false;
      if (normPath === '/') {
        isActive = (linkPath === '/' || linkPath === '/home');
      } else {
        isActive = (linkPath !== '/' && linkPath !== '/home' && (normPath === linkPath || normPath.startsWith(linkPath)));
      }

      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  buildFullPageHTML(routeObj, path) {
    const breadcrumbHTML = `
      <nav class="breadcrumb-nav" style="padding: 0.85rem 0; background: var(--bg-main); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div style="font-size: 0.8125rem; font-family: var(--font-display); font-weight: 600; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;">
            <a href="#/" style="color: var(--text-primary); text-decoration: none;">Home</a>
            <span style="color: var(--border-medium);">→</span>
            <span style="color: var(--accent-gold);">${routeObj.name}</span>
          </div>
        </div>
      </nav>
    `;

    let pageHTML = '';
    if (path === '/modern-doors') {
      pageHTML = this.renderModernDoorsPage();
    } else if (path === '/traditional-doors' || path === '/styles/traditional') {
      pageHTML = this.renderTraditionalDoorsPage();
    } else if (path === '/front-doors') {
      pageHTML = this.renderDoorsPage(routeObj, '/doors/front-doors');
    } else if (path === '/back-doors') {
      pageHTML = this.renderDoorsPage(routeObj, '/doors/back-doors');
    } else if (path === '/double-doors') {
      pageHTML = this.renderDoorsPage(routeObj, '/doors/double-doors');
    } else if (path === '/french-doors') {
      pageHTML = this.renderDoorsPage(routeObj, '/doors/french-doors');
    } else if (path === '/stable-doors') {
      pageHTML = this.renderDoorsPage(routeObj, '/doors/stable-doors');
    } else if (path === '/cottage-doors') {
      pageHTML = this.renderDoorsPage(routeObj, '/doors/cottage-doors');
    } else if (path.startsWith('/doors')) {
      pageHTML = this.renderDoorsPage(routeObj, path);
    } else if (path.startsWith('/colours')) {
      pageHTML = this.renderColoursPage(routeObj, path);
    } else if (path.startsWith('/discover')) {
      pageHTML = this.renderDiscoverPage(routeObj, path);
    } else if (path.startsWith('/styles')) {
      pageHTML = this.renderStylesPage(routeObj, path);
    } else if (path === '/door-finder') {
      pageHTML = this.renderDoorFinderPage();
    } else if (path === '/door-designer') {
      pageHTML = this.renderDoorDesignerPage();
    } else if (path === '/installer-finder') {
      pageHTML = this.renderInstallerFinderPage();
    } else if (path === '/inspiration') {
      pageHTML = this.renderInspirationPage();
    } else if (path === '/case-studies') {
      pageHTML = this.renderCaseStudiesPage();
    } else if (path === '/blog') {
      pageHTML = this.renderBlogPage();
    } else if (path === '/faqs') {
      pageHTML = this.renderFaqsPage();
    } else if (path === '/brochures') {
      pageHTML = this.renderBrochuresPage();
    } else if (path === '/prices') {
      pageHTML = this.renderPricesPage();
    } else if (path === '/about') {
      pageHTML = this.renderAboutPage();
    } else if (path === '/contact') {
      pageHTML = this.renderContactPage();
    } else {
      pageHTML = `
        <section class="journey-section" style="padding-top: 5rem;">
          <div class="container">
            <div class="section-header">
              <span class="eyebrow">VANGUARD COMPOSITE DOORS</span>
              <h1 class="section-title">${routeObj.name}</h1>
              <p class="section-subtitle">Engineered for home improvement excellence across Britain.</p>
            </div>
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 12px; text-align: center;">
              <a href="#/doors" class="btn btn-primary">Browse Door Collection</a>
              <a href="#/door-designer" class="btn btn-secondary" style="margin-left: 1rem;">Launch 3D Designer</a>
            </div>
          </div>
        </section>
      `;
    }

    return breadcrumbHTML + pageHTML;
  }

  /* ==========================================================================
     FULL DEDICATED PAGE RENDERERS
     ========================================================================== */

  renderModernDoorsPage() {
    return `
      <!-- MODERN DOORS PHOTOGRAPHIC HERO SECTION -->
      <section class="hero-section" style="height: 540px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
        <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
          <img src="assets/modern_doors_hero.jpg" alt="Luxury Minimalist Modern Architecture Entrance Door" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
        </div>
        <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.70) 100%); z-index: 2;"></div>

        <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
          <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">CONTEMPORARY DOOR COLLECTION</span>
          <h1 class="hero-title" style="font-size: clamp(2.5rem, 4.5vw, 3.75rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Modern Doors</h1>
          <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 680px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
            Clean lines, bold finishes and contemporary detailing designed to create a confident entrance for modern homes.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#modern-collection" class="btn btn-gold">Explore Modern Styles</a>
            <a href="#/door-designer" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Design Your Door</a>
          </div>
        </div>
      </section>

      <!-- MODERN DOOR FEATURES SECTION -->
      <section class="features-section" style="padding: 4.5rem 0; background: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header" style="margin-bottom: 3.5rem;">
            <span class="eyebrow">ARCHITECTURAL EXCELLENCE</span>
            <h2 class="section-title">Designed for Modern Architecture</h2>
            <p class="section-subtitle">Purpose-engineered features for contemporary linear, flush, and minimalist home entrances.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
            <!-- Feature 1 -->
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; transition: transform var(--transition-medium);">
              <div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(212,175,55,0.12); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">01</div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Minimalist Design</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">Clean architectural lines and understated detailing tailored for modern facades.</p>
            </div>

            <!-- Feature 2 -->
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; transition: transform var(--transition-medium);">
              <div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(212,175,55,0.12); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">02</div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Contemporary Glazing</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">Large, narrow and geometric glazing options designed for high-light modern entrances.</p>
            </div>

            <!-- Feature 3 -->
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; transition: transform var(--transition-medium);">
              <div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(212,175,55,0.12); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">03</div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Premium Finishes</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">Choose from sophisticated matte, satin and textured architectural shade palettes.</p>
            </div>

            <!-- Feature 4 -->
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; transition: transform var(--transition-medium);">
              <div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(212,175,55,0.12); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">04</div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Smart Hardware</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">Modern handles, long pull bars and keyless smart hardware designed for contemporary homes.</p>
            </div>

            <!-- Feature 5 -->
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; transition: transform var(--transition-medium);">
              <div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(212,175,55,0.12); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">05</div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Energy Efficient</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">High-performance composite construction for exceptional thermal comfort and A+ efficiency.</p>
            </div>

            <!-- Feature 6 -->
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; transition: transform var(--transition-medium);">
              <div style="width: 48px; height: 48px; border-radius: 10px; background: rgba(212,175,55,0.12); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">06</div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Secure by Design</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">Advanced multi-point hook locking and 3-star diamond cylinder reinforced protection.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- MODERN DOOR COLLECTION GRID -->
      <section id="modern-collection" class="products-section" style="padding: 5rem 0;">
        <div class="container">
          <div class="section-header" style="margin-bottom: 3.5rem;">
            <span class="eyebrow">MODERN SELECTION</span>
            <h2 class="section-title">Modern Door Collection</h2>
            <p class="section-subtitle">Explore our contemporary door range featuring geometric apertures, flush panels, and linear glazing.</p>
          </div>

          <div class="products-grid">
            <!-- 1. Linear Glass -->
            <div class="product-card">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">FLAGSHIP MODERN</span>
                <img src="assets/modern_doors_hero.jpg" alt="Linear Glass Modern Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Linear Glass</h3>
                <span class="product-colour-tag">Shown in Anthracite Grey with Long Pull Bar</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Sleek vertical triple glazing with satin chrome long pull handle.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Door</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design Your Door</a>
                </div>
              </div>
            </div>

            <!-- 2. Urban Slate -->
            <div class="product-card">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">TEXTURED FINISH</span>
                <img src="assets/modern_door_card.jpg" alt="Urban Slate Modern Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Urban Slate</h3>
                <span class="product-colour-tag">Shown in Slate Grey Matte</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Textured graphite paneling with recessed architectural flush handle.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Door</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design Your Door</a>
                </div>
              </div>
            </div>

            <!-- 3. Edge -->
            <div class="product-card">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">GEOMETRIC</span>
                <img src="assets/double_door_hero.jpg" alt="Edge Modern Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Edge</h3>
                <span class="product-colour-tag">Shown in Jet Black (RAL 9005)</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Geometric offset glass insert with brushed steel bar handle.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Door</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design Your Door</a>
                </div>
              </div>
            </div>

            <!-- 4. Axis -->
            <div class="product-card">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">SMART LOCK READY</span>
                <img src="assets/front_door_hero.jpg" alt="Axis Modern Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Axis</h3>
                <span class="product-colour-tag">Shown in Shadow Grey</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Twin vertical glass stripes with concealed smart keyless lock integration.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Door</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design Your Door</a>
                </div>
              </div>
            </div>

            <!-- 5. Metro -->
            <div class="product-card">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">METALLIC INLAY</span>
                <img src="assets/composite_doors_hero.jpg" alt="Metro Modern Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Metro</h3>
                <span class="product-colour-tag">Shown in Metallic Anthracite</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Horizontal brushed aluminum inlay panels with anthracite finish.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Door</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design Your Door</a>
                </div>
              </div>
            </div>

            <!-- 6. Eclipse -->
            <div class="product-card">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">MINIMALIST FLUSH</span>
                <img src="assets/french_door_hero.jpg" alt="Eclipse Modern Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Eclipse</h3>
                <span class="product-colour-tag">Shown in Warm Agate Grey with Side Screen</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Minimalist flush panel with full-height glazed side screen.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Door</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design Your Door</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderTraditionalDoorsPage() {
    return `
      <!-- TRADITIONAL DOORS DEDICATED PHOTOGRAPHIC HERO SECTION -->
      <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
        <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
          <img src="assets/collection_windsor.jpg" alt="Traditional Composite Front Door in Period Brick Entrance" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
        </div>
        <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

        <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
          <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">HERITAGE & PERIOD COLLECTION</span>
          <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Traditional Doors</h1>
          <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
            Classic British period styling, twin arch glazing, and elegant panel mouldings designed for timeless home entrances.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#/door-designer" class="btn btn-gold">Design Traditional Door in 3D</a>
            <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
          </div>
        </div>
      </section>

      <!-- FEATURE CARDS -->
      <section style="padding: 4rem 0; background: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
            <span class="eyebrow">PERIOD CRAFTSMANSHIP</span>
            <h2 class="section-title">Authentic Traditional Features</h2>
            <p class="section-subtitle">Heritage design aesthetics combined with modern composite multi-point locking and thermal performance.</p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem;">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Period Arch Glazing</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary);">Classic twin arched glass apertures with decorative bevels and antique lead work.</p>
            </div>
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem;">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Deep Panel Mouldings</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary);">Authentic deep-set lower panels accurately reproducing historic British joinery.</p>
            </div>
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem;">
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Heritage Furniture</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary);">Antique brass and forged black letterplates, doctor knocker handles and cylinder escutcheons.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- PRODUCT COLLECTION GRID -->
      <section class="products-section" style="padding: 4rem 0;">
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
            <span class="eyebrow">TIMELINES & STYLES</span>
            <h2 class="section-title">Traditional Door Collection</h2>
          </div>
          <div class="products-grid">
            <div class="product-card" data-category="traditional">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">PERIOD CLASSIC</span>
                <img src="assets/collection_windsor.jpg" alt="Windsor Traditional Arch Composite Door" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Windsor Traditional Arch</h3>
                <span class="product-colour-tag">Shown in Midnight Black with Brass Hardware</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Twin arched glazed panels with period lower panel moulding.</p>
                <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div class="product-card" data-category="traditional">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">VICTORIAN STYLE</span>
                <img src="assets/story_victorian.jpg" alt="Victorian Red Brick Entrance" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>Kensington Victorian</h3>
                <span class="product-colour-tag">Shown in Deep Midnight Black</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Historic Victorian townhouse entrance styling with overhead fanlight option.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div class="product-card" data-category="traditional">
              <div class="product-card-image" style="height: 320px;">
                <span class="product-badge">EDWARDIAN HERITAGE</span>
                <img src="assets/front_door_hero.jpg" alt="Edwardian Front Entrance" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="product-card-body">
                <h3>York Period Classic</h3>
                <span class="product-colour-tag">Shown in Warm Architectural Cream</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Edwardian 4-panel proportion with high security leaded glass glazing.</p>
                <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderDoorsPage(routeObj, path) {
    // If specific product detail page e.g. /doors/arden
    if (routeObj.type === 'product') {
      return this.renderProductDetailPage(routeObj);
    }

    if (path === '/doors/front-doors') {
      return `
        <!-- FRONT DOOR DEDICATED PHOTOGRAPHIC HERO SECTION -->
        <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
          <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
            <img src="assets/front_door_hero.jpg" alt="Luxury Front Entrance Door Interior" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
          </div>
          <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

          <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
            <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">FRONT ENTRANCE COLLECTION</span>
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Front Doors</h1>
            <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
              Make a lasting first impression with a front entrance door custom crafted around your home, your style and your security.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/door-designer" class="btn btn-gold">Design Your Front Door in 3D</a>
              <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
        <section class="products-section" style="padding: 4rem 0;">
          <div class="container">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
              <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter Front Doors:</strong>
              <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All Front Doors</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'modern' ? 'flex' : 'none');">Modern Linear</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'traditional' ? 'flex' : 'none');">Traditional Period</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'cottage' ? 'flex' : 'none');">Cottage Plank</button>
            </div>

            <div class="products-grid">
              <div class="product-card" data-category="modern">
                <div class="product-card-image">
                  <span class="product-badge">BEST SELLER</span>
                  <img src="assets/front_door_hero.jpg" alt="Front Door Design" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Arden Front Entrance</h3>
                  <span class="product-colour-tag">Shown in Warm Architectural Cream</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Full-height glazed side lights with high-security triple laminated glass.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="traditional">
                <div class="product-card-image">
                  <span class="product-badge">PERIOD CLASSIC</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#18191b" rx="4" />
                    <path d="M 30,70 A 15,15 0 0,1 60,70 L 60,130 L 30,130 Z" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                    <path d="M 100,70 A 15,15 0 0,1 130,70 L 130,130 L 100,130 Z" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                    <rect x="30" y="160" width="100" height="120" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="4" />
                    <rect x="135" y="160" width="6" height="40" fill="#d4af37" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Windsor Front Door</h3>
                  <span class="product-colour-tag">Shown in Midnight Black</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Twin arch glazed panels with period lower section.</p>
                  <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="cottage">
                <div class="product-card-image">
                  <span class="product-badge">COTTAGE CHARM</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#7a967f" rx="4" />
                    <line x1="45" y1="10" x2="45" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <line x1="80" y1="10" x2="80" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <line x1="115" y1="10" x2="115" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <polygon points="80,40 110,80 80,120 50,80" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                    <rect x="135" y="150" width="6" height="40" fill="#e2e8f0" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Malvern Front Door</h3>
                  <span class="product-colour-tag">Shown in Chartwell Green</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Vertical tongue & groove cottage plank with diamond aperture window.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/malvern" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','malvern')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (path === '/doors/back-doors') {
      return `
        <!-- BACK DOOR DEDICATED PHOTOGRAPHIC HERO SECTION -->
        <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
          <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
            <img src="assets/back_door_hero.png" alt="Garden Cottage Composite Back Door" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
          </div>
          <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

          <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
            <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">GARDEN & UTILITY COLLECTION</span>
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Back Doors</h1>
            <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
              Uncompromising rear entrance security, toughened privacy glazing and outstanding thermal insulation for utility and garden doors.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/door-designer" class="btn btn-gold">Design Your Back Door in 3D</a>
              <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
        <section class="products-section" style="padding: 4rem 0;">
          <div class="container">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
              <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter Back Doors:</strong>
              <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All Back Doors</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'half-glazed' ? 'flex' : 'none');">Half Glazed</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'stable' ? 'flex' : 'none');">Stable Split</button>
            </div>

            <div class="products-grid">
              <div class="product-card" data-category="half-glazed">
                <div class="product-card-image">
                  <span class="product-badge">FEATURED</span>
                  <img src="assets/back_door_hero.png" alt="Cottage Garden Back Door" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Cottage Garden Rear Entrance</h3>
                  <span class="product-colour-tag">Shown in Warm Cottage White</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Twin vertical privacy glazing with high-density thermal core and black lever handles.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="stable">
                <div class="product-card-image">
                  <span class="product-badge">DUAL SPLIT</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#b57f49" rx="4" />
                    <line x1="10" y1="160" x2="150" y2="160" stroke="#000" stroke-width="3" />
                    <rect x="25" y="30" width="110" height="110" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                    <rect x="135" y="180" width="6" height="40" fill="#1e293b" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Heritage Stable Back Door</h3>
                  <span class="product-colour-tag">Shown in Irish Oak Timber</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Dual-opening horizontal split door allowing independent top ventilation.</p>
                  <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/heritage" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','heritage')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (path === '/doors/double-doors') {
      return `
        <!-- DOUBLE DOOR DEDICATED PHOTOGRAPHIC HERO SECTION -->
        <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
          <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
            <img src="assets/double_door_hero.jpg" alt="Modern Black Double Composite Entrance Doors" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
          </div>
          <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

          <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
            <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">GRAND ENTRANCE COLLECTION</span>
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Double Doors</h1>
            <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
              Grand architectural double entrance statements engineered with master and slave multi-point locking mechanics for wide openings.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/door-designer" class="btn btn-gold">Design Double Doors in 3D</a>
              <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
        <section class="products-section" style="padding: 4rem 0;">
          <div class="container">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
              <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter Double Doors:</strong>
              <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All Double Doors</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'modern' ? 'flex' : 'none');">Contemporary Double</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'traditional' ? 'flex' : 'none');">Traditional Double</button>
            </div>

            <div class="products-grid">
              <div class="product-card" data-category="modern">
                <div class="product-card-image">
                  <span class="product-badge">GRAND STATEMENT</span>
                  <img src="assets/double_door_hero.jpg" alt="Modern Black Double Composite Entrance" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Arden Twin Grand Entrance</h3>
                  <span class="product-colour-tag">Shown in Matt Black with Stainless Bar Handles</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Dual opening master & slave leaves with full-height long pull handles and linear glazing.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="traditional">
                <div class="product-card-image">
                  <span class="product-badge">PERIOD HERITAGE</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#18191b" rx="4" />
                    <path d="M 30,70 A 15,15 0 0,1 60,70 L 60,130 L 30,130 Z" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                    <path d="M 100,70 A 15,15 0 0,1 130,70 L 130,130 L 100,130 Z" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                    <rect x="30" y="160" width="100" height="120" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="4" />
                    <rect x="135" y="160" width="6" height="40" fill="#d4af37" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Windsor Traditional Double</h3>
                  <span class="product-colour-tag">Shown in Midnight Black</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Classic twin arch double doors with period brass furniture.</p>
                  <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (path === '/doors/french-doors') {
      return `
        <!-- FRENCH DOOR DEDICATED PHOTOGRAPHIC HERO SECTION -->
        <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
          <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
            <img src="assets/french_door_hero.jpg" alt="Natural Oak French Composite Doors with Side Lights" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
          </div>
          <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

          <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
            <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">INDOOR-OUTDOOR COLLECTION</span>
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">French Doors</h1>
            <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
              Bring natural light into your home with elegant, high-security composite French doors featuring dual opening handles and full-height side lights.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/door-designer" class="btn btn-gold">Design French Doors in 3D</a>
              <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
        <section class="products-section" style="padding: 4rem 0;">
          <div class="container">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
              <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter French Doors:</strong>
              <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All French Doors</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'timber-look' ? 'flex' : 'none');">Natural Timber</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'modern' ? 'flex' : 'none');">Contemporary Grey</button>
            </div>

            <div class="products-grid">
              <div class="product-card" data-category="timber-look">
                <div class="product-card-image">
                  <span class="product-badge">TIMBER GRAIN</span>
                  <img src="assets/french_door_hero.jpg" alt="Natural Golden Oak Composite French Doors" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Golden Oak French Doors</h3>
                  <span class="product-colour-tag">Shown in Golden Oak with Matching Side Lights</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Dual active French leaves with long vertical glazed apertures and brushed steel lever handles.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="modern">
                <div class="product-card-image">
                  <span class="product-badge">MODERN FAVOURITE</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#2f353b" rx="4" />
                    <rect x="25" y="30" width="30" height="100" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                    <rect x="65" y="30" width="30" height="100" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                    <rect x="105" y="30" width="30" height="100" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                    <rect x="135" y="150" width="6" height="40" fill="#e2e8f0" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Anthracite Grey French Doors</h3>
                  <span class="product-colour-tag">Shown in Anthracite Grey (RAL 7016)</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Clean modern profiles with high thermal glass performance.</p>
                  <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (path === '/doors/stable-doors') {
      return `
        <!-- STABLE DOOR DEDICATED PHOTOGRAPHIC HERO SECTION -->
        <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
          <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
            <img src="assets/stable_door_hero.jpg" alt="Interior Kitchen Open Top Sash Composite Stable Door" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
          </div>
          <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

          <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
            <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">COUNTRY & VERSATILITY COLLECTION</span>
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Stable Doors</h1>
            <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
              Traditional country split-door versatility combining independent top sash ventilation with high-density composite thermal insulation and child/pet security.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/door-designer" class="btn btn-gold">Design Stable Doors in 3D</a>
              <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
        <section class="products-section" style="padding: 4rem 0;">
          <div class="container">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
              <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter Stable Doors:</strong>
              <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All Stable Doors</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'kitchen' ? 'flex' : 'none');">Kitchen & Utility</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'cottage' ? 'flex' : 'none');">Cottage Plank</button>
            </div>

            <div class="products-grid">
              <div class="product-card" data-category="kitchen">
                <div class="product-card-image">
                  <span class="product-badge">INTERIOR CHOICE</span>
                  <img src="assets/stable_door_hero.jpg" alt="Kitchen Composite Stable Door Open Top Sash" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Heritage Split Kitchen Stable</h3>
                  <span class="product-colour-tag">Shown in Warm Off-White with Chrome Latches</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Independent top sash tilt operation allowing fresh air while keeping pets and children safe.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/heritage" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','heritage')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="cottage">
                <div class="product-card-image">
                  <span class="product-badge">TIMBER FINISH</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#b57f49" rx="4" />
                    <line x1="10" y1="160" x2="150" y2="160" stroke="#000" stroke-width="3" />
                    <rect x="25" y="30" width="110" height="110" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                    <rect x="135" y="180" width="6" height="40" fill="#1e293b" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Irish Oak Stable Door</h3>
                  <span class="product-colour-tag">Shown in Irish Oak Woodgrain</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Traditional woodgrain finish with heavy-duty interlock bolts.</p>
                  <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/heritage" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','heritage')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (path === '/doors') {
      return `
        <!-- COMPOSITE DOORS DEDICATED PHOTOGRAPHIC HERO SECTION -->
        <section class="hero-section" style="height: 520px; min-height: 480px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3.5rem; overflow: hidden; background: #171717;">
          <div class="hero-bg" style="position: absolute; inset: 0; z-index: 1;">
            <img src="assets/composite_doors_hero.jpg" alt="Anthracite Grey Composite Front Door with Landscaped Garden" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" />
          </div>
          <div class="hero-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.65) 100%); z-index: 2;"></div>

          <div class="container" style="position: relative; z-index: 10; text-align: center; max-width: 800px; color: #FFFFFF;">
            <span class="eyebrow" style="color: var(--accent-gold); letter-spacing: 0.18em; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">THE COMPLETE RANGE</span>
            <h1 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 0.75rem; color: #FFFFFF; font-family: var(--font-heading); text-shadow: 0 2px 8px rgba(0,0,0,0.7);">Composite Doors</h1>
            <p class="hero-subhead" style="font-size: 1.125rem; color: rgba(255,255,255,0.92); max-width: 660px; margin: 0 auto 1.75rem; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
              Beautifully engineered composite doors combining distinctive British design, advanced multi-point security and outstanding thermal insulation.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/door-designer" class="btn btn-gold">Design Your Door in 3D</a>
              <a href="#/installer-finder" class="btn btn-dark-outline" style="background: rgba(255,255,255,0.9); color: #171717; border-color: #FFFFFF;">Get Free Home Survey</a>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
        <section class="products-section" style="padding: 4rem 0;">
          <div class="container">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
              <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter Collection:</strong>
              <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All Styles</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'modern' ? 'flex' : 'none');">Modern</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'traditional' ? 'flex' : 'none');">Traditional</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'cottage' ? 'flex' : 'none');">Cottage</button>
              <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'stable' ? 'flex' : 'none');">Stable</button>
            </div>

            <div class="products-grid">
              <div class="product-card" data-category="modern">
                <div class="product-card-image">
                  <span class="product-badge">FLAGSHIP DESIGN</span>
                  <img src="assets/composite_doors_hero.jpg" alt="Anthracite Grey Composite Front Door" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Arden Quad Glazed</h3>
                  <span class="product-colour-tag">Shown in Anthracite Grey with Stainless Bar Handle</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Contemporary 4-square glazed aperture insert with brushed long pull bar handle.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="modern">
                <div class="product-card-image">
                  <span class="product-badge">URBAN ARCHITECTURE</span>
                  <img src="assets/composite_doors_side.jpg" alt="Dark Modern Composite Entrance Door with Vertical Light Strip" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Urban Linear Entrance</h3>
                  <span class="product-colour-tag">Shown in Dark Graphite with Stainless Bar Handle</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Vertical linear frosted glass aperture with full-height brushed stainless pull handle.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="modern">
                <div class="product-card-image">
                  <span class="product-badge">METALLIC INLAY</span>
                  <img src="assets/composite_doors_side2.jpg" alt="Dark Composite Entrance Door with Metallic Inlay Stripes" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div class="product-card-body">
                  <h3>Metro Inlay Contemporary</h3>
                  <span class="product-colour-tag">Shown in Anthracite Matte with Side Screen</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Horizontal brushed metallic inlay stripes with long pull handle and side light.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>

              <div class="product-card" data-category="cottage">
                <div class="product-card-image">
                  <span class="product-badge">COTTAGE CHARM</span>
                  <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="140" height="300" fill="#7a967f" rx="4" />
                    <line x1="45" y1="10" x2="45" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <line x1="80" y1="10" x2="80" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <line x1="115" y1="10" x2="115" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <polygon points="80,40 110,80 80,120 50,80" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                    <rect x="135" y="150" width="6" height="40" fill="#e2e8f0" rx="2" />
                  </svg>
                </div>
                <div class="product-card-body">
                  <h3>Malvern Cottage Plank</h3>
                  <span class="product-colour-tag">Shown in Chartwell Green</span>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Vertical tongue & groove cottage plank with diamond aperture window.</p>
                  <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                  <div class="product-card-footer">
                    <a href="#/doors/malvern" class="btn btn-dark-outline btn-sm">View Details</a>
                    <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','malvern')" class="btn btn-primary btn-sm">Design 3D</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    const titleMap = {
      '/doors/cottage-doors': { title: 'Cottage Composite Doors', subhead: 'Authentic tongue & groove vertical planking engineered for period cottages and countryside homes.' }
    };

    const info = titleMap[path] || { title: routeObj.name, subhead: 'Engineered for home improvement excellence across Britain.' };

    return `
      <!-- PAGE HERO -->
      <section class="featured-section" style="padding: 5rem 0 4rem; background: var(--bg-secondary); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header" style="margin-bottom: 0;">
            <span class="eyebrow">COMPOSITE COLLECTION</span>
            <h1 class="section-title" style="font-size: 3rem;">${info.title}</h1>
            <p class="section-subtitle">${info.subhead}</p>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
              <a href="#/styles" class="btn btn-primary">Explore Door Styles</a>
              <a href="#/door-designer" class="btn btn-dark-outline">Design Your Door</a>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE FILTERS & PRODUCT GRID -->
      <section class="products-section" style="padding: 5rem 0;">
        <div class="container">
          <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
            <strong style="font-size: 0.875rem; color: var(--text-primary);">Filter Collection:</strong>
            <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display='flex');">All Styles</button>
            <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'modern' ? 'flex' : 'none');">Modern</button>
            <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'traditional' ? 'flex' : 'none');">Traditional</button>
            <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'cottage' ? 'flex' : 'none');">Cottage</button>
            <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.product-card').forEach(c=>c.style.display = c.dataset.category === 'stable' ? 'flex' : 'none');">Stable</button>
          </div>

          <div class="products-grid">
            <div class="product-card" data-category="modern">
              <div class="product-card-image">
                <span class="product-badge">MODERN FAVOURITE</span>
                <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="140" height="300" fill="#2f353b" rx="4" />
                  <rect x="25" y="30" width="30" height="100" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                  <rect x="65" y="30" width="30" height="100" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                  <rect x="105" y="30" width="30" height="100" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                  <rect x="135" y="150" width="6" height="40" fill="#e2e8f0" rx="2" />
                </svg>
              </div>
              <div class="product-card-body">
                <h3>Arden</h3>
                <span class="product-colour-tag">Shown in Anthracite Grey (RAL 7016)</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Contemporary linear 3-panel glazing with brushed stainless steel handles.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div class="product-card" data-category="traditional">
              <div class="product-card-image">
                <span class="product-badge">PERIOD CLASSIC</span>
                <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="140" height="300" fill="#18191b" rx="4" />
                  <path d="M 30,70 A 15,15 0 0,1 60,70 L 60,130 L 30,130 Z" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                  <path d="M 100,70 A 15,15 0 0,1 130,70 L 130,130 L 100,130 Z" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                  <rect x="30" y="160" width="100" height="120" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="4" />
                  <rect x="135" y="160" width="6" height="40" fill="#d4af37" rx="2" />
                </svg>
              </div>
              <div class="product-card-body">
                <h3>Windsor</h3>
                <span class="product-colour-tag">Shown in Midnight Black</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Twin arch glazed panels with moulded period lower section.</p>
                <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div class="product-card" data-category="cottage">
              <div class="product-card-image">
                <span class="product-badge">COTTAGE CHARM</span>
                <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="140" height="300" fill="#7a967f" rx="4" />
                  <line x1="45" y1="10" x2="45" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                  <line x1="80" y1="10" x2="80" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                  <line x1="115" y1="10" x2="115" y2="310" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                  <polygon points="80,40 110,80 80,120 50,80" fill="#e0f2fe" stroke="#000" stroke-width="2"/>
                  <rect x="135" y="150" width="6" height="40" fill="#e2e8f0" rx="2" />
                </svg>
              </div>
              <div class="product-card-body">
                <h3>Malvern</h3>
                <span class="product-colour-tag">Shown in Chartwell Green</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Vertical tongue & groove cottage plank with diamond aperture window.</p>
                <div class="product-card-specs"><span>⚡ A+ Energy</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/malvern" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','malvern')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div class="product-card" data-category="stable">
              <div class="product-card-image">
                <span class="product-badge">DUAL SPLIT</span>
                <svg viewBox="0 0 160 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="140" height="300" fill="#b57f49" rx="4" />
                  <line x1="10" y1="160" x2="150" y2="160" stroke="#000" stroke-width="3" />
                  <rect x="25" y="30" width="110" height="110" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                  <rect x="135" y="180" width="6" height="40" fill="#1e293b" rx="2" />
                </svg>
              </div>
              <div class="product-card-body">
                <h3>Heritage Stable</h3>
                <span class="product-colour-tag">Shown in Irish Oak Timber</span>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Dual-opening horizontal split door with quad upper glazing.</p>
                <div class="product-card-specs"><span>⚡ A Rating</span><span>🛡️ PAS 24</span></div>
                <div class="product-card-footer">
                  <a href="#/doors/heritage" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','heritage')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderProductDetailPage(routeObj) {
    const model = routeObj.model || 'arden';
    const names = {
      arden: { name: 'Arden', tag: 'Modern Linear', price: '£1,250', desc: 'A refined contemporary entrance door combining clean proportions, triple vertical linear glazing and premium brushed steel hardware.' },
      windsor: { name: 'Windsor', tag: 'Traditional Arch', price: '£1,180', desc: 'Classic period twin arch glazed panels with moulded lower section and antique furniture options.' },
      malvern: { name: 'Malvern', tag: 'Cottage Plank', price: '£1,320', desc: 'Rustic tongue & groove vertical planking with elegant diamond aperture glazing.' },
      heritage: { name: 'Heritage Split Stable', tag: 'Stable Split', price: '£1,450', desc: 'Dual-opening horizontal split door allowing independent top ventilation with bottom lock.' }
    };
    const item = names[model] || names.arden;

    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; box-shadow: var(--shadow-md);">
            <!-- Image Left -->
            <div style="background: var(--bg-secondary); border-radius: 12px; padding: 2rem; display: flex; align-items: center; justify-content: center; min-height: 480px;">
              <svg viewBox="0 0 180 380" width="80%" height="auto" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="160" height="360" fill="#2f353b" rx="4" />
                <rect x="30" y="30" width="35" height="120" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                <rect x="75" y="30" width="35" height="120" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                <rect x="120" y="30" width="35" height="120" fill="#e0f2fe" stroke="#000" stroke-width="2" />
                <rect x="155" y="180" width="6" height="50" fill="#e2e8f0" rx="2" />
              </svg>
            </div>

            <!-- Content Right -->
            <div>
              <span class="eyebrow">${item.tag}</span>
              <h1 style="font-size: 3rem; margin-bottom: 0.5rem; color: var(--text-primary);">${item.name}</h1>
              <p style="font-size: 1.5rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 1.5rem;">Supply & Fitted Est: ${item.price}</p>
              <p style="color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 2rem;">${item.desc}</p>

              <div style="margin-bottom: 2rem;">
                <h4 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-primary); margin-bottom: 0.75rem;">Key Specifications:</h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9375rem; color: var(--text-secondary);">
                  <li>✓ 50mm Ultra-Dense Polyurethane Thermal Core</li>
                  <li>✓ 4mm High-Impact GRP Armor Outer Shell</li>
                  <li>✓ Ultion 3-Star Diamond Security Lock Cylinder</li>
                  <li>✓ Laminated Toughened Security Triple Glazing</li>
                  <li>✓ 10-Year Weather & Anti-Fade Guarantee</li>
                </ul>
              </div>

              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','${model}')" class="btn btn-primary" style="flex: 1;">Design in 3D Configurator</a>
                <a href="#/installer-finder" class="btn btn-dark-outline" style="flex: 1;">Find Local Installer</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderColoursPage(routeObj, path) {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">ARCHITECTURAL COLOUR PALETTE</span>
            <h1 class="section-title" style="font-size: 3rem;">${routeObj.name}</h1>
            <p class="section-subtitle">Vanguard composite outer GRP skins feature high-grade UV protective polymers engineered to prevent fading, chalking, and weather discoloration.</p>
          </div>

          <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 3rem; margin-top: 2rem; box-shadow: var(--shadow-subtle);">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Explore Signature Shades</h3>
            <div class="swatches-grid-full">
              <div class="swatch-card-full active" onclick="window.doorConfigurator?.setState('color','anthracite'); window.location.hash='#/door-designer';">
                <div class="swatch-pill-large" style="background: #2f353b;"></div>
                <span class="swatch-label-large">Anthracite Grey</span>
              </div>
              <div class="swatch-card-full" onclick="window.doorConfigurator?.setState('color','black'); window.location.hash='#/door-designer';">
                <div class="swatch-pill-large" style="background: #18191b;"></div>
                <span class="swatch-label-large">Midnight Black</span>
              </div>
              <div class="swatch-card-full" onclick="window.doorConfigurator?.setState('color','agate'); window.location.hash='#/door-designer';">
                <div class="swatch-pill-large" style="background: #7d847c;"></div>
                <span class="swatch-label-large">Agate Grey</span>
              </div>
              <div class="swatch-card-full" onclick="window.doorConfigurator?.setState('color','chartwell'); window.location.hash='#/door-designer';">
                <div class="swatch-pill-large" style="background: #7a967f;"></div>
                <span class="swatch-label-large">Chartwell Green</span>
              </div>
              <div class="swatch-card-full" onclick="window.doorConfigurator?.setState('color','irish_oak'); window.location.hash='#/door-designer';">
                <div class="swatch-pill-large" style="background: #b57f49;"></div>
                <span class="swatch-label-large">Irish Oak Timber</span>
              </div>
            </div>
            <div style="margin-top: 3rem; text-align: center;">
              <a href="#/door-designer" class="btn btn-primary">Try Colours in 3D Configurator</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderDiscoverPage(routeObj, path) {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">ENGINEERING EXCELLENCE</span>
            <h1 class="section-title" style="font-size: 3rem;">${routeObj.name}</h1>
            <p class="section-subtitle">Every Vanguard door is built using an ultra-dense 50mm composite thermal core, enclosed within a high-impact 4mm GRP skin and fitted with Ultion 3-star diamond security cylinders.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem;">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-subtle);">
              <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">PAS 24 Police Security</h3>
              <p style="color: var(--text-secondary); font-size: 0.9375rem;">Accredited by Police Secured by Design standards with £5,000 anti-snap guarantee.</p>
            </div>
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-subtle);">
              <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">A+ Thermal Insulation</h3>
              <p style="color: var(--text-secondary); font-size: 0.9375rem;">Eliminate cold drafts and save up to £240/yr on home heating bills.</p>
            </div>
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-subtle);">
              <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">10-Year Warranty</h3>
              <p style="color: var(--text-secondary); font-size: 0.9375rem;">Comprehensive 10-year manufacturer guarantee on GRP slab, seals and locking hardware.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderStylesPage(routeObj, path) {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">ARCHITECTURAL DESIGN</span>
            <h1 class="section-title" style="font-size: 3rem;">${routeObj.name}</h1>
            <p class="section-subtitle">Explore our contemporary linear and period traditional composite door designs.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem; margin-top: 3rem;">
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 16px; box-shadow: var(--shadow-subtle);">
              <span class="eyebrow">CONTEMPORARY</span>
              <h2 style="font-size: 2rem; margin-bottom: 1rem;">Modern Style Collection</h2>
              <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Sleek geometric paneling, long stainless steel bar handles and linear glass inserts.</p>
              <a href="#/doors" class="btn btn-primary">Browse Modern Doors</a>
            </div>
            <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 16px; box-shadow: var(--shadow-subtle);">
              <span class="eyebrow">HERITAGE</span>
              <h2 style="font-size: 2rem; margin-bottom: 1rem;">Traditional Style Collection</h2>
              <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Arch twin glazing, moulded period lower panels and classic brass furniture.</p>
              <a href="#/doors" class="btn btn-primary">Browse Traditional Doors</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderDoorFinderPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 680px; margin: 0 auto 3rem;">
            <span class="eyebrow">INTERACTIVE QUESTIONNAIRE</span>
            <h1 class="section-title" style="font-size: 3rem;">Help Me Choose</h1>
            <p class="section-subtitle">Answer 4 quick questions to discover the ideal composite door for your home.</p>
          </div>

          <div id="finder-step-box" style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 16px; max-width: 760px; margin: 0 auto; box-shadow: var(--shadow-md);">
            <div style="margin-bottom: 2rem;">
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--accent-gold); letter-spacing: 0.1em;">STEP 1 OF 4</span>
              <h3 style="font-size: 1.5rem; margin-top: 0.5rem; color: var(--text-primary);">What architectural style do you prefer?</h3>
            </div>
            <div class="option-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2.5rem;">
              <div class="option-card selected" onclick="this.parentNode.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');">
                <strong>Modern</strong><br><span style="font-size: 0.75rem; color: #777;">Linear & Sleek</span>
              </div>
              <div class="option-card" onclick="this.parentNode.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');">
                <strong>Traditional</strong><br><span style="font-size: 0.75rem; color: #777;">Period Arch</span>
              </div>
              <div class="option-card" onclick="this.parentNode.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');">
                <strong>Cottage</strong><br><span style="font-size: 0.75rem; color: #777;">Plank & Diamond</span>
              </div>
            </div>
            <button class="btn btn-primary" onclick="window.location.hash='#/doors/arden'" style="width: 100%;">View Matching Recommendation →</button>
          </div>
        </div>
      </section>
    `;
  }

  renderDoorDesignerPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 720px; margin: 0 auto 2rem;">
            <span class="eyebrow">3D CONFIGURATOR STUDIO</span>
            <h1 class="section-title" style="font-size: 3rem;">3D Door Designer</h1>
            <p class="section-subtitle">Choose your style, colour, glazing pattern and hardware furniture in real time.</p>
          </div>

          <div class="configurator-studio">
            <div class="preview-stage">
              <button class="upload-house-btn" onclick="document.getElementById('house-photo-input').click()">📷 Upload Home Photo</button>
              <input type="file" id="house-photo-input" accept="image/*" style="display: none;" />
              <div id="config-canvas-container" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"></div>
            </div>
            <div id="config-controls-container" class="config-controls">
              <div>
                <div class="config-group-title">1. Door Style</div>
                <div class="option-grid">
                  <div class="option-card selected" onclick="window.doorConfigurator?.setState('style','arden'); document.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');"><strong>Arden</strong><br><span style="font-size: 0.75rem;">Modern</span></div>
                  <div class="option-card" onclick="window.doorConfigurator?.setState('style','windsor'); document.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');"><strong>Windsor</strong><br><span style="font-size: 0.75rem;">Traditional</span></div>
                  <div class="option-card" onclick="window.doorConfigurator?.setState('style','malvern'); document.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');"><strong>Malvern</strong><br><span style="font-size: 0.75rem;">Cottage</span></div>
                  <div class="option-card" onclick="window.doorConfigurator?.setState('style','heritage'); document.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected');"><strong>Heritage</strong><br><span style="font-size: 0.75rem;">Stable</span></div>
                </div>
              </div>
              <div>
                <div class="config-group-title">2. Exterior Colour</div>
                <div class="color-swatch-grid">
                  <div class="color-swatch-item selected" onclick="window.doorConfigurator?.setState('color','anthracite');"><div class="swatch-circle" style="background: #2f353b;"></div><span class="swatch-name">Anthracite</span></div>
                  <div class="color-swatch-item" onclick="window.doorConfigurator?.setState('color','black');"><div class="swatch-circle" style="background: #18191b;"></div><span class="swatch-name">Black</span></div>
                  <div class="color-swatch-item" onclick="window.doorConfigurator?.setState('color','agate');"><div class="swatch-circle" style="background: #7d847c;"></div><span class="swatch-name">Agate</span></div>
                  <div class="color-swatch-item" onclick="window.doorConfigurator?.setState('color','chartwell');"><div class="swatch-circle" style="background: #7a967f;"></div><span class="swatch-name">Chartwell</span></div>
                  <div class="color-swatch-item" onclick="window.doorConfigurator?.setState('color','irish_oak');"><div class="swatch-circle" style="background: #b57f49;"></div><span class="swatch-name">Irish Oak</span></div>
                </div>
              </div>
              <div style="padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                  <span style="font-size: 0.875rem; color: var(--text-secondary);">Supply & Fit Estimate:</span>
                  <span id="config-price-display" style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">£1,250 - £1,420</span>
                </div>
                <button class="btn btn-primary" onclick="window.requestQuoteFromInstaller('Vanguard Direct Partner')" style="width: 100%;">Get Installation Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderInstallerFinderPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="installer-box">
            <span class="eyebrow">APPROVED NATIONWIDE NETWORK</span>
            <h1 class="section-title" style="font-size: 3rem; margin-bottom: 1rem;">Find Your Local Installer</h1>
            <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem;">Enter your postcode to find trusted, certified Vanguard installers who can assist with home measuring, pricing and installation.</p>
            <form id="postcode-lookup-form" class="postcode-form">
              <input type="text" id="postcode-input" class="postcode-input" placeholder="Enter postcode (e.g. SW1A 1AA)" required />
              <button type="submit" class="btn btn-primary">Find an Installer</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  renderInspirationPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 3rem;">
            <span class="eyebrow">REAL HOME TRANSFORMATIONS</span>
            <h1 class="section-title" style="font-size: 3rem;">Inspiration Gallery</h1>
            <p class="section-subtitle">Explore genuine UK homeowner entrance transformations featuring modern, traditional, cottage, and split stable composite door designs.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem;">
            <div style="background: var(--bg-white); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-subtle);">
              <img src="assets/inspiration_1.jpg" alt="Sage Green Cottage Entrance" style="width: 100%; height: 260px; object-fit: cover;" />
              <div style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.1em;">COTTAGE PLANK</span>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Sage Green Country Cottage</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Cotswold Green • Gloucestershire Residence</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="#/doors/malvern" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','malvern')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div style="background: var(--bg-white); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-subtle);">
              <img src="assets/inspiration_2.jpg" alt="Heritage Oak Split Stable Door" style="width: 100%; height: 260px; object-fit: cover;" />
              <div style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.1em;">STABLE DOOR</span>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Heritage Oak Stable Entrance</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Irish Oak • Cheshire Residence</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="#/doors/heritage" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','heritage')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div style="background: var(--bg-white); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-subtle);">
              <img src="assets/inspiration_3.jpg" alt="Warm Off-White Heritage Entrance" style="width: 100%; height: 260px; object-fit: cover;" />
              <div style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.1em;">TRADITIONAL HERITAGE</span>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Warm Off-White Heritage Entrance</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Architectural Cream • Surrey Residence</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div style="background: var(--bg-white); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-subtle);">
              <img src="assets/story_victorian.jpg" alt="Victorian Red Brick Entrance" style="width: 100%; height: 260px; object-fit: cover;" />
              <div style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.1em;">VICTORIAN CLASSIC</span>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Victorian Red Brick Townhouse</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Midnight Black • London Townhouse</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="#/doors/windsor" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','windsor')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div style="background: var(--bg-white); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-subtle);">
              <img src="assets/story_contemporary.jpg" alt="Contemporary Modern Entrance" style="width: 100%; height: 260px; object-fit: cover;" />
              <div style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.1em;">MODERN LINEAR</span>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Contemporary Glass Side Screen</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Anthracite Grey • Manchester Villa</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="#/doors/arden" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','arden')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>

            <div style="background: var(--bg-white); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-subtle);">
              <img src="assets/story_forever_home.jpg" alt="Suburban Chartwell Green Entrance" style="width: 100%; height: 260px; object-fit: cover;" />
              <div style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.1em;">SUBURBAN HERITAGE</span>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0;">Suburban Thermal Upgrade</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Chartwell Green • Kent Property</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="#/doors/malvern" class="btn btn-dark-outline btn-sm">View Details</a>
                  <a href="#/door-designer" onclick="window.doorConfigurator?.setState('style','malvern')" class="btn btn-primary btn-sm">Design 3D</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderCaseStudiesPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">HOMEOWNER STORIES</span>
            <h1 class="section-title" style="font-size: 3rem;">Case Studies</h1>
            <p class="section-subtitle">Real homes, real transformations, engineered composite excellence.</p>
          </div>
          <div class="case-studies-grid" style="margin-top: 3rem;">
            <div class="case-card"><div class="case-card-img"><img src="assets/hero_composite_door.jpg" alt="Victorian Home" /></div><div class="case-card-body"><h3>Sarah's Victorian Home</h3><p>Modernising a classic period entrance while preserving architectural elegance.</p><a href="#/doors" class="btn btn-dark-outline btn-sm">Explore Style Used</a></div></div>
            <div class="case-card"><div class="case-card-img"><img src="assets/hero_composite_door.jpg" alt="Contemporary Home" /></div><div class="case-card-body"><h3>James' Contemporary Home</h3><p>A bold new entrance statement featuring full-height side glazing and smart security.</p><a href="#/doors" class="btn btn-dark-outline btn-sm">Explore Style Used</a></div></div>
            <div class="case-card"><div class="case-card-img"><img src="assets/hero_composite_door.jpg" alt="Thermal Upgrade Home" /></div><div class="case-card-body"><h3>Emma's Forever Home</h3><p>Thermal insulation upgrade cutting winter energy bills by 22%.</p><a href="#/doors" class="btn btn-dark-outline btn-sm">Explore Style Used</a></div></div>
          </div>
        </div>
      </section>
    `;
  }

  renderBlogPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">ARTICLES & DESIGN GUIDES</span>
            <h1 class="section-title" style="font-size: 3rem;">Latest From Vanguard</h1>
          </div>
          <div class="case-studies-grid" style="margin-top: 3rem;">
            <div class="case-card"><div class="case-card-body"><h3>How to Choose the Right Composite Door for Period Properties</h3><p>A guide to matching architectural proportions, glazing patterns and heritage colors.</p></div></div>
            <div class="case-card"><div class="case-card-body"><h3>Thermal Efficiency Explained: Cutting Your Energy Bills</h3><p>Why a 50mm polyurethane core out-performs traditional timber and PVC doors.</p></div></div>
            <div class="case-card"><div class="case-card-body"><h3>2026 Architectural Door Trends</h3><p>From Agate Grey to Matt Black stainless bar handles.</p></div></div>
          </div>
        </div>
      </section>
    `;
  }

  renderFaqsPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header" style="max-width: 720px; margin: 0 auto 3rem; text-align: center;">
            <span class="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h1 class="section-title" style="font-size: 3rem;">Got Questions?</h1>
          </div>
          <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 16px; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; box-shadow: var(--shadow-subtle);">
            <div><h4 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.5rem;">What is a composite door?</h4><p style="color: var(--text-secondary);">A composite door is engineered using multiple materials including a 50mm thermal core, 4mm GRP skin, and steel-reinforced frame for maximum strength and thermal efficiency.</p></div>
            <hr style="border: 0; border-top: 1px solid var(--border-subtle);" />
            <div><h4 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.5rem;">How secure are Vanguard doors?</h4><p style="color: var(--text-secondary);">Every Vanguard door is fitted with an Ultion 3-Star Diamond cylinder and multi-point hook locks, certified to PAS 24 Secured by Design standards.</p></div>
          </div>
        </div>
      </section>
    `;
  }

  renderBrochuresPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container" style="text-align: center; max-width: 680px;">
          <span class="eyebrow">DIGITAL BROCHURES</span>
          <h1 class="section-title" style="font-size: 3rem; margin-bottom: 1rem;">Download 2026 Spec Guide</h1>
          <p class="section-subtitle" style="margin: 0 auto 2rem;">Get our full product range specification brochure delivered instantly to your device.</p>
          <a href="#/doors" class="btn btn-primary" onclick="showToast('Official Brochure Download Started!')">Download Full PDF Brochure (14.2 MB)</a>
        </div>
      </section>
    `;
  }

  renderPricesPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container">
          <div class="section-header" style="text-align: center; max-width: 680px; margin: 0 auto 3rem;">
            <span class="eyebrow">TRANSPARENT PRICING</span>
            <h1 class="section-title" style="font-size: 3rem;">Pricing Guide</h1>
            <p class="section-subtitle">Estimated supply & professional installation costs across our main composite collections.</p>
          </div>
          <div style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 16px; max-width: 800px; margin: 0 auto; box-shadow: var(--shadow-subtle);">
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-subtle);"><strong>Arden Modern Linear</strong><span style="font-weight: 700; color: var(--accent-gold);">£1,250 - £1,420</span></div>
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-subtle);"><strong>Windsor Traditional Arch</strong><span style="font-weight: 700; color: var(--accent-gold);">£1,180 - £1,350</span></div>
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-subtle);"><strong>Malvern Cottage Plank</strong><span style="font-weight: 700; color: var(--accent-gold);">£1,320 - £1,480</span></div>
            <div style="display: flex; justify-content: space-between; padding: 1rem 0;"><strong>Heritage Split Stable</strong><span style="font-weight: 700; color: var(--accent-gold);">£1,450 - £1,620</span></div>
            <a href="#/installer-finder" class="btn btn-primary" style="width: 100%; margin-top: 2rem;">Get Exact Survey Quote</a>
          </div>
        </div>
      </section>
    `;
  }

  renderAboutPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container" style="max-width: 800px;">
          <span class="eyebrow">OUR HERITAGE</span>
          <h1 class="section-title" style="font-size: 3rem; margin-bottom: 1.5rem;">British Engineering Excellence</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.8;">Vanguard Composite Doors is a premier British door manufacturer dedicated to designing entrance systems that combine period craftsmanship with 21st century security and insulation technology.</p>
        </div>
      </section>
    `;
  }

  renderContactPage() {
    return `
      <section style="padding: 5rem 0; background: var(--bg-main);">
        <div class="container" style="max-width: 680px;">
          <div class="section-header" style="text-align: center;">
            <span class="eyebrow">GET IN TOUCH</span>
            <h1 class="section-title" style="font-size: 3rem;">Contact Customer Support</h1>
          </div>
          <form onsubmit="event.preventDefault(); showToast('Message sent! Support will contact you.');" style="background: var(--bg-white); border: 1px solid var(--border-subtle); padding: 3rem; border-radius: 16px; display: flex; flex-direction: column; gap: 1.25rem; box-shadow: var(--shadow-subtle);">
            <input type="text" placeholder="Your Full Name" required style="padding: 1rem; border-radius: 4px; border: 1px solid var(--border-subtle); background: var(--bg-main);" />
            <input type="email" placeholder="Your Email Address" required style="padding: 1rem; border-radius: 4px; border: 1px solid var(--border-subtle); background: var(--bg-main);" />
            <textarea placeholder="How can we help?" rows="5" required style="padding: 1rem; border-radius: 4px; border: 1px solid var(--border-subtle); background: var(--bg-main);"></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    `;
  }

  bindPageInteractions(path) {
    if (path === '/door-designer') {
      if (window.DoorConfigurator && !window.doorConfigurator) {
        window.doorConfigurator = new window.DoorConfigurator('config-canvas-container', 'config-controls-container');
      } else if (window.doorConfigurator) {
        window.doorConfigurator.canvasContainer = document.getElementById('config-canvas-container');
        window.doorConfigurator.renderCanvas();
      }
    }
  }
}

window.AppRouter = AppRouter;
