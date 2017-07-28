$(document).ready(function() {
    var total = 0;
    function runOperation(pass){
        var num1 = pass.text();
        $(".screen").text(num1);
        $(".method").on("click",function(){
            $(".number").removeClass("active");
            $(".method").removeClass("active");
            $(".modifier").removeClass("active");
            $(this).toggleClass("active");
            if($(this).text() === "="){
                $(".screen").text(num1);
            } else {
                var method = $(this).text();
                $(".number").on("click",function(){
                    var num2 = $(this).text();
                    if(method === "/"){
                        total = (Number(num1)/Number(num2));
                        total = total.toFixed(6);
                    } else if(method === "*"){
                        total = (Number(num1)*Number(num2));
                    } else if(method === "+"){
                        total = (Number(num1)+Number(num2));
                    } else if(method === "-"){
                        total = (Number(num1)-Number(num2));
                    } else {
                        $(".screen").text("ERROR");
                    }
                    $(".screen").text(total);
                    total = 0;
                });    
            }
        });
    }
    $("#CLEAR").on("click",function(){
        location.reload();
    });
    $(".number").on("click",function() {
        $(".number").removeClass("active");
        $(".method").removeClass("active");
        $(".modifier").removeClass("active");
        $(this).toggleClass("active");
        var pass = $(this);
        runOperation(pass);
    });
});