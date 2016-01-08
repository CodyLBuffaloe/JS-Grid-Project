/**
 * Created by codybuffaloe on 12/21/15.
 */
var squares = 2;
$(document).ready(function(){
    squares= prompt("How many squares would you like? (Creates a grid of x by x squares)");
    createGrid(squares);



    $(".grid").mouseenter(function () {
        $(this).fadeOut('fast',function(){
            $(this).css('background-color','white');
            $(this).fadeIn('slow', function(){
                $(this).css('background-color','black');
            });});
    });

});

function createGrid(squares){
    for(var i= 0;i<squares*squares;i++){
    $('.container').append('<div class="grid"></div>');
    }
    var high= parseFloat($('.container').css('height').replace('px'," "));
    var wide= parseFloat($('.container').css('width').replace('px'," "));

    high=parseFloat((high-2*squares)/squares);
    wide= parseFloat((wide-2*squares)/squares);

    $(".grid").css('height',high);
    $(".grid").css('width',wide);

};

