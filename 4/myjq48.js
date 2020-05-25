$(document).ready(function(){
  $(".features-grid > img").each(function(){
    $(this).click(function(){
      $(this).next().prepend("Ви обрали:" + "<br><br><br>");
      
    });
  });
});