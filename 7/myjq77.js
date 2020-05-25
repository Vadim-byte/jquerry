$(document).ready(function(){
	 		function change_width_b(selectorObj,w,h){
	
$(selectorObj).width(150).hight(150);

	};
	 		function change_width_s(selectorObj,w,h){
	
$(selectorObj).width(50).hight(50);

	};
	
$("img").hover(function(){
 change_width_b(this);
 }, function(){
 change_width_s(this);
});


});