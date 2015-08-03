$(document).ready(function(){
	$(".slider").each(function(){ 
		var obj = $(this);
		$(obj).append("<div class='nav'></div>");
		$(obj).find("li").each(function(){
			$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
			$(this).addClass("slider"+$(this).index());
		});
		$(obj).find("span").first().addClass("on");
	});
});
function sliderJS(obj, sl){
	var ul = $(sl).find("ul");
	var bl = $(sl).find("li.slider"+obj);
	var step = $(bl).width();
	$(ul).animate({marginLeft: "-"+step*obj}, 500);
}
window.setInterval(function(){
	var n = $(".slider .nav span.on").next();
	if(n.length==0){
		n=$(".slider .nav span").first();
	}
	n.click();
},5000);
$(document).on("click", ".slider .nav span", function(){
	var sl = $(this).closest(".slider");
	$(sl).find("span").removeClass("on");
	$(this).addClass("on");
	var obj = $(this).attr("rel");
	sliderJS(obj, sl);
	return false;
});
$(document).ready(function(){
	$('.footer__search .search').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
 });
	$('.footer__search .search').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
});
$('.left__login').on('click', function(){
	$('.modal').fadeIn();
	$('.modal-fade').fadeIn();
	$('.modal-fade').css('height', $('body').height() + 'px');
});
$('.modal__header .close, .modal-fade').on('click', function(){
	$('.modal').fadeOut();
	$('.modal-fade').fadeOut();
});
$(document).keyup(function(e){
  if (e.keyCode == 27){
  	$('.modal').fadeOut();
  	$('.modal-fade').fadeOut();
  }   
});
$(document).keyup(function(){
	if ($('#login').val() && $('#pass').val() != ''){
		$('.form__button .button').removeAttr('disabled');
	} 
});