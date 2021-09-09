let button = document.querySelector('button');
let smNav = document.getElementById('sm-nav');

button.addEventListener('click', toggle);

function toggle(){
    if(smNav.classList.contains('is-open')){
        smNav.classList.remove('is-open');
        button.classList.remove('is-dark');//toggle button background
    }else {
        smNav.classList.add('is-open');
        button.classList.add('is-dark');//toggle button background
    }
}