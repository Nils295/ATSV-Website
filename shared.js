// ==================== DEFAULT DATA ====================
const defaultHeroSlides = [
    {
        id: 101,
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1920",
        title: "Schneller. Höher. Weiter. Gemeinsam im ATSV.",
        subtitle: "Leichtathletik in Ahrensburg für Kinder, Jugendliche, Aktive & Masters – auf dem Stormarnplatz und Am Reesenbüttel."
    },
    {
        id: 102,
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1920",
        title: "Nachwuchsförderung mit Leidenschaft & Teamgeist",
        subtitle: "Spielerische Kinderleichtathletik (U8–U12) und gezieltes Wettkampftraining für unsere Jugend."
    },
    {
        id: 103,
        image: "https://images.unsplash.com/photo-1517649763962-0c623266f0bc?auto=format&fit=crop&q=80&w=1920",
        title: "Deutsches Sportabzeichen & Laufgruppe",
        subtitle: "Jeden Freitag von Mai bis September auf dem Sportplatz Am Reesenbüttel – für alle Altersklassen."
    }
];

const defaultBlogs = [
    {
        id: 1,
        title: "Bezirksmeisterschaften: 8x Gold für den ATSV-Nachwuchs",
        category: "Wettkampf",
        date: "2026-05-17",
        author: "Clemens & Trainerteam",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=900",
        excerpt: "Starker Auftritt unserer Athletinnen und Athleten mit zahlreichen persönlichen Bestleistungen über 800m, im Sprint und Weitsprung.",
        content: "Ein rundum gelungenes Wettkampfwochenende für die Leichtathletik-Abteilung des Ahrensburger TSV! Bei strahlendem Sonnenschein sicherte sich unser Nachwuchs insgesamt acht Meistertitel sowie zahlreiche Podestplätze.\n\nBesonders hervorzuheben ist der souveräne 800m-Sieg in starker Frühform sowie unsere schnellen 4x100m-Staffeln der Jugend. Herzlichen Glückwunsch an alle Teilnehmenden!"
    },
    {
        id: 2,
        title: "Saisonauftakt auf dem Sportplatz Am Reesenbüttel",
        category: "Vereinsleben",
        date: "2026-04-25",
        author: "Abteilungsleitung",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=900",
        excerpt: "Mit dem Wechsel von der Sporthalle auf die Tartanbahn starten alle Gruppen motiviert in die Freiluftsaison 2026.",
        content: "Endlich wieder Tartanbahn-Luft! Nach intensiven Wintermonaten in der Sporthalle Reesenbüttel und Heimgarten trainieren unsere Gruppen ab sofort wieder draußen.\n\nNeue Gesichter sind in allen Altersklassen herzlich zu einem unverbindlichen Probetraining eingeladen."
    },
    {
        id: 3,
        title: "Startschuss für die Sportabzeichen-Saison in Ahrensburg",
        category: "Ankündigung",
        date: "2026-05-02",
        author: "Katrin Stock",
        image: "https://images.unsplash.com/photo-1517649763962-0c623266f0bc?auto=format&fit=crop&q=80&w=900",
        excerpt: "Ab sofort jeden Freitag von 18:30 bis 20:00 Uhr: Gemeinsam trainieren und das Deutsche Sportabzeichen ablegen.",
        content: "Ob Bronze, Silber oder Gold – unser Prüferteam steht wieder jeden Freitag auf dem Sportplatz Am Reesenbüttel bereit. Eine Vereinsmitgliedschaft ist nicht erforderlich. Kommt einfach in Sportkleidung vorbei!"
    }
];

const defaultTraining = [
    { category: "Kinder",    group: "U8 / U10 Kinderleichtathletik",   year: "2017 – 2020",        day: "Montag",             time: "16:00 – 17:30 Uhr", location: "Sporthalle / Platz Reesenbüttel", trainer: "Björn, Nils & Maxi" },
    { category: "Schüler",   group: "U12 Schüler",                     year: "2015 & 2016",         day: "Mittwoch",           time: "16:30 – 18:00 Uhr", location: "Stormarnplatz Ahrensburg",        trainer: "Nils & Maxi" },
    { category: "Schüler",   group: "U14 Schüler",                     year: "2013 & 2014",         day: "Dienstag & Donnerstag", time: "17:30 – 19:00 Uhr", location: "Sportplatz Am Reesenbüttel",   trainer: "Uwe & Christian P." },
    { category: "Jugend",    group: "U16 Jugend",                      year: "2011 & 2012",         day: "Montag & Donnerstag",time: "17:30 – 19:30 Uhr", location: "Stormarnplatz Ahrensburg",        trainer: "Clemens & Justus" },
    { category: "Jugend",    group: "U18 / U20 Leistungsgruppe",       year: "ab 2010",             day: "Mo, Mi & Fr",        time: "18:00 – 20:00 Uhr", location: "Sportplatz Am Reesenbüttel",      trainer: "Clemens, Björn & Matthias" },
    { category: "Erwachsene",group: "Erwachsene & Senioren (Masters)", year: "ab 30 Jahre",         day: "Dienstag",           time: "18:30 – 20:00 Uhr", location: "Sportplatz Am Reesenbüttel",      trainer: "Nicola Brackenwagen" },
    { category: "Laufgruppe",group: "Laufgruppe & Sportabzeichen",     year: "Alle Altersklassen",  day: "Freitag (Mai–Sep)",  time: "18:30 – 20:00 Uhr", location: "Sportplatz Am Reesenbüttel",      trainer: "Katrin Stock & Team" }
];

const defaultEvents = [
    { id: 1, title: "Ahrensburger Läufer-Meeting",      category: "Bahnwettkampf", date: "31. Mai 2026",    location: "Sportplatz Am Reesenbüttel", deadline: "24. Mai 2026",  description: "Mittel- und Langstreckenwettbewerbe auf der heimischen 400m-Bahn für Jugend, Aktive und Masters." },
    { id: 2, title: "Kreismeisterschaften Mehrkampf",   category: "Bahnwettkampf", date: "06. Sep. 2026",   location: "Stormarnplatz Ahrensburg",   deadline: "29. Aug. 2026", description: "Drei- und Vierkampf für die Altersklassen U10 bis U16." },
    { id: 3, title: "ATSV Sommer-Sportfest & Grillabend", category: "Vereinsfest", date: "18. Juli 2026",   location: "Sportplatz Am Reesenbüttel", deadline: "12. Juli 2026", description: "Vereinsinterner Spaß-Mehrkampf für Familien, Kinder und Eltern mit anschließendem Grillen." },
    { id: 4, title: "58. Ahrensburger Nikolauslauf",    category: "Crosslauf",     date: "06. Dez. 2026",   location: "Reesenbüttel / Ahrensburg",  deadline: "29. Nov. 2026", description: "Unser traditionsreicher Jahresabschlusslauf durch den Ahrensburger Wald." }
];

// ==================== STATE ====================
let heroSlides     = JSON.parse(localStorage.getItem('atsv_hero_slides_v2')) || defaultHeroSlides;
let blogs          = JSON.parse(localStorage.getItem('atsv_blogs_v2'))        || defaultBlogs;
let training       = JSON.parse(localStorage.getItem('atsv_training_v2'))     || defaultTraining;
let events         = JSON.parse(localStorage.getItem('atsv_events_v2'))       || defaultEvents;

let isAdminMode          = localStorage.getItem('atsv_admin_mode') === 'true';
let currentHeroIndex     = 0;
let heroAutoInterval     = null;
let uploadedHeroBase64   = "";
let currentTrainingFilter= "all";
let showPastEvents = false;

// ==================== PAGE INIT ====================
function initPage() {
    highlightActiveNav();
    applyAdminUIState();
}

function highlightActiveNav() {
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    const pageMap = {
        '': 'home', 'index.html': 'home',
        'trainingszeiten.html': 'trainingszeiten',
        'aktuelles.html': 'aktuelles',
        'termine.html': 'termine',
        'kontakt.html': 'kontakt',
        'admin.html': 'admin'
    };
    const activeTab = pageMap[filename];
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('text-atsvBlue', 'bg-blue-50/80');
        el.classList.add('text-slate-700');
    });
    if (activeTab) {
        const activeEl = document.querySelector(`.nav-link[data-tab="${activeTab}"]`);
        if (activeEl) {
            activeEl.classList.remove('text-slate-700');
            activeEl.classList.add('text-atsvBlue', 'bg-blue-50/80');
        }
    }
}

function applyAdminUIState() {
    const quickToolbar = document.getElementById('admin-quick-toolbar');
    const mainHeader   = document.getElementById('main-header');
    const navAdminTab  = document.getElementById('nav-admin-tab');
    const mobileAdminTab = document.getElementById('mobile-admin-tab');
    const adminTopBtn  = document.getElementById('admin-top-btn');
    const adminIcon    = document.getElementById('admin-icon');
    const adminBtnText = document.getElementById('admin-btn-text');
    const heroAdminBtn = document.getElementById('hero-admin-edit-btn');

    if (isAdminMode) {
        quickToolbar?.classList.remove('hidden');
        mainHeader?.classList.remove('top-0');
        mainHeader?.classList.add('top-[44px]');
        navAdminTab?.classList.remove('hidden');
        navAdminTab?.classList.add('inline-flex');
        mobileAdminTab?.classList.remove('hidden');
        heroAdminBtn?.classList.remove('hidden');
        heroAdminBtn?.classList.add('inline-flex');
        adminTopBtn?.classList.add('bg-amber-400', 'text-slate-950');
        adminTopBtn?.classList.remove('bg-white/15');
        if (adminIcon)    adminIcon.className    = "fa-solid fa-unlock text-slate-950";
        if (adminBtnText) adminBtnText.textContent = "Admin-Modus aktiv";
        document.querySelectorAll('.admin-only-inline').forEach(el => {
            el.classList.remove('hidden');
            el.classList.add('inline-flex');
        });
    }
}

// ==================== TOAST ====================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-emerald-600' : (type === 'info' ? 'bg-blue-600' : 'bg-red-600');
    const icon    = type === 'success' ? 'fa-circle-check' : (type === 'info' ? 'fa-circle-info' : 'fa-circle-exclamation');
    toast.className = `pointer-events-auto px-5 py-3.5 rounded-2xl shadow-2xl text-white font-semibold text-xs sm:text-sm flex items-center gap-3 transition transform translate-y-2 opacity-0 ${bgColor}`;
    toast.innerHTML = `<i class="fa-solid ${icon} text-base"></i> <span>${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.remove('translate-y-2', 'opacity-0'));
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==================== MOBILE DRAWER ====================
function toggleMobileDrawer() {
    const drawer   = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const isClosed = drawer.classList.contains('translate-x-full');
    if (isClosed) {
        backdrop.classList.remove('hidden');
        drawer.classList.remove('translate-x-full');
    } else {
        drawer.classList.add('translate-x-full');
        backdrop.classList.add('hidden');
    }
}

// ==================== ADMIN MODE ====================
function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    localStorage.setItem('atsv_admin_mode', isAdminMode ? 'true' : 'false');
    if (isAdminMode) {
        showToast("Redaktions- & Admin-Modus aktiviert!", "success");
        setTimeout(() => { window.location.href = 'admin.html'; }, 600);
    } else {
        showToast("Admin-Modus beendet.", "info");
        setTimeout(() => { window.location.href = 'index.html'; }, 600);
    }
}

function openAdminSection(subTab) {
    if (!isAdminMode) {
        isAdminMode = true;
        localStorage.setItem('atsv_admin_mode', 'true');
    }
    localStorage.setItem('atsv_admin_subtab', subTab);
    window.location.href = 'admin.html';
}

// ==================== UTILITIES ====================
function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    return parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : dateStr;
}

function handleContactSubmit(e) {
    e.preventDefault();
    showToast("Vielen Dank! Deine Anfrage für ein Probetraining wurde übermittelt.", "success");
    e.target.reset();
}

function resetToDefaults() {
    localStorage.removeItem('atsv_hero_slides_v2');
    localStorage.removeItem('atsv_blogs_v2');
    localStorage.removeItem('atsv_training_v2');
    localStorage.removeItem('atsv_events_v2');
    heroSlides   = [...defaultHeroSlides];
    blogs        = [...defaultBlogs];
    training     = [...defaultTraining];
    events       = [...defaultEvents];
    currentHeroIndex = 0;
    showToast("Alle Inhalte auf Standardwerte zurückgesetzt!", "success");
    setTimeout(() => location.reload(), 800);
}

// ==================== IMAGE COMPRESSION ====================
function compressImageFile(file, maxWidth = 1920, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                let width = img.width, height = img.height;
                if (width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; }
                const canvas = document.createElement('canvas');
                canvas.width = width; canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ==================== HERO SLIDER ====================
function renderHeroSlider() {
    if (!heroSlides || heroSlides.length === 0) heroSlides = [...defaultHeroSlides];
    if (currentHeroIndex >= heroSlides.length) currentHeroIndex = 0;

    const bgContainer  = document.getElementById('hero-slides-bg');
    const dotsContainer= document.getElementById('hero-dots');
    if (!bgContainer) return;

    const currentSlide = heroSlides[currentHeroIndex];
    bgContainer.innerHTML = heroSlides.map((slide, idx) => `
        <img src="${slide.image}" alt="${slide.title}"
             class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}"
             style="transition: opacity 0.9s ease-in-out;">
    `).join('');

    const titleEl    = document.getElementById('hero-main-title');
    const subtitleEl = document.getElementById('hero-main-subtitle');
    if (titleEl    && currentSlide) titleEl.textContent    = currentSlide.title;
    if (subtitleEl && currentSlide) subtitleEl.textContent = currentSlide.subtitle;

    if (dotsContainer) {
        dotsContainer.innerHTML = heroSlides.map((_, idx) => `
            <button onclick="goToHeroSlide(${idx})" aria-label="Folie ${idx + 1}"
                    class="h-2.5 rounded-full transition-all ${idx === currentHeroIndex ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/45 hover:bg-white/75'}"></button>
        `).join('');
    }
}

function nextHeroSlide() { currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length; renderHeroSlider(); }
function prevHeroSlide() { currentHeroIndex = (currentHeroIndex - 1 + heroSlides.length) % heroSlides.length; renderHeroSlider(); }
function goToHeroSlide(index) { currentHeroIndex = index; renderHeroSlider(); }

function startHeroAutoplay() {
    if (heroAutoInterval) clearInterval(heroAutoInterval);
    heroAutoInterval = setInterval(() => { if (heroSlides.length > 1) nextHeroSlide(); }, 6500);
}

async function handleHeroFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    try {
        showToast("Bild wird für Web & 4K optimiert...", "info");
        const compressed = await compressImageFile(file, 1920, 0.82);
        uploadedHeroBase64 = compressed;
        document.getElementById('hero-upload-placeholder').classList.add('hidden');
        document.getElementById('hero-upload-preview-box').classList.remove('hidden');
        document.getElementById('hero-upload-preview-img').src = compressed;
        showToast("Bild bereit zum Speichern!", "success");
    } catch (err) { showToast("Fehler beim Verarbeiten des Bildes.", "error"); }
}

function setupHeroDragAndDrop() {
    const dropzone = document.getElementById('hero-dropzone');
    if (!dropzone) return;
    ['dragenter', 'dragover'].forEach(evt => dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.add('border-atsvBlue', 'bg-blue-50'); }));
    ['dragleave', 'drop'].forEach(evt => dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.remove('border-atsvBlue', 'bg-blue-50'); }));
    dropzone.addEventListener('drop', e => { const file = e.dataTransfer.files[0]; if (file?.type.startsWith('image/')) handleHeroFileSelect({ target: { files: [file] } }); });
}

function handleAddHeroSlide(e) {
    e.preventDefault();
    const urlInput  = document.getElementById('hero-url-input').value.trim();
    const finalImage= uploadedHeroBase64 || urlInput;
    if (!finalImage) { showToast("Bitte lade ein Bild hoch oder gib eine Bild-URL an.", "error"); return; }
    const title    = document.getElementById('hero-slide-title').value;
    const subtitle = document.getElementById('hero-slide-subtitle').value;
    const setActive= document.getElementById('hero-set-active').checked;
    const newSlide = { id: Date.now(), image: finalImage, title, subtitle };
    if (setActive) { heroSlides.unshift(newSlide); currentHeroIndex = 0; } else heroSlides.push(newSlide);
    try {
        localStorage.setItem('atsv_hero_slides_v2', JSON.stringify(heroSlides));
        showToast("Hero-Hintergrundbild erfolgreich gespeichert!", "success");
    } catch (err) { showToast("Speicherlimit erreicht – bitte lösche zuerst ein altes Bild.", "error"); return; }
    uploadedHeroBase64 = "";
    document.getElementById('hero-file-input').value = "";
    document.getElementById('hero-url-input').value  = "";
    document.getElementById('hero-upload-placeholder').classList.remove('hidden');
    document.getElementById('hero-upload-preview-box').classList.add('hidden');
    renderAdminHeroList();
}

function setPrimaryHeroSlide(index) {
    const selected = heroSlides.splice(index, 1)[0];
    heroSlides.unshift(selected); currentHeroIndex = 0;
    localStorage.setItem('atsv_hero_slides_v2', JSON.stringify(heroSlides));
    showToast("Als aktives Startbild festgelegt!", "success");
    renderAdminHeroList();
}

function deleteHeroSlide(index) {
    if (heroSlides.length <= 1) { showToast("Mindestens ein Hero-Bild muss erhalten bleiben.", "error"); return; }
    heroSlides.splice(index, 1);
    if (currentHeroIndex >= heroSlides.length) currentHeroIndex = 0;
    localStorage.setItem('atsv_hero_slides_v2', JSON.stringify(heroSlides));
    showToast("Hero-Bild entfernt.", "info");
    renderAdminHeroList();
}

function renderAdminHeroList() {
    const container = document.getElementById('admin-hero-list');
    const countEl   = document.getElementById('hero-count');
    if (!container) return;
    if (countEl) countEl.textContent = heroSlides.length;
    container.innerHTML = heroSlides.map((slide, idx) => `
        <div class="rounded-2xl border ${idx === 0 ? 'border-atsvBlue ring-2 ring-atsvBlue/20' : 'border-slate-200'} overflow-hidden bg-slate-50 flex flex-col justify-between">
            <div class="relative h-44 bg-slate-900">
                <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
                ${idx === 0 ? '<span class="absolute top-3 left-3 bg-atsvBlue text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow">Aktives Startbild</span>' : `<span class="absolute top-3 left-3 bg-slate-900/75 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">Folie ${idx + 1}</span>`}
            </div>
            <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div>
                    <h4 class="font-bold text-slate-900 text-sm line-clamp-1">${slide.title}</h4>
                    <p class="text-xs text-slate-500 line-clamp-2 mt-1">${slide.subtitle}</p>
                </div>
                <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-200">
                    ${idx !== 0 ? `<button onclick="setPrimaryHeroSlide(${idx})" class="text-xs font-bold text-atsvBlue hover:underline"><i class="fa-solid fa-star mr-1"></i> Als Startbild</button>` : `<span class="text-xs font-semibold text-emerald-600"><i class="fa-solid fa-check mr-1"></i> Standard</span>`}
                    <button onclick="deleteHeroSlide(${idx})" class="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold transition">
                        <i class="fa-solid fa-trash mr-1"></i> Löschen
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== HOME NEWS PREVIEW ====================
function renderHomeNews() {
    const container = document.getElementById('home-news-grid');
    if (!container) return;
    container.innerHTML = blogs.slice(0, 3).map(b => `
        <article onclick="openBlogModal(${b.id})" class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between transition group cursor-pointer">
            <div class="h-48 sm:h-52 overflow-hidden relative bg-slate-100">
                <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute top-3.5 left-3.5 bg-atsvBlue text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow">${b.category}</span>
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
                        <span><i class="fa-regular fa-calendar mr-1"></i> ${formatDate(b.date)}</span>
                        <span>•</span><span class="truncate">${b.author || 'ATSV'}</span>
                    </div>
                    <h3 class="text-lg font-display font-bold text-slate-900 mb-2.5 group-hover:text-atsvBlue transition line-clamp-2">${b.title}</h3>
                    <p class="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">${b.excerpt || b.content}</p>
                </div>
                <div class="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-atsvBlue">
                    <span>Weiterlesen</span><i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
                </div>
            </div>
        </article>
    `).join('');
}

// ==================== HOME EVENTS PREVIEW ====================
// ==================== HOME EVENTS PREVIEW ====================
function renderHomeEvents() {
    const container = document.getElementById('home-events-list');
    if (!container) return;
    const now = new Date();
    const upcoming = events.filter(e => {
        const d = parseGermanEventDate(e.date);
        return !d || d >= now;
    });
    container.innerHTML = upcoming.slice(0, 3).map(e => `
        <div class="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/15 hover:border-white/30 transition flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-center gap-2 mb-3">
                    <span class="bg-atsvRed text-white text-[11px] font-extrabold px-3 py-1 rounded-full">${e.category}</span>
                    <span class="text-xs text-amber-300 font-bold"><i class="fa-regular fa-calendar mr-1"></i> ${e.date}</span>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">${e.title}</h3>
                <p class="text-xs text-blue-100 leading-relaxed mb-4">${e.description}</p>
            </div>
            <div class="pt-3.5 border-t border-white/15 flex flex-col gap-1 text-xs text-slate-200">
                <span><i class="fa-solid fa-location-dot text-orange-400 mr-1.5"></i> ${e.location}</span>
                <span class="text-blue-200"><i class="fa-solid fa-hourglass-half mr-1.5"></i> Meldeschluss: ${e.deadline || 'Nach Absprache'}</span>
            </div>
        </div>
    `).join('');
}
// ==================== BLOG ====================
function renderFullBlog() {
    const container = document.getElementById('full-blog-grid');
    if (!container) return;
    container.innerHTML = blogs.map(b => `
        <article onclick="openBlogModal(${b.id})" class="bg-white rounded-3xl shadow-md hover:shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition group cursor-pointer">
            <div class="h-56 overflow-hidden relative bg-slate-100">
                <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute top-4 left-4 bg-atsvBlue text-white text-xs font-extrabold px-3.5 py-1 rounded-full shadow">${b.category}</span>
            </div>
            <div class="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
                        <span><i class="fa-regular fa-calendar mr-1"></i> ${formatDate(b.date)}</span>
                        <span>•</span><span>${b.author || 'ATSV Team'}</span>
                    </div>
                    <h3 class="text-xl font-display font-black text-slate-900 mb-3 group-hover:text-atsvBlue transition">${b.title}</h3>
                    <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed">${b.excerpt || b.content}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-xs font-bold text-atsvBlue">Vollständigen Bericht öffnen</span>
                    <i class="fa-solid fa-arrow-right text-xs text-atsvBlue group-hover:translate-x-1 transition"></i>
                </div>
            </div>
        </article>
    `).join('');
}

function openBlogModal(id) {
    const b = blogs.find(item => item.id === id);
    if (!b) return;
    document.getElementById('modal-blog-content').innerHTML = `
        <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-2">
                <span class="bg-atsvBlue text-white text-xs font-extrabold px-3 py-1 rounded-full">${b.category}</span>
                <span class="text-xs text-slate-500 font-medium"><i class="fa-regular fa-calendar mr-1"></i> ${formatDate(b.date)} • ${b.author || 'ATSV'}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-tight">${b.title}</h2>
            <div class="h-56 sm:h-72 rounded-2xl overflow-hidden shadow-md bg-slate-100">
                <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover">
            </div>
            <p class="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line pt-2">${b.content}</p>
        </div>
    `;
    document.getElementById('blog-modal').classList.remove('hidden');
    document.getElementById('blog-modal').classList.add('flex');
}

function closeBlogModal() {
    document.getElementById('blog-modal').classList.add('hidden');
    document.getElementById('blog-modal').classList.remove('flex');
}

// ==================== TRAINING ====================
function renderTrainingViews(categoryFilter) {
    currentTrainingFilter = categoryFilter;
    const filtered = categoryFilter === 'all'
        ? training
        : training.filter(t => t.category.toLowerCase().includes(categoryFilter.toLowerCase()));

    const tbody = document.getElementById('training-table-body');
    if (tbody) {
        tbody.innerHTML = filtered.map(t => {
            const realIndex = training.indexOf(t);
            return `
                <tr class="hover:bg-blue-50/40 transition">
                    <td class="py-4 px-6 font-bold text-slate-900">${t.group}</td>
                    <td class="py-4 px-6 text-slate-600">${t.year}</td>
                    <td class="py-4 px-6 font-bold text-atsvBlue">${t.day}</td>
                    <td class="py-4 px-6 font-semibold text-slate-800">${t.time}</td>
                    <td class="py-4 px-6 text-slate-600"><i class="fa-solid fa-location-dot text-red-500 mr-1.5"></i>${t.location}</td>
                    <td class="py-4 px-6 font-medium text-slate-800">${t.trainer}</td>
                    ${isAdminMode ? `<td class="py-4 px-6 text-right"><button onclick="openQuickTrainingModal(${realIndex})" class="bg-amber-300 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition"><i class="fa-solid fa-pen mr-1"></i> Bearbeiten</button></td>` : ''}
                </tr>
            `;
        }).join('');
        document.querySelectorAll('.admin-col').forEach(el => isAdminMode ? el.classList.remove('hidden') : el.classList.add('hidden'));
    }

    const mobileCards = document.getElementById('training-mobile-cards');
    if (mobileCards) {
        mobileCards.innerHTML = filtered.map(t => {
            const realIndex = training.indexOf(t);
            return `
                <div class="bg-white p-5 rounded-2xl shadow-md border border-slate-200 space-y-3">
                    <div class="flex justify-between items-start gap-2">
                        <div>
                            <span class="text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-atsvBlue px-2.5 py-0.5 rounded-full">${t.category}</span>
                            <h3 class="text-base font-display font-bold text-slate-900 mt-1">${t.group}</h3>
                            <span class="text-xs text-slate-500">Jahrgang: ${t.year}</span>
                        </div>
                        ${isAdminMode ? `<button onclick="openQuickTrainingModal(${realIndex})" class="bg-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs shrink-0"><i class="fa-solid fa-pen"></i></button>` : ''}
                    </div>
                    <div class="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        <p><strong class="text-atsvBlue"><i class="fa-regular fa-calendar w-4"></i> ${t.day}:</strong> ${t.time}</p>
                        <p><i class="fa-solid fa-location-dot text-red-500 w-4"></i> ${t.location}</p>
                        <p><i class="fa-solid fa-user-check text-emerald-600 w-4"></i> Trainer/in: ${t.trainer}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function filterTraining(category, btnEl) {
    document.querySelectorAll('.training-filter-btn').forEach(btn => {
        btn.className = "training-filter-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition";
    });
    if (btnEl) btnEl.className = "training-filter-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-atsvBlue text-white shadow-sm transition";
    renderTrainingViews(category);
}

function openQuickTrainingModal(index) {
    const t = training[index];
    if (!t) return;
    document.getElementById('qt-index').value    = index;
    document.getElementById('qt-group').value    = t.group;
    document.getElementById('qt-day').value      = t.day;
    document.getElementById('qt-time').value     = t.time;
    document.getElementById('qt-location').value = t.location;
    document.getElementById('qt-trainer').value  = t.trainer;
    document.getElementById('quick-training-modal').classList.remove('hidden');
    document.getElementById('quick-training-modal').classList.add('flex');
}

function closeQuickTrainingModal() {
    document.getElementById('quick-training-modal').classList.add('hidden');
    document.getElementById('quick-training-modal').classList.remove('flex');
}

function handleQuickTrainingSave(e) {
    e.preventDefault();
    const idx = Number(document.getElementById('qt-index').value);
    training[idx].group    = document.getElementById('qt-group').value;
    training[idx].day      = document.getElementById('qt-day').value;
    training[idx].time     = document.getElementById('qt-time').value;
    training[idx].location = document.getElementById('qt-location').value;
    training[idx].trainer  = document.getElementById('qt-trainer').value;
    localStorage.setItem('atsv_training_v2', JSON.stringify(training));
    closeQuickTrainingModal();
    showToast("Trainingszeit aktualisiert!", "success");
    renderTrainingViews(currentTrainingFilter);
}

// ==================== EVENTS ====================
// ==================== EVENTS ====================
function parseGermanEventDate(str) {
    if (!str) return null;
    const months = { jan:0, feb:1, mär:2, mrz:2, apr:3, mai:4, jun:5, jul:6, aug:7, sep:8, okt:9, nov:10, dez:11 };
    const m = str.toLowerCase().match(/(\d{1,2})\.\s*([a-zäöü]{3,})[a-zäöü.]*\s*(\d{4})/);
    if (!m) return null;
    const month = months[m[2].slice(0, 3)];
    return month !== undefined ? new Date(Number(m[3]), month, Number(m[1]), 23, 59, 59) : null;
}

function togglePastEvents() {
    showPastEvents = !showPastEvents;
    const btn = document.getElementById('toggle-past-events-btn');
    if (btn) {
        btn.className = showPastEvents
            ? "bg-atsvBlue text-white font-bold px-4 py-2.5 rounded-xl shadow-sm transition inline-flex items-center gap-2 text-xs sm:text-sm"
            : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold px-4 py-2.5 rounded-xl shadow-sm transition inline-flex items-center gap-2 text-xs sm:text-sm";
        btn.querySelector('span').textContent = showPastEvents ? "Vergangene Termine ausblenden" : "Vergangene Termine anzeigen";
    }
    renderFullEvents();
}

function renderFullEvents() {
    const container = document.getElementById('full-events-list');
    if (!container) return;
    const now = new Date();
    const visibleEvents = events.filter(e => {
        const d = parseGermanEventDate(e.date);
        return showPastEvents || !d || d >= now;
    });

    if (visibleEvents.length === 0) {
        container.innerHTML = `<div class="bg-white p-8 rounded-3xl border border-slate-200 text-center text-sm text-slate-500">Aktuell stehen keine kommenden Termine an.</div>`;
        return;
    }

    container.innerHTML = visibleEvents.map(e => {
        const d = parseGermanEventDate(e.date);
        const isPast = d && d < now;
        return `
        <div class="bg-white p-6 sm:p-7 rounded-3xl shadow-md border border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:shadow-lg transition ${isPast ? 'opacity-65' : ''}">
            <div class="flex items-start gap-4 sm:gap-5">
                <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 text-atsvBlue flex flex-col items-center justify-center font-display font-black shrink-0 border border-blue-100 text-center px-1">
                    <span class="text-[11px] uppercase ${isPast ? 'text-slate-400' : 'text-red-600'} font-extrabold">${isPast ? 'Vergangen' : 'Termin'}</span>
                    <span class="text-xs sm:text-sm leading-tight mt-0.5">${e.date}</span>
                </div>
                <div>
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="bg-red-50 text-red-600 text-xs font-extrabold px-3 py-0.5 rounded-full">${e.category}</span>
                        <span class="text-xs text-slate-500 font-medium"><i class="fa-solid fa-location-dot text-atsvBlue mr-1"></i> ${e.location}</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-display font-black text-slate-900 mb-1">${e.title}</h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${e.description}</p>
                </div>
            </div>
            <div class="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                <div class="lg:text-right">
                    <span class="text-[10px] text-slate-400 block uppercase font-extrabold">Meldeschluss</span>
                    <span class="text-xs sm:text-sm font-bold text-slate-900">${e.deadline || 'Offen'}</span>
                </div>
                ${isAdminMode ? `<button onclick="openAdminSection('events'); editEvent(${e.id})" class="bg-amber-300 hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs transition"><i class="fa-solid fa-pen"></i></button>` : ''}
            </div>
        </div>
    `}).join('');
}

// ==================== ADMIN CRUD: BLOG ====================
async function handleBlogImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    try {
        const compressed = await compressImageFile(file, 1200, 0.8);
        document.getElementById('blog-image').value = compressed;
        showToast("Vorschaubild hochgeladen & komprimiert!", "success");
    } catch (e) { showToast("Bildupload fehlgeschlagen.", "error"); }
}

function handleSaveBlog(e) {
    e.preventDefault();
    const id       = document.getElementById('blog-edit-id').value;
    const title    = document.getElementById('blog-title').value;
    const category = document.getElementById('blog-category').value;
    const date     = document.getElementById('blog-date').value;
    const author   = document.getElementById('blog-author').value;
    const image    = document.getElementById('blog-image').value;
    const excerpt  = document.getElementById('blog-excerpt').value;
    const content  = document.getElementById('blog-content').value;
    if (id) {
        const idx = blogs.findIndex(b => b.id == id);
        if (idx !== -1) blogs[idx] = { id: Number(id), title, category, date, author, image, excerpt, content };
        showToast("Blog-Post aktualisiert!", "success");
    } else {
        blogs.unshift({ id: Date.now(), title, category, date, author, image, excerpt, content });
        showToast("Neuer Blog-Post veröffentlicht!", "success");
    }
    localStorage.setItem('atsv_blogs_v2', JSON.stringify(blogs));
    resetBlogForm();
    renderAdminBlogList();
}

function editBlog(id) {
    const b = blogs.find(item => item.id === id);
    if (!b) return;
    document.getElementById('blog-edit-id').value          = b.id;
    document.getElementById('blog-title').value            = b.title;
    document.getElementById('blog-category').value         = b.category;
    document.getElementById('blog-date').value             = b.date;
    document.getElementById('blog-author').value           = b.author || "Trainerteam ATSV";
    document.getElementById('blog-image').value            = b.image;
    document.getElementById('blog-excerpt').value          = b.excerpt || "";
    document.getElementById('blog-content').value          = b.content;
    document.getElementById('blog-form-title').textContent = "Blog-Post bearbeiten";
    document.getElementById('blog-submit-btn-text').textContent = "Änderungen speichern";
    document.getElementById('blog-cancel-btn').classList.remove('hidden');
    document.getElementById('blog-form-container').scrollIntoView({ behavior: 'smooth' });
}

function resetBlogForm() {
    document.getElementById('blog-edit-id').value          = "";
    document.getElementById('blog-title').value            = "";
    document.getElementById('blog-excerpt').value          = "";
    document.getElementById('blog-content').value          = "";
    document.getElementById('blog-date').valueAsDate       = new Date();
    document.getElementById('blog-form-title').textContent = "Neuen Blog-Post erstellen";
    document.getElementById('blog-submit-btn-text').textContent = "Beitrag veröffentlichen";
    document.getElementById('blog-cancel-btn').classList.add('hidden');
}

function deleteBlog(id) {
    blogs = blogs.filter(b => b.id !== id);
    localStorage.setItem('atsv_blogs_v2', JSON.stringify(blogs));
    showToast("Blog-Post gelöscht.", "info");
    renderAdminBlogList();
}

function renderAdminBlogList() {
    const el = document.getElementById('admin-blog-list');
    if (!el) return;
    el.innerHTML = blogs.map(b => `
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-4">
            <div class="flex items-center gap-3.5">
                <img src="${b.image}" alt="" class="w-16 h-16 object-cover rounded-xl shrink-0">
                <div>
                    <span class="text-xs font-extrabold text-atsvBlue">${b.category} • ${formatDate(b.date)}</span>
                    <h4 class="font-bold text-slate-900 text-sm mt-0.5">${b.title}</h4>
                </div>
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button onclick="editBlog(${b.id})" class="bg-blue-50 text-atsvBlue hover:bg-blue-100 px-3 py-2 rounded-xl text-xs font-bold transition"><i class="fa-solid fa-pen mr-1"></i> Bearbeiten</button>
                <button onclick="deleteBlog(${b.id})" class="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-xl text-xs font-bold transition"><i class="fa-solid fa-trash mr-1"></i> Löschen</button>
            </div>
        </div>
    `).join('');
}

// ==================== ADMIN CRUD: TRAINING ====================
function handleSaveTraining(e) {
    e.preventDefault();
    const editIdx = document.getElementById('training-edit-index').value;
    const item = {
        category: document.getElementById('train-category').value,
        group:    document.getElementById('train-group').value,
        year:     document.getElementById('train-year').value,
        day:      document.getElementById('train-day').value,
        time:     document.getElementById('train-time').value,
        location: document.getElementById('train-location').value,
        trainer:  document.getElementById('train-trainer').value
    };
    if (editIdx !== "") { training[Number(editIdx)] = item; showToast("Trainingszeit aktualisiert!", "success"); }
    else { training.push(item); showToast("Neue Trainingszeit gespeichert!", "success"); }
    localStorage.setItem('atsv_training_v2', JSON.stringify(training));
    resetTrainingForm();
    renderAdminTrainingList();
}

function editTraining(idx) {
    const t = training[idx];
    if (!t) return;
    document.getElementById('training-edit-index').value = idx;
    document.getElementById('train-category').value      = t.category;
    document.getElementById('train-group').value         = t.group;
    document.getElementById('train-year').value          = t.year;
    document.getElementById('train-day').value           = t.day;
    document.getElementById('train-time').value          = t.time;
    document.getElementById('train-location').value      = t.location;
    document.getElementById('train-trainer').value       = t.trainer;
    document.getElementById('training-form-title').textContent       = "Trainingszeit bearbeiten";
    document.getElementById('training-submit-btn-text').textContent  = "Änderungen speichern";
    document.getElementById('training-cancel-btn').classList.remove('hidden');
    document.getElementById('training-form-container').scrollIntoView({ behavior: 'smooth' });
}

function resetTrainingForm() {
    document.getElementById('training-edit-index').value = "";
    ['train-group','train-year','train-day','train-time','train-location','train-trainer'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ""; });
    document.getElementById('training-form-title').textContent      = "Neue Trainingszeit hinzufügen";
    document.getElementById('training-submit-btn-text').textContent = "Trainingszeit speichern";
    document.getElementById('training-cancel-btn').classList.add('hidden');
}

function deleteTraining(idx) {
    training.splice(idx, 1);
    localStorage.setItem('atsv_training_v2', JSON.stringify(training));
    showToast("Trainingszeit entfernt.", "info");
    renderAdminTrainingList();
}

function renderAdminTrainingList() {
    const el = document.getElementById('admin-training-list');
    if (!el) return;
    el.innerHTML = training.map((t, idx) => `
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-3">
            <div>
                <span class="text-xs font-extrabold text-red-600">${t.category} • ${t.day}, ${t.time}</span>
                <h4 class="font-bold text-slate-900 text-sm mt-0.5">${t.group} (${t.year}) — ${t.location}</h4>
                <p class="text-xs text-slate-500">Trainer/in: ${t.trainer}</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="editTraining(${idx})" class="bg-blue-50 text-atsvBlue hover:bg-blue-100 px-3 py-2 rounded-xl text-xs font-bold transition"><i class="fa-solid fa-pen mr-1"></i> Bearbeiten</button>
                <button onclick="deleteTraining(${idx})" class="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-xl text-xs font-bold transition"><i class="fa-solid fa-trash mr-1"></i> Löschen</button>
            </div>
        </div>
    `).join('');
}

// ==================== ADMIN CRUD: EVENTS ====================
function handleSaveEvent(e) {
    e.preventDefault();
    const id = document.getElementById('event-edit-id').value;
    const item = {
        id:          id ? Number(id) : Date.now(),
        title:       document.getElementById('event-title').value,
        category:    document.getElementById('event-category').value,
        date:        document.getElementById('event-date').value,
        location:    document.getElementById('event-location').value,
        deadline:    document.getElementById('event-deadline').value,
        description: document.getElementById('event-description').value
    };
    if (id) { const idx = events.findIndex(ev => ev.id == id); if (idx !== -1) events[idx] = item; showToast("Termin aktualisiert!", "success"); }
    else { events.unshift(item); showToast("Neuer Termin erstellt!", "success"); }
    localStorage.setItem('atsv_events_v2', JSON.stringify(events));
    resetEventForm();
    renderAdminEventList();
}

function editEvent(id) {
    const ev = events.find(item => item.id === id);
    if (!ev) return;
    document.getElementById('event-edit-id').value          = ev.id;
    document.getElementById('event-title').value            = ev.title;
    document.getElementById('event-category').value         = ev.category;
    document.getElementById('event-date').value             = ev.date;
    document.getElementById('event-location').value         = ev.location;
    document.getElementById('event-deadline').value         = ev.deadline || "";
    document.getElementById('event-description').value      = ev.description;
    document.getElementById('event-form-title').textContent = "Termin bearbeiten";
    document.getElementById('event-submit-btn-text').textContent = "Änderungen speichern";
    document.getElementById('event-cancel-btn').classList.remove('hidden');
    document.getElementById('event-form-container').scrollIntoView({ behavior: 'smooth' });
}

function resetEventForm() {
    document.getElementById('event-edit-id').value          = "";
    ['event-title','event-date','event-location','event-deadline','event-description'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ""; });
    document.getElementById('event-form-title').textContent = "Neuen Termin erstellen";
    document.getElementById('event-submit-btn-text').textContent = "Termin speichern";
    document.getElementById('event-cancel-btn').classList.add('hidden');
}

function deleteEvent(id) {
    events = events.filter(ev => ev.id !== id);
    localStorage.setItem('atsv_events_v2', JSON.stringify(events));
    showToast("Termin gelöscht.", "info");
    renderAdminEventList();
}

function renderAdminEventList() {
    const el = document.getElementById('admin-event-list');
    if (!el) return;
    el.innerHTML = events.map(e => `
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-3">
            <div>
                <span class="text-xs font-extrabold text-emerald-700">${e.category} • ${e.date}</span>
                <h4 class="font-bold text-slate-900 text-sm mt-0.5">${e.title}</h4>
                <p class="text-xs text-slate-500">${e.location} • Meldeschluss: ${e.deadline || 'Offen'}</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="editEvent(${e.id})" class="bg-blue-50 text-atsvBlue hover:bg-blue-100 px-3 py-2 rounded-xl text-xs font-bold transition"><i class="fa-solid fa-pen mr-1"></i> Bearbeiten</button>
                <button onclick="deleteEvent(${e.id})" class="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-xl text-xs font-bold transition"><i class="fa-solid fa-trash mr-1"></i> Löschen</button>
            </div>
        </div>
    `).join('');
}

// ==================== ADMIN SUB-TAB SWITCHING ====================
function switchAdminSubTab(subTabId) {
    ['hero','blog','training','events'].forEach(t => {
        const panel = document.getElementById(`admin-subtab-${t}`);
        const btn   = document.getElementById(`admin-subtab-${t}-btn`);
        if (panel) panel.classList.add('hidden');
        if (btn)   btn.className = "admin-subtab-btn bg-white/70 hover:bg-white text-slate-700 font-bold px-4 py-3.5 rounded-2xl shadow-sm border border-slate-200 transition flex items-center justify-center gap-2 text-xs sm:text-sm";
    });
    const activePanel = document.getElementById(`admin-subtab-${subTabId}`);
    const activeBtn   = document.getElementById(`admin-subtab-${subTabId}-btn`);
    if (activePanel) activePanel.classList.remove('hidden');
    if (activeBtn)   activeBtn.className = "admin-subtab-btn bg-white text-slate-900 font-bold px-4 py-3.5 rounded-2xl shadow-sm border-2 border-atsvBlue transition flex items-center justify-center gap-2 text-xs sm:text-sm";
}
