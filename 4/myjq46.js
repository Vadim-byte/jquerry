 $(document).ready(function(){
  $(".top-nav li").click(function(){
    $('img[src*=images/nav-icon.png]').html(function(i,origText){
      $(this).html("images/pic_eng.png");
	  
	  
	  //ЗАВДАННЯ
	  //При кліку на кнопку хедеру потрібно змінити код останнього елементу
      //меню, який відповідає за мову сторінки. У якості коду відобразити
      //зображення pic_eng.png.
	  //
	  //
	  //Коментар:
	  // Не працює, не знаю чого :(
	  
    });
  });
});