$(document).ready(function(){
	
$(".blog-post:first").click(function(){
	$("#div_form_2 strong").next().prepend("Honda DN-1");;
});

$(".blog-post:second").click(function(){
	$(".categorie:second").next().prepend("Yamaha XJR 1200"); 
});
	
$(".blog-post:third").click(function(){
	$(".categorie:third").next().prepend("aPRILIA na 850gt mANA 2009");
});

$(".blog-post:fourth").click(function(){
	$(".categorie:fourth").next().prepend("hARLEY-dAVIDSON flstf fat boy 2007");

//ЗАВДАННЯ:
//При кліку на порядковий номер мотоциклу б/у, потрібно у текстове
//поле «Ваші побажання:» (у формі «Розрахунок вартості прокату
//мотоциклів») додавати рядок у вигляді Назва мотоциклу Вартість
//мотоциклу. Після кожного рядка перехід на новий.
//
//
//Коментар:
// Не розумію якою командою додати туди текс.

});