/* ==========================================================================
   VANGUARD COMPOSITE DOORS - MAIN APPLICATION LOGIC
   Handles interactive features, mega menus, filters, review carousels,
   postcode installer lookup, modals, and toast notifications.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky & Scroll Dynamics
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Drawer Navigation & Accordion
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileToggleHeroBtn = document.getElementById('mobile-toggle-btn-hero');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');

  function openMobileDrawer() {
    mobileDrawer?.classList.add('active');
    mobileBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileDrawer?.classList.remove('active');
    mobileBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.closeMobileDrawer = closeMobileDrawer;

  mobileToggleBtn?.addEventListener('click', openMobileDrawer);
  mobileToggleHeroBtn?.addEventListener('click', openMobileDrawer);
  mobileCloseBtn?.addEventListener('click', closeMobileDrawer);
  mobileBackdrop?.addEventListener('click', closeMobileDrawer);

  // Mobile Accordion Items
  const accordionButtons = document.querySelectorAll('.mobile-accordion-btn');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mobile-accordion-item');
      const content = item.querySelector('.mobile-accordion-content');
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.mobile-accordion-item').forEach(i => {
        i.classList.remove('active');
        const c = i.querySelector('.mobile-accordion-content');
        if (c) c.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        if (content) content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // 3. Product Collection Category Filtering
  const productTabs = document.querySelectorAll('.products-section .tab-btn');
  const productCards = document.querySelectorAll('.products-grid .product-card');

  productTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      productTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Colour Collection Filter & Swatch Click
  const colourSwatches = document.querySelectorAll('.swatch-card-full');
  colourSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colourSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const colorKey = swatch.getAttribute('data-color-key');
      if (window.doorConfigurator && colorKey) {
        window.doorConfigurator.setState('color', colorKey);
      }
    });
  });

  // 5. Gallery Filters & Lightbox
  const galleryTabs = document.querySelectorAll('.gallery-section .tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-masonry .gallery-item');

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img')?.src;
      const title = item.querySelector('.gallery-overlay h4')?.textContent || 'Rockdoor Composite Door';
      const color = item.querySelector('.gallery-overlay p')?.textContent || 'Custom Architectural Finish';

      openModal(`
        <div style="text-align: center;">
          <img src="${img}" style="max-height: 480px; width: auto; border-radius: 8px; margin: 0 auto 1.5rem;" alt="${title}" />
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">${title}</h3>
          <p style="color: var(--text-secondary); font-size: 0.9375rem; margin-bottom: 1.5rem;">${color}</p>
          <a href="#/door-designer" class="btn btn-gold" onclick="closeModal()">Configure This Style in 3D</a>
        </div>
      `);
    });
  });

  // 6. Postcode Installer Search Engine
  const postcodeForm = document.getElementById('postcode-lookup-form');
  const postcodeInput = document.getElementById('postcode-input');

  const mockInstallers = [
    { name: 'Apex Premier Windows & Doors Ltd', distance: '1.4 miles away', rating: '4.9 ★ (184 reviews)', phone: '0800 456 7890', area: 'Central & Surrounding Areas' },
    { name: 'Rockdoor Elite Master Fitters', distance: '3.2 miles away', rating: '5.0 ★ (96 reviews)', phone: '0800 123 9988', area: 'Greater Region Direct' },
    { name: 'Heritage Architectural Joinery', distance: '5.8 miles away', rating: '4.8 ★ (120 reviews)', phone: '0161 789 2211', area: 'Regional Master Installer' }
  ];

  postcodeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = postcodeInput?.value.trim().toUpperCase();
    
    // Basic UK Postcode validation regex
    const postcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|[A-Z]{1,2}\d{1,2})$/i;

    if (!val || val.length < 3) {
      showToast('Please enter a valid UK postcode.', 'error');
      return;
    }

    let resultsHTML = `
      <div class="eyebrow">APPROVED INSTALLERS NEAR ${val}</div>
      <h3 style="font-size: 1.75rem; color: var(--text-primary); margin-bottom: 1.5rem;">Trusted Rockdoor Local Fitters</h3>
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
    `;

    mockInstallers.forEach(inst => {
      resultsHTML += `
        <div style="background: var(--bg-main); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="color: var(--text-primary); font-size: 1.125rem; margin-bottom: 0.25rem;">${inst.name}</h4>
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;">${inst.rating} • ${inst.distance}</p>
            <p style="color: var(--text-muted); font-size: 0.8125rem;">Direct Line: ${inst.phone}</p>
          </div>
          <button class="btn btn-gold btn-sm" onclick="requestQuoteFromInstaller('${inst.name}')">Request Free Survey</button>
        </div>
      `;
    });

    resultsHTML += `</div>`;

    openModal(resultsHTML);
  });

  // Quote Request Handler
  window.requestQuoteFromInstaller = function(installerName) {
    openModal(`
      <div class="eyebrow">FREE NO-OBLIGATION QUOTE</div>
      <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 1rem;">Book Survey with ${installerName}</h3>
      <form onsubmit="handleQuoteSubmit(event)" style="display: flex; flex-direction: column; gap: 1rem;">
        <input type="text" placeholder="Full Name" required style="padding: 0.75rem 1rem; border-radius: 4px; border: 1px solid var(--border-subtle); background: var(--bg-main); color: var(--text-primary);" />
        <input type="email" placeholder="Email Address" required style="padding: 0.75rem 1rem; border-radius: 4px; border: 1px solid var(--border-subtle); background: var(--bg-main); color: var(--text-primary);" />
        <input type="tel" placeholder="Phone Number" required style="padding: 0.75rem 1rem; border-radius: 4px; border: 1px solid var(--border-subtle); background: var(--bg-main); color: var(--text-primary);" />
        <button type="submit" class="btn btn-gold" style="margin-top: 1rem;">Submit Survey Request</button>
      </form>
    `);
  };

  window.handleQuoteSubmit = function(e) {
    e.preventDefault();
    closeModal();
    showToast('Quote survey request sent successfully! A master fitter will contact you shortly.');
  };

  // 7. General Modal Functions
  function openModal(contentHTML) {
    let modal = document.getElementById('general-app-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'general-app-modal';
      modal.className = 'modal-backdrop';
      document.body.appendChild(modal);
    }
    modal.innerHTML = `
      <div class="modal-content-box">
        <button class="modal-close-btn" onclick="closeModal()">&times;</button>
        ${contentHTML}
      </div>
    `;
    modal.classList.add('active');
  }

  window.openModal = openModal;

  function closeModal() {
    const modal = document.getElementById('general-app-modal');
    if (modal) modal.classList.remove('active');
  }

  window.closeModal = closeModal;

  // 8. Toast Notification System
  function showToast(message, type = 'success') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.cssText = 'position: fixed; bottom: 2rem; right: 2rem; z-index: 3000; display: flex; flex-direction: column; gap: 0.75rem;';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: var(--bg-secondary);
      color: var(--text-light);
      border: 1px solid ${type === 'error' ? '#ef4444' : 'var(--accent-gold)'};
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      font-size: 0.9375rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      animation: slideIn 0.3s ease forwards;
    `;
    toast.innerHTML = `<span>${type === 'error' ? '⚠️' : '✨'}</span> ${message}`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  window.showToast = showToast;

  // Initialize Router
  if (window.AppRouter) {
    window.appRouter = new window.AppRouter();
  }

  // Initialize Configurator
  if (window.DoorConfigurator) {
    window.doorConfigurator = new window.DoorConfigurator('config-canvas-container', 'config-controls-container');
  }
});

// Category Switcher for Browse Rockdoors Section
window.switchBrowseTab = function(category, catName) {
  const activeLabel = document.getElementById('browse-active-cat');
  if (activeLabel) activeLabel.textContent = catName;

  document.querySelectorAll('.browse-tab-link').forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.browse-card-rockdoor').forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

window.scrollBrowseCarousel = function(direction) {
  const track = document.getElementById('browse-carousel-track');
  if (track) {
    track.scrollBy({ left: direction * 320, behavior: 'smooth' });
  }
};

window.scrollInspirationCarousel = function(direction) {
  const track = document.getElementById('inspiration-carousel-track');
  if (track) {
    track.scrollBy({ left: direction * 320, behavior: 'smooth' });
  }
};
