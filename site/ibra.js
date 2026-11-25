/* ibravoice — واجهة متجر ابراهيم اليوسف (تعليق صوتي) · v1 */
(function () {
  if (window.__IBRA__) return;
  window.__IBRA__ = true;

  var C = {
    wa: '966545057115',
    handle: 'ibralyousef',
    hero: 'a', /* معتمد 2026-11-25: البنر الهادي */
    audioBase: window.IBRA_AUDIO_BASE || 'https://cdn.jsdelivr.net/gh/brhomy4080-wq/ibravoice-samples@v1/',
    links: {
      vo: '/products/VO',
      vip: '/products/VIP',
      p5: '/products/5071dee8-5e71-4914-8ab3-42af4b2e25d9/',
      p10: '/products/b894de85-9208-4b12-94ae-576affa2cdc5/',
      p20: '/products/9ba65d77-b2e2-41aa-b4e7-e6305be7aa95/',
      p50: '/products/5c5774fb-4b49-4e71-ae4c-36cfa570ff2c/',
      refund: '/pages/112422',
      samples: '/pages/samples', /* تتغيّر لرابط صفحة العيّنات بعد إنشائها */
      packs: '/categories/1537978/'
    },
    socials: [
      { k: 'tiktok', t: 'تيك توك', u: 'https://www.tiktok.com/@ibralyousef' },
      { k: 'instagram', t: 'انستقرام', u: 'https://www.instagram.com/ibralyousef' },
      { k: 'x', t: 'إكس', u: 'https://x.com/ibralyousef' },
      { k: 'youtube', t: 'يوتيوب', u: 'https://www.youtube.com/@ibralyousef' },
      { k: 'snapchat', t: 'سناب شات', u: 'https://www.snapchat.com/add/ibralyousef' }
    ],
    samples: [
      { t: 'الإعلاني', d: 'حيوي ومقنع، يبيع المنتج من أول جملة', f: '02-ad.mp3', g: 'biz' },
      { t: 'الوثائقي', d: 'رسمي وموثوق للأفلام الوثائقية', f: '01-documentary.mp3', g: 'info' },
      { t: 'الرد الآلي', d: 'واضح وسلس لأنظمة IVR', f: '03-ivr.mp3', g: 'biz' },
      { t: 'الإخباري', d: 'جاد ومحايد بنبرة نشرة', f: '04-news.mp3', g: 'info' },
      { t: 'التعليمي', d: 'بسيط يُوصل المعلومة بسهولة', f: '05-education.mp3', g: 'info' },
      { t: 'القصصي', d: 'مشوّق يشدّ المستمع حتى النهاية', f: '06-story.mp3', g: 'art' },
      { t: 'الشعر', d: 'إلقاء يبرز الإيقاع والإحساس', f: '07-poetry.mp3', g: 'art' },
      { t: 'الدرامي', d: 'تعبير عاطفي للمشاهد التمثيلية', f: '08-drama.mp3', g: 'art' },
      { t: 'التوعوي', d: 'موجّه لقضايا صحية واجتماعية', f: '09-awareness.mp3', g: 'info' },
      { t: 'الترفيهي', d: 'مرح وخفيف للبرامج والأطفال', f: '10-fun.mp3', g: 'art' },
      { t: 'الرسمي', d: 'للمؤتمرات والخطابات الرسمية', f: '11-formal.mp3', g: 'biz' },
      { t: 'الحماسي', d: 'طاقة عالية للرياضة والعروض', f: '12-hype.mp3', g: 'biz' }
    ],
    reels: [
      { p: 'tt', id: '7660245006539590933', t: 'ليه أحب التعليق الصوتي؟' },
      { p: 'tt', id: '7659124938997107989', t: 'فما عيني تساعدني فأبكي' },
      { p: 'tt', id: '7660565293743230229', t: 'الطيبين للطيبات' },
      { p: 'tt', id: '7611255918487014677', t: 'هادئين جدًا' },
      { p: 'tt', id: '7608673386834808084', t: 'انفض غبار الهم عن قلبك' },
      { p: 'tt', id: '7665351611467779348', t: 'طاقتك لها حد' }
    ]
  };

  var I = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 5.6v12.8a1 1 0 0 0 1.52.85l10.1-6.4a1 1 0 0 0 0-1.7L8.92 4.75A1 1 0 0 0 7.4 5.6z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="4" height="14" rx="1.2"/><rect x="13.5" y="5" width="4" height="14" rx="1.2"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    ear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 10.5v3M21 12h0"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2A9.7 9.7 0 0 0 3.7 17l-1.4 4.8 5-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2c0 1.2.8 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.2-.2-.2-.4-.3z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 2.5c.4 2.4 1.8 3.9 4.2 4.1v3.3a7.6 7.6 0 0 1-4.1-1.3v6.6a6.3 6.3 0 1 1-6.3-6.3h.6v3.4h-.6a2.9 2.9 0 1 0 2.9 2.9V2.5z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18.1 5.6 12 5.6 12 5.6s-6.1 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.8.5 7.9.5 7.9.5s6.1 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8zM10 15.2V8.8l5.3 3.2z"/></svg>',
    snapchat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6c3.2 0 5.4 2.4 5.4 5.6l-.1 2.4 1.6-.5c.7-.1 1.1.7.5 1.1l-1.9 1c.6 1.8 2 3.1 3.9 3.6.1.6-1.1 1-2.6 1.3l-.4 1.3-1.8-.2c-1.4 0-2.2 1.4-4.6 1.4s-3.2-1.4-4.6-1.4l-1.8.2-.4-1.3c-1.5-.3-2.7-.7-2.6-1.3 1.9-.5 3.3-1.8 3.9-3.6l-1.9-1c-.6-.4-.2-1.2.5-1.1l1.6.5-.1-2.4c0-3.2 2.2-5.6 5.4-5.6z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11l8-6.5L20 11"/><path d="M6 9.8V19h4.5v-5h3v5H18V9.8"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10.5v3"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4l8.5 4.5L12 13 3.5 8.5z"/><path d="M3.5 12.5L12 17l8.5-4.5"/><path d="M3.5 16.5L12 21l8.5-4.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M18.5 15.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3.5h7l4 4v13H7z"/><path d="M14 3.5v4h4M9.5 12h6M9.5 15.5h6"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 0 1 13-5.1L19.5 9"/><path d="M19.5 4.5V9H15"/><path d="M19.5 12a7.5 7.5 0 0 1-13 5.1L4.5 15"/><path d="M4.5 19.5V15H9"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5.5"/><path d="M9 14l-1.5 7L12 19l4.5 2L15 14"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 12.5V4.5h8l9 9-8 8z"/><circle cx="8" cy="9" r="1.3"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8.5h16v4H4zM5.5 12.5V20h13v-7.5M12 8.5V20"/><path d="M12 8.5C10.3 4.5 6.8 5 8 8.5M12 8.5c1.7-4 5.2-3.5 4 0"/></svg>',
    steps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6h10M10 12h10M10 18h10"/><path d="M4 6h2M4 12h2M4 18h2"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 4.5h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h7.6a1.5 1.5 0 0 0 1.5-1.1l1.6-6.3H6.4"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function h(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function waLink(msg) { return 'https://wa.me/' + C.wa + '?text=' + encodeURIComponent(msg || 'السلام عليكم، أرغب في الاستفسار عن التعليق الصوتي'); }
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  function money(n) { return Number(n).toLocaleString('en-US'); }
  var SAR = '<span class="ib-sar">ر.س</span>';

  /* ---------- مشغّل صوت واحد للمتجر كله ---------- */
  var audio = new Audio();
  audio.preload = 'none';
  var current = null;
  function setState(btn, playing) {
    if (!btn) return;
    btn.classList.toggle('is-playing', playing);
    var card = btn.closest('[data-ib-card]');
    if (card) card.classList.toggle('is-playing', playing);
    var ic = btn.querySelector('.ib-ic');
    if (ic) ic.innerHTML = playing ? I.pause : I.play;
    btn.setAttribute('aria-label', playing ? 'إيقاف' : 'تشغيل');
  }
  function toggle(btn) {
    var src = C.audioBase + btn.getAttribute('data-src');
    if (current === btn && !audio.paused) { audio.pause(); return; }
    if (current && current !== btn) { setState(current, false); resetBar(current); }
    current = btn;
    if (audio.getAttribute('src') !== src) audio.setAttribute('src', src);
    audio.play().then(function () { setState(btn, true); }).catch(function () { setState(btn, false); });
  }
  function resetBar(btn) {
    var card = btn && btn.closest('[data-ib-card]');
    var bar = card && card.querySelector('.ib-bar i');
    if (bar) bar.style.width = '0%';
  }
  audio.addEventListener('pause', function () { setState(current, false); });
  audio.addEventListener('playing', function () { setState(current, true); });
  audio.addEventListener('ended', function () { setState(current, false); resetBar(current); });
  audio.addEventListener('timeupdate', function () {
    if (!current || !audio.duration) return;
    var card = current.closest('[data-ib-card]');
    var bar = card && card.querySelector('.ib-bar i');
    if (bar) bar.style.width = (audio.currentTime / audio.duration * 100).toFixed(1) + '%';
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-ib-play]');
    if (b) { e.preventDefault(); toggle(b); return; }
    var m = e.target.closest('[data-ib-more]');
    if (m) { var g = $('.ib-samples'); if (g) g.classList.add('is-all'); m.parentNode.remove(); }
  });

  function sampleCard(s, i) {
    return '<article class="ib-sample" data-ib-card>' +
      '<button class="ib-play" data-ib-play data-src="' + s.f + '" aria-label="تشغيل"><span class="ib-ic">' + I.play + '</span></button>' +
      '<div class="ib-sample__txt"><h3>' + s.t + '</h3><p>' + s.d + '</p><div class="ib-bar"><i></i></div></div>' +
      '<span class="ib-sample__n">' + String(i + 1).padStart(2, '0') + '</span>' +
      '</article>';
  }

  /* ---------- الصفحة الرئيسية ---------- */
  function buildHome() {
    var home = $('.app-content .home');
    if (!home || $('.ib-home')) return;
    document.documentElement.classList.add('ib-is-home');

    var sections = $$(':scope > section, :scope > div', home);
    var partners = null, reviews = null;
    sections.forEach(function (s) {
      var txt = (s.textContent || '');
      if (!partners && /شركاء/.test(txt) && !/آراء/.test(txt)) partners = s;
      else if (!reviews && /آراء العملاء/.test(txt)) reviews = s;
      else s.classList.add('ib-hide');
    });

    var html =
      '<div class="ib-home">' +

      /* البطل */
      heroHTML(heroVariant()) +

      /* المزايا */
      '<section class="ib-feats"><div class="ib-wrap ib-feats__grid">' +
        feat(I.mic, 'استوديو احترافي', 'تسجيل ومعالجة احترافية، وملفات WAV وMP3 جاهزة.') +
        feat(I.ear, 'عيّنة قبل التنفيذ', 'تسمع الأداء وتعتمده قبل النسخة النهائية.') +
        feat(I.clock, 'تسليم سريع', 'من يومين إلى ثلاثة أيام عمل، أو خلال 24 ساعة.') +
        feat(I.wa, 'تنسيق مباشر', 'أتفق معك على النبرة والأسلوب عبر الواتساب.') +
      '</div></section>' +

      /* العيّنات */
      '<section class="ib-sec ib-sec--cream" id="ib-samples"><div class="ib-wrap">' +
        head('اسمع قبل أن تطلب', '12 لون أداء.', 'اختر الأقرب إلى مشروعك.', 'اضغط على التشغيل وجرّب بنفسك، مدة كل عيّنة 15 ثانية.') +
        '<div class="ib-samples">' + C.samples.map(sampleCard).join('') + '</div>' +
        '<div class="ib-center ib-more-wrap"><button type="button" class="ib-btn ib-btn--line" data-ib-more>اعرض كل العيّنات (12)</button></div>' +
      '</div></section>' +

      /* الأسعار */
      '<section class="ib-sec" id="ib-plans"><div class="ib-wrap">' +
        head('الأسعار', 'اختر ما', 'يناسب مشروعك.', 'أسعار واضحة دون مفاجآت، مع إمكانية التقسيط عبر تمارا وإمكان.') +
        '<div class="ib-plans">' +
          '<article class="ib-plan"><span class="ib-x1c">×1</span>' +
            '<p class="ib-plan__tag">طلب فردي</p><h3>تعليق صوتي</h3>' +
            '<p class="ib-plan__price"><small>يبدأ من</small> 190 ' + SAR + '</p>' +
            '<ul class="ib-rows">' +
              row('15 ثانية', '190') + row('30 ثانية', '350') + row('60 ثانية', '550') +
            '</ul>' +
            '<p class="ib-plan__note">+200 ر.س للتسليم خلال 24 ساعة</p>' +
            '<a class="ib-btn ib-btn--ink ib-btn--block" href="' + C.links.vo + '">اطلب الآن</a>' +
          '</article>' +
          '<article class="ib-plan ib-plan--feat"><span class="ib-x1c">×5</span>' +
            '<p class="ib-plan__tag">للمحتوى المستمر</p><h3>باقة 5 مقاطع</h3>' +
            '<p class="ib-plan__price">1,490 ' + SAR + '</p>' +
            '<ul class="ib-list">' +
              '<li class="ib-list__per"><span>298 ر.س للمقطع</span></li>' + ['صوت واحد يعرفه جمهورك في كل إعلان', 'تعتمد النبرة مرة واحدة، وأُكمل عليها المقاطع كلها', 'أولوية في جدولي للمشاريع المستمرة', 'كل مقطع حتى 30 ثانية'].map(li).join('') +
            '</ul>' +
            '<a class="ib-btn ib-btn--accent ib-btn--block" href="' + C.links.p5 + '">اطلب الباقة</a>' +
          '</article>' +
          '<article class="ib-plan">' +
            '<p class="ib-plan__tag">للجهات والحملات الكبيرة</p><h3>طلب مخصّص</h3>' +
            '<p class="ib-plan__price"><small>يبدأ من</small> 1,500 ' + SAR + '</p>' +
            '<ul class="ib-list">' +
              ['أكثر من 5 مقاطع أو مشروع كبير', 'عرض سعر حسب المدة ونطاق الاستخدام', 'أكثر من تجربة أداء قبل الاعتماد', 'تواصل مباشر معي حتى التسليم'].map(li).join('') +
            '</ul>' +
            '<a class="ib-btn ib-btn--ink ib-btn--block" href="' + waLink('السلام عليكم، أرغب في طلب تعليق صوتي مخصّص لمشروعي') + '" target="_blank" rel="noopener">' + I.wa + ' تواصل عبر الواتساب</a>' +
          '</article>' +
        '</div>' +
      '</div></section>' +

      '<div class="ib-slot" data-slot="partners"></div>' +

      /* آلية العمل */
      '<section class="ib-sec ib-sec--cream ib-jsec"><div class="ib-wrap">' +
        head('آلية العمل', 'من الفكرة', 'إلى الملف النهائي.', '') +
        journeyHTML() +
      '</div></section>' +

      reelsHTML() +

      '<div class="ib-slot" data-slot="reviews"></div>' +

      /* الأسئلة */
      '<section class="ib-sec ib-sec--cream"><div class="ib-wrap ib-faq-wrap">' +
        head('أسئلة شائعة', 'قبل', 'أن تطلب.', '') +
        '<div class="ib-faq">' +
          faq('ما مدة التنفيذ؟', 'من يومين إلى ثلاثة أيام عمل بحسب طبيعة المشروع، ويمكنك اختيار التسليم خلال 24 ساعة مقابل 200 ر.س إضافية.') +
          faq('هل تشمل الخدمة كتابة النص؟', 'تشمل الخدمة التسجيل الصوتي فقط، ويُرسل النص جاهزًا ومدقّقًا لغويًا مع الطلب.') +
          faq('هل يمكن التعديل على التسجيل؟', 'أرسل إليك عيّنة لاعتمادها قبل النسخة النهائية، وأصحّح أي خطأ من جهتي دون رسوم إضافية. ويُحتسب تغيير النص أو النبرة بعد بدء العمل بنسبة 50% من قيمة الخدمة.') +
          faq('ما صيغ الملفات المسلّمة؟', 'ملفات MP3 أو WAV من استوديو احترافي، جاهزة للإعلانات والفيديو والبودكاست.') +
          faq('ما طرق الدفع المتاحة؟', 'أبل باي، ومدى، وفيزا، والتحويل البنكي، أو التقسيط عبر تمارا أو إمكان. ويُدفع كامل المبلغ مقدّمًا.') +
          faq('ما سياسة الاسترداد؟', 'عند الإلغاء قبل بدء التنفيذ يُسترد 50% من المبلغ، ولا يُسترد المبلغ بعد بدء التنفيذ. <a href="' + C.links.refund + '">التفاصيل</a>') +
        '</div>' +
      '</div></section>' +

      finalHTML() +

      '</div>';

    var root = h(html);
    home.insertBefore(root, home.firstChild);
    if (partners) { partners.classList.add('ib-partners'); $('[data-slot="partners"]', root).replaceWith(partners); }
    if (reviews) { reviews.classList.add('ib-reviews'); $('[data-slot="reviews"]', root).replaceWith(reviews); }
    $$('.ib-slot', root).forEach(function (s) { s.remove(); });
    lazyReels();
    initOdometers();
  }

  /* ---------- أجزاء مشتركة ---------- */
  function socialRow(cls) {
    return '<div class="ib-social ' + (cls || '') + '">' + C.socials.map(function (x) {
      return '<a href="' + x.u + '" target="_blank" rel="noopener" aria-label="' + x.t + '" title="' + x.t + '">' + I[x.k] + '</a>';
    }).join('') + '</div>';
  }
  function reelsHTML() {
    return '<section class="ib-sec ib-sec--ink" id="ib-reels"><div class="ib-wrap">' +
      head('من حساباتي', 'صوتي ووجهي،', 'دون فلتر.', '', true) +
      '<div class="ib-reels">' + C.reels.map(function (r) {
        var pf = { tt: ['tiktok', 'تيك توك'], yt: ['youtube', 'يوتيوب'], ig: ['instagram', 'انستقرام'] }[r.p || 'tt'];
        return '<figure class="ib-reel ib-reel--' + (r.p || 'tt') + '" data-id="' + r.id + '" data-p="' + (r.p || 'tt') + '" data-t="' + r.t + '"><div class="ib-reel__frame"></div></figure>';
      }).join('') + '</div>' +
      '<div class="ib-follow"><p class="ib-handle" dir="ltr">@' + C.handle + '</p>' + socialRow('ib-social--center') + '</div>' +
    '</div></section>';
  }
  function finalHTML() {
    return '<section class="ib-final"><div class="ib-wrap ib-final__in">' +
      '<h2>فكرتك صوتها مسموع.</h2>' +
      '<p>اختر المدة، وأرسل النص، وأتولّى الباقي.</p>' +
      '<div class="ib-actions ib-actions--center">' +
        '<a class="ib-btn ib-btn--accent" href="' + C.links.vo + '">اطلب الآن ' + I.arrow + '</a>' +
        '<a class="ib-btn ib-btn--wa" href="' + waLink() + '" target="_blank" rel="noopener">' + I.wa + ' تواصل عبر الواتساب</a>' +
      '</div>' +
    '</div></section>';
  }

  /* ---------- صفحة العيّنات ---------- */
  var GROUPS = [['all', 'الكل'], ['biz', 'تجاري'], ['info', 'معلوماتي'], ['art', 'فنّي']];
  function isSamplesPage() {
    if (/[?&]ib=samples/.test(location.search)) return true;
    var path = decodeURIComponent(location.pathname).replace(/\/+$/, '');
    if (path === C.links.samples.replace(/\/+$/, '') || /\/pages\/(samples|العينات-الصوتية)$/.test(path)) return true;
    var t = $('.app-content .blog-title h1');
    return !!(t && /العي[ّ]?نات الصوتية/.test(t.textContent));
  }
  function buildSamples() {
    var app = $('.app-content');
    if (!app || $('.ib-spage') || !isSamplesPage()) return;
    document.documentElement.classList.add('ib-is-samples');
    $$(':scope > *', app).forEach(function (el) { el.classList.add('ib-hide'); });
    document.title = 'العيّنات الصوتية | إبراهيم اليوسف';

    var html = '<div class="ib-home ib-spage">' +
      '<section class="ib-hero ib-hero--a ib-hero--s"><div class="ib-wrap ib-hero__in">' +
        '<p class="ib-kicker ib-kicker--light">العيّنات الصوتية</p>' +
        '<h1>اسمع قبل أن تطلب،<br><em>واختر صوت فكرتك.</em></h1>' +
        '<p class="ib-lead">12 لون أداء، مدة كل عيّنة 15 ثانية. اضغط على التشغيل وجرّب بنفسك.</p>' +
        '<div class="ib-actions ib-actions--center">' +
          '<button type="button" class="ib-pill-play" data-ib-all aria-label="شغّل الكل"><span class="ib-ic">' + I.play + '</span><span class="ib-pill-play__t">شغّل كل العيّنات</span><span class="ib-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></button>' +
        '</div>' +
      '</div></section>' +

      '<section class="ib-sec ib-sec--cream ib-sec--tight"><div class="ib-wrap">' +
        '<div class="ib-filter" role="tablist">' + GROUPS.map(function (g, i) {
          return '<button type="button" role="tab" class="ib-chip-f' + (i ? '' : ' is-on') + '" data-ib-filter="' + g[0] + '">' + g[1] + '</button>';
        }).join('') + '</div>' +
        '<div class="ib-samples is-all ib-samples--page">' + C.samples.map(function (s, i) {
          return sampleCard(s, i).replace('<article class="ib-sample" data-ib-card>', '<article class="ib-sample" data-ib-card data-g="' + s.g + '">')
            .replace('<div class="ib-bar"><i></i></div></div>', '<div class="ib-bar"><i></i></div><a class="ib-sample__go" href="' + C.links.vo + '">اطلب بهذا الأسلوب ' + I.arrow + '</a></div>');
        }).join('') + '</div>' +
        '<p class="ib-note-c">لم تجد الأسلوب الذي تبحث عنه؟ <a href="' + waLink('السلام عليكم، أرغب في أسلوب أداء معيّن لمشروعي') + '" target="_blank" rel="noopener">تواصل معي عبر الواتساب</a> لنتفق على الأسلوب المناسب.</p>' +
      '</div></section>' +

      '<section class="ib-sec"><div class="ib-wrap">' +
        head('الخطوة التالية', 'أعجبك الصوت؟', 'اختر ما يناسبك.', '') +
        '<div class="ib-next">' +
          nextCard(C.links.vo, 'مقطع واحد', 'يبدأ من 190 ر.س', 'لإعلان أو فيديو أو رد آلي.') +
          nextCard(C.links.packs, 'الباقات', 'المقطع من 279 ر.س', 'لمحتوى مستمر بهوية صوتية ثابتة.', true) +
          nextCard(waLink('السلام عليكم، أرغب في طلب تعليق صوتي مخصّص لمشروعي'), 'طلب مخصّص', 'يبدأ من 1,500 ر.س', 'للجهات والحملات الكبيرة.') +
        '</div>' +
      '</div></section>' +

      reelsHTML() + finalHTML() +
    '</div>';
    app.insertBefore(h(html), app.firstChild);
    lazyReels();
  }
  function nextCard(href, t, p, d, feat) {
    return '<a class="ib-next__c' + (feat ? ' is-feat' : '') + '" href="' + href + '"><h3>' + t + '</h3><b>' + p + '</b><p>' + d + '</p><span class="ib-next__go">' + I.arrow + '</span></a>';
  }
  /* فلترة + تشغيل متتابع */
  var queue = null;
  document.addEventListener('click', function (e) {
    var f = e.target.closest('[data-ib-filter]');
    if (f) {
      var g = f.getAttribute('data-ib-filter');
      $$('[data-ib-filter]').forEach(function (b) { b.classList.toggle('is-on', b === f); });
      $$('.ib-samples--page .ib-sample').forEach(function (c) { c.classList.toggle('ib-off', g !== 'all' && c.getAttribute('data-g') !== g); });
      return;
    }
    var a = e.target.closest('[data-ib-all]');
    if (a) {
      e.preventDefault();
      if (queue) { queue = null; audio.pause(); a.classList.remove('is-playing'); $('.ib-ic', a).innerHTML = I.play; return; }
      queue = $$('.ib-samples--page .ib-sample:not(.ib-off) [data-ib-play]');
      a.classList.add('is-playing'); $('.ib-ic', a).innerHTML = I.pause;
      if (queue.length) toggle(queue.shift());
    }
  });
  audio.addEventListener('ended', function () {
    if (!queue) return;
    var b = $('[data-ib-all]');
    if (queue.length) { var nx = queue.shift(); nx.scrollIntoView({ behavior: 'smooth', block: 'center' }); toggle(nx); }
    else { queue = null; if (b) { b.classList.remove('is-playing'); $('.ib-ic', b).innerHTML = I.play; } }
  });
  audio.addEventListener('pause', function () {
    if (queue && audio.currentTime < audio.duration - 0.2) { queue = null; var b = $('[data-ib-all]'); if (b) { b.classList.remove('is-playing'); $('.ib-ic', b).innerHTML = I.play; } }
  });

  /* ---------- الصفحات الداخلية: بنر موحّد + محتوى مقروء ---------- */
  var POLICIES = [
    ['/pages/112429', 'من أنا؟', 'user'], ['/pages/112421', 'الشروط والأحكام', 'doc'], ['/pages/112422', 'سياسة الاستبدال والاسترجاع', 'refresh'],
    ['/pages/112420', 'سياسة الخصوصية', 'lock'], ['/pages/112424', 'التراخيص', 'medal']
  ];
  function pageHero(k, t, sub) {
    return '<section class="ib-hero ib-phero"><div class="ib-wrap ib-hero__in">' +
      '<p class="ib-kicker">' + k + '</p><h1>' + t + '</h1>' + (sub ? '<p class="ib-lead">' + sub + '</p>' : '') +
    '</div></section>';
  }
  function ctaStrip() {
    return '<div class="ib-strip"><div><h3>هل أنت مستعد لسماع صوت فكرتك؟</h3><p>استمع إلى العيّنات، واطلب بخطوتين.</p></div>' +
      '<div class="ib-actions"><a class="ib-btn ib-btn--accent" href="' + C.links.vo + '">اطلب تعليقك الصوتي ' + I.arrow + '</a>' +
      '<a class="ib-btn ib-btn--line" href="' + C.links.samples + '">اسمع العيّنات</a></div></div>';
  }
  function buildInner() {
    var app = $('.app-content');
    if (!app || $('.ib-phero') || $('.ib-spage') || $('.ib-home')) return;
    var root = document.documentElement;

    /* صفحات المتجر الثابتة */
    var blog = $(':scope > section.blog', app);
    if (blog) {
      root.classList.add('ib-is-page');
      var h1 = $('.blog-title h1', blog), title = h1 ? h1.textContent.trim() : '';
      var isAbout = /من (نحن|أنا)/.test(title);
      var cur = POLICIES.filter(function (x) { return x[1] === title; })[0];
      app.insertBefore(h(pageHero(isAbout ? 'تعرّف عليّ' : 'سياسات المتجر', title,
        isAbout ? 'معلّق صوتي · أكثر من 1,000 مشروع صوتي' : 'بوضوح، قبل أن تطلب.')), app.firstChild);
      var body = $('.blog-text', blog);
      if (body) {
        body.classList.add('ib-prose');
        var nav = '<nav class="ib-pnav" aria-label="صفحات المتجر">' + POLICIES.map(function (x) {
          return '<a href="' + x[0] + '"' + (cur && cur[0] === x[0] ? ' class="is-on" aria-current="page"' : '') + '>' + I[x[2]] + x[1] + '</a>';
        }).join('') + '</nav>';
        body.insertAdjacentHTML('afterend', nav + ctaStrip());
      }
      return;
    }

    /* صفحة التصنيف (الباقات) */
    var sub = $('.subTitle-detail', app);
    if (sub) {
      root.classList.add('ib-is-cat');
      var t = (($('.bread-title', sub) || {}).textContent || '').replace(/ /g, ' ').trim();
      var isPacks = /باقات/.test(t);
      sub.insertAdjacentHTML('beforebegin', pageHero(isPacks ? 'الباقات' : 'المتجر', t,
        isPacks ? 'لمحتوى مستمر بهوية صوتية ثابتة: 5 مقاطع، المقطع بـ 298 ر.س، وكل مقطع حتى 30 ثانية.' : ''));
      var list = $('.products-list', app);
      if (list && isPacks) packsPage(list);
      return;
    }

    /* السلة */
    if ($('.cart-view', app)) {
      root.classList.add('ib-is-cart');
      app.insertBefore(h(pageHero('السلة', 'سلّتك', '')), app.firstChild);
      return;
    }

    /* خيارات الدفع والتسليم */
    if ($('.tab-content-shipping', app)) {
      root.classList.add('ib-is-ship');
      app.insertBefore(h(pageHero('قبل الطلب', 'الدفع والتسليم', 'أبل باي، ومدى، وفيزا، والتحويل البنكي، أو التقسيط عبر تمارا وإمكان. ويكون التسليم ملفات رقمية عبر الواتساب أو البريد الإلكتروني.')), app.firstChild);
      /* خدمة رقمية: لا شحن — نفتح تبويب الدفع مباشرة */
      var pay = $('a.profile-row[onclick*="v-pills-profile"]');
      $$('a.profile-row[onclick*="v-pills-home"], .li-pills-home').forEach(function (a) { a.classList.add('ib-hide'); });
      if (pay && typeof window.setTab === 'function') window.setTab('#v-pills-profile', pay);
      else if (pay) pay.click();
    }
  }

  /* وصف المنتج: رابط العيّنات داخل الوصف */
  function fixDescription() {
    var d = $('#product-description .description-paragrah');
    if (!d || d.dataset.ib) return;
    d.dataset.ib = '1';
    var HIC = [[/تشمله/, 'mic'], [/استمع|اسمع/, 'ear'], [/الأسعار|السعر/, 'tag'], [/مناسب/, 'target'], [/تحصل عليه/, 'gift'], [/مدة التنفيذ/, 'clock'], [/خطوات/, 'steps'], [/لمن/, 'user'], [/يميّز|يميز/, 'spark']];
    $$('h2', d).forEach(function (h2) {
      var hic = HIC.filter(function (m) { return m[0].test(h2.textContent); })[0];
      if (hic && !$('.ib-h2ic', h2)) h2.insertAdjacentHTML('afterbegin', '<span class="ib-h2ic">' + I[hic[1]] + '</span>');
      if (/اسمع العي|استمع قبل/.test(h2.textContent)) {
        var p = h2.nextElementSibling;
        if (p && p.tagName === 'P') { p.textContent = 'استمع إلى 12 لون أداء حقيقي، واختر الأقرب إلى مشروعك. '; p.insertAdjacentHTML('beforeend', '<a href="' + C.links.samples + '">اسمع العيّنات ←</a>'); }
      }
    });
  }

  /* ---------- آلية العمل: رحلة تفاعلية ---------- */
  var JOURNEY = [
    ['doc', 'ترسل النص', 'أرسل النص جاهزًا ومدقّقًا لغويًا، مع المدة المطلوبة والأسلوب الذي تفضّله. ويمكنك إرفاق مثال لأداء أعجبك.', ['نص جاهز', 'المدة', 'الأسلوب']],
    ['wa', 'ننسّق عبر الواتساب', 'أراجع النص معك ونتفق على النبرة والإيقاع ونطق الأسماء والمصطلحات قبل أن أبدأ التسجيل.', ['النبرة', 'الإيقاع', 'نطق الأسماء']],
    ['ear', 'عيّنة للاعتماد', 'أرسل إليك مقطعًا قصيرًا من الأداء لتسمعه وتعتمده، ثم أسجّل النسخة الكاملة على أساسه.', ['عيّنة قصيرة', 'ملاحظاتك', 'اعتماد']],
    ['check', 'التسليم', 'أسلّمك الملفات النهائية بصيغتي WAV وMP3، نظيفة وجاهزة للنشر، خلال يومين إلى ثلاثة أيام عمل أو 24 ساعة مع التسليم السريع.', ['WAV · MP3', 'جاهزة للنشر', 'تسليم سريع']]
  ];
  function journeyHTML() {
    return '<div class="ib-jr" data-ib-journey>' +
      '<div class="ib-jr__track" aria-hidden="true"><i></i></div>' +
      '<ol class="ib-jr__tabs" role="tablist">' + JOURNEY.map(function (j, i) {
        return '<li><button type="button" role="tab" class="ib-jr__tab' + (i === 0 ? ' is-on' : '') + '" aria-selected="' + (i === 0) + '" data-i="' + i + '">' +
          '<span class="ib-jr__ic">' + I[j[0]] + '</span><span class="ib-jr__n">0' + (i + 1) + '</span><b>' + j[1] + '</b>' +
          '<span class="ib-jr__chev" aria-hidden="true"></span></button></li>';
      }).join('') + '</ol>' +
      '<div class="ib-jr__panel" role="tabpanel" aria-live="polite"></div></div>';
  }
  function journeyPanel(i) {
    var j = JOURNEY[i], last = i === JOURNEY.length - 1;
    return '<div class="ib-jr__in"><span class="ib-jr__big">0' + (i + 1) + '</span>' +
      '<div class="ib-jr__body"><p class="ib-jr__k">الخطوة ' + ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'][i] + '</p><h3>' + j[1] + '</h3><p>' + j[2] + '</p>' +
      '<ul class="ib-jr__chips">' + j[3].map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul></div>' +
      '<div class="ib-jr__act">' + (last
        ? '<a class="ib-btn ib-btn--accent" href="' + C.links.vo + '">اطلب تعليقك الصوتي ' + I.arrow + '</a>'
        : '<button type="button" class="ib-btn ib-btn--line ib-jr__next" data-next="' + (i + 1) + '">الخطوة التالية ' + I.arrow + '</button>') +
      '</div></div>';
  }
  function initJourney() {
    var root = $('[data-ib-journey]');
    if (!root || root.dataset.ok) return;
    root.dataset.ok = '1';
    var tabs = $$('.ib-jr__tab', root), panel = $('.ib-jr__panel', root), list = $('.ib-jr__tabs', root);
    var mq = window.matchMedia('(max-width: 767px)');
    var set = function (i, focus) {
      tabs.forEach(function (t, k) { t.classList.toggle('is-on', k === i); t.classList.toggle('is-done', k < i); t.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      root.style.setProperty('--ib-jp', (i / (tabs.length - 1) * 100) + '%');
      /* الجوال: التفاصيل تنفتح تحت البطاقة نفسها */
      if (mq.matches) tabs[i].parentNode.appendChild(panel); else if (panel.parentNode !== root) root.appendChild(panel);
      panel.classList.remove('is-in');
      panel.innerHTML = journeyPanel(i);
      void panel.offsetWidth;
      panel.classList.add('is-in');
      var nx = $('.ib-jr__next', panel);
      if (nx) nx.addEventListener('click', function () { set(+nx.dataset.next, true); });
      if (focus && mq.matches) tabs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    tabs.forEach(function (t, k) { t.addEventListener('click', function () { set(k); }); });
    try { mq.addEventListener('change', function () { var on = tabs.filter(function (t) { return t.classList.contains('is-on'); })[0]; set(tabs.indexOf(on)); }); } catch (e) {}
    set(0);
  }

  /* ---------- صفحة الباقات ---------- */
  function packsPage(list) {
    if ($('.ib-packs')) return;
    list.classList.add('ib-hide');
    $$('.ib-note-c').forEach(function (n) { n.remove(); });
    var html = '<section class="ib-packs"><div class="ib-wrap">' +
      '<div class="ib-packs__grid ib-packs__grid--one">' +
        '<article class="ib-pk is-hot"><span class="ib-x1c">×5</span>' +
          '<p class="ib-pk__tag">' + I.star + 'للمحتوى المستمر</p>' +
          '<p class="ib-pk__big"><b>5</b><span>مقاطع</span></p>' +
          '<p class="ib-pk__price">1,490 ' + SAR + '</p>' +
          '<p class="ib-pk__per"><b>298 ر.س</b> للمقطع</p>' +
          '<ul class="ib-pk__list">' + ['صوت واحد يعرفه جمهورك في كل إعلان', 'تعتمد النبرة مرة واحدة، وأُكمل عليها المقاطع كلها', 'أولوية في جدولي للمشاريع المستمرة', 'كل مقطع حتى 30 ثانية'].map(li).join('') + '</ul>' +
          '<a class="ib-btn ib-btn--accent ib-btn--block" href="' + C.links.p5 + '">اطلب الباقة ' + I.arrow + '</a>' +
        '</article>' +
      '</div>' +
      '<ol class="ib-packs__steps">' +
        '<li><span>' + I.layers + '</span><b>اطلب الباقة</b><small>5 مقاطع بسعر مخفّض.</small></li>' +
        '<li><span>' + I.doc + '</span><b>أرسل النصوص</b><small>جاهزة ومدقّقة لغويًا مع الطلب أو عبر الواتساب.</small></li>' +
        '<li><span>' + I.ear + '</span><b>اعتمد العيّنة</b><small>تسمع الأداء قبل التنفيذ الكامل.</small></li>' +
        '<li><span>' + I.check + '</span><b>استلم مقاطعك</b><small>بحسب الجدول المتفق عليه.</small></li>' +
      '</ol>' +
      '<div class="ib-packs__custom"><span class="ib-packs__ic">' + I.spark + '</span><div><h3>تحتاج أكثر من 5 مقاطع أو مشروعًا خاصًا؟</h3>' +
        '<p>الطلب المخصّص للحملات والجهات والمشاريع الكبيرة، ويبدأ من 1,500 ر.س بحسب حجم المشروع.</p></div>' +
        '<div class="ib-actions"><a class="ib-btn ib-btn--accent" href="' + waLink('السلام عليكم، أرغب في طلب تعليق صوتي مخصّص لمشروعي') + '" target="_blank" rel="noopener">' + I.wa + ' تواصل عبر الواتساب</a></div></div>' +
    '</div></section>';
    list.insertAdjacentHTML('beforebegin', html);
  }

  /* ---------- الهيدر: سطر كحلي واحد داخل البنر + أيقونات القائمة ---------- */
  var MENU_IC = [[/الصفحة الرئيسية/, 'home'], [/العي[ّ]?نات/, 'wave'], [/التعليق الصوتي/, 'mic'], [/الباقات/, 'layers'], [/طلب (مخصّص|مخصص|خاص)/, 'spark']];
  function decorateMenu() {
    $$('header .main-nav a, .slide-menu a').forEach(function (a) {
      var t = a.textContent.replace(/\s+/g, ' ').trim();
      if (/^طلب (خاص VIP|مخصّص|مخصص)$/.test(t) && !a.dataset.ibWa) {
        a.dataset.ibWa = '1'; a.textContent = 'طلب مخصّص';
        a.setAttribute('href', waLink('السلام عليكم، أرغب في طلب تعليق صوتي مخصّص لمشروعي')); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener');
      }
    });
  }
  function headerB() {
    document.documentElement.classList.add('ib-hb');
    if (!$('#ib-hb-css')) document.head.insertAdjacentHTML('beforeend', '<style id="ib-hb-css">' +
      'html.ib-on header .upper-bar,html.ib-on header .announcement-bar{display:none!important}' +
      'html.ib-on{background:#0b2734!important;overscroll-behavior-y:none}html.ib-on body{background:#fffdf9;overscroll-behavior-y:none}' +
      'html.ib-hb .app-content{padding-top:0!important}html.ib-hb .header{position:sticky!important;top:0;z-index:60}html.ib-hb header .sticky{position:relative!important;top:auto!important}' +
      '@media(min-width:992px){html.ib-hb header .search-header{display:none!important}html.ib-hb body header>.dark{height:64px!important;background:linear-gradient(180deg,#0a2430,#0b2734)!important;border:0!important}html.ib-hb body header>.dark>.div-bg-absolute{background:transparent!important}}' +
      '@media(max-width:991px){html.ib-hb body header .search-header{background:#0b2734!important}html.ib-hb header .search-header .image-logo,html.ib-hb header .sm-search-icon{display:none!important}}' +
      '</style>');
    var wrap = $('header .top-main-menu-wrapper');
    if (wrap && !$('.ib-hcart', wrap)) {
      var badge = $('header .cart-badge');
      wrap.insertAdjacentHTML('beforeend', '<a class="ib-hcart" href="/cart" aria-label="السلة">' + I.cart + '<span class="ib-hcart__n">' + ((badge && badge.textContent.trim()) || '') + '</span></a>');
      try {
        if (badge) new MutationObserver(function () { var n = $('.ib-hcart__n'); if (n) n.textContent = badge.textContent.trim(); }).observe(badge, { childList: true, characterData: true, subtree: true });
      } catch (e) {}
    }
    if (wrap && !$('.ib-hhome', wrap)) wrap.insertAdjacentHTML('afterbegin', '<a class="ib-hhome" href="/" aria-label="الصفحة الرئيسية" title="الصفحة الرئيسية">' + I.home + '</a>');
    var mgrp = $('header .search-header .header-logo');
    if (mgrp && !$('.ib-hhome', mgrp)) mgrp.insertAdjacentHTML('beforeend', '<a class="ib-hhome ib-hhome--m" href="/" aria-label="الصفحة الرئيسية">' + I.home + '</a>');
    decorateMenu();
  }

  /* ---------- الفوتر والقائمة ---------- */
  function fixNav() {
    $$('a[href*="canva.site/ibravoice"]').forEach(function (a) { a.setAttribute('href', C.links.samples); a.removeAttribute('target'); });
    $$('.footer a').forEach(function (a) {
      var t = a.textContent.trim();
      if (t === 'العينات الصوتي' || t === 'العينات الصوتية') { a.textContent = 'العيّنات الصوتية'; a.setAttribute('href', C.links.samples); }
      if (t === 'طلب خاص VIP' || t === 'طلب مخصّص') { a.textContent = 'طلب مخصّص'; a.setAttribute('href', waLink('السلام عليكم، أرغب في طلب تعليق صوتي مخصّص لمشروعي')); a.setAttribute('target', '_blank'); }
      if (t === 'باقات التعليق الصوتي') a.textContent = 'الباقات';
      if (t === 'الشكاوى والاقتراحات') { var p = a.closest('p'); if (p) p.classList.add('ib-hide'); }
    });
    /* العيّنات أول رابط بعمود الخدمات + عناوين الأعمدة */
    var cols = $$('.footer .col-lg-7 .footer-about-us-links-div');
    var heads = ['الخدمات', 'عن المتجر'];
    cols.forEach(function (c, i) {
      var h2 = $('h2', c);
      if (h2 && !h2.textContent.trim() && heads[i]) h2.textContent = heads[i];
      if (i === 0) {
        var sp = $$('a', c).filter(function (a) { return a.textContent.trim() === 'العيّنات الصوتية'; })[0];
        if (sp && sp.parentNode !== c.children[1]) c.insertBefore(sp.parentNode, $('p', c));
      }
      /* صفحة العيّنات لا تتكرر بعمود الصفحات */
      if (i === 1) $$('a', c).forEach(function (a) { if (/العي[ّ]?نات/.test(a.textContent)) a.parentNode.classList.add('ib-hide'); });
    });
    /* تواصل معنا: واتساب بدل الاتصال، والحسابات الجديدة */
    var soc = $('.footer .social-icons');
    if (soc && !soc.dataset.ib) {
      soc.dataset.ib = '1';
      var mail = $('a[href^="mailto:"], a[href*="email-protection"]', soc);
      soc.innerHTML = '';
      soc.classList.add('ib-social', 'ib-social--foot');
      soc.insertAdjacentHTML('beforeend', '<a href="' + waLink() + '" target="_blank" rel="noopener" aria-label="واتساب" title="واتساب">' + I.wa + '</a>');
      C.socials.forEach(function (x) { soc.insertAdjacentHTML('beforeend', '<a href="' + x.u + '" target="_blank" rel="noopener" aria-label="' + x.t + '" title="' + x.t + '">' + I[x.k] + '</a>'); });
      if (mail) { mail.innerHTML = I.mail; mail.setAttribute('aria-label', 'البريد الإلكتروني'); mail.removeAttribute('target'); soc.appendChild(mail); }
    }
  }

  /* ---------- البطل: 3 خيارات ---------- */
  function heroVariant() {
    var m = /[?&]hero=([abc])/.exec(location.search);
    return (m && m[1]) || window.IBRA_HERO || C.hero || 'a';
  }

  /* عدّاد يلف أرقامه مثل العدّاد الميكانيكي */
  function odo(n, cls) {
    var s = money(n), out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      if (ch < '0' || ch > '9') { out += '<span class="ib-odo__sep">' + ch + '</span>'; continue; }
      var col = '';
      for (var r = 0; r < 2; r++) for (var d = 0; d <= 9; d++) col += '<span>' + d + '</span>';
      col += '<span>' + ch + '</span>';
      out += '<span class="ib-odo__d"><span class="ib-odo__col" style="--to:' + (20) + ';--i:' + i + '">' + col + '</span></span>';
    }
    return '<span class="ib-odo ' + (cls || '') + '" aria-label="' + s + '+" role="img"><span class="ib-odo__plus">+</span>' + out + '</span>';
  }
  function initOdometers() {
    var els = $$('.ib-odo');
    var go = function (el) { el.classList.add('is-on'); };
    if (!('IntersectionObserver' in window)) { els.forEach(go); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { setTimeout(function () { go(e.target); }, 250); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (e) { io.observe(e); });
    document.addEventListener('mouseover', function (e) {
      var o = e.target.closest && e.target.closest('.ib-odo.is-on');
      if (!o || o.dataset.spin) return;
      o.dataset.spin = '1';
      o.classList.add('no-t'); o.classList.remove('is-on'); void o.offsetWidth;
      o.classList.remove('no-t'); o.classList.add('is-on');
      setTimeout(function () { delete o.dataset.spin; }, 2200);
    });
  }

  function playPill(label) {
    return '<button class="ib-pill-play" data-ib-play data-src="02-ad.mp3" aria-label="تشغيل"><span class="ib-ic">' + I.play + '</span>' +
      '<span class="ib-pill-play__t">' + label + '</span><span class="ib-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></button>';
  }

  function heroHTML(v) {
    var order = '<a class="ib-btn ib-btn--accent" href="' + C.links.vo + '">اطلب تعليقك الصوتي ' + I.arrow + '</a>';
    var bars = '';
    for (var w = 0; w < 64; w++) bars += '<i style="--s:' + (0.15 + Math.abs(Math.sin(w * 0.55) * Math.cos(w * 0.13)) * 0.85).toFixed(2) + ';--d:' + (w % 9) * 0.09 + 's"></i>';
    var bg = '<div class="ib-hero__wave" aria-hidden="true">' + bars + '</div>';

    if (v === 'b') {
      /* B: الصوت أولاً — زر تشغيل كبير بحلقات */
      return '<section class="ib-hero ib-hero--b" data-ib-card><div class="ib-wrap ib-hero__in">' +
        '<div class="ib-hero__txt">' +
          '<div class="ib-stats">' +
            '<div class="ib-stat">' + odo(1000) + '<span>مشروع صوتي</span></div>' +
            '<div class="ib-stat"><b>12</b><span>لون أداء</span></div>' +
            '<div class="ib-stat"><b>24<small>س</small></b><span>أسرع تسليم</span></div>' +
          '</div>' +
          '<h1><span class="ib-sw">صوت</span> يوصّل فكرتك<br><em>من أول كلمة.</em></h1>' +
          '<div class="ib-actions">' + order + '</div>' +
        '</div>' +
        '<div class="ib-disc">' +
          '<span class="ib-ring"></span><span class="ib-ring"></span><span class="ib-ring"></span>' +
          '<button class="ib-play ib-play--disc" data-ib-play data-src="02-ad.mp3" aria-label="تشغيل"><span class="ib-ic">' + I.play + '</span></button>' +
          '<p class="ib-disc__t">اضغط واستمع إلى صوتي</p>' +
        '</div>' +
      '</div></section>';
    }

    if (v === 'c') {
      /* C: الرقم هو البطل */
      return '<section class="ib-hero ib-hero--c" data-ib-card>' + bg + '<div class="ib-wrap ib-hero__in">' +
        '<p class="ib-hero__pre">أكثر من</p>' +
        odo(1000, 'ib-odo--xl') +
        '<p class="ib-hero__label">مشروع وصل إليه صوتي</p>' +
        '<p class="ib-hero__who">من <b>وزارة الثقافة</b> و<b>سدايا</b>… وفكرتك التالية؟</p>' +
        '<div class="ib-actions ib-actions--center">' + order + playPill('اسمع صوتي') + '</div>' +
      '</div></section>';
    }

    /* A: هادي ومركّز */
    return '<section class="ib-hero ib-hero--a" data-ib-card>' + bg + '<div class="ib-wrap ib-hero__in">' +
      '<div class="ib-badge-live"><span class="ib-dot"></span>' + odo(1000) + '<span>مشروع صوتي سلّمته</span></div>' +
      '<h1><span class="ib-sw">صوت</span> يوصّل فكرتك<br><em>من أول كلمة.</em></h1>' +
      '<p class="ib-lead">إعلانات، وثائقيات، رد آلي، وهوية صوتية — من استوديو احترافي.</p>' +
      '<div class="ib-actions ib-actions--center">' + order + playPill('اسمع صوتي') + '</div>' +
    '</div></section>';
  }

  function feat(ic, t, d) { return '<div class="ib-feat"><span class="ib-chip">' + ic + '</span><div><h3>' + t + '</h3><p>' + d + '</p></div></div>'; }
  function head(k, a, b, p, light) {
    return '<header class="ib-head' + (light ? ' ib-head--light' : '') + '"><p class="ib-kicker">' + k + '</p><h2>' + a + ' <em>' + b + '</em></h2>' + (p ? '<p class="ib-sub">' + p + '</p>' : '') + '</header>';
  }
  function row(a, p) { return '<li><span>' + a + '</span><b>' + p + ' ' + SAR + '</b></li>'; }
  function pack(href, a, total, n, badge) {
    var per = Math.round(total / n);
    return '<li><a href="' + href + '"><span>' + a + (badge ? ' <i class="ib-badge">' + badge + '</i>' : '') + '</span>' +
      '<b>' + money(total) + ' ' + SAR + '<small>' + per + ' للمقطع</small></b></a></li>';
  }
  function li(t) { return '<li>' + I.check + '<span>' + t + '</span></li>'; }
  function step(t, d) { return '<li><h3>' + t + '</h3><p>' + d + '</p></li>'; }
  function faq(q, a) { return '<details class="ib-q"><summary>' + q + '<span class="ib-plus" aria-hidden="true"></span></summary><div>' + a + '</div></details>'; }

  function lazyReels() {
    var figs = $$('.ib-reel');
    var load = function (f) {
      if (f.dataset.loaded) return;
      f.dataset.loaded = '1';
      var id = f.dataset.id, pl = f.dataset.p || 'tt';
      var src = pl === 'yt' ? 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&playsinline=1&modestbranding=1'
        : pl === 'ig' ? 'https://www.instagram.com/reel/' + id + '/embed/'
        : 'https://www.tiktok.com/player/v1/' + id + '?controls=1&progress_bar=1&play_button=1&volume_control=1&fullscreen_button=1&music_info=0&description=0&rel=0&native_context_menu=0&closed_caption=0';
      if (f.dataset.auto) src += (src.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1';
      $('.ib-reel__frame', f).innerHTML = '<iframe src="' + src + '" loading="lazy" allow="encrypted-media; fullscreen; autoplay" allowfullscreen title="' + (f.dataset.t || '') + '"></iframe>';
    };
    /* خفّة: غلاف ثابت أولًا، ومشغّل تيك توك ينحمّل فقط لما العميل يضغط */
    var COVER = 'https://cdn.jsdelivr.net/gh/brhomy4080-wq/ibravoice-samples@429b6bf29a33afa56bff3da66c03a0a389785ff6/img/reels/';
    figs.forEach(function (f) {
      if (f.dataset.facade) return;
      f.dataset.facade = '1';
      var fr = $('.ib-reel__frame', f);
      fr.innerHTML = '<button type="button" class="ib-reel__cover" aria-label="تشغيل: ' + (f.dataset.t || '') + '">' +
        '<img src="' + COVER + f.dataset.id + '.jpg" alt="" loading="lazy" decoding="async"><span class="ib-reel__play">' + I.play + '</span></button>';
      $('.ib-reel__cover', fr).addEventListener('click', function () {
        f.dataset.auto = '1'; load(f);
      });
    });
  }

  /* ---------- صفحة المنتج ---------- */
  function buildProduct() {
    var info = $('.col-product-info');
    if (!info || info.dataset.ib) return;
    info.dataset.ib = '1';
    document.documentElement.classList.add('ib-is-product');
    var path = decodeURIComponent(location.pathname);
    var isVO = /\/products\/(VO|3b457ceb)/i.test(path);
    var isVIP = /\/products\/(VIP|105da1b6)/i.test(path);
    var pidEl = $('.send-notify-product-id');
    if (pidEl && /^(5071dee8|9ba65d77)/.test(pidEl.value || pidEl.getAttribute('value') || '')) document.documentElement.classList.add('ib-nobadge');

    var priceEl = $('.product-formatted-price', info);
    if (priceEl && /^\s*0[.,]00/.test(priceEl.textContent)) {
      priceEl.classList.add('ib-price');
      priceEl.innerHTML = '<small>يبدأ من</small> ' + (isVIP ? '1,500 ' : '190 ') + SAR;
      $$('tamara-widget, .tamara-product-widget').forEach(function (t) { t.classList.add('ib-hide'); });
    }

    var packs = { '5071dee8': [1490, 5], 'b894de85': [2790, 10], 'vopack10': [2790, 10], 'vopack': [1490, 5] };
    Object.keys(packs).forEach(function (k) {
      if (path.indexOf(k) > -1 && priceEl && !$('.ib-per', info)) {
        var p = packs[k];
        priceEl.insertAdjacentHTML('afterend', '<p class="ib-per">أي <b>' + Math.round(p[0] / p[1]) + ' ر.س</b> للمقطع · كل مقطع حتى 30 ثانية</p>');
      }
    });

    /* العيّنات تحت الوصف القصير ورابط «مزيد من المعلومات» */
    var anchor = $('#product-description-a', info) || $('.text-short-description', info);
    if (anchor && !$('.ib-mini', info)) {
      var picks = [C.samples[0], C.samples[1], C.samples[2]];
      anchor.insertAdjacentHTML('afterend',
        '<div class="ib-mini"><p class="ib-mini__t">' + I.ear + ' اسمع قبل أن تطلب</p><div class="ib-mini__row">' +
        picks.map(function (s) {
          return '<div class="ib-mini__s" data-ib-card><button class="ib-play" data-ib-play data-src="' + s.f + '" aria-label="تشغيل"><span class="ib-ic">' + I.play + '</span></button><span>' + s.t + '</span><div class="ib-bar"><i></i></div></div>';
        }).join('') +
        '</div><a class="ib-link" href="' + C.links.samples + '">كل العيّنات (12)</a></div>');
    }
  }

  /* ---------- نموذج الطلب: مدة ككروت، ملفات، خيارات كبطاقات (لا توجد خدمة كتابة محتوى) ---------- */
  var WRITE_RX = /اكتبه لي|اكتب لي النص|كتابة المحتوى/;
  function enhanceOrderForm() {
    var info = $('.col-product-info');
    if (!info || info.dataset.ibForm) return;
    info.dataset.ibForm = '1';

    /* المدة: كروت بدل القائمة المنسدلة — السعر المعروض = السعر الأساسي + فرق المدة */
    var base = basePrice(info);
    $$('select[data-type="DROPDOWN"]', info).forEach(function (sel) {
      var opts = $$('option', sel).filter(function (o) { return o.value; });
      if (!opts.length || opts.length > 6) return;
      var box = h('<div class="ib-durs" role="radiogroup"></div>');
      opts.forEach(function (o) {
        var txt = o.textContent.replace(/\s+/g, ' ').trim();
        var price = base + plusOf(txt);
        var name = txt.split('(')[0].trim();
        var b = h('<button type="button" class="ib-dur" role="radio" aria-checked="false"><b>' + name + '</b>' + (price ? '<span>' + money(price) + ' ' + SAR + '</span>' : '') + '</button>');
        b.addEventListener('click', function () {
          sel.value = o.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          $$('.ib-dur', box).forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-checked', x === b ? 'true' : 'false'); });
        });
        box.appendChild(b);
      });
      sel.classList.add('ib-sr');
      sel.parentNode.insertBefore(box, sel.nextSibling);
    });

    /* رفع الملفات */
    $$('.file-label', info).forEach(function (l) {
      l.classList.add('ib-drop');
      var btn = $('button', l);
      if (btn) btn.innerHTML = I.up + ' اختر ملفًا';
    });

    /* صياغة فصحى لنصوص الخيارات */
    var FIX = [['ما عندي نص، اكتبه لي', 'ليس لدي نص، اكتبه لي'], ['كل نصوص الباقة', 'جميع نصوص الباقة'],
      ['تسليم في أسررررررع وقت! خلال أقل من 24 ساعة', 'تسليم سريع خلال 24 ساعة'],
      ['من يوم إلى 3 أيام حسب حجم الطلب', 'من يومين إلى ثلاثة أيام عمل'],
      ['نص التعليق الصوتي أو فكرة المشروع', 'نص التعليق الصوتي'], ['نصوص التعليق الصوتي أو فكرة المشروع', 'نصوص التعليق الصوتي'],
      ['اكتب النصوص، أو شارك فكرتك إذا اخترت خدمة كتابة المحتوى، وبنتواصل معك للتنسيق قبل التنفيذ.', 'الصق النصوص جاهزة ومدقّقة لغويًا.'],
      ['اكتب نص التعليق الصوتي', 'الصق النص جاهزًا ومدقّقًا لغويًا.'],
      ['ملفات أخرى للنص التعليق الصوتي، لأعمال مشابهة أو لأي ملفات مساندة', 'ملف النص أو أي ملفات مساندة، مثل أعمال مشابهة.']];
    $$('textarea, input[type="text"]', info).forEach(function (el) {
      var ph = el.getAttribute('placeholder') || '';
      FIX.forEach(function (f) { if (ph.indexOf(f[0]) > -1) el.setAttribute('placeholder', ph.replace(f[0], f[1])); });
    });
    var tw = document.createTreeWalker(info, NodeFilter.SHOW_TEXT);
    while (tw.nextNode()) { var tn = tw.currentNode; FIX.forEach(function (f) { if (tn.nodeValue.indexOf(f[0]) > -1) tn.nodeValue = tn.nodeValue.replace(f[0], f[1]); }); }

    /* الخيارات (تسليم سريع / كتابة المحتوى) كبطاقات */
    $$('.custom-checkbox-input', info).forEach(function (cb) {
      var lab = cb.closest('label');
      if (!lab) return;
      lab.classList.add('ib-opt');
      var t = lab.textContent;
      if (WRITE_RX.test(t)) { if (cb.checked) cb.click(); var fg = lab.closest('.form-group') || lab; fg.classList.add('ib-hide'); fg.style.display = 'none'; return; }
      /* خيار بدون رسوم: «مشمولة» بدل (+ 0.00 ر.س) */
      $$('.custom-checkbox-label > span', lab).forEach(function (sp) {
        var tx = sp.textContent.replace(/\s+/g, ' ');
        if (/\(\s*\+\s*0[.,]00/.test(tx)) sp.innerHTML = '<em class="ib-free">مشمولة</em>';
        else { var pm = /\(\s*\+\s*([\d,]+)(?:[.,]\d+)?/.exec(tx); if (pm) sp.innerHTML = '<em class="ib-ptag">+' + pm[1] + ' ' + SAR + '</em>'; }
      });
      var ic = /24 ساعة|سريع/.test(t) ? I.bolt : I.check;
      lab.insertAdjacentHTML('afterbegin', '<span class="ib-opt__ic">' + ic + '</span>');
      var sync = function () {
        lab.classList.toggle('is-on', cb.checked);
      };
      cb.addEventListener('change', sync); cb.addEventListener('input', sync);
    });
  }
  /* السعر الأساسي للمنتج (يُحفظ قبل أي تعديل على عنصر السعر) */
  function basePrice(info) {
    var el = $('.product-formatted-price', info);
    if (!el) return 0;
    if (el.dataset.base === undefined) {
      var m = /(\d[\d,]*(?:\.\d+)?)/.exec(el.textContent.replace(/\s+/g, ''));
      el.dataset.base = m ? parseFloat(m[1].replace(/,/g, '')) : 0;
    }
    return parseFloat(el.dataset.base) || 0;
  }
  /* فرق السعر في نص الخيار: «( + 160.00 ر.س )» أو «+200 ر.س» */
  function plusOf(txt) {
    var m = /\+\s*([\d,]+(?:\.\d+)?)/.exec(String(txt).replace(/\s+/g, ' '));
    return m ? parseFloat(m[1].replace(/,/g, '')) : 0;
  }

  /* ---------- تجربة الطلب: سعر مباشر + تنبيه الحقول المطلوبة + زر إتمام الطلب ---------- */
  function orderUX() {
    var info = $('.col-product-info');
    if (!info || info.dataset.ibUx) return;
    info.dataset.ibUx = '1';
    var priceEl = $('.product-formatted-price', info);
    var sel = $('select[data-type="DROPDOWN"]', info);
    var cbs = $$('.custom-checkbox-input', info).filter(function (cb) { var f = cb.closest('.form-group'); return !(f && f.classList.contains('ib-hide')); });
    var base = basePrice(info);

    var btnAdd = function () { return $$('button', info).filter(function (b) { return /أضف إلى السلة/.test(b.textContent); })[0]; };
    /* 0) عدد المقاطع (1–4) للتعليق الصوتي — من 5 فأكثر الباقة أوفر */
    var qSel = $('#product-quantity, select[name="quantity"]', info);
    var qty = function () { return qSel ? (parseInt(qSel.value, 10) || 1) : 1; };
    if (qSel && sel && !$('.ib-qty', info)) {
      var MAXQ = 4;
      var grp = sel.closest('.form-group') || sel.parentNode;
      var qBox = h('<div class="ib-qty"><p class="ib-qty__l">عدد المقاطع <small>بنفس المدة</small></p>' +
        '<div class="ib-qty__row"><button type="button" class="ib-qty__b" data-d="1" aria-label="زيادة">+</button>' +
        '<output class="ib-qty__n">1</output><button type="button" class="ib-qty__b" data-d="-1" aria-label="إنقاص">−</button>' +
        '<div class="ib-qty__dots" aria-hidden="true"><i class="is-on"></i><i></i><i></i><i></i></div></div>' +
        '<a class="ib-qty__nudge" href="' + C.links.p5 + '">' + I.spark + '<span>تحتاج 5 مقاطع؟ <b>الباقة بـ 1,490 ر.س</b> (298 للمقطع) أوفر لك.</span></a></div>');
      grp.parentNode.insertBefore(qBox, grp);
      var qGrp = qSel.closest('.form-group, .quantity, .product-quantity') || qSel.parentElement;
      if (qGrp && !qGrp.contains(sel) && !qGrp.contains(btnAdd())) qGrp.classList.add('ib-sr-box'); else qSel.classList.add('ib-sr-box');
      var setQ = function (n) {
        n = Math.max(1, Math.min(MAXQ, n));
        qSel.value = String(n); qSel.dispatchEvent(new Event('change', { bubbles: true }));
        $('.ib-qty__n', qBox).textContent = n;
        $$('.ib-qty__dots i', qBox).forEach(function (d, k) { d.classList.toggle('is-on', k < n); });
        qBox.classList.toggle('is-max', n >= MAXQ);
        if (typeof render === 'function') render();
      };
      $$('.ib-qty__b', qBox).forEach(function (b) { b.addEventListener('click', function () {
        var d = parseInt(b.dataset.d, 10);
        if (d > 0 && qty() >= MAXQ) { qBox.classList.add('is-bump'); setTimeout(function () { qBox.classList.remove('is-bump'); }, 600); return; }
        setQ(qty() + d);
      }); });
      setQ(1);
    }

    /* 1) السعر يتحدّث مع اختيار المدة والتسليم السريع وعدد المقاطع */
    var render;
    if (priceEl && base > 0 && (sel || cbs.length)) {
      render = function () {
        var total = base, chosen = !sel;
        if (sel) { var o = sel.options[sel.selectedIndex]; if (o && o.value) { total += plusOf(o.textContent); chosen = true; } }
        cbs.forEach(function (cb) { if (cb.checked) { var l = cb.closest('label'); total += plusOf(l ? l.textContent : ''); } });
        var n = qty();
        priceEl.classList.add('ib-price', 'ib-price--live');
        priceEl.innerHTML = '<small>' + (chosen ? (n > 1 ? 'الإجمالي لـ ' + n + ' مقاطع' : 'الإجمالي') : 'يبدأ من') + '</small> ' + money(chosen ? total * n : total) + ' ' + SAR;
      };
      if (sel) sel.addEventListener('change', render);
      cbs.forEach(function (cb) { cb.addEventListener('change', render); });
      render();
    }

    /* 2) زر الإضافة معطّل؟ نوضّح السبب ونوجّه للحقل الناقص */
    var btn = $$('button', info).filter(function (b) { return /أضف إلى السلة/.test(b.textContent); })[0];
    if (!btn) return;
    var wrap = btn.closest('.form-group, .d-flex, div') || btn.parentNode;
    var hint = h('<p class="ib-req-hint" role="status">أدخل رقم الواتساب واختر المدة لتفعيل زر الإضافة إلى السلة.</p>');
    wrap.insertAdjacentElement('afterend', hint);
    var isOff = function () { return btn.disabled || btn.classList.contains('disabled') || btn.getAttribute('aria-disabled') === 'true'; };
    var firstMissing = function () {
      var req = $$('input[required], textarea[required], select[required]', info).filter(function (x) { return !x.value; })[0];
      if (req) return req;
      var wa = $$('input', info).filter(function (x) { return /05/.test(x.getAttribute('placeholder') || '') && !x.value; })[0];
      if (wa) return wa;
      if (sel && !sel.value) return $('.ib-durs', info) || sel;
      return null;
    };
    var shown = false;
    var hintText = function (miss) {
      if (!miss) return '';
      if (miss.classList && miss.classList.contains('ib-durs')) return 'اختر مدة التعليق الصوتي أولًا، ثم أضف الطلب إلى السلة.';
      return 'أدخل رقم الواتساب للتنسيق أولًا، ثم أضف الطلب إلى السلة.';
    };
    var syncHint = function () {
      var miss = firstMissing();
      var on = !!miss && (shown || isOff());
      hint.classList.toggle('is-on', on);
      if (on) hint.textContent = hintText(miss);
    };
    syncHint();
    try { new MutationObserver(syncHint).observe(btn, { attributes: true, attributeFilter: ['disabled', 'class', 'aria-disabled'] }); } catch (e) {}
    info.addEventListener('input', function () { setTimeout(syncHint, 50); });
    info.addEventListener('change', function () { setTimeout(syncHint, 50); });
    /* الضغط والحقول ناقصة: زد لا يُظهر أي رسالة، فنوضّح السبب وننقل العميل للحقل الناقص */
    (btn.parentNode || info).addEventListener('click', function (e) {
      if (!btn.contains(e.target) && e.target !== btn) return;
      var miss = firstMissing();
      if (!miss) return;
      e.preventDefault(); e.stopPropagation();
      shown = true; syncHint();
      miss.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (miss.focus) try { miss.focus({ preventScroll: true }); } catch (x) {}
      miss.classList.add('ib-shake'); setTimeout(function () { miss.classList.remove('ib-shake'); }, 700);
    }, true);

    /* 3) بعد الإضافة للسلة: زر «إتمام الطلب» واضح */
    var badge = $('header .cart-badge');
    var count = function () { var b = $('header .cart-badge'); return b ? parseInt(b.textContent, 10) || 0 : 0; };
    var before = count();
    var showDone = function () {
      if ($('.ib-added', info)) return;
      hint.insertAdjacentHTML('afterend', '<div class="ib-added" role="status"><span>' + I.check + ' أُضيف طلبك إلى السلة.</span>' +
        '<a class="ib-btn ib-btn--ink" href="/cart">إتمام الطلب ' + I.arrow + '</a></div>');
    };
    btn.addEventListener('click', function () {
      if (isOff() || firstMissing()) return;
      before = count();
      var tries = 0, t = setInterval(function () {
        tries++;
        if (count() > before || $$('.toast, .alert-success, [class*="toast"]').some(function (x) { return /تم إضافة|أضيف|السلة بنجاح/.test(x.textContent); })) { clearInterval(t); showDone(); }
        else if (tries > 40) clearInterval(t);
      }, 250);
    });
  }

  /* ---------- بطاقات بصرية بدل صور المنتجات ---------- */
  var PV = {
    '3b457ceb': { x: '×1', tag: 'طلب فردي', big: '60', unit: 'ثانية أو أقل', sub: 'إعلان، وثائقي، رد آلي، وأكثر', chips: ['2–3 أيام عمل', 'عيّنة قبل التنفيذ', 'MP3 · WAV'], s: '02-ad.mp3', t: 'تعليق صوتي' },
    '105da1b6': { tag: 'للجهات والحملات', big: 'مخصّص', unit: '', sub: 'السعر حسب المشروع', chips: ['أولوية قصوى', 'استشارة قبل التسجيل', 'أكثر من تجربة أداء'], s: '01-documentary.mp3', t: 'طلب خاص', vip: true },
    '5071dee8': { x: '×5', tag: 'باقة', big: '5', unit: 'مقاطع', sub: 'كل مقطع حتى 30 ثانية', chips: ['حتى 30 ثانية للمقطع', 'هوية صوتية ثابتة', 'MP3 · WAV'], s: '02-ad.mp3', t: 'بداية ذكية' },
    'b894de85': { tag: 'باقة', big: '10', unit: 'مقاطع', sub: 'كل مقطع حتى 30 ثانية', chips: ['حتى 30 ثانية للمقطع', 'هوية صوتية ثابتة', 'MP3 · WAV'], s: '02-ad.mp3', t: 'الأكثر طلبًا' },
    '9ba65d77': { tag: 'باقة', big: '20', unit: 'مقطع', sub: 'كل مقطع حتى 30 ثانية', chips: ['حتى 30 ثانية للمقطع', 'هوية صوتية ثابتة', 'MP3 · WAV'], s: '02-ad.mp3', t: 'للحملات' },
    '5c5774fb': { tag: 'باقة', big: '50', unit: 'مقطع', sub: 'كل مقطع حتى 30 ثانية', chips: ['حتى 30 ثانية للمقطع', 'هوية صوتية ثابتة', 'MP3 · WAV'], s: '02-ad.mp3', t: 'الأوفر' }
  };
  function pvFor(id) { return id ? PV[String(id).slice(0, 8)] : null; }
  function waveBars(n, seed) {
    var b = '';
    for (var w = 0; w < n; w++) b += '<i style="--s:' + (0.18 + Math.abs(Math.sin((w + seed) * 0.62) * Math.cos((w + seed) * 0.17)) * 0.82).toFixed(2) + ';--d:' + (w % 7) * 0.11 + 's"></i>';
    return b;
  }
  function productVisual() {
    var idEl = $('.send-notify-product-id');
    var v = pvFor(idEl && (idEl.value || idEl.getAttribute('value')));
    var wrap = $('.col-product-image-wrapper');
    if (!v || !wrap || $('.ib-pvis')) return;
    wrap.classList.add('ib-hide');
    $$('.lg-thumbs, .product-images-carousel-thumbs').forEach(function (t) { t.classList.add('ib-hide'); });
    wrap.parentNode.insertBefore(h(
      '<div class="ib-pvis' + (v.vip ? ' ib-pvis--vip' : '') + '" data-ib-card>' + (v.x ? '<span class="ib-x1c">' + v.x + '</span>' : '') +
        '<div class="ib-pvis__top"><span class="ib-pvis__tag">' + v.tag + '</span></div>' +
        '<div class="ib-pvis__mid">' +
          '<p class="ib-pvis__t">' + v.t + '</p>' +
          '<p class="ib-pvis__big"><b>' + v.big + '</b>' + (v.unit ? '<span>' + v.unit + '</span>' : '') + '</p>' +
          '<p class="ib-pvis__sub">' + v.sub + '</p>' +
        '</div>' +
        '<div class="ib-pvis__wave" aria-hidden="true">' + waveBars(40, v.big.length * 3) + '</div>' +
        '<div class="ib-pvis__bot">' +
          '<button class="ib-pill-play" data-ib-play data-src="' + v.s + '" aria-label="تشغيل"><span class="ib-ic">' + I.play + '</span><span class="ib-pill-play__t">اسمع صوتي</span><span class="ib-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></button>' +

        '</div>' +
      '</div>'), wrap);
  }
  /* كروت الباقات و«قد يعجبك أيضًا»: بطاقة مرسومة بدل الصورة */
  function cardTiles() {
    $$('.product-item').forEach(function (item) {
      if (item.dataset.ibTile) return;
      var img = item.querySelector('img[id^="product-card-img-"]');
      var badge = item.querySelector('[data-badge-name-product-id]');
      var id = (img && img.id.replace('product-card-img-', '')) || (badge && badge.getAttribute('data-badge-name-product-id'));
      var v = pvFor(id);
      if (!v || !img) return;
      item.dataset.ibTile = '1';
      $$('.btn-product-card-select-variant, .product-card-footer .btn', item).forEach(function (b) { b.innerHTML = 'اطلب الآن ' + I.arrow; b.classList.add('ib-cardbtn'); });
      item.classList.add('ib-card');
      img.classList.add('ib-hide');
      img.insertAdjacentHTML('afterend',
        '<div class="ib-tile' + (v.vip ? ' ib-tile--vip' : '') + '"><span class="ib-tile__tag">' + v.tag + '</span>' +
        '<p class="ib-tile__big"><b>' + v.big + '</b>' + (v.unit ? '<span>' + v.unit + '</span>' : '') + '</p>' +
        '<div class="ib-tile__wave" aria-hidden="true">' + waveBars(22, v.big.length * 5) + '</div></div>');
    });
  }

  /* ---------- كروت المنتجات بالتصنيفات: إخفاء 0.00 ---------- */
  function fixCards() {
    /* سعر الكرت مباشرة (يشمل «قد يعجبك أيضًا») */
    $$('.product-item .product-price, .product-item .section-product-price').forEach(function (el) {
      if (el.dataset.ib) return;
      var item = el.closest('.product-item');
      var a = item && item.querySelector('a[href*="/products/"]');
      var href = decodeURIComponent((a && a.getAttribute('href')) || '');
      /* التعليق الصوتي سعره الأساسي 190: نكتبها «يبدأ من» لأن المدد الأطول أغلى */
      var isVO = /\/products\/(VO|3b457ceb)/i.test(href) && /^\s*190[.,]00/.test(el.textContent);
      if (!isVO && !/^\s*0[.,]00/.test(el.textContent)) return;
      el.dataset.ib = '1';
      el.innerHTML = '<span class="ib-from">' + (/VIP|105da1b6/i.test(href) ? 'يبدأ من 1,500 ر.س' : 'يبدأ من 190 ر.س') + '</span>';
      if (item) item.dataset.ib = '1';
    });
    $$('a[href*="/products/"]').forEach(function (a) {
      var href = decodeURIComponent(a.getAttribute('href') || '');
      var card = a.closest('.product-item, .product-card, [class*="product-item"], [class*="card"]');
      if (!card || card.dataset.ib) return;
      $$('*', card).forEach(function (el) {
        if (el.children.length === 0 && /^\s*0[.,]00\s*/.test(el.textContent) && el.textContent.length < 20) {
          card.dataset.ib = '1';
          el.innerHTML = /VIP|105da1b6/i.test(href) ? 'يبدأ من 1,500 ر.س' : 'يبدأ من 190 ر.س';
          el.classList.add('ib-from');
        }
      });
    });
  }

  /* ---------- زر واتساب عائم ---------- */
  function floatWA() {
    if ($('.ib-wa-float')) return;
    document.body.appendChild(h('<a class="ib-wa-float" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="تواصل عبر الواتساب">' + I.wa + '<span>استفسار؟</span></a>'));
  }

  ready(function () {
    document.documentElement.classList.add('ib-on');
    try { buildHome(); } catch (e) { console.warn('ib home', e); }
    try { buildSamples(); } catch (e) { console.warn('ib samples', e); }
    try { fixNav(); } catch (e) { console.warn('ib nav', e); }
    try { headerB(); } catch (e) { console.warn('ib header', e); }
    try { initJourney(); } catch (e) { console.warn('ib journey', e); }
    try { buildInner(); } catch (e) { console.warn('ib inner', e); }
    try { fixDescription(); } catch (e) { console.warn('ib desc', e); }
    try { productVisual(); } catch (e) { console.warn('ib pvis', e); }
    try { enhanceOrderForm(); } catch (e) { console.warn('ib form', e); }
    try { cardTiles(); } catch (e) { console.warn('ib tiles', e); }
    try { buildProduct(); } catch (e) { console.warn('ib product', e); }
    try { orderUX(); } catch (e) { console.warn('ib order', e); }
    try { fixCards(); } catch (e) { console.warn('ib cards', e); }
    /* كروت تنحمّل متأخر (قد يعجبك أيضًا) */
    var tm = null;
    try { new MutationObserver(function () { clearTimeout(tm); tm = setTimeout(function () { try { fixCards(); cardTiles(); decorateMenu(); } catch (e) {} }, 150); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
    try { floatWA(); } catch (e) { console.warn('ib wa', e); }
  });
})();
