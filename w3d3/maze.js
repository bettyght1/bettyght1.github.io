$(function () { 
    let lose = false;
    let wrongDirection = false;

    $("div.boundary").on("mouseover", lost);
    $("#start").click(reset);
    $("#end").mouseover(function () {
        if (!lose & !wrongDirection)
        $("#status").html("You win");
            //alert("You win:]");
        else if(wrongDirection)
        $("#status").html("you followed the wrong direction!!");
            //alert("you followed the wrong direction!!");
        
    });

    $("#maze").on("mouseleave", checkCo);

    function checkCo(evt) {
        if (!lose){
            wrongDirection = true;            
        }
    }

    function lost() {

        $("div.boundary").addClass("youlose");
        if (!lose)
        $("#status").html("Sorry, you lost");
            //alert("Sorry, you lost");
        else
        $("#status").html("Click, on start to statover!");
           // alert("")
        lose = true;

    }
    function reset() {
        $("div.boundary").removeClass("youlose");
        lose = false;
        wrongDirection = false;
    }



});