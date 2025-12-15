const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));

const dict = {
  ua: {
    "nav.work": "Роботи",
    "nav.services": "Послуги",
    "nav.pricing": "Пакети",
    "nav.contact": "Контакти",
    "cta.header": "Отримати оцінку",
    "cta.primary": "Замовити сайт",
    "cta.secondary": "Дивитись роботи",

    "hero.pill": "Швидко • Чисто • Під ключ",
    "hero.title": "Сучасні швидкі сайти для бізнесу",
    "hero.lead":
      "Дизайн, адаптив, базове SEO, мультимова, підключення домену та запуск. Без “води” — з фокусом на результат.",
    "hero.code":
      "<fast-site>\n  speed: 95–100\n  seo: базово налаштовано\n  lang: ua/pl/en\n  deploy: GitHub/Hostinger\n</fast-site>",
    "hero.badge": "Швидкість + чистий дизайн",

    "kpi.days": "днів до запуску",
    "kpi.lang": "мультимова",
    "kpi.seo": "базова індексація",

    "services.title": "Що я роблю",
    "services.subtitle":
      "Конкретний набір робіт, щоб сайт виглядав професійно та працював.",
    "services.s1.t": "Дизайн + структура",
    "services.s1.d":
      "Сітка, типографіка, блоки, CTA. “Дорога” подача без зайвого.",
    "services.s2.t": "Адаптив",
    "services.s2.d":
      "Працює ідеально на iPhone/Android/PC. Без поламаних блоків.",
    "services.s3.t": "SEO-база",
    "services.s3.d":
      "Title/Description, OG, структура, підказки для індексації.",
    "services.s4.t": "Мультимова",
    "services.s4.d": "UA/PL/EN із логічним перемикачем. Зрозуміло і швидко.",
    "services.s5.t": "Підключення",
    "services.s5.d":
      "Домен, пошта, аналітика, форми/месенджери — щоб одразу ловити ліди.",
    "services.s6.t": "Запуск",
    "services.s6.d":
      "Публікація + перевірка. Щоб клієнт відкрив — і все працює.",

    "work.title": "Портфоліо",
    "work.subtitle":
      "Додай 6–9 робіт. Для кожної — коротко “що зроблено” (це дає довіру).",
    "work.p1": "Лендінг + мультимова + базове SEO",
    "work.p2": "Сервісний сайт + контакти + CTA",
    "work.p3": "Портфоліо + структура кейсів",
    "work.note":
      "Порада: додай скріншоти (WebP) — це миттєво піднімає “дорогий” вигляд.",

    "cases.title": "Міні-кейси",
    "cases.subtitle": "Клієнту важливо бачити “задача → рішення → результат”.",
    "cases.c1.t": "Задача",
    "cases.c1.d": "Зробити сторінку, яка швидко відкривається з реклами.",
    "cases.c1.r": "Рішення: чиста структура + сильний CTA + швидкі зображення.",
    "cases.c2.t": "Задача",
    "cases.c2.d": "Показати послуги та приклади так, щоб виникала довіра.",
    "cases.c2.r": "Рішення: кейси, пакети, FAQ та контакти в один клік.",
    "cases.c3.t": "Задача",
    "cases.c3.d": "Мультимова для Польщі та України.",
    "cases.c3.r": "Рішення: UA/PL/EN з логічним перемикачем і єдиним стилем.",

    "process.title": "Процес",
    "process.subtitle": "Просто і прозоро: клієнту так спокійніше.",
    "process.p1": "Бриф: ціль, послуги, приклади",
    "process.p2": "Структура: блоки + тексти + CTA",
    "process.p3": "Дизайн: темний мінімал, типографіка",
    "process.p4": "Збірка: адаптив, швидкість, форми",
    "process.p5": "Запуск: домен/хостинг, базове SEO",

    "pricing.title": "Пакети",
    "pricing.subtitle":
      "Можеш змінити ціни або прибрати — але 3 пакети продають краще.",
    "pricing.tag": "Найчастіше беруть",
    "pricing.s1": "Лендінг 1 сторінка",
    "pricing.s2": "Сайт послуг + портфоліо",
    "pricing.s3": "Бізнес-сайт + мультимова",
    "pricing.li1": "Адаптив",
    "pricing.li2": "CTA + контакти",
    "pricing.li3": "Базове SEO",
    "pricing.li4": "2–5 секцій + кейси",
    "pricing.li5": "Форма заявки",
    "pricing.li6": "Мультимова (2)",
    "pricing.li7": "UA/PL/EN",
    "pricing.li8": "Розширене SEO (база)",
    "pricing.li9": "Підключення аналітики",
    "pricing.li10": "Дрібні правки",
    "pricing.li11": "Супровід та розвиток сайту",
    "pricing.btn": "Запитати ціну",
    "pricing.btn2": "Хочу Business",

    "faq.title": "FAQ",
    "faq.subtitle": "Закриваємо типові заперечення клієнта.",
    "faq.q1": "Скільки часу займає запуск?",
    "faq.a1":
      "Залежить від контенту. Типово 3–10 днів після узгодження матеріалів.",
    "faq.q2": "Чи входить SEO?",
    "faq.a2": "Так, базове: мета-теги, OG, структура, підказки для індексації.",
    "faq.q3": "Де буде сайт?",
    "faq.a3": "Можу розмістити на GitHub Pages або на Hostinger — як зручніше.",

    "contact.title": "Швидко порахую і запропоную варіант",
    "contact.subtitle":
      "Напиши, що за бізнес, послуги, мови та приклади сайтів які подобаються.",
    "contact.c1": "Сайт під рекламу",
    "contact.c2": "Сайт послуг",
    "contact.c3": "Портфоліо",

    "form.name": "Ім’я",
    "form.contact": "Контакт",
    "form.msg": "Повідомлення",
    "form.send": "Відправити",
    "form.hint":
      "Після натискання відкрию Telegram з готовим текстом (без бекенду).",
  },

  pl: {
    "nav.work": "Realizacje",
    "nav.services": "Usługi",
    "nav.pricing": "Pakiety",
    "nav.contact": "Kontakt",
    "cta.header": "Wyceń projekt",
    "cta.primary": "Zamów stronę",
    "cta.secondary": "Zobacz realizacje",

    "hero.pill": "Szybko • Czysto • Pod klucz",
    "hero.title": "Nowoczesne szybkie strony dla biznesu",
    "hero.lead":
      "Projekt, responsywność, podstawowe SEO, wielojęzyczność, domena i start. Bez lania wody — z naciskiem na efekt.",
    "hero.code":
      "<fast-site>\n  speed: 95–100\n  seo: podstawy\n  lang: ua/pl/en\n  deploy: GitHub/Hostinger\n</fast-site>",
    "hero.badge": "Szybkość + czysty design",

    "kpi.days": "dni do startu",
    "kpi.lang": "wielojęzyczność",
    "kpi.seo": "podstawowa indeksacja",

    "services.title": "Co robię",
    "services.subtitle":
      "Konkretny zakres, żeby strona wyglądała profesjonalnie i działała.",
    "services.s1.t": "Design + struktura",
    "services.s1.d": "Siatka, typografia, bloki, CTA. Minimalizm z klasą.",
    "services.s2.t": "Responsywność",
    "services.s2.d": "Perfekcyjnie na telefonie i PC. Bez rozsypanych bloków.",
    "services.s3.t": "SEO — podstawa",
    "services.s3.d":
      "Title/Description, OG, struktura, wskazówki do indeksacji.",
    "services.s4.t": "Wielojęzyczność",
    "services.s4.d": "UA/PL/EN z logicznym przełącznikiem.",
    "services.s5.t": "Podłączenia",
    "services.s5.d": "Domena, poczta, analityka, formularze/komunikatory.",
    "services.s6.t": "Start",
    "services.s6.d": "Publikacja + test — żeby wszystko działało od razu.",

    "work.title": "Portfolio",
    "work.subtitle":
      "Dodaj 6–9 projektów. Do każdego krótko: co zostało zrobione.",
    "work.p1": "Landing + języki + podstawowe SEO",
    "work.p2": "Strona usług + kontakt + CTA",
    "work.p3": "Portfolio + struktura case study",
    "work.note": "Wskazówka: dodaj screeny (WebP) — wygląda od razu drożej.",

    "cases.title": "Mini case studies",
    "cases.subtitle": "Klient chce zobaczyć: problem → rozwiązanie → efekt.",
    "cases.c1.t": "Problem",
    "cases.c1.d": "Strona ma szybko działać z reklamy.",
    "cases.c1.r": "Rozwiązanie: czysta struktura + mocne CTA + lekkie obrazki.",
    "cases.c2.t": "Problem",
    "cases.c2.d": "Zbudować zaufanie przez ofertę i realizacje.",
    "cases.c2.r": "Rozwiązanie: case’y, pakiety, FAQ i kontakt 1 klik.",
    "cases.c3.t": "Problem",
    "cases.c3.d": "Wersje językowe dla PL i UA.",
    "cases.c3.r": "Rozwiązanie: UA/PL/EN z jednym spójnym stylem.",

    "process.title": "Proces",
    "process.subtitle": "Prosto i przejrzyście.",
    "process.p1": "Brief: cel, usługi, przykłady",
    "process.p2": "Struktura: sekcje + teksty + CTA",
    "process.p3": "Design: ciemny minimalizm",
    "process.p4": "Wdrożenie: responsywność, szybkość, formularze",
    "process.p5": "Start: hosting/domena + SEO baza",

    "pricing.title": "Pakiety",
    "pricing.subtitle": "Możesz zmienić ceny — ale 3 pakiety sprzedają lepiej.",
    "pricing.tag": "Najczęściej wybierany",
    "pricing.s1": "Landing 1 strona",
    "pricing.s2": "Strona usług + portfolio",
    "pricing.s3": "Biznes + wielojęzyczność",
    "pricing.li1": "Responsywność",
    "pricing.li2": "CTA + kontakt",
    "pricing.li3": "SEO baza",
    "pricing.li4": "Sekcje + case’y",
    "pricing.li5": "Formularz",
    "pricing.li6": "2 języki",
    "pricing.li7": "UA/PL/EN",
    "pricing.li8": "SEO (baza+)",
    "pricing.li9": "Analityka",
    "pricing.li10": "Drobne poprawki",
    "pricing.li11": "Wsparcie i rozwój strony",
    "pricing.btn": "Zapytaj o cenę",
    "pricing.btn2": "Chcę Business",

    "faq.title": "FAQ",
    "faq.subtitle": "Najczęstsze pytania.",
    "faq.q1": "Ile trwa realizacja?",
    "faq.a1": "Zwykle 3–10 dni po dostarczeniu materiałów.",
    "faq.q2": "Czy jest SEO?",
    "faq.a2": "Tak: meta, OG, struktura i podstawy indeksacji.",
    "faq.q3": "Gdzie będzie strona?",
    "faq.a3": "GitHub Pages albo Hostinger — jak wolisz.",

    "contact.title": "Szybko wycenię i zaproponuję wariant",
    "contact.subtitle":
      "Napisz: branża, usługi, języki i przykłady stron, które Ci się podobają.",
    "contact.c1": "Strona pod reklamę",
    "contact.c2": "Strona usług",
    "contact.c3": "Portfolio",

    "form.name": "Imię",
    "form.contact": "Kontakt",
    "form.msg": "Wiadomość",
    "form.send": "Wyślij",
    "form.hint": "Po kliknięciu otworzę Telegram z gotowym tekstem.",
  },

  en: {
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "cta.header": "Get a quote",
    "cta.primary": "Order a website",
    "cta.secondary": "View work",

    "hero.pill": "Fast • Clean • Turnkey",
    "hero.title": "Modern fast websites for business",
    "hero.lead":
      "Design, responsive layout, basic SEO, multilingual setup, domain connection and launch. No fluff — focused on outcomes.",
    "hero.code":
      "<fast-site>\n  speed: 95–100\n  seo: basics\n  lang: ua/pl/en\n  deploy: GitHub/Hostinger\n</fast-site>",
    "hero.badge": "Speed + clean design",

    "kpi.days": "days to launch",
    "kpi.lang": "multilingual",
    "kpi.seo": "basic indexing",

    "services.title": "What I do",
    "services.subtitle":
      "A clear scope so your site looks professional and converts.",
    "services.s1.t": "Design + structure",
    "services.s1.d": "Grid, typography, sections, CTA. Premium minimal look.",
    "services.s2.t": "Responsive",
    "services.s2.d": "Perfect on mobile and desktop.",
    "services.s3.t": "SEO basics",
    "services.s3.d": "Title/Description, OG, structure, indexing hints.",
    "services.s4.t": "Multilingual",
    "services.s4.d": "UA/PL/EN with a simple language switch.",
    "services.s5.t": "Integrations",
    "services.s5.d": "Domain, email, analytics, forms/messengers for leads.",
    "services.s6.t": "Launch",
    "services.s6.d": "Publish + verify everything works.",

    "work.title": "Portfolio",
    "work.subtitle":
      "Add 6–9 projects. For each — a short line about what you delivered.",
    "work.p1": "Landing + languages + basic SEO",
    "work.p2": "Service website + contacts + CTA",
    "work.p3": "Portfolio + case structure",
    "work.note":
      "Tip: add screenshots (WebP) — it instantly feels more premium.",

    "cases.title": "Mini cases",
    "cases.subtitle": "Clients want: problem → solution → result.",
    "cases.c1.t": "Problem",
    "cases.c1.d": "A page that loads fast from ads.",
    "cases.c1.r": "Solution: clean structure + strong CTA + optimized images.",
    "cases.c2.t": "Problem",
    "cases.c2.d": "Build trust with services and examples.",
    "cases.c2.r": "Solution: cases, packages, FAQ and 1-click contact.",
    "cases.c3.t": "Problem",
    "cases.c3.d": "Multilingual for PL and UA.",
    "cases.c3.r": "Solution: UA/PL/EN with one consistent style.",

    "process.title": "Process",
    "process.subtitle": "Simple and transparent.",
    "process.p1": "Brief: goals, services, examples",
    "process.p2": "Structure: sections + copy + CTA",
    "process.p3": "Design: dark minimal",
    "process.p4": "Build: responsive, fast, forms",
    "process.p5": "Launch: hosting/domain + SEO basics",

    "pricing.title": "Pricing",
    "pricing.subtitle":
      "You can change prices — but 3 packages convert better.",
    "pricing.tag": "Most popular",
    "pricing.s1": "1-page landing",
    "pricing.s2": "Service site + portfolio",
    "pricing.s3": "Business + multilingual",
    "pricing.li1": "Responsive",
    "pricing.li2": "CTA + contacts",
    "pricing.li3": "SEO basics",
    "pricing.li4": "Sections + cases",
    "pricing.li5": "Lead form",
    "pricing.li6": "2 languages",
    "pricing.li7": "UA/PL/EN",
    "pricing.li8": "SEO (basic+)",
    "pricing.li9": "Analytics",
    "pricing.li10": "Minor tweaks",
    "pricing.li11": "Website support and development",
    "pricing.btn": "Ask for price",
    "pricing.btn2": "Choose Business",

    "faq.title": "FAQ",
    "faq.subtitle": "Common questions.",
    "faq.q1": "How long does it take?",
    "faq.a1": "Typically 3–10 days after you provide content.",
    "faq.q2": "Is SEO included?",
    "faq.a2": "Yes: meta tags, OG, structure and indexing basics.",
    "faq.q3": "Where will it be hosted?",
    "faq.a3": "GitHub Pages or Hostinger — your choice.",

    "contact.title": "I’ll estimate and propose the best option",
    "contact.subtitle":
      "Send your business type, services, languages and examples you like.",
    "contact.c1": "Ad landing page",
    "contact.c2": "Service website",
    "contact.c3": "Portfolio",

    "form.name": "Name",
    "form.contact": "Contact",
    "form.msg": "Message",
    "form.send": "Send",
    "form.hint":
      "After clicking, I’ll open Telegram with a prepared message (no backend).",
  },
};

function getLangFromUrl() {
  const u = new URL(window.location.href);
  const q = (u.searchParams.get("lang") || "").toLowerCase();
  if (q === "ua" || q === "uk") return "ua";
  if (q === "pl") return "pl";
  if (q === "en") return "en";
  return "ua";
}

function setLangToUrl(lang) {
  const u = new URL(window.location.href);
  u.searchParams.set("lang", lang);
  window.history.replaceState({}, "", u.toString());
}

function applyLang(lang) {
  const table = dict[lang] || dict.ua;

  // html lang attribute
  const htmlLang = lang === "ua" ? "uk" : lang;
  document.documentElement.setAttribute("lang", htmlLang);

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = table[key];
    if (typeof val === "string") {
      // allow \n in code block area
      el.textContent = val;
    }
  });

  $$(".lang__btn").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === lang)
  );
}

function setupLangButtons() {
  $$(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLangToUrl(lang);
      applyLang(lang);
    });
  });
}

function setupBurger() {
  const burger = $(".burger");
  const mobile = $(".mobile");
  if (!burger || !mobile) return;

  burger.addEventListener("click", () => {
    const open = mobile.hasAttribute("hidden") ? false : true;
    if (open) {
      mobile.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    } else {
      mobile.removeAttribute("hidden");
      burger.setAttribute("aria-expanded", "true");
    }
  });

  $$(".mobile__link, .mobile__cta", mobile).forEach((a) => {
    a.addEventListener("click", () => {
      mobile.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

function setupContactSend() {
  const btn = $("#sendBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const name = ($("input[name='name']")?.value || "").trim();
    const contact = ($("input[name='contact']")?.value || "").trim();
    const msg = ($("textarea[name='msg']")?.value || "").trim();

    const text =
      `Name: ${name || "-"}\n` +
      `Contact: ${contact || "-"}\n` +
      `Request: ${msg || "-"}`;

    // ВАЖЛИВО: встав сюди свій Telegram username
    const tgUser = "yourtelegram";
    const url = `https://t.me/${tgUser}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}

function setYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

(function init() {
  const lang = getLangFromUrl();
  applyLang(lang);
  setupLangButtons();
  setupBurger();
  setupContactSend();
  setYear();
})();
