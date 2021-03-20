document.addEventListener('DOMContentLoaded', function() {
    var preview_img = document.querySelector('.preview_img');
    var move_box = document.querySelector('.move_box');
    var big_box = document.querySelector('.big_box');
    var big_box_pic = big_box.querySelector('img');
    preview_img.addEventListener('mouseover', function() {
        move_box.style.display = 'block';
        big_box.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        move_box.style.display = 'none';
        big_box.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {

        var X = e.pageX - preview_img.offsetLeft;
        var Y = e.pageY - preview_img.offsetTop;
        move_box.style.left = X - move_box.offsetWidth / 2 + 'px';
        move_box.style.top = Y - move_box.offsetHeight / 2 + 'px';
        var MaxMove = preview_img.offsetWidth - move_box.offsetWidth;
        if (move_box.offsetLeft <= 0) {
            move_box.style.left = '0px';
        } else if (move_box.offsetLeft >= MaxMove) {
            move_box.style.left = MaxMove + 'px';
        }
        if (move_box.offsetTop <= 0) {
            move_box.style.top = '0px';
        } else if (move_box.offsetTop >= preview_img.offsetWidth - move_box.offsetWidth) {
            move_box.style.top = preview_img.offsetWidth - move_box.offsetWidth + 'px';
        }
        var MaxImgWidth = big_box_pic.offsetWidth - big_box.offsetWidth;
        var H = big_box_pic.offsetHeight - big_box.offsetWidth;
        big_box_pic.style.left = -MaxImgWidth * move_box.offsetLeft / MaxMove + 'px';
        var MaxImg = big_box_pic.offsetHeight - big_box.offsetHeight;
        big_box_pic.style.top = -H * move_box.offsetTop / MaxMove + 'px';
    })

})