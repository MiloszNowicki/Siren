$(document).ready(function(){

  var list = $('#nav-ajax');
  function insertContent(categories){
    $.each(categories, function(id,category){
      var li=$('<li>', {'data-id':category.id}).addClass('list-ajax-item').text(category.category);
      list.append(li);
    })
  }
  function loadContent(){
    $.ajax({
      url:'http://localhost:3000/categories'
    }).done(function(response){
      list.empty();
      insertContent(response);
    }).fail(function(error){
      alert('fail');
    })
  }
  loadContent();
});
/*
$(document).ready(funct() {

    $('#third-carousel').carousel('pause');
    $('#third-carousel').find('.item').each(function () {
        var next_sibling = $(this).next();
        if (!next_sibling.length) {
            next_sibling = $(this).siblings(':first');
        }
        next_sibling.children(':first-child').find('img').clone().appendTo($(this).find('.image-flow'));

        if (next_sibling.next().length > 0) {
            next_sibling.next().children(':first-child').find('img').clone().appendTo($(this).find('.image-flow'));
        }
        else {
            $(this).siblings(':first').children(':first-child').find('img').clone().appendTo($(this).find('.image-flow'));
        }
    });
});


/*$(function(){
  console.log($('#third-carousel'));
  $('#third-carousel').carousel();
  $(document).ready(function () {

      $('#third-carousel').carousel({
          interval: 10000
      })
      $('#third-carousel').find('.item').each(function () {
          var next_sibling = $(this).next();
          if (!next_sibling.length) {
              next_sibling = $(this).siblings(':first');
              console.log('wtf');
          }
          next_sibling.children(':first-child').clone().appendTo($(this));

          if (next_sibling.next().length > 0) {
              next_sibling.next().children(':first-child').clone().appendTo($(this));
              console.log('wtf2');
          }
          else {
              $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
              console.log('wtf3');
          }
      });
  });

});*/
