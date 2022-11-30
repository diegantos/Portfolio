'use strict'

const btn    = document.querySelector('.btn')
const cursor = document.querySelector('.cursor')

const header = document.querySelector('.header')
const headerLogo   = document.querySelector('.header__logo')
const headerButton = document.querySelector('.header__button')
const headerLines  = document.querySelectorAll('.header__line')

const titulo1 = document.querySelector('.intro__name')
const titulo2 = document.querySelector('.intro__description')
const titulo3 = document.querySelector('.intro__scroll')

const worksTitle = document.querySelector('.works__title')
const slider = document.querySelector('.works__slider')
const sliderEnlaces = document.querySelectorAll('.works__circle')

const whoTitle = document.querySelector('.who__title')
const whoLi = document.querySelectorAll('.who__li')
const photo = document.querySelectorAll('.who__photo')

const contactTitle = document.querySelector('.contact__title')
const clock = document.querySelector('.contact__clock')
const contactSubtitle = document.querySelector('.contact__title-min')
const contactData = document.querySelector('.contact__data')
const email = document.querySelector('.contact__email')

const copyEmail = document.querySelector('.contact__copy')
const copyFooter = document.querySelector('.footer__copy')
const footerLi = document.querySelectorAll('.footer__li')
const footerSocial = document.querySelector('.footer__social')

const transitOne  = document.querySelector('.one')
const transitTwo  = document.querySelector('.two')
const transitThree  = document.querySelector('.three')
const transitFour  = document.querySelector('.four')
const transitContent = document.querySelector('.transit__content')
const menuText = document.querySelectorAll('.transit__text')

let ejeX = 0
let ejeY = 0
let escala = 1

let text = ''

let moverCursor = () => {
    cursor.style.transform = `translateX( ${ejeX - 12}px) translateY(${ejeY-12}px) scale(${escala})`
}

//Transicion de boton burger

let showTransit = () => {
    transitOne.classList.toggle('active')
    transitTwo.classList.toggle('active')
    transitThree.classList.toggle('active')
    transitFour.classList.toggle('active')

    transitContent.classList.toggle('active')
}

// let showCursorText = ()=>{
//     const fragmento = document.createDocumentFragment()
//     const span = document.createElement('span')
//         span.classList.add('add__copy')
//         span.innerHTML = `${text}`
//     fragmento.appendChild(span)

//     cursor.appendChild(fragmento)
// }

//Circulo ratón
window.addEventListener('mousemove',( {clientX , clientY} )=>{
    // console.clear()
    // console.log( {clientX , clientY} )

    ejeX = clientX
    ejeY = clientY
    moverCursor()
})
//Scroll en ruedas
window.addEventListener('scroll', ()=>{
    //console.clear()

    let pixel       = window.scrollY                //Cuanto Scroll
    let altoVentana = window.innerHeight            //Alto de la Ventana
    let topSlider   = slider.offsetTop              //Distancia arriba del elemento a la página
    //console.log({ pixel, altoVentana , topSlider})

    if( pixel >= topSlider - altoVentana && pixel <= topSlider + altoVentana){
        slider.style.transform = `translateX( ${pixel / 3}px )`
    }

    // if( pixel >= 0 && pixel <= 800){
    //     titulo1.style.transform = `translateY( ${pixel / 2.5}px)`
    //     titulo2.style.transform = `translateY( ${pixel / 6}px)`
    //     titulo3.style.transform = ` translateY( ${pixel / 15}px)`
    // }

    pixel >= topSlider - (altoVentana / 1.2) ? slider.classList.add('active') : slider.classList.remove('active')
    
    // ( pixel > 700 ) ? header.classList.add('active') : header.classList.remove('active')

    let topTitleWho = whoTitle.offsetTop

    pixel >= topTitleWho - (altoVentana / 1.5) ? whoTitle.classList.add('active') : whoTitle.classList.remove('active')

    let topTitleWorks = worksTitle.offsetTop

    pixel >= topTitleWorks - (altoVentana / 1.5) ? worksTitle.classList.add('active') : worksTitle.classList.remove('active')

    let topTitleContact = contactTitle.offsetTop

    pixel >= topTitleContact - (altoVentana / 1.5) ? contactTitle.classList.add('active') : contactTitle.classList.remove('active')

    let topClock = clock.offsetTop

    pixel >= topClock - ( altoVentana / 1.5) ? clock.classList.add('active') : clock.classList.remove('active')
    
    let topSubtitle = contactSubtitle.offsetTop

    pixel >= topSubtitle - ( altoVentana / 1.5) ? contactSubtitle.classList.add('active') : contactSubtitle.classList.remove('active')

    let topData = contactData.offsetTop

    pixel >= topData - ( altoVentana / 1.3) ? contactData.classList.add('active') : contactData.classList.remove('active')

    let topSocial = footerSocial.offsetTop

    pixel >= topSocial - ( altoVentana / 1.1) ? footerSocial.classList.add('active') : footerSocial.classList.remove('active')

})

//Zooms de mouse
headerLogo.addEventListener('mouseover',()=>{
    escala = 3
    moverCursor()
})
headerLogo.addEventListener('mouseout',()=>{
    escala = 1
    moverCursor()
})
headerButton.addEventListener('mouseover',()=>{
    escala = 3
    moverCursor()
})
headerButton.addEventListener('mouseout',()=>{
    escala = 1
    moverCursor()
})
btn.addEventListener('mouseover',()=>{
    escala = 2
    moverCursor()
})
btn.addEventListener('mouseout',()=>{
    escala = 1
    moverCursor()
})
email.addEventListener('mouseover',()=>{
    escala = 3
    moverCursor()
    copyEmail.classList.add('active')
    // text = 'COPY'
    // showCursorText()
})
email.addEventListener('mouseout',()=>{
    escala = 1
    moverCursor()
    copyEmail.classList.remove('active')
})
photo.forEach(( eachPhoto, i )=>{
    photo[i].addEventListener('mouseover',()=>{
        escala = 3
        moverCursor()
    })
    photo[i].addEventListener('mouseout',()=>{
        escala = 1
        moverCursor()
    })
})
sliderEnlaces.forEach(( eachEnlace , i )=>{
    sliderEnlaces[i].addEventListener('mouseover',()=>{
        escala = 3.5
        moverCursor()
    })
    sliderEnlaces[i].addEventListener('mouseout',()=>{
        escala = 1
        moverCursor()
    })
})

footerLi.forEach((eachLi , i)=>{
    footerLi[i].addEventListener('mouseover',()=>{
        escala = 4
        moverCursor()
        cursor.classList.add('active')
        copyFooter.classList.add('active')
    })
    footerLi[i].addEventListener('mouseout',()=>{
        escala = 1
        moverCursor()
        cursor.classList.remove('active')
        copyFooter.classList.remove('active')
    })
})
        // <!--  ⬇️ HEADER ⬇️  -->
//click en botón menú
headerButton.addEventListener('click',()=>{
    headerLines.forEach(( eachLine, i )=>{
        headerLines[i].classList.toggle('active')
    })

    showTransit()
    
})

menuText.forEach(( eachText , i )=>{
    menuText[i].addEventListener('mouseover',()=>{
        escala = 4
        moverCursor()
    })
    menuText[i].addEventListener('mouseout',()=>{
        escala = 1
        moverCursor()
    })
})










        // <!--  ⬇️ RELOJ ⬇️  -->
const deg = 6;
const sec = document.querySelector('.contact__second');
const min = document.querySelector('.contact__minute');
const hr = document.querySelector('.contact__hour');

setInterval(() => {
    let day = new Date();
    let s = day.getSeconds() * deg;
    let m = day.getMinutes() * deg;
    let h = day.getHours() * 30;
    sec.style.transform = `rotateZ(${s}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    hr.style.transform = `rotateZ(${(h) + (m / 12)}deg)`;
})