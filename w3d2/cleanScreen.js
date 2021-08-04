$(() => {    
    $("#startButton").click(() => {
        // $('#startButton').click(function () {
        //     alert("Clean Screen");

        // });
    
            const width = $("input[name='width']").val();
            const growthAmount = $("input[name='growthAmount']").val();
            const speed = $("input[name='timeInterval']").val();
            const numberCircles = $("input[name='numberCircle']").val();

            const bg_colors = ["yellow","indigo","aqua","black","brown","dimgrey","apricot","bronze","coral","red"];

           for(let i=1; i<=numberCircles; i++){
                let current_bg_color =  bg_colors.shift();  

                let circle = $("<div>", {
                                "css":{
                                    "position":"absolute",
                                    "margin":"auto",
                                    "height": "30px",
                                    "border-radius": "50%",    
                                    "background-color": current_bg_color,    
                                    "width": parseInt(width)+"px"                          
                                },
                                "click":function(){
                                    clearInterval(timerId);
                                    circle.hide();
                                }
                            });

                if(i%2 == 0){
                    circle.css("left",(i*100)+"px",)
                }else{
                    circle.css("right",(i*100)+"px",)
                }

                $("#container").prepend(circle);

                timerId = setInterval(() => {           
                    circle
                    .css("width", (index,old) =>{
                    return parseInt(old) + parseInt(growthAmount) + "px";
                    }).css("height", (index,old) =>{
                        return parseInt(old) + parseInt(growthAmount) + "px";
                    });        
                },speed);
                bg_colors.push(current_bg_color);
           }
        }); 

    });