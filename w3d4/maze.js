$(function () { 
    let lose = false;
    let wrongDirection = false;

    $("div.boundary").on("mouseover", lost);
    $("#start").click(reset);
    $("#end").click(function () {
        if (!lose & !wrongDirection)
            alert("You win:]");
        else if(wrongDirection)
            alert("you followed the wrong direction!!");
        
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
            alert("Sorry, you lost");
        else
            alert("Click, on start to statover!")
        lose = true;

    }
    function reset() {
        $("div.boundary").removeClass("youlose");
        lose = false;
        wrongDirection = false;
    }



});