document.addEventListener('DOMContentLoaded', function () {
    var carrier = document.getElementById('fix-carrier')
    var section03 = document.getElementById('section03')

    if (carrier && section03) {
        var section03Top = section03.offsetTop

        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY + window.innerHeight - 1100

            if (scrollPosition > section03Top) {
                carrier.classList.add('fadeOut')
            } else {
                carrier.classList.remove('fadeOut')
            }
        })
    }
})

const headerEl = document.querySelector('.navbar')
let lastScrollY = 0

window.addEventListener(
    'scroll',

    _.throttle(function () {
        const currentScrollY = window.scrollY
        console.log('현재 스크롤 위치 :' + currentScrollY)
        console.log('마지막 스크롤 위치 :' + lastScrollY)

        if (currentScrollY > 75) {
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

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.content')
    const speed = 200 // 애니메이션 속도 조정 (높을수록 느려짐)

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText

        const increment = target / speed

        if (count < target) {
            counter.innerText = Math.ceil(count + increment)
            setTimeout(() => updateCount(counter), 1)
        } else {
            counter.innerText = target
        }
    }

    const resetCounters = () => {
        counters.forEach((counter) => {
            counter.innerText = '0'
        })
    }

    const animateCounters = () => {
        counters.forEach((counter) => {
            updateCount(counter)
        })
    }

    // Intersection Observer 설정
    const section04 = document.querySelector('.section04')
    const observerOptions = {
        root: null,
        threshold: 0.5, // 섹션의 50%가 보일 때 트리거
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                resetCounters()
                animateCounters()
            }
        })
    }, observerOptions)

    observer.observe(section04)
})
