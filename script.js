const Urls = {
    ['Arizona'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/aspt-scripts','https://sites.google.com/view/tyler-kb-portal/state-parks/aspt'],[]],
    ['California'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/cadpr-scripts', 'https://sites.google.com/view/tyler-kb-portal/state-parks/cadpr'],[]],
    ['Florida'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/fsp-scripts','https://sites.google.com/view/tyler-kb-portal/state-parks/fsp'],],
    ['Maricopa'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/mcp-script','https://sites.google.com/view/tyler-kb-portal/state-parks/mcp'],],
    ['Minnesota'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/mndnr-scripts','https://sites.google.com/view/tyler-kb-portal/state-parks/mndnr'],],
    ['Missouri'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/msp-script','https://sites.google.com/view/tyler-kb-portal/state-parks/msp'],],
    ['NDakota'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/ndsp-scripts','https://sites.google.com/view/tyler-kb-portal/state-parks/ndsp'],],
    ['Ohio'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/osp-script','https://sites.google.com/view/tyler-kb-portal/state-parks/osp'],],
    ['Virginia'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/vsp-script','https://sites.google.com/view/tyler-kb-portal/state-parks/vsp'],],
    ['Wyoming'] : [['https://sites.google.com/view/tyler-kb-portal/scripts/wyo-scripts','https://sites.google.com/view/tyler-kb-portal/state-parks/wyo'],],
}

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

]

const kb_buttons = document.querySelectorAll('button')

let currTab1 = null, currTab2 = null;

function closeTabs(){
    if (currTab1 && !currTab1.closed) currTab1.close();
    if (currTab2 && !currTab2.closed) currTab2.close();
}


kb_buttons.forEach  (function(button){
    button.addEventListener('click', function(){

        if (button.textContent == "Open All"){
            for(let i = 0; i<Neptunes.length; i++){
                window.open(Neptunes[i],'_blank', 'noopener, noreferrer')
            }
        }else if(button.textContent == "Go To Individual State"){
            let answer = prompt("Which state would you like to go to?").toLowerCase().split(' ').join('')
            let solution = 99
            switch(answer){
                case 'arizona':
                    solution = 0
                    break
                case 'california':
                    solution = 1
                    break
                case 'florida':
                    solution = 2
                    break
                case 'maricopa':
                    solution = 3
                    break
                case 'minnesota':
                    solution = 4
                    break
                case 'missouri':
                    solution = 5
                    break
                case 'northdakota':
                    solution =6
                    break
                case 'ohio':
                    solution=7
                    break
                case 'virginia':
                    solution=8
                    break
                case 'wyoming':
                    solution=9
                    break
            }

            if (solution == 99){
                alert("invalid option. please check your spelling.")
            } else {
                
                window.open(Neptunes[solution],'_blank', 'noopener, noreferrer')
            }
            
        } else {
            closeTabs()

            if (!Urls) return;

            currTab2 = window.open(Urls[button.textContent][0][1], '_blank', 'noopener, noreferrer');
            currTab1 = window.open(Urls[button.textContent][0][0], '_blank', 'noopener, noreferrer');

        }

    })
});

//window.open('https://www.google.com', '_blank', 'noopener, noreferrer');