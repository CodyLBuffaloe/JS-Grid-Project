/**
 * Created by codybuffaloe on 12/21/15.
 */
var squares;
$(document).ready(function(){
    var squares= prompt("How many squares would you like? (Creates a grid of x by x squares)");
    createGrid(squares);
    mouseTracker();
    clearGrid();

});

function createGrid(squares){

    for(var i= 0;i<squares*squares;i++) {
        $('.container').append('<div class="grid"></div>');
    }
    var high= parseFloat($('.container').css('height').replace('px'," "));
    var wide= parseFloat($('.container').css('width').replace('px'," "));

    high=parseFloat((high-2*squares)/squares);
    wide= parseFloat((wide-2*squares)/squares);

    $(".grid").css('height',high);
    $(".grid").css('width',wide);

};

function clearGrid(){
    $('#reset').on('click', function(){
        $(".grid").remove();
        squares= prompt("How many squares would you like? (Creates a grid of x by x squares)");
        createGrid(squares);
        mouseTracker();
    })

}
function mouseTracker(){
    $(".grid").mouseenter(function () {
        $(this).fadeOut('fast',function(){
            $(this).css('background-color','white');
            $(this).fadeIn('slow', function(){
                $(this).css('background-color','black');
            });});
    });
}

