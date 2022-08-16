
console.log("working ")
$("document").ready(
    function(){
        $("#form1").submit(
            function(){
                var fname=$("input[name='nm']").val();
                if(fname==""){
                    $("#msg").text("First Name Field is Required!...");
                    return false;
                }
            }
        );
    }
);