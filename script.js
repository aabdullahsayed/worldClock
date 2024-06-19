const timeZonesElement = document.getElementById('time-zones');
const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');

const timeZones = {
    "Afghanistan": "Asia/Kabul",
    "Albania": "Europe/Tirane",
    "Algeria": "Africa/Algiers",
    "Andorra": "Europe/Andorra",
    "Angola": "Africa/Luanda",
    "Antigua and Barbuda": "America/Antigua",
    "Argentina": "America/Argentina/Buenos_Aires",
    "Armenia": "Asia/Yerevan",
    "Australia": "Australia/Sydney",
    "Austria": "Europe/Vienna",
    "Azerbaijan": "Asia/Baku",
    "Bahamas": "America/Nassau",
    "Bahrain": "Asia/Bahrain",
    "Bangladesh": "Asia/Dhaka",
    "Barbados": "America/Barbados",
    "Belarus": "Europe/Minsk",
    "Belgium": "Europe/Brussels",
    "Belize": "America/Belize",
    "Benin": "Africa/Porto-Novo",
    "Bhutan": "Asia/Thimphu",
    "Bolivia": "America/La_Paz",
    "Bosnia and Herzegovina": "Europe/Sarajevo",
    "Botswana": "Africa/Gaborone",
    "Brazil": "America/Sao_Paulo",
    "Brunei": "Asia/Brunei",
    "Bulgaria": "Europe/Sofia",
    "Burkina Faso": "Africa/Ouagadougou",
    "Burundi": "Africa/Bujumbura",
    "Cabo Verde": "Atlantic/Cape_Verde",
    "Cambodia": "Asia/Phnom_Penh",
    "Cameroon": "Africa/Douala",
    "Canada": "America/Toronto",
    "Central African Republic": "Africa/Bangui",
    "Chad": "Africa/Ndjamena",
    "Chile": "America/Santiago",
    "China": "Asia/Shanghai",
    "Colombia": "America/Bogota",
    "Comoros": "Indian/Comoro",
    "Congo (Congo-Brazzaville)": "Africa/Brazzaville",
    "Costa Rica": "America/Costa_Rica",
    "Croatia": "Europe/Zagreb",
    "Cuba": "America/Havana",
    "Cyprus": "Asia/Nicosia",
    "Czech Republic": "Europe/Prague",
    "Denmark": "Europe/Copenhagen",
    "Djibouti": "Africa/Djibouti",
    "Dominica": "America/Dominica",
    "Dominican Republic": "America/Santo_Domingo",
    "Ecuador": "America/Guayaquil",
    "Egypt": "Africa/Cairo",
    "El Salvador": "America/El_Salvador",
    "Equatorial Guinea": "Africa/Malabo",
    "Eritrea": "Africa/Asmara",
    "Estonia": "Europe/Tallinn",
    "Eswatini": "Africa/Mbabane",
    "Ethiopia": "Africa/Addis_Ababa",
    "Fiji": "Pacific/Fiji",
    "Finland": "Europe/Helsinki",
    "France": "Europe/Paris",
    "Gabon": "Africa/Libreville",
    "Gambia": "Africa/Banjul",
    "Georgia": "Asia/Tbilisi",
    "Germany": "Europe/Berlin",
    "Ghana": "Africa/Accra",
    "Greece": "Europe/Athens",
    "Grenada": "America/Grenada",
    "Guatemala": "America/Guatemala",
    "Guinea": "Africa/Conakry",
    "Guinea-Bissau": "Africa/Bissau",
    "Guyana": "America/Guyana",
    "Haiti": "America/Port-au-Prince",
    "Honduras": "America/Tegucigalpa",
    "Hungary": "Europe/Budapest",
    "Iceland": "Atlantic/Reykjavik",
    "India": "Asia/Kolkata",
    "Indonesia": "Asia/Jakarta",
    "Iran": "Asia/Tehran",
    "Iraq": "Asia/Baghdad",
    "Ireland": "Europe/Dublin",
    "Israel": "Asia/Jerusalem",
    "Italy": "Europe/Rome",
    "Jamaica": "America/Jamaica",
    "Japan": "Asia/Tokyo",
    "Jordan": "Asia/Amman",
    "Kazakhstan": "Asia/Almaty",
    "Kenya": "Africa/Nairobi",
    "Kiribati": "Pacific/Tarawa",
    "Kuwait": "Asia/Kuwait",
    "Kyrgyzstan": "Asia/Bishkek",
    "Laos": "Asia/Vientiane",
    "Latvia": "Europe/Riga",
    "Lebanon": "Asia/Beirut",
    "Lesotho": "Africa/Maseru",
    "Liberia": "Africa/Monrovia",
    "Libya": "Africa/Tripoli",
    "Liechtenstein": "Europe/Vaduz",
    "Lithuania": "Europe/Vilnius",
    "Luxembourg": "Europe/Luxembourg",
    "Madagascar": "Indian/Antananarivo",
    "Malawi": "Africa/Blantyre",
    "Malaysia": "Asia/Kuala_Lumpur",
    "Maldives": "Indian/Maldives",
    "Mali": "Africa/Bamako",
    "Malta": "Europe/Malta",
    "Marshall Islands": "Pacific/Majuro",
    "Mauritania": "Africa/Nouakchott",
    "Mauritius": "Indian/Mauritius",
    "Mexico": "America/Mexico_City",
    "Micronesia": "Pacific/Pohnpei",
    "Moldova": "Europe/Chisinau",
    "Monaco": "Europe/Monaco",
    "Mongolia": "Asia/Ulaanbaatar",
    "Montenegro": "Europe/Podgorica",
    "Morocco": "Africa/Casablanca",
    "Mozambique": "Africa/Maputo",
    "Myanmar (Burma)": "Asia/Yangon",
    "Namibia": "Africa/Windhoek",
    "Nauru": "Pacific/Nauru",
    "Nepal": "Asia/Kathmandu",
    "Netherlands": "Europe/Amsterdam",
    "New Zealand": "Pacific/Auckland",
    "Nicaragua": "America/Managua",
    "Niger": "Africa/Niamey",
    "Nigeria": "Africa/Lagos",
    "North Korea": "Asia/Pyongyang",
    "North Macedonia": "Europe/Skopje",
    "Norway": "Europe/Oslo",
    "Oman": "Asia/Muscat",
    "Pakistan": "Asia/Karachi",
    "Palau": "Pacific/Palau",
    "Palestine": "Asia/Gaza",
    "Panama": "America/Panama",
    "Papua New Guinea": "Pacific/Port_Moresby",
    "Paraguay": "America/Asuncion",
    "Peru": "America/Lima",
    "Philippines": "Asia/Manila",
    "Poland": "Europe/Warsaw",
    "Portugal": "Europe/Lisbon",
    "Qatar": "Asia/Qatar",
    "Romania": "Europe/Bucharest",
    "Russia": "Europe/Moscow",
    "Rwanda": "Africa/Kigali",
    "Saint Kitts and Nevis": "America/St_Kitts",
    "Saint Lucia": "America/St_Lucia",
    "Saint Vincent and the Grenadines": "America/St_Vincent",
    "Samoa": "Pacific/Apia",
    "San Marino": "Europe/San_Marino",
    "Sao Tome and Principe": "Africa/Sao_Tome",
    "Saudi Arabia": "Asia/Riyadh",
    "Senegal": "Africa/Dakar",
    "Serbia": "Europe/Belgrade",
    "Seychelles": "Indian/Mahe",
    "Sierra Leone": "Africa/Freetown",
    "Singapore": "Asia/Singapore",
    "Slovakia": "Europe/Bratislava",
    "Slovenia": "Europe/Ljubljana",
    "Solomon Islands": "Pacific/Guadalcanal",
    "Somalia": "Africa/Mogadishu",
    "South Africa": "Africa/Johannesburg",
    "South Korea": "Asia/Seoul",
    "South Sudan": "Africa/Juba",
    "Spain": "Europe/Madrid",
    "Sri Lanka": "Asia/Colombo",
    "Sudan": "Africa/Khartoum",
    "Suriname": "America/Paramaribo",
    "Sweden": "Europe/Stockholm",
    "Switzerland": "Europe/Zurich",
    "Syria": "Asia/Damascus",
    "Taiwan": "Asia/Taipei",
    "Tajikistan": "Asia/Dushanbe",
    "Tanzania": "Africa/Dar_es_Salaam",
    "Thailand": "Asia/Bangkok",
    "Timor-Leste": "Asia/Dili",
    "Togo": "Africa/Lome",
    "Tonga": "Pacific/Tongatapu",
    "Trinidad and Tobago": "America/Port_of_Spain",
    "Tunisia": "Africa/Tunis",
    "Turkey": "Europe/Istanbul",
    "Turkmenistan": "Asia/Ashgabat",
    "Tuvalu": "Pacific/Funafuti",
    "Uganda": "Africa/Kampala",
    "Ukraine": "Europe/Kiev",
    "United Arab Emirates": "Asia/Dubai",
    "United Kingdom": "Europe/London",
    "United States": "America/New_York",
    "Uruguay": "America/Montevideo",
    "Uzbekistan": "Asia/Tashkent",
    "Vanuatu": "Pacific/Efate",
    "Vatican City": "Europe/Vatican",
    "Venezuela": "America/Caracas",
    "Vietnam": "Asia/Ho_Chi_Minh",
    "Yemen": "Asia/Aden",
    "Zambia": "Africa/Lusaka",
    "Zimbabwe": "Africa/Harare"
};

const fetchTime = (timeZone) => {
    return fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`)
        .then(response => response.json())
        .then(data => data.datetime)
        .catch(error => console.error('Error fetching time:', error));
};

const displayTimeZones = async (filter = '') => {
    timeZonesElement.innerHTML = '';
    const filteredTimeZones = Object.entries(timeZones)
        .filter(([country]) => country.toLowerCase().includes(filter.toLowerCase()));
    for (const [country, timeZone] of filteredTimeZones) {
        const time = await fetchTime(timeZone);
        const timeZoneElement = document.createElement('div');
        timeZoneElement.className = 'time-zone';
        timeZoneElement.innerHTML = `<h2>${country}</h2><p>${time}</p>`;
        timeZonesElement.appendChild(timeZoneElement);
    }
};

searchInput.addEventListener('input', () => {
    const filter = searchInput.value;
    const filteredSuggestions = Object.keys(timeZones)
        .filter(country => country.toLowerCase().includes(filter.toLowerCase()))
        .slice(0, 5);
    suggestions.innerHTML = '';
    if (filteredSuggestions.length > 0) {
        suggestions.style.display = 'block';
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;
            suggestionElement.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestions.style.display = 'none';
                displayTimeZones(suggestion);
            });
            suggestions.appendChild(suggestionElement);
        });
    } else {
        suggestions.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = 'none';
    }
});

displayTimeZones();
