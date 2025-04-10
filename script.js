function slideSwitch() {
    var $active = $('#slideshow img.active');
    var $next = $active.next();

    if ($next.length === 0) {
        $next = $('#slideshow img:first');
    }

    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}

$(function () {
    setInterval(slideSwitch, 5000);
});