$(document).ready(function(){
		function change_width(selectorObj,w){
	
$(selectorObj).width(50)

	};
	function change_width_n(selectorObj,w){
	
$(selectorObj).width(150)

	};
	
$("img").hover(function(){
 change_width(this);
 }, function(){
 change_width_n(this);
});
});