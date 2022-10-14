const bttCountryList = document.querySelector('.countries');

let countriesList = []

for (const [element, data] of Object.entries(randomPersonData)) {
    if (!countriesList.includes(data.region)) {
        countriesList.push(data.region)
    }
}

const showCountries = function () {
    countriesList.sort();
    for (i = 0; i < countriesList.length; i++) {
        let newLi = document.createElement('li');
        getList.appendChild(newLi);
        newLi.innerHTML = countriesList[i]
    }
}

bttCountryList.addEventListener('click', showCountries)

