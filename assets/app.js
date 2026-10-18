/**
 * Autokiilto - Precision Automotive Optical Restoration
 * Shared Vanilla JavaScript Logic (No build step required, GitHub Pages ready)
 */

const translations = {
  fi: {
    // Nav
    nav_tagline: "OPTINEN RESTAUROINTI",
    nav_home: "Etusivu",
    nav_services: "Palvelut",
    nav_gallery: "Ennen & Jälkeen",
    nav_process: "Prosessi",
    nav_about: "Tietoa Meistä",
    nav_contact: "Yhteystiedot",
    nav_book_btn: "Varaa Aika",

    // Hero
    hero_badge: "100% KATSASTUSTAKUU",
    hero_h1_part1: "Älä osta kalliita uusia umpioita — ",
    hero_h1_part2: "Restauroi ne murto-osalla hinnasta.",
    hero_p: "Sumuisten, naarmuuntuneiden ja kellastuneiden muovisten ajovalolinssien kunnostus Hämeenlinnassa. Palautamme tehtaantakaisen valotehon ja kirkkauden takuulla.",
    stat_inspection: "Läpäisykatsastus",
    stat_pricing: "Huippuhinta",
    stat_duration: "Nopea Palvelu",
    
    // Sliders & Labels
    label_before_ox: "Ennen — Hapettunut",
    label_after_rest: "Jälkeen — 100% Kirkas",
    label_optical_tech: "Optinen Teollisuustason Hionta & UV-Pinnoitus",
    label_before: "Ennen",
    label_after: "Jälkeen",

    // Pricing
    price_sec_badge: "HINNASTO & PAKETIT",
    pricing_headline_1: "AJOVALOJEN ",
    pricing_headline_2: "KUNNOSTUS",
    pricing_subtitle: "Selkeä ja reilu hinnoittelu ilman piilokuluja. Kaikki käsittelyt sisältävät 100% katsastustakuun.",
    price_single_tag: "YKSI UMPIO",
    approx_time_single: "~30 MIN",
    price_1_title: "1 AJOVALO",
    price_1_desc: "Täydellinen valinta, jos vain toinen umpio on vahingoittunut tai vaihdettu aiemmin.",
    price_only: "VAIN",
    best_value_badge: "PARAS VASTINE — SÄÄSTÄ ENITEN",
    recommended_badge: "SUOSITELTU VALINTA",
    approx_time_pair: "~60 MIN",
    price_2_title: "2 AJOVALOA (PARI)",
    price_2_desc: "Täydellinen molempien ajovalojen kunnostus tehtaantasaiseen kirkkauteen ja katsastuksen läpäisyyn.",
    book_now_btn: "VARAA AIKA",

    // Features
    feat_1_1: "Puhdistus & rasvanpoisto",
    feat_1_2: "Monivaiheinen märkähiominen (P800–P3000)",
    feat_1_3: "Optinen polymeerihöyrytys (Vapor Tech)",
    feat_1_4: "UV-suojapinnoitus",
    feat_2_1: "Molemmat ajovaloumpiot",
    feat_2_2: "P800–P3000 monivaiheinen hionta",
    feat_2_3: "Vapor Tech -polymeerihöyrytys",
    feat_2_4: "Keraaminen UV-suojapinnoite",
    feat_2_5: "100% Katsastustakuu",
    feat_2_6: "Optimaalinen valokuvio pimeään",

    // Gallery
    gallery_badge: "02 / TODISTEET & TULOKSET",
    gallery_title: "Ennen ja Jälkeen",
    gallery_desc: "Katso aitoja esimerkkejä asiakkaidemme ajovaloista ennen ja jälkeen optisen kunnostuskäsittelyn.",
    gallery_card1_tag: "PERUSTEELLINEN HIONTA",
    gallery_card1_title: "Toyota Yaris — Kellastuman täysi poisto",
    gallery_card2_tag: "UV-SUOJATTU POLYYMIERI",
    gallery_card2_title: "Audi A6 — Sumuisen linssin kirkastus",
    gallery_card3_tag: "TEHO-KUNNOSTUS",
    gallery_card3_title: "BMW 3-sarja — Optisen kirkkauden palautus",

    // Process
    process_badge: "03 / PROSESSI",
    process_title: "Tiedätkö Kunnostusprosessin?",
    process_desc: "Vaiheittainen ammattilaisprosessi teollisen tason optiseen restaurointiin ja pitkäkestoiseen suojaukseen.",
    step1_title: "01 / Pinnan Esikäsittely",
    step1_desc: "Ajovalojen ja ympäröivän alueen huolellinen puhdistus, rasvanpoisto ja koripintojen suojaava maalausteippaus.",
    step2_title: "02 / Monivaiheinen Märkähiominen",
    step2_desc: "Asteittainen märkähiominen erikoislaaduilla (P800–P3000), jolla kuollut lakka, hapettumat ja syvät kiveniskelmät poistetaan.",
    step3_title: "03 / Höyrykunnostus (Vapor Tech)",
    step3_desc: "Huippuluokan polymeerihöyrytys, joka sulattaa polykarbonaatin mikropinnan täysin tasaiseksi palauttaen kristallinkirkkauden.",
    step4_title: "04 / Kiillotus & UV-Pinnoitus",
    step4_desc: "Viimeistely peilikirkkaalla UV-estopinnoitteella, joka suojaa auringolta ja pitää linssin puhtaana jopa vuosiksi.",

    // Contact & Booking Page / Sections
    contact_badge: "04 / YHTEYDENOTTO & AJANVARAUS",
    contact_title: "Varaa Aika tai Pyydä Nopea Tarjous",
    contact_desc: "Tuo autosi käsittelyyn Hämeenlinnaan tai lähetä tiedot arviota varten. Vastaamme viesteihin nopeasti!",
    contact_direct_heading: "Suorat Yhteystiedot",
    contact_phone_label: "Puhelin / Ajanvaraus",
    contact_hours: "Ma–Pe 08:00 – 18:00 | La 10:00 – 15:00",
    contact_email_label: "Sähköposti",
    contact_email_hint: "Liitä halutessasi kuva ajovaloista",
    contact_loc_label: "Toimipiste & Alue",
    contact_loc_value: "Hämeenlinna, Kanta-Häme (Koko seutu)",
    contact_service_coverage: "Palvelemme koko Hämeenlinnan, Hattulan ja Janakkalan alueella. Myös mobiilikäsittelyt paikan päällä.",
    telegram_support_title: "Telegram Asiakaspalvelu",
    telegram_support_subtitle: "@autokiilto • Nopea vastaus",
    telegram_open_btn: "Avaa",
    
    // Booking Form
    form_heading: "Lähetä Varaus- tai Tarjouspyyntö",
    form_subheading: "Täytä alle autosi tiedot. Voit lähettää viestin heti Telegramissa tai kopioida tiedot.",
    form_name_label: "Koko Nimi *",
    form_phone_label: "Puhelinnumero *",
    form_vehicle_label: "Auton Merkki, Malli & Vuosimalli",
    form_service_label: "Valitse Palvelu",
    form_message_label: "Lisätiedot & Toivottu Ajankohta",
    form_name_placeholder: "Matti Meikäläinen",
    form_phone_placeholder: "+358 40 123 4567",
    form_vehicle_placeholder: "esim. Audi A6 2017",
    form_msg_placeholder: "Kirjoita toivottu viikonpäivä tai kellonaika, tai kysymys auton valoista...",
    
    // Service Select Options
    opt_pair: "Ajovalojen kiillotus (pari) - 49 € (Suosituin)",
    opt_single: "1 Umpio - 30 €",
    opt_ceramic: "Täyskunnostus & Keraaminen UV-pinnoite - 59 €",
    opt_fog: "Sumuvalojen lisäys - +20 €",
    opt_tail: "Takavalojen kirkastus - +25 €",
    opt_fleet: "Yritystarjous / Kalustokäsittely",
    opt_other: "Muu kysely / Katsastusapu",

    btn_telegram_send: "LÄHETÄ TELEGRAMISSA",
    btn_whatsapp_send: "Lähetä WhatsAppissa",
    telegram_note: "Huom: Painike avaa Telegramin ja esitäyttää viestin jaettavaksi meille. Voit myös kopioida tiedot yhdellä klikkauksella.",
    copy_details_btn: "Kopioi tiedot leikepöydälle",
    copied_toast: "Varaustiedot kopioitu leikepöydälle!",

    // About Page
    about_hero_badge: "MEIDÄN TARINAMME",
    about_hero_title: "Suomalaista Laatutyötä & Optista Tarkkuutta",
    about_why_cloud_title: "Miksi Ajovaloumpiot Sumentuvat Suomessa?",
    about_story_p1: "Suomen ankarat talvet, tiesuola, hiekoitussepeli ja auringon UV-säteily rasittavat nykyaikaisia polykarbonaattimuovisia ajovaloumpioita poikkeuksellisen rajusti. Vuosien myötä alkuperäinen suojalakkapinta hapettuu, sumenee ja kellastuu.",
    about_story_p2: "Uusien alkuperäisvalojen ostaminen maksaa usein satoja tai jopa tuhansia euroja. Pelkkä nopea vahaus tai tahnakiillotus taas sumentuu uudelleen parissa kuukaudessa. Me Autokiillolla käytämme teollisuustason polymeerihöyrytystä (Vapor Tech), joka sulattaa polykarbonaatin optisesti kristallinkirkkaaksi ja sulkee sen pitkäkestoisella UV-suojalla.",
    about_stat_restored: "Kunnostettua Ajovaloa",
    about_stat_pass: "Katsastuksen Läpäisy",
    about_hazard_heading: "LIIKENNETURVALLISUUS & SÄÄDÖKSET",
    about_why_inspect: "Miksi Katsastuksessa Hylätään?",
    about_inspect_desc: "Katsastusviranomainen (Traficom) edellyttää selkeää ja oikeanlaista valokuviota. Sumuinen umpio sirottaa valoa vastaantulijoiden silmiin ja pudottaa kantamaa jopa 70%. Kunnostuksemme palauttaa terävän valokuvion ja takaa katsastuksen läpäisyn.",
    about_hazard_1_title: "1. Heikentynyt Kantama",
    about_hazard_1_desc: "Hapettunut muovi absorboi ja hajottaa halogeeni- tai xenon-valon ennen kuin se saavuttaa ajoradan. Tämä lyhentää reaktioaikaa hirvi- ja jalankulkijatilanteissa syksyn pimeydessä.",
    about_hazard_2_title: "2. Vastaantulijoiden Häikäisy",
    about_hazard_2_desc: "Sumentunut linssi toimii kuin maitolasi: valo ei suuntaudu tiehen, vaan leviää hajavalona suoraan vastaantulijan tuulilasiin aiheuttaen vaaratilanteita.",
    about_hazard_3_title: "3. Katsastusmääräys (Traficom)",
    about_hazard_3_desc: "Katsastusmies tarkistaa valokuvion suuntauslaitteella. Epätasaisesta kuviosta seuraa korjauskehotus tai uusintakatsastus. Autokiillolta saat 100% hyväksyntätakuun.",
    about_cta_title: "Tuo Autosi Hämeenlinnaan",
    about_cta_desc: "Käsittelemme autosi ammattitaidolla ja huolella. Takaamme huipputuloksen tai saat rahasi takaisin.",
    about_cta_btn: "Ota Yhteyttä & Varaa",
    about_cta_price_btn: "Katso Hinnasto",
    about_tech_label1: "Polymeerihöyryn molekyylitasoitus",
    about_tech_label2: "KALIBROITU LÄMPÖTEKNOLOGIA",

    // Footer
    footer_bio: "Suomalaista tarkkuustyötä ajovalojen ja auton optiikan palauttamiseen Hämeenlinnassa. 100% katsastustakuu jokaiselle ajoneuvolle.",
    footer_badge: "100% Katsastustakuu",
    footer_links_title: "Pikalinkit",
    footer_contact_title: "Yhteystiedot",
    footer_hours_title: "Aukioloajat",
    footer_lbl_phone: "Puh:",
    footer_lbl_email: "Sähköposti:",
    footer_lbl_loc: "Sijainti:",
    footer_loc_val: "Hämeenlinna, Suomi",
    footer_hours_weekdays: "Ma – Pe:",
    footer_hours_sat: "Lauantai:",
    footer_hours_sun: "Sunnuntai: Suljettu",
    footer_copy: "© 2025 Autokiilto. Kaikki oikeudet pidätetään."
  },

  en: {
    // Nav
    nav_tagline: "OPTICAL RESTORATION",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Before & After",
    nav_process: "Process",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_book_btn: "Book Service",

    // Hero
    hero_badge: "100% INSPECTION GUARANTEE",
    hero_h1_part1: "Don't Replace Your Headlights — ",
    hero_h1_part2: "Restore Them for Less.",
    hero_p: "Professional restoration for foggy, oxidized, and yellowed plastic headlights in Hämeenlinna. We restore factory optical clarity and beam intensity with full warranty.",
    stat_inspection: "MOT / Pass Guarantee",
    stat_pricing: "Best Prices",
    stat_duration: "Fast Turnaround",
    
    // Sliders & Labels
    label_before_ox: "Before — Oxidized",
    label_after_rest: "After — 100% Restored",
    label_optical_tech: "Industrial Optical Sanding & UV Coating",
    label_before: "Before",
    label_after: "After",

    // Pricing
    price_sec_badge: "PRICING & PACKAGES",
    pricing_headline_1: "HEADLIGHT ",
    pricing_headline_2: "RESTORATION",
    pricing_subtitle: "Straightforward and transparent pricing with no hidden fees. All treatments include roadworthiness pass guarantee.",
    price_single_tag: "SINGLE UNIT",
    approx_time_single: "~30 MIN",
    price_1_title: "1 HEADLIGHT",
    price_1_desc: "Ideal option if only one headlight lens is cloudy, oxidized, or was previously replaced.",
    price_only: "ONLY",
    best_value_badge: "BEST VALUE — SAVE MORE",
    recommended_badge: "RECOMMENDED",
    approx_time_pair: "~60 MIN",
    price_2_title: "2 HEADLIGHTS (PAIR)",
    price_2_desc: "Comprehensive restoration for both headlights to factory clarity and road inspection pass.",
    book_now_btn: "BOOK NOW",

    // Features
    feat_1_1: "Deep cleaning & decontamination",
    feat_1_2: "Multi-stage precision micro-sanding (P800–P3000)",
    feat_1_3: "Optical polymer vapor restoration (Vapor Tech)",
    feat_1_4: "UV protective coating",
    feat_2_1: "Both headlight lenses restored",
    feat_2_2: "P800–P3000 wet sanding stages",
    feat_2_3: "Vapor Tech polymer reflow",
    feat_2_4: "Ceramic UV protection layer",
    feat_2_5: "100% Inspection pass guarantee",
    feat_2_6: "Significantly enhanced light output",

    // Gallery
    gallery_badge: "02 / EVIDENCE & RESULTS",
    gallery_title: "Before & After",
    gallery_desc: "Browse authentic customer vehicles before and after our precision optical restoration.",
    gallery_card1_tag: "PRECISION SANDING",
    gallery_card1_title: "Toyota Yaris — Total yellowing removal",
    gallery_card2_tag: "UV-PROTECTED POLYMER",
    gallery_card2_title: "Audi A6 — Heavy fogging cleared",
    gallery_card3_tag: "DEEP RESTORATION",
    gallery_card3_title: "BMW 3-Series — Restored optical clarity",

    // Process
    process_badge: "03 / PROCESS",
    process_title: "Do You Know The Restoration Process?",
    process_desc: "Our calibrated step-by-step industrial restoration method ensuring showroom optics and lasting endurance.",
    step1_title: "01 / Surface Pre-Treatment",
    step1_desc: "Thorough chemical decontamination, degreasing, and protective masking of vehicle bodywork and trim.",
    step2_title: "02 / Multi-Stage Wet Sanding",
    step2_desc: "Progressive sanding using graded abrasive grits (P800–P3000) to eliminate deep oxidation, scratches, and haze.",
    step3_title: "03 / Vapor Repairing Technology",
    step3_desc: "Advanced heated polymer vapor application that molecularly reflows the polycarbonate lens surface to transparent crystal clear.",
    step4_title: "04 / Polishing & UV Clear Coat",
    step4_desc: "Completed with a high-gloss ceramic UV inhibitor shielding against solar degradation and harsh road grime.",

    // Contact & Booking Page / Sections
    contact_badge: "04 / CONTACT & BOOKING",
    contact_title: "Book an Appointment or Request a Quote",
    contact_desc: "Bring your car in or send vehicle details for an evaluation. We reply promptly within business hours!",
    contact_direct_heading: "Direct Contact Information",
    contact_phone_label: "Phone / Booking Desk",
    contact_hours: "Mon–Fri 08:00 – 18:00 | Sat 10:00 – 15:00",
    contact_email_label: "Email",
    contact_email_hint: "Attach photos if available",
    contact_loc_label: "Location & Coverage",
    contact_loc_value: "Hämeenlinna & Greater Region (Finland)",
    contact_service_coverage: "Full service coverage in Hämeenlinna, Hattula, and Janakkala. Mobile on-site restoration also available.",
    telegram_support_title: "Telegram Customer Support",
    telegram_support_subtitle: "@autokiilto • Quick response",
    telegram_open_btn: "Open",

    // Booking Form
    form_heading: "Send Booking or Quote Request",
    form_subheading: "Fill in your vehicle details below. You can send the message instantly via Telegram or copy the info.",
    form_name_label: "Full Name *",
    form_phone_label: "Phone Number *",
    form_vehicle_label: "Vehicle Make, Model & Year",
    form_service_label: "Select Service",
    form_message_label: "Additional Notes & Preferred Schedule",
    form_name_placeholder: "John Smith",
    form_phone_placeholder: "+358 40 123 4567",
    form_vehicle_placeholder: "e.g. Audi A6 2017",
    form_msg_placeholder: "Write your preferred day or time, or any question about your headlights...",

    // Service Select Options
    opt_pair: "Headlight restoration (pair) - 49 € (Recommended)",
    opt_single: "1 Headlight - 30 €",
    opt_ceramic: "Deep restoration & Ceramic UV coating - 59 €",
    opt_fog: "Fog light add-on - +20 €",
    opt_tail: "Tail light optical refresh - +25 €",
    opt_fleet: "Fleet / Commercial vehicle package",
    opt_other: "Other inquiry / Inspection assistance",

    btn_telegram_send: "SEND VIA TELEGRAM",
    btn_whatsapp_send: "Send via WhatsApp",
    telegram_note: "Note: This button opens Telegram with your prefilled inquiry. You can also copy details with one click.",
    copy_details_btn: "Copy details to clipboard",
    copied_toast: "Booking details copied to clipboard!",

    // About Page
    about_hero_badge: "OUR STORY",
    about_hero_title: "Finnish Precision Craft & Optical Clarity",
    about_why_cloud_title: "Why Do Headlights Cloud & Degrade in the Nordics?",
    about_story_p1: "Harsh Nordic winters, corrosive road salts, abrasive road gravel, and relentless summer UV rays cause modern polycarbonate lenses to degrade rapidly. Over time, headlights turn cloudy, hazing out essential visibility.",
    about_story_p2: "Buying new original headlights can cost anywhere from €600 to upwards of €2,500. Cheap buffing waxes fade within two months. At Autokiilto, we use precision multi-stage micro-sanding followed by calibrated Polymer Vapor Reflow, restoring true optical transparency and sealing it for years.",
    about_stat_restored: "Headlights Restored",
    about_stat_pass: "Inspection Pass Rate",
    about_hazard_heading: "ROAD SAFETY & REGULATIONS",
    about_why_inspect: "Why Do Vehicles Fail Inspection (MOT / Katsastus)?",
    about_inspect_desc: "Vehicle inspection authorities (Traficom) require a sharp, compliant cut-off beam pattern. Cloudy lights scatter blinding glare toward oncoming traffic while reducing driver night vision by up to 70%. Our restoration restores the OEM beam pattern with a 100% pass guarantee.",
    about_hazard_1_title: "1. Reduced Beam Distance",
    about_hazard_1_desc: "Oxidized polycarbonate absorbs and scatters halogen or xenon beams before reaching the road, drastically reducing reaction time in dark Nordic conditions.",
    about_hazard_2_title: "2. Oncoming Driver Glare",
    about_hazard_2_desc: "A cloudy lens acts like frosted glass: light is scattered into blinding glare for oncoming drivers instead of illuminating the driving lane.",
    about_hazard_3_title: "3. Inspection Compliance (MOT/Traficom)",
    about_hazard_3_desc: "Vehicle inspectors check beam pattern alignment with optical testing tools. Uneven dispersion results in immediate failure. We guarantee 100% pass approval.",
    about_cta_title: "Bring Your Car to Hämeenlinna",
    about_cta_desc: "We restore your car with professional industrial care. Top results guaranteed or your money back.",
    about_cta_btn: "Contact Us & Book",
    about_cta_price_btn: "View Pricing",
    about_tech_label1: "Vapor Polymer Molecular Reflow",
    about_tech_label2: "CALIBRATED HEAT TECH",

    // Footer
    footer_bio: "Finnish precision craft in automotive optical restoration in Hämeenlinna. 100% inspection pass guarantee for every vehicle.",
    footer_badge: "100% Inspection Pass Guarantee",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact Info",
    footer_hours_title: "Business Hours",
    footer_lbl_phone: "Phone:",
    footer_lbl_email: "Email:",
    footer_lbl_loc: "Location:",
    footer_loc_val: "Hämeenlinna, Finland",
    footer_hours_weekdays: "Mon – Fri:",
    footer_hours_sat: "Saturday:",
    footer_hours_sun: "Sunday: Closed",
    footer_copy: "© 2025 Autokiilto. All rights reserved."
  }
};

let currentLang = 'fi';

// Switch Language and Persist
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('autokiilto_lang', lang);
  } catch (e) {}

  document.documentElement.setAttribute('lang', lang);

  // Update text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.value = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update select options
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update button active state
  const btnFi = document.getElementById('lang-btn-fi');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnFi && btnEn) {
    const activeClasses = ['bg-primary-container', 'text-optic-white', 'shadow-[0_0_12px_rgba(220,38,38,0.5)]'];
    const inactiveClasses = ['text-text-muted', 'hover:text-text-primary'];

    if (lang === 'fi') {
      btnFi.classList.add(...activeClasses);
      btnFi.classList.remove(...inactiveClasses);
      btnEn.classList.remove(...activeClasses);
      btnEn.classList.add(...inactiveClasses);
    } else {
      btnEn.classList.add(...activeClasses);
      btnEn.classList.remove(...inactiveClasses);
      btnFi.classList.remove(...activeClasses);
      btnFi.classList.add(...inactiveClasses);
    }
  }
}

// Telegram Order Generation
function sendTelegramOrder(sourceFormId) {
  const form = document.getElementById(sourceFormId) || document.getElementById('booking-form');
  
  let name = "";
  let phone = "";
  let vehicle = "";
  let service = "";
  let message = "";

  if (form) {
    name = (form.querySelector('[name="name"]') || document.getElementById('inquiry-name') || {}).value || "";
    phone = (form.querySelector('[name="phone"]') || document.getElementById('inquiry-phone') || {}).value || "";
    vehicle = (form.querySelector('[name="vehicle"]') || document.getElementById('inquiry-vehicle') || {}).value || "";
    const svcEl = form.querySelector('[name="service"]') || document.getElementById('inquiry-service');
    service = svcEl ? (svcEl.options[svcEl.selectedIndex] ? svcEl.options[svcEl.selectedIndex].text : svcEl.value) : "";
    message = (form.querySelector('[name="message"]') || document.getElementById('inquiry-message') || {}).value || "";
  }

  if (!name.trim() || !phone.trim()) {
    showToast(currentLang === 'fi' ? "Täytä vähintään nimi ja puhelinnumero!" : "Please fill in at least your name and phone number!");
    return;
  }

  const isFi = currentLang === 'fi';
  const orderText = 
`⚡ AUTOKIILTO — ${isFi ? 'UUSI VARAUS / TILAUS' : 'NEW BOOKING REQUEST'}
------------------------------------
👤 ${isFi ? 'Asiakas' : 'Customer'}: ${name}
📞 ${isFi ? 'Puh' : 'Phone'}: ${phone}
🚗 ${isFi ? 'Ajoneuvo' : 'Vehicle'}: ${vehicle || (isFi ? 'Ei ilmoitettu' : 'Not specified')}
🛠 ${isFi ? 'Palvelu' : 'Service'}: ${service}
📝 ${isFi ? 'Lisätiedot' : 'Notes'}: ${message || (isFi ? 'Ei lisätietoja' : 'None')}
📍 ${isFi ? 'Toimipiste' : 'Location'}: Hämeenlinna
🌐 ${isFi ? 'Kieli' : 'Language'}: ${currentLang.toUpperCase()}
------------------------------------`;

  const telegramUrl = `https://t.me/share/url?text=${encodeURIComponent(orderText)}`;
  window.open(telegramUrl, '_blank');
}

// WhatsApp Order Fallback
function sendWhatsAppOrder(sourceFormId) {
  const form = document.getElementById(sourceFormId) || document.getElementById('booking-form');
  let name = (document.getElementById('inquiry-name') || {}).value || "";
  let phone = (document.getElementById('inquiry-phone') || {}).value || "";
  let vehicle = (document.getElementById('inquiry-vehicle') || {}).value || "";
  const svcEl = document.getElementById('inquiry-service');
  let service = svcEl ? (svcEl.options[svcEl.selectedIndex] ? svcEl.options[svcEl.selectedIndex].text : svcEl.value) : "";
  let message = (document.getElementById('inquiry-message') || {}).value || "";

  const isFi = currentLang === 'fi';
  const orderText = `${isFi ? 'Autokiilto Varauspyyntö' : 'Autokiilto Booking Request'}:%0A${isFi ? 'Nimi' : 'Name'}: ${encodeURIComponent(name)}%0A${isFi ? 'Puh' : 'Phone'}: ${encodeURIComponent(phone)}%0A${isFi ? 'Auto' : 'Vehicle'}: ${encodeURIComponent(vehicle)}%0A${isFi ? 'Palvelu' : 'Service'}: ${encodeURIComponent(service)}%0A${isFi ? 'Lisätiedot' : 'Notes'}: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/358401572120?text=${orderText}`, '_blank');
}

// Copy Details to Clipboard
function copyBookingDetails() {
  const name = (document.getElementById('inquiry-name') || {}).value || "-";
  const phone = (document.getElementById('inquiry-phone') || {}).value || "-";
  const vehicle = (document.getElementById('inquiry-vehicle') || {}).value || "-";
  const svcEl = document.getElementById('inquiry-service');
  const service = svcEl ? (svcEl.options[svcEl.selectedIndex] ? svcEl.options[svcEl.selectedIndex].text : svcEl.value) : "-";
  const message = (document.getElementById('inquiry-message') || {}).value || "-";

  const isFi = currentLang === 'fi';
  const text = `Autokiilto ${isFi ? 'Varaus' : 'Booking'}\n${isFi ? 'Nimi' : 'Name'}: ${name}\n${isFi ? 'Puh' : 'Phone'}: ${phone}\n${isFi ? 'Auto' : 'Vehicle'}: ${vehicle}\n${isFi ? 'Palvelu' : 'Service'}: ${service}\n${isFi ? 'Lisätiedot' : 'Notes'}: ${message}`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(translations[currentLang].copied_toast);
    });
  }
}

// Toast Alert
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg bg-surface-card border-2 border-primary-container text-optic-white shadow-2xl font-semibold text-sm flex items-center gap-3 opacity-0 translate-y-4 pointer-events-none transition-all duration-300';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="material-symbols-outlined text-primary-container">info</span> <span>${message}</span>`;
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 4000);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-nav');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Initialise everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'fi';
  try {
    savedLang = localStorage.getItem('autokiilto_lang') || 'fi';
  } catch(e) {}
  
  setLanguage(savedLang);
});
