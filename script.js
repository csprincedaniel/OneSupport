const Urls = {
    Arizona: ['https://sites.google.com/view/tyler-kb-portal/scripts/aspt-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/aspt'],
    California: ['https://sites.google.com/view/tyler-kb-portal/scripts/cadpr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/cadpr'],
    Florida: ['https://sites.google.com/view/tyler-kb-portal/scripts/fsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/fsp'],
    Maricopa: ['https://sites.google.com/view/tyler-kb-portal/scripts/mcp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mcp'],
    Minnesota: ['https://sites.google.com/view/tyler-kb-portal/scripts/mndnr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mndnr'],
    Missouri: ['https://sites.google.com/view/tyler-kb-portal/scripts/msp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/msp'],
    NDakota: ['https://sites.google.com/view/tyler-kb-portal/scripts/ndsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/ndsp'],
    Ohio: ['https://sites.google.com/view/tyler-kb-portal/scripts/osp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/osp'],
    Virginia: ['https://sites.google.com/view/tyler-kb-portal/scripts/vsp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/vsp'],
    Wyoming: ['https://sites.google.com/view/tyler-kb-portal/scripts/wyo-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/wyo'],
};

const Neptunes = [
    'https://azpos.usedirect.com/AZPOS/Account/Login',
    'https://calipos.usedirect.com/CaliPOS/',
    'https://floridapos.usedirect.com/FloridaPOS/',
    'https://maricopapos.usedirect.com/MaricopaPOS/Account/Login',
    'https://mnpos.usedirect.com/MinnesotaPOS/',
    'https://msppos.usedirect.com/msppos',
    'https://ndparkspos.usedirect.com/NDParksPOS/Account/Login',
    'https://ohpos.usedirect.com/OHPOS/',
    'https://virginiapos.usedirect.com/VAParksPOS/',
    'https://wyopos.usedirect.com/WyomingPOS/Account/Login'
];

const MapUrls = {
    Arizona: 'https://azstateparks.com/reserve/#!results',
    California: 'https://reservecalifornia.com/Web/Default.aspx#!results',
    Florida: 'https://reserve.floridastateparks.org/web/#!results',
    Maricopa: 'https://www.maricopacountyparks.org/MaricopaWeb/Default.aspx',
    Minnesota: 'https://reservemn.usedirect.com/MinnesotaWeb/Default.aspx#!results',
    Missouri: 'https://icampmo1.usedirect.com/MSPWeb/#!results',
    NDakota: 'https://reservendparks.com/Web/#!results',
    Ohio: 'https://reserveohio.com/OhioCampWeb/Default.aspx#!results',
    Virginia: 'https://reservevaparks.com/web/#!results',
    Wyoming: 'https://www.reserve.wyoming.gov/Web/#!results'
};

const Intros = {
    arizona: "Thank you for calling the Arizona State Parks and Trails. This is _____ (first name). How can I help you today?",
    california: "Thank you for calling the Reserve California Reservation Center. This is _____ (first name). How may I help you today?",
    florida: "Thank you for calling the Florida State Parks reservation center. This is _____ (first name). How may I help you today?",
    maricopa: "Thank you for calling the Maricopa County Parks Reservations. This is _____ (first name). How can I help you today?",
    minnesota: "Thank you for calling Minnesota State Parks Reservations. This is [agent’s first name], how may I help you today?",
    missouri: "Thank you for calling Missouri State Parks Reservations. This is _______ (first name). How can I help you today?",
    ndakota: "Thank you for calling the North Dakota State Parks reservation center. This is _____ (first name). How may I help you today?",
    ohio: "Thank you for calling Ohio State Parks reservations. This is _______ (first name). How can I help you today?",
    virginia: "Thank you for calling Virginia State Parks Reservations. This is _______ (first name). How can I help you today?",
    wyoming: "Thank you for calling the Wyoming State Parks reservation center. This is _____ (first name). How may I help you today?"
};

let currTab1 = null, currTab2 = null;

function closeTabs() {
    if (currTab1 && !currTab1.closed) currTab1.close();
    if (currTab2 && !currTab2.closed) currTab2.close();
}

function openWithDelay(urls, delay = 500) {
    let i = 0;
    function next() {
        if (i < urls.length) {
            window.open(urls[i], '_blank', 'noopener,noreferrer');
            i++;
            setTimeout(next, delay);
        }
    }
    next();
}

// Neptune buttons except toggle
document.querySelectorAll('#nep > div > button').forEach(button => {
    const label = button.textContent;
    if (label === "Select State ▼" || label === "Select State ▲") return;

    button.addEventListener('click', () => {
        if (label === "Open All") {
            Neptunes.forEach(url => window.open(url, '_blank', 'noopener,noreferrer'));
        } else if (label === "Open All With Delay") {
            openWithDelay(Neptunes, 500);
        }
    });
});

// Toggle show/hide Neptune individual state buttons
const toggleBtn = document.getElementById('toggle-nep-states');
const statesDiv = document.getElementById('nep-states');

toggleBtn.addEventListener('click', () => {
    const shown = statesDiv.style.display !== 'none';
    statesDiv.style.display = shown ? 'none' : 'block';
    toggleBtn.textContent = shown ? 'Select State ▼' : 'Select State ▲';
});

// Neptune individual state buttons
statesDiv.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        const url = Neptunes[index];
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    });
});

// KnowledgeBase dropdown toggles
const kbToggles = document.querySelectorAll('.kb-toggle');
const kbSections = document.querySelectorAll('.kb-states');

kbToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const type = toggle.getAttribute('data-type');
        const isVisible = document.getElementById(`kb-${type}`).style.display !== 'none';

        // Close all KB dropdowns and maps dropdown
        kbSections.forEach(sec => sec.style.display = 'none');
        kbToggles.forEach(t => {
            const tType = t.getAttribute('data-type');
            t.textContent = t.textContent.replace('▲', '▼');
        });
        mapsStatesDiv.style.display = 'none';
        mapsToggle.textContent = 'Select State ▼';

        if (!isVisible) {
            document.getElementById(`kb-${type}`).style.display = 'block';
            toggle.textContent = toggle.textContent.replace('▼', '▲');
        }
    });
});

// KnowledgeBase state buttons click handlers
document.querySelectorAll('.kb-states button').forEach(btn => {
    btn.addEventListener('click', () => {
        closeTabs();
        const state = btn.getAttribute('data-state');
        const parentId = btn.parentElement.id;

        if (!Urls[state]) return;

        if (parentId === 'kb-script') {
            // Open script only
            currTab1 = window.open(Urls[state][0], '_blank', 'noopener,noreferrer');
        } else if (parentId === 'kb-kb') {
            // Open KB only
            currTab1 = window.open(Urls[state][1], '_blank', 'noopener,noreferrer');
        } else if (parentId === 'kb-both') {
            // Open both script and KB
            currTab1 = window.open(Urls[state][0], '_blank', 'noopener,noreferrer');
            currTab2 = window.open(Urls[state][1], '_blank', 'noopener,noreferrer');
        }

        // Show intro text only for both (optional)
        if (parentId === 'kb-both') {
            const intro = Intros[state.toLowerCase()];
            if (intro) {
                document.getElementById('chosen-text').innerHTML = `Just in case it didn't load yet, the intro is: <b>${intro}</b>`;
            } else {
                document.getElementById('chosen-text').innerHTML = '';
            }
        } else {
            document.getElementById('chosen-text').innerHTML = '';
        }
    });
});

// Reservation Maps dropdown toggle and buttons
const mapsToggle = document.getElementById('toggle-maps-states');
const mapsStatesDiv = document.getElementById('maps-states');

mapsToggle.addEventListener('click', () => {
    const isVisible = mapsStatesDiv.style.display !== 'none';

    // Close all KB dropdowns
    kbSections.forEach(sec => sec.style.display = 'none');
    kbToggles.forEach(t => {
        t.textContent = t.textContent.replace('▲', '▼');
    });

    // Toggle maps dropdown
    mapsStatesDiv.style.display = isVisible ? 'none' : 'block';
    mapsToggle.textContent = isVisible ? 'Select State ▼' : 'Select State ▲';
});

// Maps individual state buttons
mapsStatesDiv.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const state = btn.getAttribute('data-state');
        const url = MapUrls[state];
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    });
});

// Warn for low memory
if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
    const warning = document.createElement('p');
    warning.style.color = 'red';
    warning.textContent = "⚠️ This device has low memory. Opening all tabs at once *might* slow down your browser.";
    document.body.insertBefore(warning, document.getElementById('kb'));
}
