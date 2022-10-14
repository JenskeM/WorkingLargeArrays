const bttAverageAgeList = document.querySelector('.average_age');

let countryBttList = [];

for (const [element, data] of Object.entries(randomPersonData)) {
    countryBttList.push(data.region)
}

countryBttList.sort();
const uniqueCountries = [... new Set(countryBttList)];

const calculateAverage = function (countryPressed) {
    let getSentence = document.querySelectorAll('h2');
    for (i = 0; i < getSentence.length; i++) {
        getBody.removeChild(getSentence[i])
    }
    let ageList = [];
    for (const [element, data] of Object.entries(randomPersonData)) {
        if (data.region == countryPressed) {
            ageList.push(data.age)
        }
    }
    ageTotal = 0;
    for (i = 0; i < ageList.length; i++) {
        ageTotal += ageList[i]
    }
    average = Math.round(ageTotal / ageList.length);
    let newSentence = document.createElement('h2');
    getBody.appendChild(newSentence);
    newSentence.innerHTML = `The average age of ${countryPressed} is ${average} years.`
    newSentence.style.position = 'fixed';
    newSentence.style.top = '8em'
    newSentence.style.right = '20em'
}

const showCountryBtts = function () {
    for (i = 0; i < uniqueCountries.length; i++) {
        let newBtt = document.createElement('button');
        let newBreak = document.createElement('p');
        getList.appendChild(newBtt);
        getList.appendChild(newBreak);
        newBtt.innerText = uniqueCountries[i]
        newBtt.addEventListener('click', () => {
            calculateAverage(newBtt.innerText)
        });
    }
}

bttAverageAgeList.addEventListener('click', showCountryBtts);


