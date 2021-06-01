var canvas=new fabric.canvas("myCanvas");

player_x = 10;
player_y = 10;
body_img_width = 30;
body_img_height = 30;
var player_object = "";
var img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        img_object = Img;
        img_object.scaleToWidth(body_img_width);
        img_object.scaleToHeight(body_img_height);
        img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(img_object);
    });
}