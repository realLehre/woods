const header = document.querySelector('.header');
const navBtn = document.querySelector('.nav-toggler');
const nav = document.querySelector('#nav-list');
const navItems = document.querySelectorAll('.nav-item');
const blocks = document.querySelectorAll('.block');

navBtn.addEventListener('click', () =>{
    navBtn.classList.toggle('open');
    nav.classList.toggle('open');
    header.classList.toggle('open');
  
    blocks.forEach(block =>{
        block.classList.toggle('drop');
    })
    navItems.forEach(navItem =>{
        navItem.classList.toggle('slide');
    })
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 35 ){
        header.classList.add('bottom-border');
    } else {
        header.classList.remove('bottom-border')
    }
    console.log(window.scrollY);
})