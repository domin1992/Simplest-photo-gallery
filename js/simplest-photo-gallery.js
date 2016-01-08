$(document).ready(function(){
  var minScreenWidth = 1200;
  var windowHeight = 0;

  var pathToBigImg = 'img/';

  $('.gallery img').on('click', function(){
    if($(window).width() > minScreenWidth){
      windowHeight = $(window).height();
      $('.photoslideshow-content img').css('max-height', (windowHeight * 0.895) + 'px');
      $('[data-gallery-order="previous"]').attr('data-gallery-order', 'none');
      $('[data-gallery-order="current"]').attr('data-gallery-order', 'previous');
      $('#photoslideshow-image').attr('src', pathToBigImg + splitImageName($(this).attr('src')));
      $(this).attr('data-gallery-order', 'current');
      $('.photoslideshow').show();
    }
  });

  $('#close_photoslideshow').on('click', function(){
    $('.photoslideshow').hide();
  });

  $('#left_photoslideshow').on('click', function(){
    if($(window).width() > minScreenWidth){
      if($('[data-gallery-order="current"]').prev().length){
        $('[data-gallery-order="previous"]').attr('data-gallery-order', 'none');
        $('[data-gallery-order="current"]').attr('data-gallery-order', 'previous');
        $('[data-gallery-order="previous"]').prev().attr('data-gallery-order', 'current');
        $('#photoslideshow-image').attr('src', pathToBigImg + splitImageName($('[data-gallery-order="current"]').attr('src')));
      }
    }
  });

  $('#right_photoslideshow').on('click', function(){
    if($(window).width() > minScreenWidth){
      if($('[data-gallery-order="current"]').next().length){
        $('[data-gallery-order="previous"]').attr('data-gallery-order', 'none');
        $('[data-gallery-order="current"]').attr('data-gallery-order', 'previous');
        $('[data-gallery-order="previous"]').next().attr('data-gallery-order', 'current');
        $('#photoslideshow-image').attr('src', pathToBigImg + splitImageName($('[data-gallery-order="current"]').attr('src')));
      }
    }
  });

  function splitImageName(img){
    var imgArray = [];
    var imgName = [];
    var imgSingleName = '';
    var enl = '';

    imgArray = img.split('/');
    imgName = imgArray[imgArray.length - 1].split('.');
    enl = imgName[imgName.length - 1];
    imgSingleName = imgName[0].slice(0, -1);
    return imgSingleName + '.' + enl;
  }
});
