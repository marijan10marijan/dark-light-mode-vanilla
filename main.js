document.addEventListener('DOMContentLoaded', () => {       
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const systemIcon = document.getElementById('system-icon'); 
    const rootElement = document.documentElement; 

    // Definiramo svijetlu i tamnu temu s odgovarajućim varijablama
    const lightTheme = {
        '--bg-color': 'rgb(235, 235, 235)',
        '--text-color': 'rgb(9, 9, 9)',
        '--logo-color': 'rgb(95, 19, 95)',
        '--icons-color': 'black',
        '--big-icon-color': 'rgb(109, 109, 109)',
        '--title-color': 'black',
        '--links-color': 'rgb(109, 109, 109)'
    };

    const darkTheme = {
        '--bg-color': 'rgb(34, 30, 30)',
        '--text-color': 'rgb(205, 202, 202)',
        '--logo-color': 'orange',
        '--icons-color': 'rgb(90, 86, 86)',
        '--big-icon-color': 'white',
        '--title-color': 'white',
        '--links-color': 'white'
    };

    // Funkcija za promjenu teme
    const setTheme = (theme) => {
        Object.keys(theme).forEach(variable => {
            rootElement.style.setProperty(variable, theme[variable]);
        });
    };

    // Provjera postavljene teme u localStorage ili sistema
    const applySystemTheme = () => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        setTheme(darkTheme);
    } else if (storedTheme === 'light') {
        setTheme(lightTheme);
    } else {
        applySystemTheme(); // Ako je sistemska tema, automatski je primjenjujemo
    }

    // Mijenjamo na tamnu temu kada se klikne na ikonu Mjeseca
    moonIcon.addEventListener('click', () => {
        setTheme(darkTheme);
        localStorage.setItem('theme', 'dark'); // Spremamo odabranu temu u localStorage
    });

    // Mijenjamo na svijetlu temu kada se klikne na ikonu Sunca
    sunIcon.addEventListener('click', () => {
        setTheme(lightTheme);
        localStorage.setItem('theme', 'light'); // Spremamo odabranu temu u localStorage
    });

    // Postavljanje system teme (prema korisnikovim postavkama uređaja)
    systemIcon.addEventListener('click', () => {
        applySystemTheme();
        localStorage.removeItem('theme'); // Uklanjamo temu iz localStorage kako bi se koristila sistemska
    });

    // Reagiramo na promjene sistemskih postavki u realnom vremenu
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem('theme')) { // Samo ako je odabrana 'system' opcija
            applySystemTheme();
        }
    });
});



/* CODE ZA PRIKAZIVANJE TEKSTA KADA KORISNIK PREDE PREKO IKONA */
document.addEventListener('DOMContentLoaded', () => {
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const systemIcon = document.getElementById('system-icon');
    const themeLabel = document.getElementById('theme-label'); // Element gdje će se prikazivati tekst

    // Funkcija za prikazivanje teksta
    const showLabel = (text) => {
        themeLabel.textContent = text;
        themeLabel.style.padding = '.25rem 1rem';
        themeLabel.style.display = 'block';

    };

    // Funkcija za skrivanje teksta
    const hideLabel = () => {
        themeLabel.textContent = '';
        themeLabel.style.padding = '0';
        themeLabel.style.display = 'none';
    };

    // Dodaj event listener za hover preko moonIcon (Dark tema)
    moonIcon.addEventListener('mouseenter', () => showLabel('Dark'));
    moonIcon.addEventListener('mouseleave', hideLabel);

    // Dodaj event listener za hover preko sunIcon (Light tema)
    sunIcon.addEventListener('mouseenter', () => showLabel('Light'));
    sunIcon.addEventListener('mouseleave', hideLabel);

    // Dodaj event listener za hover preko systemIcon (System tema)
    systemIcon.addEventListener('mouseenter', () => showLabel('System'));
    systemIcon.addEventListener('mouseleave', hideLabel);
});
