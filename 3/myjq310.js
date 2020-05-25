$(".contatct-active").click(
    function() {
       $(".contatct-active").html("ua");
	$(".active").html("Home");
	$(".page-scroll m2").html("Motocycles");
	$(".page-scroll m3").html("Sale");
	$(".page-scroll m4").html("Forum");
	$(".page-scroll m5").html(" Contacts");
    }, function() {
	$(".contatct-active").html("eng"); 
	$(".active").html("Головна");
	$(".page-scroll m2").html("Мотоцикли");
	$(".page-scroll m3").html("Розпродаж");
	$(".page-scroll m4").html("Форум");
	$(".page-scroll m5").html(" Контакти");
    
	});
// ЗАВДАННЯ:
// До меню сторінки додайте останнім пунктом наступний код:
// <li class="contatct-active m6" class="page-scroll"><a
// href="#">eng</a></li> (Зроблено)
//
// При клікані на цей доданий елемент усі пункти меню повинні стати на
// англійській мові - Home, Motorcycles, Sale, Forum, Contacts.
// Сама кнопка повинна змінити текст для перекладу на українську мову -
// ua.
// При клікані на кнопку ua текст меню повинен повернутися у початковий
// стан (українською мовою).
//
//
// Коментар:
// Схоже завдання на 3.8:
// (Не розумію, як зробити другий клік по елементу. Начебто логічно зробив, але не працює.)