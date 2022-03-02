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
  
})

const slides = document.querySelectorAll('.testimonial');
slides[1].classList.add('active');
let index = 2;

function plusSlides(n){
    showSlide(index += n);
    console.log(index)
}

function showSlide(n){
    if(n > slides.length){
        index = 1;
    }

    if(n < 1){
        index = slides.length;
    }

    for(p = 0; p < slides.length; p++){
        slides[p].classList.remove('active');
    }

    slides[index -1].classList.add('active');
}
