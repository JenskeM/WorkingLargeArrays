const bttCreditCardList = document.querySelector('.credit-card');

let creditList = [];

const now = new Date();
const currentYear = parseInt(now.getFullYear().toString().slice(-2));
const currentMonth = now.getMonth() + 1; // +1 because getMonth() returns the month (from 0 to 11) of a date


for (const [element, data] of Object.entries(randomPersonData)) {
    let creditMonth = parseInt(data.credit_card.expiration.split('/')[0]);
    let creditYear = parseInt(data.credit_card.expiration.split('/')[1]);
    if (data.age >= 18 && creditMonth >= currentMonth && (creditYear === currentYear || creditYear === currentYear + 1)) {
        let dateString = `20${creditYear}-${creditMonth}`;
        creditList.push({
            name: `${data.name} ${data.surname}`,
            phone: data.phone,
            creditNr: data.credit_card.number,
            expire: data.credit_card.expiration,
            expireDate: new Date(dateString)
        })
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
creditList.sort(function (a, b) {
    // Subtract the dates to get a value that is either negative, positive, or zero.
    return a.expireDate - b.expireDate;
});

const showCreditCard = function () {
    for (i = 0; i < creditList.length; i++) {
        let newLi = document.createElement('li');
        let newBreak = document.createElement('p');
        getList.appendChild(newLi);
        getList.appendChild(newBreak);
        newLi.innerHTML = `Name: ${creditList[i].name}<br>Phone-number: ${creditList[i].phone}<br>Credit card number: ${creditList[i].creditNr}<br>Expiredate: ${creditList[i].expire}`
    }
}

bttCreditCardList.addEventListener('click', showCreditCard)
