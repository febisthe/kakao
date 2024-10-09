// 메뉴버튼
$('#header .btn-gnb').click(function(){
  $('#header .gnb').toggleClass('active');
  $('#header .btn-gnb').toggleClass('on');
  $('body').toggleClass('on');
})

// 관련사이트
$('#footer .relate').click(function(){
  $('#footer .relate ul').toggle();
  $('#footer .btn-relate .ico-plus').toggleClass('on');
})


// [section1] intro
const introTxt = new SplitType('.sc-intro .headline', {types: 'words, chars'}) 

const introTl = gsap.timeline({})
introTl.from('.sc-intro .headline .char',1,{
  autoAlpha:0,
  xPercent: 300,
  stagger: 0.1,
})
introTl.from('.sc-intro .text',1,{
  autoAlpha:0
})
introTl.from('.sc-intro .store',1,{
  autoAlpha:0
})


// 텍스트 라인
$('[data-ani="txt"]').each(function(i,el){
  gsap.from($(this).find('.line'),{
    scrollTrigger:{
      trigger:$(this),
      start:"0% 65%",
      end:"100% 100%",
      toggleActions:"play none reverse none",
    },
    yPercent:100,
    stagger:0.1,
  })
  gsap.from($(this).find('img'),{
    scrollTrigger:{
      trigger:$(this),
      start:"0% 45%",
      end:"100% 100%",
      toggleActions:"play none reverse none",
    },
    autoAlpha:0
  })
})

// 이미지
$('[data-motion="motion"]').each(function(i,el){
  const contTl = gsap.timeline({
  scrollTrigger:{
    trigger:$(this),
    start:"0% 45%",
    end:"100% 100%",
    toggleActions:"play none reverse none"
  }
})
contTl.from($(this).find('.thumb img'),1,{
  autoAlpha:0,
  xPercent: -300,
})
contTl.from($(this).find('.link-more'),1,{
  autoAlpha:0
})
})

// 이미지 리버스
$('[data-motion="reverse"]').each(function(i,el){
  const contTl = gsap.timeline({
  scrollTrigger:{
    trigger:$(this),
    start:"0% 45%",
    end:"100% 100%",
    toggleActions:"play none reverse none"
  }
})
contTl.from($(this).find('.thumb img'),1,{
  autoAlpha:0,
  xPercent: 300,
})
contTl.from($(this).find('.link-more'),1,{
  autoAlpha:0
})
})


// 카드
const cardSlide = new Swiper('.sc-slide .swiper', {
  autoplay: {
    delay: 0,
    disableOnInteraction : false,
    pauseOnMouseEnter: true,
  },
  loop:true,
  speed:1000,
  slidesPerView:'auto',
  spaceBetween:22,
});

// 체크카드영상
const cardTxt = new SplitType('.sc-video .headline', {types: 'words, chars'}) 
const cardTl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-video',
    start:"0% 50%",
    end:"100% 100%",
    toggleActions:"play none reverse none"
  }
})
cardTl.from('.sc-video .headline .char',1,{
  yPercent: 300,
  stagger: 0.1,
})

// it기술
const techTl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-techit',
    start:"0% 40%",
    end:"100% 100%",
    toggleActions:"play none reverse none",
  }
})
techTl.from('.sc-techit .headline-sm',{
  duration: 1,   
  opacity: 0,       
  y: 80,           
  stagger: 0.1,
  ease: "power4.out", 
})

techTl.from('.sc-techit .thumb img ',{
  duration: 1,   
  opacity: 0,       
  y: 80,           
  stagger: 0.05,
  ease: "power4.out", 
})

techTl.from('.sc-techit .thumb ul ',{
  duration: 1,   
  opacity: 0,       
  y: 80,           
  stagger: 0.05,
  ease: "power4.out", 
})



// 브랜드영상
const brandSlide = new Swiper('.sc-brand .swiper', {
  speed:1000,
  slidesPerView: 1.3,
  centeredSlides:true,
  spaceBetween : 20,
  parallax:true
})
brandSlide.slideTo(1);



