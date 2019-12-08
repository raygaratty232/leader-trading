function tabItem () {
	// перебов вкладок/табов
	var countTab = $('.tabs_item .tab');
	var countBlock = $('.slide_tabs');
	$(countTab).each( function (index, elem) {
		$(this).attr("tabss", "tabss" + index);
	} );

	$(countBlock).each( function (index, elem) {
		$(this).attr("id", "tabss" + index);
	} );
	// клик на таб
	$( ' .tabs_item > .tab ' ).click( function () {
		$(this).addClass('actTab');
		$(this).siblings().removeClass('actTab');
		var tabClick = $(this).attr("tabss");
		$('.slide_tabs').hide();
		$('#' + tabClick).fadeIn();

	} );
}
$(document).ready( function () {
	tabItem();
} );
