// hide preloader on page load
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.classList.add('remove');
})


const header = document.querySelector('.header'),
      navBtn = document.querySelector('.nav-toggler'),
      nav = document.querySelector('#nav-list'),
      navItems = document.querySelectorAll('.nav-item');
     
// open nav on mobile  
navBtn.addEventListener('click', (e) =>{
    navBtn.classList.toggle('open');
    nav.classList.toggle('open');
    header.classList.toggle('open');
  

    navItems.forEach(navItem =>{
        navItem.classList.toggle('slide');
    })

    if(e.target.classList.contains('nav-item')){
        header.classList.remove('open');
    }
    console.log(e.target.classList);
})



// close nav when link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        for(p = 0; p < navItems.length; p++){
            navItems[p].classList.remove('show');
        }
        item.classList.add('show');
        navBtn.classList.remove('open');
        nav.classList.remove('open');
        header.classList.remove('open');
        navItems.forEach(navItem =>{
        navItem.classList.remove('slide');
    })
    })
})

// add box shadow to header when page is scrolled
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 35 ){
        header.classList.add('bottom-border');
    } else {
        header.classList.remove('bottom-border')
    }
  
})

// testimonial slide
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

// back to top 
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