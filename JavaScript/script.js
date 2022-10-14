const getBtt = document.querySelectorAll('input');
const getList = document.querySelector('ul');
const getBody = document.querySelector('body');

const removeList = function () {
    getList.innerHTML = ''
}

for (i = 0; i < getBtt.length; i++) {
    getBtt[i].addEventListener('click', removeList)
}

for (i = 0; i < getBtt.length; i++) {
    getBtt[i].addEventListener('click', () => {
        for (j = 0; j < getBody.children.length; j++) {
            if (getBody.children[j].tagName == 'H2') {
                getBody.removeChild(getBody.children[j])
            }
        }
    })
}