const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.classList.add('remove');
})

const header = document.querySelector('.header'),
      navBtn = document.querySelector('.nav-toggler'),
      nav = document.querySelector('#nav-list'),
      navItems = document.querySelectorAll('.nav-item');
     

navBtn.addEventListener('click', (e) =>{
    navBtn.classList.toggle('open');
    nav.classList.toggle('open');
    header.classList.toggle('open');
  

    navItems.forEach(navItem =>{
        navItem.classList.toggle('slide');
    })

    if(e.target.classList.contains('nav-item')){
        //    nav.classList.toggle('open');
        header.classList.remove('open');
    }
    console.log(e.target.classList);
})



navItems.forEach(item => {
    item.addEventListener('click', () => {
        for(p = 0; p < navItems.length; p++){
            navItems[p].classList.remove('show');
        }
        item.classList.add('show');
    })
})
navItems[0].classList.add('show');

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

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        for(p = 0; p < slides.length; p++){
            slides[p].classList.remove('active');
            index = p + 1;
        }
        slide.classList.add('active');

    })
    
})

function plusSlides(n){
    showSlide(index += n);
}

const slideBtn = document.querySelectorAll('.slider-btn');
slideBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains('prev')){
            plusSlides(-1);
        } 

        if(e.target.classList.contains('next')){
            plusSlides(1);
        }
       
    }) 
})

const pointers = document.querySelectorAll('.pointer');
pointers[1].classList.add('active');

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

    for(p = 0; p < pointers.length; p++){
        pointers[p].classList.remove('active');
    }

    slides[index -1].classList.add('active');
    pointers[index -1].classList.add('active');
}

const topBtn = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    
    if(window.scrollY >=1000 ){
 
        topBtn.classList.add('show')
    } else {
        
        topBtn.classList.remove('show');
    }   
})

topBtn.addEventListener('click', () =>{
    document.documentElement.scrollTop = 0;
})