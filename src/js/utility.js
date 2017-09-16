
/*$(function(){
  console.log($('#third-carousel'));
  $('#third-carousel').carousel();

});*/
$(document).ready(function () {

    $('#third-carousel').carousel({
        interval: 10000
    })
    $('#third-carousel').find('.item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
            console.log('wtf');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
            console.log('wtf2');
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            console.log('wtf3');
        }
    });
});
