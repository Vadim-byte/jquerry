$(document).ready(function(){
  $("#p").click(function(){
    $(this).html(function(i,origText){
      $(this).html("Зараз функція не доступна. Спробуйте пізніше.").css('font-style', 'italic');
    });
  });
});