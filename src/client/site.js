(() => {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  const social = document.getElementById('social-links');
  const lineMobile = document.getElementById('line-mobile');
  const toTop = document.getElementById('to-top');
  const scrollDown = document.getElementById('scroll-down');

  let menuOpen = false;

  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    const isMobile = window.matchMedia('(max-width: 959px)').matches;

    if (header) header.classList.toggle('headerFixed', scrolled);

    if (social) {
      if (isMobile) {
        social.classList.toggle('isShown', scrolled);
        social.classList.toggle('snsHidden', !scrolled);
      } else {
        social.classList.remove('isShown', 'snsHidden');
      }
    }

    if (lineMobile) {
      if (isMobile && scrolled) lineMobile.classList.add('visible');
      else lineMobile.classList.remove('visible');
    }

    if (toTop) {
      toTop.classList.toggle('toTopHidden', !scrolled);
      toTop.classList.toggle('toTopVisible', scrolled);
    }

    if (scrollDown && scrolled) scrollDown.classList.add('scrollHidden');
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  if (toTop) {
    const toTopBtn = document.getElementById('to-top-btn');
    if (toTopBtn) {
      toTopBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (scrollDown) {
    setTimeout(() => {
      if (window.scrollY <= 20) scrollDown.classList.remove('scrollHidden');
    }, 1500);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      toggle.classList.toggle('opened', menuOpen);
      toggle.setAttribute('aria-expanded', String(menuOpen));
      toggle.setAttribute(
        'aria-label',
        menuOpen ? 'メニューを閉じる' : 'メニューを開く'
      );
      nav.classList.toggle('navVisible', menuOpen);
      nav.classList.toggle('navHidden', !menuOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuOpen = false;
        toggle.classList.remove('opened');
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('navVisible');
        nav.classList.add('navHidden');
      });
    });
  }

  const swiper = document.getElementById('hero-swiper');
  if (swiper) {
    const slides = Array.from(swiper.querySelectorAll('[data-slide]'));

    if (slides.length > 1) {
      let index = 0;
      setInterval(() => {
        slides[index].classList.remove('is-active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('is-active');
      }, 6000);
    }
  }

  // スクロール出現（旧 useInView 相当）
  // 先に in-view へ .start を付けてから js-reveal を付与し、タイトルが一瞬消えないようにする
  const revealEls = Array.from(
    document.querySelectorAll('[data-reveal], [data-reveal-section]')
  );
  const activateReveal = (el) => {
    if (el.hasAttribute('data-reveal-section')) {
      if (el.hasAttribute('data-revealed')) return;
      el.querySelectorAll('.effect').forEach((child) => {
        child.classList.add('start');
        if (child.hasAttribute('data-reveal-zoom')) {
          child.classList.add('animZoomIn');
        }
      });
      el.setAttribute('data-revealed', '');
      return;
    }
    if (el.classList.contains('start')) return;
    el.classList.add('start');
    if (el.hasAttribute('data-reveal-zoom')) {
      el.classList.add('animZoomIn');
    }
  };
  const shouldReveal = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    // 画面内に入った／すでに通り過ぎた（早め発火しすぎると画面外でアニメ終了する）
    return rect.top < vh * 0.88 || rect.bottom < 0;
  };
  const flushReveals = () => {
    for (const el of revealEls) {
      if (el.hasAttribute('data-revealed')) continue;
      if (el.classList.contains('start')) continue;
      if (shouldReveal(el)) activateReveal(el);
    }
  };

  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !shouldReveal(entry.target)) return;
          activateReveal(entry.target);
          revealIo.unobserve(entry.target);
        });
      },
      // 旧 useInView threshold: 0.1 相当。見えるタイミングでふわっと出す
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    revealEls.forEach((el) => revealIo.observe(el));
    flushReveals();
    // 先に in-view へ start を付けてから隠すクラスを付与（消えたまま防止）
    document.documentElement.classList.add('js-reveal');
    requestAnimationFrame(flushReveals);
    window.addEventListener('scroll', flushReveals, { passive: true });
    window.addEventListener('resize', flushReveals);
    window.addEventListener('load', flushReveals);
    // 保険: 画面に到達済みのものだけ強制表示（全部一括はしない）
    setTimeout(flushReveals, 8000);
  } else {
    revealEls.forEach(activateReveal);
  }

  document.querySelectorAll('[data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordionItem');
      if (!item) return;
      const content = item.querySelector('[data-accordion-content]');
      const icon = button.querySelector('.icon');
      const open = button.classList.toggle('active');
      if (content) {
        if (open) {
          content.style.maxHeight = `${content.scrollHeight + 40}px`;
          content.style.paddingTop = '16px';
        } else {
          content.style.maxHeight = '0';
          content.style.paddingTop = '0';
        }
      }
      if (icon) {
        icon.classList.toggle('activeIcon', open);
        icon.classList.toggle('nonActiveIcon', !open);
        icon.textContent = open ? '−' : '+';
      }
    });
  });

  document.querySelectorAll('.youtubeLite').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-youtube-id');
      if (!id) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      iframe.title = 'YouTube video player';
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.className = 'youtubeLite__iframe';
      button.replaceWith(iframe);
    });
  });

  const map = document.getElementById('footer-map');
  if (map && 'IntersectionObserver' in window) {
    const src = map.getAttribute('data-src');
    if (src) {
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          map.setAttribute('src', src);
          io.disconnect();
        },
        { rootMargin: '200px' }
      );
      io.observe(map);
    }
  } else if (map) {
    const src = map.getAttribute('data-src');
    if (src) map.setAttribute('src', src);
  }

  const form = document.getElementById('contact-form');
  const modal = document.getElementById('contact-modal');
  const cancel = document.getElementById('contact-modal-cancel');
  const send = document.getElementById('contact-modal-send');
  const apiError = document.getElementById('api-error');
  if (!form || !modal || !cancel || !send) return;

  const emailRe =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  let pending = null;

  const setError = (name, message) => {
    const el = form.querySelector(`[data-error="${name}"]`);
    if (!el) return;
    if (message) {
      el.textContent = message;
      el.hidden = false;
    } else {
      el.textContent = '';
      el.hidden = true;
    }
  };

  const showApiError = (message) => {
    if (!apiError) return;
    apiError.textContent = message;
    apiError.classList.add('isVisible');
  };

  const readForm = () => {
    const data = new FormData(form);
    return {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      message: String(data.get('message') || '').trim()
    };
  };

  const validate = (values) => {
    let ok = true;
    setError('name', '');
    setError('email', '');
    setError('message', '');
    if (!values.name) {
      setError('name', 'お名前を入力してください。');
      ok = false;
    } else if (values.name.length > 20) {
      setError('name', '20文字以下で入力してください。');
      ok = false;
    }
    if (!values.email) {
      setError('email', 'メールアドレスを入力してください。');
      ok = false;
    } else if (values.email.length > 50) {
      setError('email', '50文字以下で入力してください。');
      ok = false;
    } else if (!emailRe.test(values.email)) {
      setError('email', '正しいメールアドレスを入力してください。');
      ok = false;
    }
    if (!values.message) {
      setError('message', 'メッセージを入力してください。');
      ok = false;
    } else if (values.message.length > 1000) {
      setError('message', '1000文字以下で入力してください。');
      ok = false;
    }
    return ok;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (apiError) apiError.classList.remove('isVisible');
    const values = readForm();
    if (!validate(values)) return;
    pending = values;
    document.getElementById('confirm-name').textContent = values.name;
    document.getElementById('confirm-email').textContent = values.email;
    document.getElementById('confirm-message').textContent = values.message;
    modal.classList.add('isOpen');
  });

  cancel.addEventListener('click', () => modal.classList.remove('isOpen'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.remove('isOpen');
  });

  send.addEventListener('click', async () => {
    if (!pending) return;
    send.disabled = true;
    send.textContent = '送信中…';
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pending)
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        modal.classList.remove('isOpen');
        showApiError(
          json.error ||
            '送信に失敗しました。Resend のドメイン認証と .dev.vars を確認してください。'
        );
        send.disabled = false;
        send.textContent = '送信する';
        return;
      }
      window.location.href = '/contact/complete';
    } catch {
      modal.classList.remove('isOpen');
      showApiError('通信エラーが発生しました。時間をおいて再度お試しください。');
      send.disabled = false;
      send.textContent = '送信する';
    }
  });

})();
