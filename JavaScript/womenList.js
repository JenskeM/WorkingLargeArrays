const bttWomenList = document.querySelector('.capricorn_women');

let womenList = [];

for (const [element, data] of Object.entries(randomPersonData)) {
    let birthdaySplit = data.birthday.dmy.split("/");
    let day = parseInt(birthdaySplit[0]);
    let month = parseInt(birthdaySplit[1]);
    if (data.gender == 'female' && data.age >= 30 && ((month === 12 && day >= 22) || (month === 1 && day <= 19))) {
        womenList.push({
            firstname: data.name,
            surname: data.surname,
            photo: data.photo
        });
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
womenList.sort((a, b) => {
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


const showCapricornWomen = function () {
    for (i = 0; i < womenList.length; i++) {
        let newLi = document.createElement('li');
        let newA = document.createElement('a');
        getList.appendChild(newLi);
        newLi.innerHTML = `${womenList[i].firstname} ${womenList[i].surname}`
        newLi.appendChild(newA);
        newA.innerHTML = `<br><img src="${womenList[i].photo}" width='100px'>`;
    }
}

bttWomenList.addEventListener('click', showCapricornWomen)

