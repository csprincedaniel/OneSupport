// Final working script.js with active button color change

const Urls = {
    'Arizona': ['https://sites.google.com/view/tyler-kb-portal/scripts/aspt-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/aspt'],
    'California': ['https://sites.google.com/view/tyler-kb-portal/scripts/cadpr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/cadpr'],
    'Florida': ['https://sites.google.com/view/tyler-kb-portal/scripts/fsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/fsp'],
    'Maricopa': ['https://sites.google.com/view/tyler-kb-portal/scripts/mcp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mcp'],
    'Minnesota': ['https://sites.google.com/view/tyler-kb-portal/scripts/mndnr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mndnr'],
    'Missouri': ['https://sites.google.com/view/tyler-kb-portal/scripts/msp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/msp'],
    'NDakota': ['https://sites.google.com/view/tyler-kb-portal/scripts/ndsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/ndsp'],
    'Ohio': ['https://sites.google.com/view/tyler-kb-portal/scripts/osp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/osp'],
    'Virginia': ['https://sites.google.com/view/tyler-kb-portal/scripts/vsp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/vsp'],
    'Wyoming': ['https://sites.google.com/view/tyler-kb-portal/scripts/wyo-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/wyo'],
};

const Maps = [
    'https://azstateparks.com/reserve/#!results',
    'https://reservecalifornia.com/Web/Default.aspx#!results',
    'https://reserve.floridastateparks.org/web/#!results',
    'https://www.maricopacountyparks.org/MaricopaWeb/Default.aspx',
    'https://reservemn.usedirect.com/MinnesotaWeb/Default.aspx#!results',
    'https://icampmo1.usedirect.com/MSPWeb/#!results',
    'https://reservendparks.com/Web/#!results',
    'https://reserveohio.com/OhioCampWeb/Default.aspx#!results',
    'https://reservevaparks.com/web/#!results',
    'https://www.reserve.wyoming.gov/Web/#!results'
];

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

let currTab1 = null, currTab2 = null, currTab3 = null;

function closeTabs() {
    if (currTab1 && !currTab1.closed) currTab1.close();
    if (currTab2 && !currTab2.closed) currTab2.close();
    if (currTab3 && !currTab3.closed) currTab3.close();
}

function toggleDisplay(id, toggleBtn) {
    const el = document.getElementById(id);
    const isVisible = el.style.display === 'block';

    document.querySelectorAll('.kb-states').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.kb-toggle, #toggle-nep-states').forEach(btn => {
        btn.textContent = btn.textContent.replace(' ▲', ' ▼');
        btn.style.backgroundColor = '';
    });

    if (isVisible) {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
        toggleBtn.textContent = toggleBtn.textContent.replace(' ▼', ' ▲');
        toggleBtn.style.backgroundColor = 'lightgreen';
    }
}

const toggleNep = document.getElementById('toggle-nep-states');
if (toggleNep) {
    toggleNep.addEventListener('click', () => toggleDisplay('nep-states', toggleNep));
}

const nepButtons = document.querySelectorAll('#nep-states button');
if (nepButtons.length) {
    nepButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            closeTabs();
            window.open(Neptunes[index], '_blank', 'noopener,noreferrer');
            document.getElementById('chosen-text').innerHTML = '';
            nepButtons.forEach(b => b.style.backgroundColor = '');
            btn.style.backgroundColor = '#cce5ff';
        });
    });
}

const kbToggles = document.querySelectorAll('.kb-toggle');
if (kbToggles.length) {
    kbToggles.forEach(btn => {
        btn.addEventListener('click', () => toggleDisplay('kb-' + btn.dataset.type, btn));
    });
}

const kbStateButtons = document.querySelectorAll('.kb-states button');
if (kbStateButtons.length) {
    kbStateButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement.id;
            const type = parent.replace('kb-', '');
            const state = btn.dataset.state;
            const lower = state.toLowerCase();
            const index = Object.keys(Urls).indexOf(state);

            closeTabs();

            if (type === 'script') {
                currTab1 = window.open(Urls[state][0], '_blank');
            } else if (type === 'kb') {
                currTab1 = window.open(Urls[state][1], '_blank');
            } else if (type === 'map') {
                currTab1 = window.open(Maps[index], '_blank');
            } else if (type === 'both') {
                currTab1 = window.open(Urls[state][0], '_blank');
                currTab2 = window.open(Urls[state][1], '_blank');
                document.getElementById('chosen-text').innerHTML = `<b>${Intros[lower]}</b>`;
            } else if (type === 'all') {
                currTab1 = window.open(Urls[state][0], '_blank');
                currTab2 = window.open(Urls[state][1], '_blank');
                currTab3 = window.open(Maps[index], '_blank');
                document.getElementById('chosen-text').innerHTML = `<b>${Intros[lower]}</b>`;
            }

            kbStateButtons.forEach(b => b.style.backgroundColor = '');
            btn.style.backgroundColor = '#cce5ff';
        });
    });
}

const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const q = document.getElementById('search-input').value.trim();
        if (!q) return;
        const url = `https://sites.google.com/search/tyler-kb-portal?query=${encodeURIComponent(q)}&scope=site&showCloudSearchTab=false`;
        window.open(url, '_blank');
    });
}

if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
    const warning = document.createElement('p');
    warning.style.color = 'red';
    warning.textContent = "⚠️ This device has low memory. Opening all tabs at once *might* slow down your browser.";
    document.body.insertBefore(warning, document.getElementById('kb'));
}
