const bttMatchList = document.querySelector('.matchmaking');

let matchList = [];

for (const [element, data] of Object.entries(randomPersonData)) {
    let birthdaySplit = data.birthday.dmy.split("/");
    let day = parseInt(birthdaySplit[0]);
    let month = parseInt(birthdaySplit[1]);
    for (i = 0; i < zodiacList.length; i++) {
        if (data.age >= 18 && ((month === zodiacList[i].startMonth && day >= zodiacList[i].startDay) || (month === zodiacList[i].endMonth && day <= zodiacList[i].endDay))) {
            matchList.push({
                firstname: data.name,
                surname: data.surname,
                photo: data.photo,
                country: data.region,
                age: data.age,
                zodiacSign: zodiacList[i].zodiac
            })
        }
    }
}

matchList.sort((a, b) => {
    const nameA = a.firstname.toUpperCase(); // ignore upper and lowercase
    const nameB = b.firstname.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});

const getMatchList = function (zodiacToMatch) {
    return new Promise(resolve => {
        setTimeout(() => {
            for (i = 0; i < zodiacSignMatch.length; i++) {
                if (zodiacSignMatch[i].zodiac == zodiacToMatch) {
                    let possibleList = zodiacSignMatch[i].matches;
                    resolve(possibleList);
                }
            }
        }, 0);
    })
}

const matchByZodiac = async function (zodiacToMatch, index) {
    getList.innerHTML = '';
    showPerson(index);
    const listToMatch = await getMatchList(zodiacToMatch);
    let newBreak = document.createElement('p');
    let newH3 = document.createElement('h3');
    getList.appendChild(newBreak);
    getList.appendChild(newH3);
    newH3.innerHTML = 'Possible matches:'
    counter = 1;
    for (i = 0; i < matchList.length; i++) {
        if (listToMatch.includes(matchList[i].zodiacSign) && !(i === index)) {
            let matchNr = document.createElement('li');
            getList.appendChild(matchNr);
            matchNr.innerHTML = `Match nr. ${counter}`;
            matchNr.style.fontWeight = 'bold';
            let matchLi = showPerson(i);
            let matchBreak = document.createElement('p');
            matchLi.appendChild(matchBreak);
            counter++
        }
    }
}

const showPerson = function (i) {
    let newLi = document.createElement('li');
    getList.appendChild(newLi);
    newLi.style.listStyle = 'none';
    let ChildLiName = document.createElement('li');
    let newA = document.createElement('a');
    newLi.appendChild(ChildLiName);
    ChildLiName.innerHTML = `${matchList[i].firstname} ${matchList[i].surname}`
    ChildLiName.appendChild(newA);
    newA.innerHTML = `<br><img src="${matchList[i].photo}" width='100px'>`;
    for (j = 3; j < Object.keys(matchList[i]).length; j++) {
        let ChildLi = document.createElement('li');
        newLi.appendChild(ChildLi);
        ChildLi.innerHTML = Object.values(matchList[i])[j]
    }
    return newLi
}

const showAllPeople = function () {
    for (i = 0; i < matchList.length; i++) {
        newLi = showPerson(i);
        let bttShowMatch = document.createElement('button');
        let newBreak = document.createElement('p');
        newLi.appendChild(bttShowMatch);
        newLi.appendChild(newBreak);
        bttShowMatch.setAttribute('id', i);
        bttShowMatch.innerText = 'Click for matches!';
        bttShowMatch.addEventListener('click', () => {
            matchByZodiac(matchList[bttShowMatch.id].zodiacSign, bttShowMatch.id)
        })
    }
}

bttMatchList.addEventListener('click', showAllPeople)