$('.menu_btn').on('click', function(){
    $('.menu_list').toggleClass('menu_list-active');
});


 $(document).ready(function() {
    $('.gallery_item-inner').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
    });
  });

    $('.gallery_slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/circle-left.svg"" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/circle-right.svg"" alt=""></button>',
  });

  jQuery(document).ready(function(){   
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 600) {
            jQuery('#myBtn').css('opacity', '1');
        } else {
            jQuery('#myBtn').css('opacity', '0');
        }
    });
 
    jQuery('#myBtn').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 850);
        return false;
    });
});