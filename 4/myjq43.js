$(document).ready(function(){
  $(".link-moto").click(function(){
    $(this).html(function(i,origText){
      alert($(this).attr('href'));
    });
  });
});