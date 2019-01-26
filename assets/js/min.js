$(document).ready(function(){
     $(".click").click(function(){
         $("#shadow").fadeIn(500);
         $(".popUp").fadeIn(500);
         // $(".click").fadeOut(500);//ليش لماأخلي الكليك يختفي لما يطلع البوب اب ..بيطلع الشدو لفوق و بسير مش مغطي الصفحة كلها ؟؟؟
     });
});


$(".close" , "#shadow" ).click(function(){
    $( "#shadow").click(function(){
        $("#shadow").fadeOut(500);
        $(".popUp").fadeOut(500);
    });
});


