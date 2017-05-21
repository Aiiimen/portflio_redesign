$(document).ready(function(){

//open and close menu
    $(".menu_icon").click(function(){
        $(".menu").show("fast");
    });

    $(".main_page_logo").click(function(){
      $(".menu").hide("fast");
    })
});
