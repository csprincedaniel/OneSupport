const Urls = {
    Arizona: [['https://sites.google.com/view/tyler-kb-portal/scripts/aspt-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/aspt']],
    California: [['https://sites.google.com/view/tyler-kb-portal/scripts/cadpr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/cadpr']],
    Florida: [['https://sites.google.com/view/tyler-kb-portal/scripts/fsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/fsp']],
    Maricopa: [['https://sites.google.com/view/tyler-kb-portal/scripts/mcp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mcp']],
    Minnesota: [['https://sites.google.com/view/tyler-kb-portal/scripts/mndnr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mndnr']],
    Missouri: [['https://sites.google.com/view/tyler-kb-portal/scripts/msp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/msp']],
    NDakota: [['https://sites.google.com/view/tyler-kb-portal/scripts/ndsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/ndsp']],
    Ohio: [['https://sites.google.com/view/tyler-kb-portal/scripts/osp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/osp']],
    Virginia: [['https://sites.google.com/view/tyler-kb-portal/scripts/vsp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/vsp']],
    Wyoming: [['https://sites.google.com/view/tyler-kb-portal/scripts/wyo-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/wyo']],
};

const NeptuneStateNames = [
    "Arizona", "California", "Florida", "Maricopa",
    "Minnesota", "Missouri", "NDakota", "Ohio",
    "Virginia", "Wyoming"
];

const Neptunes = {
    Arizona: 'https://azpos.usedirect.com/AZPOS/Account/Login',
    California: 'https://calipos.usedirect.com/CaliPOS/',
    Florida: 'https://floridapos.usedirect.com/FloridaPOS/',
    Maricopa: 'https://maricopapos.usedirect.com/MaricopaPOS/Account/Login',
    Minnesota: 'https://mnpos.usedirect.com/MinnesotaPOS/',
    Missouri: 'https://msppos.usedirect.com/msppos',
    NDakota: 'https://ndparkspos.usedirect.com/NDParksPOS/Account/Login',
    Ohio: 'https://ohpos.usedirect.com/OHPOS/',
    Virginia: 'https://virginiapos.usedirect.com/VAParksPOS/',
    Wyoming: 'https://wyopos.usedirect.com/WyomingPOS/Account/Login'
};

const Maps = {
    Arizona: 'https://azstateparks.com/reserve/#!results',
    California: 'https://reservecalifornia.com/Web/Default.aspx#!results',
    Florida: 'https://reserve.floridastateparks.org/web/#!results',
    Maricopa: 'https://www.maricopacountyparks.org/MaricopaWeb/Facilities/SearchViewUnitAvailabity.aspx',
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

const chosenText = document.getElementById('chosen-text');

// --- Neptune Section ---

const nepStatesDiv = document.getElementById('nep-states');
const toggleNepStatesBtn = document.getElementById('toggle-nep-states');
const nepOpenAllBtn = document.getElementById('nep-open-all');
const nepOpenDelayBtn = document.getElementById('nep-open-delay');

toggleNepStatesBtn.addEventListener('click', () => {
    if (nepStatesDiv.style.display === 'none' || nepStatesDiv.style.display === '') {
        nepStatesDiv.style.display = 'flex';
        nepStatesDiv.style.flexWrap = 'wrap';
        toggleNepStatesBtn.textContent = 'Select State ▲';
        toggleNepStatesBtn.style.backgroundColor = 'lightgreen';
    } else {
        nepStatesDiv.style.display = 'none';
        toggleNepStatesBtn.textContent = 'Select State ▼';
        toggleNepStatesBtn.style.backgroundColor = '';
    }
});

nepStatesDiv.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.index);
        const state = NeptuneStateNames[idx];
        if (state && Neptunes[state]) {
            window.open(Neptunes[state], '_blank', 'noopener,noreferrer');
        }
    });
});

nepOpenAllBtn.addEventListener('click', () => {
    NeptuneStateNames.forEach(state => {
        if (Neptunes[state]) {
            window.open(Neptunes[state], '_blank', 'noopener,noreferrer');
        }
    });
});

nepOpenDelayBtn.addEventListener('click', () => {
    let i = 0;
    function openNext() {
        if (i >= NeptuneStateNames.length) return;
        const state = NeptuneStateNames[i];
        if (Neptunes[state]) {
            window.open(Neptunes[state], '_blank', 'noopener,noreferrer');
        }
        i++;
        setTimeout(openNext, 500);
    }
    openNext();
});

// --- KB Section ---

const kbToggleButtons = document.querySelectorAll('.kb-toggle');
const kbStatesContainers = document.querySelectorAll('.kb-states');

function hideAllKbStates() {
    kbStatesContainers.forEach(div => (div.style.display = 'none'));
    // Reset all toggle buttons text and color
    kbToggleButtons.forEach(btn => {
        btn.textContent = btn.textContent.replace(' ▲', '').replace(' ▼', ' ▼');
        btn.style.backgroundColor = '';
    });
}

let currentKbVisible = null;

kbToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const container = document.getElementById(`kb-${type}`);
        if (!container) return;

        if (currentKbVisible === container) {
            // Same button clicked: toggle off
            container.style.display = 'none';
            currentKbVisible = null;
            btn.textContent = btn.textContent.replace(' ▲', ' ▼');
            btn.style.backgroundColor = '';
        } else {
            // Different button clicked: hide previous, show current
            hideAllKbStates();
            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.gap = '10px';
            currentKbVisible = container;

            // Update this button's text and color
            kbToggleButtons.forEach(b => {
                if (b === btn) {
                    b.textContent = b.textContent.replace(' ▼', ' ▲');
                    b.style.backgroundColor = 'lightgreen';
                } else {
                    b.textContent = b.textContent.replace(' ▲', ' ▼');
                    b.style.backgroundColor = '';
                }
            });
        }
    });
});

kbStatesContainers.forEach(container => {
    container.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const state = btn.dataset.state;
            if (!state || !(state in Urls)) {
                alert('Invalid state selection.');
                return;
            }
            const type = container.id.replace('kb-', '');
            const [scriptUrl, kbUrl] = Urls[state][0];
            const mapUrl = Maps[state];
            
            if (type === 'script') {
                window.open(scriptUrl, '_blank', 'noopener,noreferrer');
                chosenText.textContent = '';
            } else if (type === 'kb') {
                window.open(kbUrl, '_blank', 'noopener,noreferrer');
                chosenText.textContent = '';
            } else if (type === 'map') {
                if (mapUrl) {
                    window.open(mapUrl, '_blank', 'noopener,noreferrer');
                } else {
                    alert('Map URL not found for this state.');
                }
                chosenText.textContent = '';
            } else if (type === 'both') {
                window.open(scriptUrl, '_blank', 'noopener,noreferrer');
                window.open(kbUrl, '_blank', 'noopener,noreferrer');
                const intro = Intros[state.toLowerCase()];
                chosenText.innerHTML = intro ? `<b>${intro}</b>` : '';
            } else if (type === 'all') {
                window.open(scriptUrl, '_blank', 'noopener,noreferrer');
                window.open(kbUrl, '_blank', 'noopener,noreferrer');
                if (mapUrl) window.open(mapUrl, '_blank', 'noopener,noreferrer');
                const intro = Intros[state.toLowerCase()];
                chosenText.innerHTML = intro ? `<b>${intro}</b>` : '';
            }
        });
    });
});


// --- Search Section Fix ---
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
    const query = encodeURIComponent(searchInput.value.trim());
    if (!query) {
        alert('Please enter search terms.');
        return;
    }
    const url = `https://sites.google.com/search/tyler-kb-portal?query=${query}&scope=site&showCloudSearchTab=false`;
    window.open(url, '_blank', 'noopener,noreferrer');
});


// --- Low memory warning ---

if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
    const warning = document.createElement('p');
    warning.style.color = 'red';
    warning.textContent = '⚠️ This device has low memory. Opening many tabs at once might slow down your browser.';
    document.body.insertBefore(warning, document.getElementById('kb'));
}
