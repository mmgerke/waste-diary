$(document).ready(function() {
	window.setTimeout(function() { 
		$('[data-toggle="tooltip"]').tooltip();
		tooltip('#blue_4_', 'yogurt.jpg');
		tooltip('#blue_8_', 'plastic_bottle.jpg');

	}, 5500);
});

function getOffset(element)
{
    var bound = element.getBoundingClientRect();
    var html = document.documentElement;

    return {
        top: bound.top + window.pageYOffset - html.clientTop,
        left: bound.left + window.pageXOffset - html.clientLeft
    };
}

function tooltip(object, img) {
	$(object).mouseover(function(e){
		$(object).css('cursor','pointer');
		$(object).css('opacity','0.5');
		$(object).tooltip({
		  title: "<label>Yogurt Container</label><img src='/images/planting/" + img + "'' height='200px' style='max-width:200px; max-height:200px;'></img>",
		  html: true,
		  placement: 'top',
		  container: 'body'
		});
	})
	.mouseout(function() {
		$(object).css('opacity','1');
	});
}