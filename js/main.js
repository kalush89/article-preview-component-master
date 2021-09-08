let button = document.querySelector('button');
let smNav = document.getElementById('sm-nav');

button.addEventListener('click', toggle);

function toggle(){
    if(smNav.classList.contains('is-open')){
        smNav.classList.remove('is-open');
    }else {
        smNav.classList.add('is-open');
    }
}