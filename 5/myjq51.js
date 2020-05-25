$(document).ready(function(){
  $(".top-nav li").click(function(){
    $(this).html(function(i,origText){
       alert($(this).attr('href'));
	   
	   // Тут додати стиль в  
    });
  });
});