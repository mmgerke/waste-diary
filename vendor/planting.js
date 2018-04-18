var sun = {
	orangeImg: ['tissue.jpg', 'tissue.jpg', 'glass_tissue.jpg', 'school_paper_towel.jpg', 'napkin.jpg', 'napkin.jpg'],
	orangeTitle: ['Tissue', 'Tissue', 'Glasses Cleaning Paper', 'Paper Towel', 'Napkin', 'Napkin'],
	yellowImg: ['qtip.jpg','qtip.jpg', 'foam_cup.jpg', 'foam_plate.jpg'],
	yellowTitle: ['Q-tip', 'Q-tip', 'Foam Cup', 'Foam Plate']
};

var mon = {
	blueImg: ['plastic_wrap.jpg'],
	blueTitle: ['Plastic Wrap - Food contamination'],
	orangeImg: ['tissue.jpg', 'tissue.jpg', 'tissue.jpg', 'glass_tissue.jpg', 'school_napkin.jpg', 'napkin.jpg', 'napkin.jpg'],
	orangeTitle: ['Tissue', 'Tissue', 'Tissue', 'Glasses Cleaning Paper', 'Napkin', 'Napkin', 'Napkin'],
	yellowImg: ['snack.jpg','pepper_pack.jpg'],
	yellowTitle: ['Snack bag', 'Pepper Pack'],
	pinkImg: ['yogurt.jpg'],
	pinkTitle: ['Yogurt Lid']
};

var tues = {
	blueImg: ['ziploc.jpg', 'plastic_wrap.jpg'],
	blueTitle: ['Ziploc - Food contamination', 'Plastic Wrap - Food contamination'],
	orangeImg: ['tissue.jpg', 'tissue.jpg', 'glass_tissue.jpg', 'napkin.jpg', 'napkin.jpg'],
	orangeTitle: ['Tissue', 'Tissue', 'Glasses Cleaning Paper', 'Napkin', 'Napkin'],
	purpleImg: ['bone.jpg','bone.jpg'],
	purpleTitle: ['Pork Bone', 'Pork Bone']
};

var wed = {
	blueImg: ['ziploc.jpg', 'plastic_wrap.jpg'],
	blueTitle: ['Ziploc - Food contamination', 'Plastic Wrap - Food contamination'],
	orangeImg: ['tissue.jpg', 'tissue.jpg', 'tissue.jpg', 'glass_tissue.jpg', 'school_napkin.jpg', 'napkin.jpg', 'napkin.jpg'],
	orangeTitle: ['Tissue', 'Tissue', 'Tissue', 'Glasses Cleaning Paper', 'Napkin', 'Napkin', 'Napkin']
};

var thurs = {
	blueImg: ['plastic_tray.jpg', 'ice-cream.jpg'],
	blueTitle: ['Plastic Tray', 'Plastic Wrap'],
	orangeImg: ['tissue.jpg','school_paper_towel.jpg', 'paper_tray.jpg', 'paper_plate.jpg'],
	orangeTitle: ['Tissue', 'Paper Towel', 'Paper Container', 'Paper Plate'],
	yellowImg: ['ice-cream.jpg','seasoning.jpg'],
	yellowTitle: ['Wooden Stick', 'Seasoning Pack'],
	pinkImg: ['foil_trash.jpg'],
	pinkTitle: ['Food Aluminum Foil Cover'],
	purpleImg: ['ice-cream.jpg'],
	purpleTitle: ['Unfinished Ice-cream']
};

var fri = {
	blueImg: ['ziploc.jpg', 'plastic_wrap.jpg'],
	blueTitle: ['Ziploc - Food contamination', 'Plastic Wrap - Food contamination'],
	orangeImg: ['tissue.jpg', 'tissue.jpg', 'tissue.jpg', 'glass_tissue.jpg', 'napkin.jpg', 'napkin.jpg'],
	orangeTitle: ['Tissue', 'Tissue', 'Tissue', 'Glasses Cleaning Paper', 'Napkin', 'Napkin'],
	yellowImg: ['qtip.jpg','Hbag.jpg',  'Hbag1.jpg', 'snack.jpg','ramen_cup.jpg', 'parmesan1.jpg', 'Hbag.jpg'], // need image
	yellowTitle: ['Q-tip', 'Online Clothing Bag', 'Package Bag', 'Snack Bag',  'Ramen Cup', 'Cheese Pack', 'Online Clothing Bag']
};

var sat = {
	orangeImg: ['tissue.jpg', 'tissue.jpg', 'tissue.jpg', 'tissue.jpg', 'glass_tissue.jpg', 'napkin.jpg', 'napkin.jpg'],
	orangeTitle: ['Tissue', 'Tissue', 'Tissue', 'Tissue', 'Glasses Cleaning Paper', 'Napkin', 'Napkin'],
	yellowImg: ['snack1.jpg', 'snack2.jpg', 'parmesan.jpg', 'parmesan.jpg', 'seasoning.jpg', 'ramen_bag.jpg'],
	yellowTitle: ['Snack Bag', 'Snack Bag', 'Cheese Pack', 'Cheese Pack', 'Seasoning Pack', 'Ramen Bag'],
	pinkImg: ['yogurt.jpg'],
	pinkTitle: ['Yogurt Lid']
};



$(document).ready(function() {
	window.setTimeout(function() { 
		$('[data-toggle="tooltip"]').tooltip();
		//Sun d
		tooltip('#blue_8_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_7_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_6_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_5_', 'Plastic Spoon', 'plastic_spoon.jpg');
		//Mon d
		tooltip('#blue_17_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_18_', 'Plastic Bag', 'plastic_bag.jpg'); //
		tooltip('#blue_19_', 'Yogurt Container', 'yogurt.jpg'); 
		tooltip('#blue_20_', 'Plastic Spoon', 'plastic_spoon.jpg');
		//Tues
		tooltip('#blue_14_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_15_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_16_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#orange', 'Paper', 'paper.jpg');
		tooltip('#orange_1_', 'Paper', 'paper1.jpg');
		tooltip('#orange_2_', 'Paper', 'paper2.jpg');
		//Wed d
		tooltip('#blue_9_', 'Plastic Bottle', 'plastic_bottle.jpg');
		//Thurs d
		tooltip('#blue', 'Yogurt Container', 'yogurt.jpg');
		tooltip('#blue_1_', 'Plastic Fork', 'plastic_fork.jpg');
		tooltip('#pink', 'Fountain Drink Can', 'sprite.jpg');
		tooltip('#pink_2_', 'Aluminum Foil - Cleaned', 'aluminum_foil.jpg');
		//Fri d
		tooltip('#blue_10_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_11_', 'Plastic Bottle', 'plastic_bottle.jpg');
		tooltip('#blue_12_', 'Plastic Bag', 'plastic_bag.jpg');
		tooltip('#blue_13_', 'Plastic Wrap - No food contamination', 'plastic_wrap.jpg');
		tooltip('#pink_3_', 'Fountain Drink Can', 'redbull.jpg');
		//Sat d
		tooltip('#blue_4_', 'Yogurt Container', 'yogurt.jpg');
		tooltip('#blue_3_', 'Plastic Wrap - No food contamination', 'plastic_wrap.jpg');
		tooltip('#blue_2_', 'Plastic Wrap - No food contamination', 'plastic_wrap.jpg');
		tooltip('#pink_1_', 'Cheese Foil Cover - Cleaned', 'foil_cover.jpg');

		hovering_holes(['orange', 'yellow'], 'sun', sun);
		hovering_holes(['blue', 'orange', 'yellow', 'pink'], 'mon', mon);
		hovering_holes(['blue', 'orange', 'purple'], 'tues', tues);
		hovering_holes(['blue', 'orange'], 'wed', wed);
		hovering_holes(['blue', 'orange', 'yellow', 'pink', 'purple'], 'thurs', thurs);
		hovering_holes(['blue', 'orange', 'yellow'], 'fri', fri);
		hovering_holes(['orange', 'yellow', 'pink'], 'sat', sat);


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

function tooltip(object, item, img) {
	$(object).mouseover(function(e){
		$(object).css('cursor','pointer');
		$(object).css('opacity','0.5');
		$(object).tooltip({
		  title: "<label>" + item + "</label><img src='/images/planting/" + img + "'' height='200px' style='max-width:200px; max-height:200px;'></img>",
		  html: true,
		  placement: 'top',
		  container: 'body'
		});
	})
	.mouseout(function() {
		$(object).css('opacity','1');
	});
}

function tooltipHole(object, item, img) {
	object.mouseover(function(e){
		object.css('cursor','pointer');
		object.css('opacity','0.5');
		object.tooltip({
		  title: "<label>" + item + "</label><br><img src='/images/planting/" + img + "'' height='200px' style='max-width:200px; max-height:200px;'></img>",
		  html: true,
		  placement: 'top',
		  container: 'body'
		});
	})
	.mouseout(function() {
		object.css('opacity','1');
	});
}

function hovering_holes(list, day, data) {
	list.forEach(function(c) {
		$('#hole #' + day + ' .' + c + ' path').each(function(index) {
			tooltipHole($(this), data[c+'Title'][index], data[c+'Img'][index]);
		});
	});
}