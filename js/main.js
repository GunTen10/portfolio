$(function () {
  // navBar ON/OFF
  // navBar ON
  $('.mobile_navBtn').click(function () {
    $('.mobile_nav').animate({ right: 0 }, 300);
    $('.mobile_nav').show();
    $('.dark_nav').show();
  });
  // // navBar OFF
  $('.mobile_nav .close, .dark_nav').click(function () {
    $('.dark_nav').hide();
    $('.mobile_nav').hide();
    $('.mobile_nav').animate({ right: -300 }, 300);
  });

  // Header nav바 메뉴 클릭 시, 해당 영역 이동
  var introScroll = $('#home').offset().top - 70;
  var skillScroll = $('#skills').offset().top - 70;
  var projectScroll = $('#projects').offset().top - 70;
  var contactScroll = $('#contact').offset().top - 70;

  $('.moveBtn01').click(function () {
    $('html, body').animate({ scrollTop: introScroll }, 500);
  });
  $('.moveBtn02').click(function () {
    $('html, body').animate({ scrollTop: skillScroll }, 500);
  });
  $('.moveBtn03').click(function () {
    $('html, body').animate({ scrollTop: projectScroll }, 500);
  });
  $('.moveBtn04').click(function () {
    $('html, body').animate({ scrollTop: contactScroll }, 500);
  });

  // 해당 영역 이동 시, Header nav바 메뉴 색상 변경
  $(window).scroll(function () {
    var winScroll = $(this).scrollTop();
    var skillScroll = $('#skills').offset().top - 70;
    var projectScroll = $('#projects').offset().top - 70;
    var contactScroll = $('#contact').offset().top - 70;
    var footerScroll = $('footer').offset().top - 30;

    if (winScroll < skillScroll) {
      $('.moveBtn01').addClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
    } else if (winScroll < projectScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').addClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
    } else if (winScroll < contactScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').addClass('on');
      $('.moveBtn04').removeClass('on');
    } else if (winScroll < footerScroll) {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').addClass('on');
    } else {
      $('.moveBtn01').removeClass('on');
      $('.moveBtn02').removeClass('on');
      $('.moveBtn03').removeClass('on');
      $('.moveBtn04').removeClass('on');
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

  $('.box03 .link a:first-child').on('click', function (e) {
    e.preventDefault();
    window.open(this.href, 'https://gunten10.github.io/sns_sass', 'width=390, height=844');  // 아이폰 12 Pro 크기
  })
  $('.box04 .link a:first-child').on('click', function (e) {
    e.preventDefault();
    window.open(this.href, 'https://github.com/GunTen10/proj2', 'width=390, height=844');  // 아이폰 12 Pro 크기
  })
});
