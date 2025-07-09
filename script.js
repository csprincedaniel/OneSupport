const Urls = {
    ['Arizona']: [['https://sites.google.com/view/tyler-kb-portal/scripts/aspt-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/aspt']],
    ['California']: [['https://sites.google.com/view/tyler-kb-portal/scripts/cadpr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/cadpr']],
    ['Florida']: [['https://sites.google.com/view/tyler-kb-portal/scripts/fsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/fsp']],
    ['Maricopa']: [['https://sites.google.com/view/tyler-kb-portal/scripts/mcp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mcp']],
    ['Minnesota']: [['https://sites.google.com/view/tyler-kb-portal/scripts/mndnr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/mndnr']],
    ['Missouri']: [['https://sites.google.com/view/tyler-kb-portal/scripts/msp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/msp']],
    ['NDakota']: [['https://sites.google.com/view/tyler-kb-portal/scripts/ndsp-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/ndsp']],
    ['Ohio']: [['https://sites.google.com/view/tyler-kb-portal/scripts/osp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/osp']],
    ['Virginia']: [['https://sites.google.com/view/tyler-kb-portal/scripts/vsp-script', 'https://sites.google.com/view/tyler-kb-portal/state-parks/vsp']],
    ['Wyoming']: [['https://sites.google.com/view/tyler-kb-portal/scripts/wyo-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/wyo']],
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

const kb_buttons = document.querySelectorAll('button');
const chosenText = document.querySelector('#chosen-text');
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

kb_buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const label = button.textContent;

        if (label === "Open All") {
            Neptunes.forEach(url => window.open(url, '_blank', 'noopener,noreferrer'));
        } else if (label === "Open All With Delay") {
            openWithDelay(Neptunes, 500);
        } else if (label === "Go To Individual State") {
            const answer = prompt("Which state would you like to go to?").toLowerCase().replace(/\s+/g, '');
            const map = {
                arizona: 0, california: 1, florida: 2, maricopa: 3,
                minnesota: 4, missouri: 5, northdakota: 6, ohio: 7,
                virginia: 8, wyoming: 9
            };
            if (map.hasOwnProperty(answer)) {
                window.open(Neptunes[map[answer]], '_blank', 'noopener,noreferrer');
            } else {
                alert("Invalid option. Please check your spelling.");
            }
        } else {
            closeTabs();
            const state = label;
            const urls = Urls[state];
            if (!urls) return;

            currTab1 = window.open(urls[0][0], '_blank', 'noopener,noreferrer');
            currTab2 = window.open(urls[0][1], '_blank', 'noopener,noreferrer');
            

            const intro = Intros[state.toLowerCase()];
            if (intro) {
                chosenText.innerHTML = `Just in case it didn't load yet, the intro is: <b>${intro}</b>`;
            }
        }
    });
});

// Warn for low memory
if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
    const warning = document.createElement('p');
    warning.style.color = 'red';
    warning.textContent = "⚠️ This device has low memory. Opening all tabs at once *might* slow down your browser.";
    document.body.insertBefore(warning, document.getElementById('kb'));
}
