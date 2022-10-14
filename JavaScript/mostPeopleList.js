const bttMostPeopleList = document.querySelector('.countries_most_people');

let mostPeopleList = [];

for (const [element, data] of Object.entries(randomPersonData)) {
    mostPeopleList.push(data.region)
}

mostPeopleList.sort();
const uniqueRegions = [... new Set(mostPeopleList)];
uniqueRegions.sort();
let occurenceList = [];

for (i = 0; i < uniqueRegions.length; i++) {
    let counter = 1;
    for (j = 0; j < mostPeopleList.length; j++) {
        if (uniqueRegions[i] == mostPeopleList[j]) {
            occurenceList.push({
                country: uniqueRegions[i],
                occurences: counter
            });
            counter++;
        }
    }
}

let finalList = [];

for (i = 0; i < uniqueRegions.length; i++) {
    let getIndex = mostPeopleList.lastIndexOf(uniqueRegions[i])
    finalList.push(occurenceList[getIndex])
}

finalList.sort(function (a, b) {
    // Subtract the dates to get a value that is either negative, positive, or zero.
    return b.occurences - a.occurences;
});

const showMostPeople = function () {
    for (i = 0; i < finalList.length; i++) {
        let newLi = document.createElement('li');
        getList.appendChild(newLi);
        newLi.innerHTML = `${finalList[i].country}: ${finalList[i].occurences}`
    }
}

bttMostPeopleList.addEventListener('click', showMostPeople)
