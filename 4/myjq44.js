$(document).ready(function(){
  $(".head-moto-img").click(function(){
    $(this).html(function(i,origText){
      alert($(this).attr('src'));
    });
  });
});