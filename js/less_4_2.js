/*Первое задание*/

  $('.single-answer').hide();

  $('.single-item').on('click', function() {

    $(this).next().slideToggle(400);

  });

/*Второе задание*/


$('.single-answer2').hide();

$('.single-answer2:first').show();

$('.single-item2').on('click', function () {

      var answer = $(this).next();

      $('.single-answer2').not(answer).slideUp(400);
      answer.slideToggle(400);
});










