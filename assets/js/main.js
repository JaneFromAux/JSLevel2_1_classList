

let headline = document.getElementById('1');
let list = document.getElementById('list');


function addHeadlineClass() {
    console.log('function addHeadlineClass');
    headline.classList.add('headline');
}
addHeadlineClass();
function addUlClass() {
    console.log('function addUlClass');
    list.classList.add('ul');
}
addUlClass();



function changeHeadline() {
    console.log('function changeHeadline');
    headline.classList.toggle('changeHeadline');
}
