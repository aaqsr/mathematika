$(window).load(function () {
    var in_view = new Waypoint.Inview({
        element: $('#quote')[0],
        enter: function () {
            $('#quote').addClass('start');
        },
        exit: function () {  // optionally
            $('#quote').removeClass('start');
        }
    });
});