$(document).ready(function(){
  $(".top-nav li").click(function(){
    $(this).html(function(i,origText){
      alert(origText);
    });
  });
});