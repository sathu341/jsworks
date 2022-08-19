$("document").ready(()=>{
    $("#drp").click(()=>{
        $(".drop").slideToggle(2000);
    })


    $("document").click(function(e){
        console.log("hai");
       
        var key=$("#drp");
        if(e.target.id !== "drp"){


        $(".drop").hide();
        e.preventDefault();
        }
        
    
    })
});

