var person = ocument.getElementById("person");
var form = document.getElementById("form");
var current;
var next = document.getElementsByClassName("Nbutton");
var previous = document.getElementsByClassName("Pbutton");
var left;
var opacity;
var scale;
var field;


$(".next").click(function(){
    if(field) 
    return false;
field = true;

current = $(this).parent();
next = $(this).parent.next();
$("#personli").eq($(".account").index(next)).addClass("active");
next.show();
current.animate(
    {opacity: 0},
    {
        name: function(resent){
            scale = 1-(1-resent);
            left = resent*50 + "%";
            opacity = 1-resent;
            current.css({
                transform: "scale(" + scale + ")", position: "absolute"
            });
            next.css({
                left: left, opacity: opacity
            });
        },
        complete: function(){
            current.hide();
            field = false;
        }
    }
)
})

$(".previous").click(function(){
    if(field)
    return false;
    field = true;
    
    current = $(this).parent();
previous = $(this).parent.previous();
$("#personli").eq($(".account").index(current)).removeClass("active");
previous.show();
current.animate(
    {opacity: 0},
    {
        name: function(resent){
            scale = 0.8+(1-resent);
            left = (1-resent)*50 + "%";
            opacity = 1-resent;
            current.css({
                transform: "scale(" + scale + ")", opacity: opacity
            })
        },            
            complete: function() {
                current.hide();
                field = false;
            }
    }
);
});

$(".submit").click(function(){
    return false;
});