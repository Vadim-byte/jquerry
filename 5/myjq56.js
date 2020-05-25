 $(document).ready(function(){
  $(".top-nav li").click(function(){
    $('img[src*=images/nav-icon.png]').html(function(i,origText){
      $(this).html("images/pic_eng.png");
    });
  });
});