$(function () {
  // Header nav바 메뉴 클릭 시 해당 영역 이동
  $('.moveBtn01').click(function () {
    $('html, body').animate({ scrollTop: $('#about').offset().top - 70 }, 500);
  });
  $('.moveBtn02').click(function () {
    $('html, body').animate({ scrollTop: $('#skills').offset().top - 70 }, 500);
  });
  $('.moveBtn03').click(function () {
    $('html, body').animate({ scrollTop: $('#projects').offset().top - 70 }, 500);
  });
  $('.moveBtn04').click(function () {
    $('html, body').animate({ scrollTop: $('#contact').offset().top - 70 }, 500);
  });

  // projects 섹션 내 슬릭 슬라이더
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

  // aside(top버튼) 누를 시, 페이지 맨 위로 이동
  // 
  $(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('aside').fadeIn(500);
		} else {
			$('aside').fadeOut(500);
		}
	});
	// 2. 버튼 클릭하면 원하는 위치로 이동
	$('aside').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 500);
	});
});
