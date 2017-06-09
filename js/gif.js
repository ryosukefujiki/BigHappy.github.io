jQuery(function(){
    $('#header__img').hover(function() {
        $('#header__img').attr('src', 'img/title2.gif');
    }, function() {
        $(this).attr('src', 'img/title.gif');
    });
});
