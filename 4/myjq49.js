$(document).ready(function(){
	
$(".blog-post:first").hover(function(){
	$(".categorie:first").next().prepend("Ви обрали:" + "");;
 $(".categorie:first").show(1000);
 }, function(){
 $(".categorie:first").hide(1000);
});

$(".blog-post:second").hover(function(){
	$(".categorie:second").next().prepend("Ви обрали:" + "");
 $(".categorie:second").show(1000);
 }, function(){
 $(".categorie:second").hide(1000);
});


	
$(".blog-post:third").hover(function(){
	$(".categorie:third").next().prepend("Ви обрали:" + "");
 $(".categorie:third").show(1000);
 }, function(){
 $(".categorie:third").hide(1000);
});


	
$(".blog-post:fourth").hover(function(){
	$(".categorie:fourth").next().prepend("Ви обрали:" + "");
 $(".categorie:fourth").show(1000);
 }, function(){
 $(".categorie:fourth").hide(1000);
 
});

//При наведенні на порядковий номер мотоциклу б/у, потрібно змінити
//текст вартості поточного елементу, додавши на початок текст "Бажаєте
//замовити? " і відобразити методом зміни прозорості елементу.
//Після того, як курсор покинув порядковий номер мотоциклу б/у –
//заховати оновлений елемент аналогічним методом.
//Зверніть увагу! Потрібно слідкувати, щоб текст "Бажаєте замовити? "
//не дублювався при кожному наведенні, не повторювався 2 та більше
//разів.
//
//
//Коментар:
//Завдання схоже з 3.10
// Працює лише з першим номером, інші не працюють, а також  дублюєтся "бажаєте замовити".


});