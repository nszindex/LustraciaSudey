var mainJs = new MainJsClass();

function MainJsClass() {
    var scope = this;

    this.linksToggle = function () {
        if($(".jsOpenLink").length){
            $(".jsOpenLink").click(function(e){
                $(this).next(".jsOpenBlock").slideToggle();

                e.preventDefault();
            })
        }
    };

    this.initPopups = function () {
      var openers = $('.jsPopupOpen'),
        $popup = $('.b-popup'),
        $popupData = $('.b-popup__data');

      openers.on({
        click: function(e){
          scope.initPopupsHeight();
          $popup.fadeIn(500);
          $popupData.animate({
            'right': 10
          }, 500);
          e.preventDefault();
        }
      });

      // closers
      $popup.each(function(){
        var closeIcon = $('.ico_close',this),
          bg = $('.b-popup__bg', this);
        closeIcon.add(bg).on({
          click: function(e){
            $popupData.animate({
              'right': -350
            }, 500);
            $(this).parents('.b-popup').fadeOut(500);
            e.preventDefault();
          }
        });
      });
    };

    this.initPopupsHeight = function () {
      var $windowHeight = $(window).height(),
        $popupData = $('.b-popup__data'),
        $popupDataHeight = $popupData.height();
      $popupDataHeight = $windowHeight - 20 - 50;
      $popupData.css('min-height', $popupDataHeight);
    };

    $(function(){
       scope.linksToggle();
      scope.initPopups();
      scope.initPopupsHeight();

       $('.definition__select-icon').click(function() {
           if($(this).hasClass("definition__select-icon-active")) {
               $(this).removeClass('definition__select-icon-active');
           }
           else {
               $('.definition__select-icon').removeClass('definition__select-icon-active');
               $(this).addClass('definition__select-icon-active');
           }
       });
        $('.definition__select-dsc').click(function() {
            if($(this).parent('.definition__select-item').find('.definition__select-icon').hasClass("definition__select-icon-active")) {
                $(this).parent('.definition__select-item').find('.definition__select-icon').removeClass('definition__select-icon-active');
            }
            else {
                $('.definition__select-icon').removeClass('definition__select-icon-active');
                $(this).parent('.definition__select-item').find('.definition__select-icon').addClass('definition__select-icon-active');
            }
        });
        $('.form__select-ttl').click(function() {
            if($(this).parent('.form__select-item').find('.definition__select-icon').hasClass("definition__select-icon-active")) {
                $(this).parent('.form__select-item').find('.definition__select-icon').removeClass('definition__select-icon-active');
            }
            else {
                $('.definition__select-icon').removeClass('definition__select-icon-active');
                $(this).parent('.form__select-item').find('.definition__select-icon').addClass('definition__select-icon-active');
            }
        });

    });
}