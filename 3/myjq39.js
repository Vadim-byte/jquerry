$(function(){
	
$(".blog-post:first").hover(function(){
 $(".categorie:first").show(1000);
 }, function(){
 $(".categorie:first").hide(1000);
});


	
$(".blog-post:second").hover(function(){
 $(".categorie:second").show(1000);
 }, function(){
 $(".categorie:second").hide(1000);
});


	
$(".blog-post:third").hover(function(){
 $(".categorie:third").show(1000);
 }, function(){
 $(".categorie:third").hide(1000);
});


	
$(".blog-post:fourth").hover(function(){
 $(".categorie:fourth").show(1000);
 }, function(){
 $(".categorie:fourth").hide(1000);
});
});

// ЗАВДАННЯ
// При наведені мишею на порядковий номер мотоциклу б/у потрібно у саме
// цього мотоциклу відобразити вартість за допомогою методу зміни
// прозорості елементу. Коли миша покидає елемент з номером мотоциклу –
// його вартість зникає методом зміни прозорості.
//
//
//Коментар:
//Якщо лишити лише першу функцію - усе працює, як добавляю нову - не працює. Скоріше всього я взяв не правильний тег, але не знаю який потрібно.
