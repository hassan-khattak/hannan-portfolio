(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('#siteHeader');
  const fill = document.querySelector('#progressFill');
  const menu = document.querySelector('#mainNav');
  const toggle = document.querySelector('#menuToggle');
  const links = [...document.querySelectorAll('.nav-link')];

  document.querySelector('#year').textContent = new Date().getFullYear();
  if (!reducedMotion && matchMedia('(pointer: fine)').matches) {
    addEventListener('pointermove', event => {
      document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
    }, { passive: true });
  }

  const canvas = document.querySelector('#networkCanvas');
  const context = canvas.getContext('2d');
  let nodes = [], frame = 0, width = 0, height = 0;
  const pointer = { x: -1000, y: -1000 };
  const makeNodes = () => {
    const count = innerWidth < 700 ? 22 : Math.min(58, Math.round(innerWidth / 28));
    nodes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
      r: index % 9 === 0 ? 2.2 : Math.random() * 1.1 + .45,
      hot: index % 11 === 0
    }));
  };
  const resizeNetwork = () => {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    width = innerWidth; height = innerHeight;
    canvas.width = width * ratio; canvas.height = height * ratio;
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0); makeNodes();
  };
  const drawNetwork = () => {
    context.clearRect(0, 0, width, height);
    nodes.forEach((node, index) => {
      if (!reducedMotion) {
        node.x += node.vx; node.y += node.vy;
        if (node.x < -10 || node.x > width + 10) node.vx *= -1;
        if (node.y < -10 || node.y > height + 10) node.vy *= -1;
        const pdx = pointer.x - node.x, pdy = pointer.y - node.y, pointerDistance = Math.hypot(pdx, pdy);
        if (pointerDistance < 150 && pointerDistance > 1) { node.x -= pdx * .0007; node.y -= pdy * .0007; }
      }
      for (let next = index + 1; next < nodes.length; next++) {
        const dx = node.x - nodes[next].x, dy = node.y - nodes[next].y, distance = Math.hypot(dx, dy);
        if (distance < 125) {
          context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(nodes[next].x, nodes[next].y);
          context.strokeStyle = `rgba(227,36,43,${(1 - distance / 125) * .115})`; context.lineWidth = .7; context.stroke();
        }
      }
      context.beginPath(); context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      context.fillStyle = node.hot ? 'rgba(227,36,43,.7)' : 'rgba(242,240,233,.2)'; context.fill();
    });
    if (!reducedMotion) frame = requestAnimationFrame(drawNetwork);
  };
  addEventListener('pointermove', event => { pointer.x = event.clientX; pointer.y = event.clientY; }, { passive: true });
  addEventListener('pointerleave', () => { pointer.x = -1000; pointer.y = -1000; });
  addEventListener('resize', () => { cancelAnimationFrame(frame); resizeNetwork(); drawNetwork(); }, { passive: true });
  resizeNetwork(); drawNetwork();

  const updateScroll = () => {
    const range = document.documentElement.scrollHeight - innerHeight;
    fill.style.height = `${range ? Math.min(100, scrollY / range * 100) : 0}%`;
    header.classList.toggle('scrolled', scrollY > 20);
  };
  addEventListener('scroll', updateScroll, { passive: true }); updateScroll();

  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open); document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); document.body.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false'); }));
  addEventListener('keydown', event => { if (event.key === 'Escape') { menu.classList.remove('open'); document.body.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false'); } });

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) reveals.forEach(el => el.classList.add('visible'));
  else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    reveals.forEach((el, i) => { if (el.closest('.hero')) el.style.transitionDelay = `${Math.min(i * 90, 360)}ms`; observer.observe(el); });
  }

  if (!reducedMotion) {
    const metricsBlock = document.querySelector('.metrics');
    const countObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.metric-value').forEach((value, index) => {
        const target = Number(value.dataset.count), suffix = value.dataset.suffix || '', duration = 1100 + index * 90;
        const start = performance.now();
        const count = now => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 4);
          value.textContent = `${Math.round(target * eased).toLocaleString()}${suffix}`;
          if (progress < 1) requestAnimationFrame(count);
        };
        requestAnimationFrame(count);
      });
      countObserver.unobserve(entry.target);
    }), { threshold: .3 });
    countObserver.observe(metricsBlock);
  }

  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  }), { rootMargin: '-40% 0px -50%' });
  document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

  const scenes = {
    intro: ['72%', '18%', '.065'], scale: ['15%', '48%', '.085'], profile: ['80%', '52%', '.045'],
    work: ['48%', '38%', '.09'], archive: ['15%', '65%', '.055'], expertise: ['84%', '45%', '.065'],
    approach: ['28%', '58%', '.05'], contact: ['72%', '72%', '.12']
  };
  const sceneObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const scene = scenes[entry.target.dataset.scene];
    if (!scene) return;
    document.documentElement.style.setProperty('--scene-x', scene[0]);
    document.documentElement.style.setProperty('--scene-y', scene[1]);
    document.documentElement.style.setProperty('--scene-opacity', scene[2]);
    document.querySelector('.background-type span').textContent = entry.target.dataset.scene === 'work' ? 'SHIP' : entry.target.dataset.scene === 'contact' ? 'TALK' : 'BUILD';
    document.querySelectorAll('[data-scene]').forEach(section => section.classList.toggle('scene-active', section === entry.target));
  }), { rootMargin: '-35% 0px -55%' });
  document.querySelectorAll('[data-scene]').forEach(section => sceneObserver.observe(section));

  const expertiseGrid = document.querySelector('.expertise-grid');
  const energyObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('energized');
  }), { threshold: .3 });
  energyObserver.observe(expertiseGrid);

  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.archive-card').forEach((card, index) => {
      const show = selected === 'all' || card.dataset.category.split(' ').includes(selected);
      clearTimeout(card._filterTimer);
      card.classList.remove('filter-in');
      if (show) {
        card.classList.remove('hidden', 'filter-out');
        requestAnimationFrame(() => { card.style.animationDelay = `${index * 55}ms`; card.classList.add('filter-in'); });
      } else if (!card.classList.contains('hidden')) {
        card.classList.add('filter-out');
        card._filterTimer = setTimeout(() => { card.classList.add('hidden'); card.classList.remove('filter-out'); }, reducedMotion ? 0 : 250);
      }
    });
  }));

  const principles = document.querySelector('.principles');
  const approachItems = [...document.querySelectorAll('.principle')];
  const updateApproach = () => {
    const rect = principles.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (innerHeight * .68 - rect.top) / (rect.height || 1)));
    principles.style.setProperty('--approach-progress', `${progress * 100}%`);
    approachItems.forEach((item, index) => item.classList.toggle('active', progress > index / approachItems.length - .02));
  };
  addEventListener('scroll', updateApproach, { passive: true }); updateApproach();

  document.querySelectorAll('.case-panel').forEach(panel => panel.addEventListener('pointermove', event => {
    const rect = panel.getBoundingClientRect(); panel.style.setProperty('--mx', `${event.clientX - rect.left}px`); panel.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }));

  document.querySelector('#copyEmail').addEventListener('click', async () => {
    const status = document.querySelector('#copyStatus');
    try { await navigator.clipboard.writeText('hanan@xontrix.com'); status.textContent = 'Email copied.'; }
    catch { status.textContent = 'Copy: hanan@xontrix.com'; }
    setTimeout(() => { status.textContent = ''; }, 3000);
  });

  const palette = document.querySelector('#commandPalette');
  const paletteInput = document.querySelector('#commandInput');
  const paletteItems = [...document.querySelectorAll('.command-item')];
  let activeCommand = 0, returnFocus = null;
  const visibleCommands = () => paletteItems.filter(item => !item.closest('li').hidden);
  const paintCommand = () => visibleCommands().forEach((item, index) => item.classList.toggle('active', index === activeCommand));
  const openPalette = () => {
    returnFocus = document.activeElement; palette.classList.add('open'); palette.setAttribute('aria-hidden', 'false');
    paletteInput.value = ''; paletteItems.forEach(item => item.closest('li').hidden = false); activeCommand = 0; paintCommand();
    requestAnimationFrame(() => paletteInput.focus());
  };
  const closePalette = () => { palette.classList.remove('open'); palette.setAttribute('aria-hidden', 'true'); returnFocus?.focus(); };
  const runCommand = async item => {
    const action = item.dataset.action;
    closePalette();
    if (action === 'goto') document.querySelector(item.dataset.target)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    if (action === 'copy') { try { await navigator.clipboard.writeText('hanan@xontrix.com'); } catch {} }
    if (action === 'linkedin') window.open('https://www.linkedin.com/in/abdulhananriaz/', '_blank', 'noopener');
  };
  document.querySelector('#commandTrigger').addEventListener('click', openPalette);
  palette.addEventListener('pointerdown', event => { if (event.target === palette) closePalette(); });
  paletteItems.forEach(item => item.addEventListener('click', () => runCommand(item)));
  paletteInput.addEventListener('input', () => {
    const query = paletteInput.value.toLowerCase().trim();
    paletteItems.forEach(item => item.closest('li').hidden = !item.textContent.toLowerCase().includes(query));
    activeCommand = 0; paintCommand();
  });
  addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); palette.classList.contains('open') ? closePalette() : openPalette(); return; }
    if (!palette.classList.contains('open')) return;
    if (event.key === 'Escape') { event.preventDefault(); closePalette(); }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault(); const items = visibleCommands(); if (!items.length) return;
      activeCommand = (activeCommand + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; paintCommand(); items[activeCommand].scrollIntoView({ block: 'nearest' });
    }
    if (event.key === 'Enter') { const item = visibleCommands()[activeCommand]; if (item) { event.preventDefault(); runCommand(item); } }
  });
})();
