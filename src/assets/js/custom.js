
if ($(window).width() <= '1100') {
    openMenu('.nav_list li a', '#overlay');
}

function openMenu(el1) {
    $(el1).click(() => {
        $('#menu').toggleClass('hidden');
        $('#menu').toggleClass('flex');
        $('#overlay').toggleClass('hidden');
        
        if ($('#openMenu').attr('src') == '/DeliveryBuildingMaterials/src/assets/img/icon/menu.png') {
            $('#openMenu').attr('src', '/DeliveryBuildingMaterials/src/assets/img/icon/close.png');
        } else {
            $('#openMenu').attr('src', '/DeliveryBuildingMaterials/src/assets/img/icon/menu.png');
        }

        $('body').toggleClass('overflow-hidden');
    });
}

openMenu('#openMenu', '#overlay');
openMenu('#overlay', '#overlay');


// Плавный скролл
$(".nav_list li a").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top 
    }, 800);
});

// Кнопка вверх
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

// Шапка
if ($(window).width() >= '1170') { 
    $(function() {
        let header = $('#main');
        
        $(window).scroll(function() {
            if($(this).scrollTop() >= 60) {
                header.addClass('header_fixed');
            } else {
                header.removeClass('header_fixed');
            }

            if($(this).scrollTop() >= 60) {
                header.css({
                'background': '#fff',
                'transition': '.3s',
                'z-index': '55',
                'box-shadow': '0px 4px 8px -1px rgba(0, 0, 0, 0.25)',
                'padding': '15px 32px'
                });
            } else {
                header.css({
                'background': 'transparent',
                'transition': '.3s',
                'box-shadow': 'none',
                'padding': '26px 32px'
                });
            }
        });
    });
};