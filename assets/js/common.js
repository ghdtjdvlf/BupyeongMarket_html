gsap.registerPlugin(ScrollTrigger);


// 화면 크기 변수 저장 (리사이즈 대응용)
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


// 파란색공

const ballAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 15,
    markers: true // 위치 확인용 (배포시 false로 변경)
  }
});
ballAnimation.to(".big-ball-1", {
  x: windowWidth / 4,
  y: windowHeight / 10,
})
.to(".big-ball-1", {
  x: windowWidth / 2,
  y: windowHeight / 5,
})
.to(".big-ball-1", {
  x: 0,
  y: 0,
});

// 초록색공


const ballAnimation2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom", // ballAnimation1과 동일한 스크롤 범위 사용
    scrub: 10,
    markers: true,
  }
});

ballAnimation2.to(".big-ball-2", {
  x: -windowWidth / 5, // .big-ball-2의 첫 번째 목표 위치
  y: -windowHeight / 5,
})
.to(".big-ball-2", {
  x: -windowWidth / 3.5, // .big-ball-2의 두 번째 목표 위치
  y: windowHeight / 8,
})
.to(".big-ball-2", {
  x: 0,
  y: 0,
});
