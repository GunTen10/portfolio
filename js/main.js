$(function () {
  // Header nav바 메뉴 클릭 시, 해당 영역 이동
  $('.moveBtn01').click(function () {
    $('html, body').animate({ scrollTop: $('#intro').offset().top - 70 }, 500);
  });
  $('.moveBtn02').click(function () {
    $('html, body').animate({ scrollTop: $('#about').offset().top - 70 }, 500);
  });
  $('.moveBtn03').click(function () {
    $('html, body').animate({ scrollTop: $('#skills').offset().top - 70 }, 500);
  });
  $('.moveBtn04').click(function () {
    $('html, body').animate({ scrollTop: $('#projects').offset().top - 70 }, 500);
  });
  $('.moveBtn05').click(function () {
    $('html, body').animate({ scrollTop: $('#contact').offset().top - 70 }, 500);
  });

  // 해당 영역 이동 시, Header nav바 메뉴 색상 변경
  $(window).scroll(function () {
    var winScroll = $(this).scrollTop();
    var aboutScroll = $('#about').offset().top - 70;
    var skillScroll = $('#skills').offset().top - 70;
    var projectScroll = $('#projects').offset().top - 70;
    var contactScroll = $('#contact').offset().top - 70;
    var footerScroll = $('footer').offset().top - 30;

    if (winScroll < aboutScroll) {
      $('.moveBtn01').addClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
      $('.moveBtn05').removeClass('on');
    } else if (winScroll < skillScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').addClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
      $('.moveBtn05').removeClass('on');
    } else if (winScroll < projectScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').addClass('on');
      $('.moveBtn04').removeClass('on');
      $('.moveBtn05').removeClass('on');
    } else if (winScroll < contactScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').addClass('on');
      $('.moveBtn05').removeClass('on');
    } else if (winScroll < footerScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
      $('.moveBtn05').addClass('on');
    } else {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
      $('.moveBtn05').removeClass('on');
    }
  });

  // projects 섹션 내 슬라이드 - 슬릭 슬라이더
  $('.projSlide').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  });

  $('.box02 .link a:first-child').on('click',function(e){
    e.preventDefault();
    window.open(this.href, 'https://github.com/GunTen10/proj2', 'width=412, height=915');  //삼성 갤럭시 S20 울트라 크기
  })
});
