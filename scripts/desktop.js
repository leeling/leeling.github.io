$(document).ready(function () {
    //check if page is being read
    console.log("ready");
    $("ol li").on("mouseover mouseout", "a", function() {
        $("#" + $(this).data("img")).toggle();
    });
 
/*    $("ol li a").mouseover(function() {
        $("#" + $(this).data("img")).fadeIn("slow","linear");
    });
    $("ol li a").mouseout(function() {
        $("#" + $(this).data("img")).fadeOut("slow","linear");
    });
*/  
    $(function(){
        $("span.headline").each(function(i){
            len=$(this).text().length;
            if(len > 20) {
                $(this).text($(this).text().substr(0,20)+'...');
            }
        });
    });
});