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

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop()

        // 각 framer 요소에 대해 처리
        $('.framer').each(function () {
            var offsetTop = $(this).offset().top

            // 애니메이션을 위한 상단 및 하단 경계값 계산
            var topBoundary = offsetTop - $(window).height() + 100 // 애니메이션 트리거를 위한 오프셋 조정
            var bottomBoundary = offsetTop + $(this).height() - 100 // 애니메이션 트리거를 위한 오프셋 조정

            // 현재 스크롤 위치가 경계값 내에 있는지 확인
            if (scrollPos >= topBoundary && scrollPos <= bottomBoundary) {
                // 첫 번째와 마지막 swiper-slide에 클래스 추가
                $(this).find('.swiper-slide:first').addClass('move-up')
                $(this).find('.swiper-slide:last').addClass('move-down')
            } else {
                // 경계값을 벗어나면 클래스 제거
                $(this).find('.swiper-slide:first').removeClass('move-up')
                $(this).find('.swiper-slide:last').removeClass('move-down')
            }
        })
    })
})

// GSAP 애니메이션을 초기화합니다.
gsap.registerPlugin(ScrollTrigger)

// swiper-slide에 대한 GSAP 애니메이션 설정
gsap.utils.toArray('.swiper-slide').forEach((slide) => {
    // 마우스 오버 시 애니메이션
    slide.addEventListener('mouseenter', () => {
        gsap.to(slide, {
            duration: 0.3,
            y: -20, // 위로 20px 이동
            ease: 'power2.out', // 이징 함수 설정
        })
    })

    // 마우스 리브 시 애니메이션
    slide.addEventListener('mouseleave', () => {
        gsap.to(slide, {
            duration: 0.3,
            y: 0, // 원래 위치로 복귀
            ease: 'power2.inOut', // 이징 함수 설정
        })
    })
})
