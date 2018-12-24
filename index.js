$(function () {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    console.log(name);
    $('#name').append('~from ' + name ? name : 'santa');
    $('.tlt').textillate({ in: { effect: 'rollIn' } });

    $('.share').click(function (evt) {
        var base_url = window.location.origin;
        var shareMsg = base_url + '?name=' + $('.xmas-input').val();
        console.log(shareMsg);
        var anchor = $('.xmas-a');
        anchor.attr('href', "whatsapp://send?text=" + shareMsg);
        anchor.attr('data-action', "share/whatsapp/share");
        anchor.get(0).click();
    });
});