$(document).ready(function(){
	function change_width(selectorObj,w,h){
	
$(selectorObj).width(150).height(150)

	};
	
	function change_width_n(selectorObj,w,h){
	
$(selectorObj).width(100).height(100)

	};
	

$('img').each(function(){
$('img').click(function(){
    change_width(this);
	}, function(){
	change_width_n(this);
    });
  });
  //не работает