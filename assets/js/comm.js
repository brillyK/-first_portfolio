const headerEl = document.querySelector('.navbar')
let lastScrollY = 0

window.addEventListener(
    'scroll',

    _.throttle(function () {
        const currentScrollY = window.scrollY
        console.log('현재 스크롤 위치 :' + currentScrollY)
        console.log('마지막 스크롤 위치 :' + lastScrollY)

        if (currentScrollY > 100) {
            headerEl.classList.add('bg-w')

            gsap.to(headerEl, {
                backgroundColor: 'white',
                duration: 0.5,
            })

            if (currentScrollY > lastScrollY) {
                gsap.to(headerEl, {
                    y: -75,
                    duration: 0.5,
                })
            } else {
                gsap.to(headerEl, {
                    y: 0,
                    duration: 0.5,
                })
            }
        } else {
            headerEl.classList.remove('bg-w')

            gsap.to(headerEl, {
                backgroundColor: 'transparent', // 투명 배경으로 변경
                backdropFilter: 'blur(0)',
                duration: 0.5,
            })
        }

        lastScrollY = currentScrollY
    }, 300),
)

document.addEventListener('DOMContentLoaded', function () {
    var carrier = document.getElementById('fix-carrier')
    var section03 = document.getElementById('section03')

    if (carrier && section03) {
        var section03Top = section03.offsetTop

        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY + window.innerHeight + -1100

            if (scrollPosition > section03Top) {
                carrier.classList.add('fadeOut')
            } else {
                carrier.classList.remove('fadeOut')
            }
        })
    }
})

AOS.init({
    //key : value
    offset: 120,
    delay: 0,
    duration: 600,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
})
