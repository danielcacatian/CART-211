// Navbar .js code provided by WEBLABLA @mpokoj at Codepen.io/mpokoj
$(function(){
$(window).on("load",function(pager){
  var eventElemArray = [];
  var _count = 0;
  var _countFix = 0;
  $(window).on('load scroll resize',function(){
    eventElemArray = [];
    _count = 0;
    $('[data-nav]').each(function(i,pager){
      eventElemArray.push( $(pager).offset().top );
    });
    for(var _i = 0;_i < eventElemArray.length; _i++){
      if( $(window).scrollTop() + ($(window).height() * 0.5) > eventElemArray[_i] ){
        _count++;
      }
    }
    if(_count !== _countFix){
      _countFix = _count;
      $('.nav__dot li').removeClass('current');
      $('.nav__dot li').eq(_count-1).addClass('current');
    }
  });

  $('.nav__dot li').on('click', function() {
    var speed = 200;
    var href = $(this).attr('data-nav-href');
    var offset = $(this).attr('data-nav-offset')|0;
    var target = $(href == '' ? 'html' : href);
    var position = target.offset().top + offset
    $('body,html').animate({scrollTop:position}, speed);
    return false;
  });
});
});
