//he    ader toggle

let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

let typed = new Typed('.auto-input',{
    strings:['Motorbike Mechanic','Metal Artist','ARC welder', 'Undergraduate'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})


// Active link state on scroll

//Get all Links
let navLinks = document.querySelectorAll('nav ul li a')

//get all sections
let sections= document.querySelectorAll('section')
console.log(sections)