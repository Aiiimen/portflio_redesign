$(document).ready(function(){

//open and close menu
    $(".menu_icon").click(function(){
        $(".menu").show("fast");
    })

    $(".main_page_logo").click(function(){
      $(".menu").hide("fast");
    })

    //mouse enter project_container
    //
    $(".project_container", this).mouseenter(function(){

      $(".work_description", this).show("fast");
      $(".type_of_work", this).show("fast");
      $(".work_done", this).show("fast");
    })

    $(".project_container", this).mouseleave(function(){
      $(".work_description", this).hide("fast");
      $(".type_of_work", this).hide("fast");
      $(".work_done", this).hide("fast");
    })

    //blog on hover

    $(".post_holder", this).mouseenter(function(){

      //enlarge height of post_info
      //set post_date $ post_description to display: block

      $(".post_date", this).show("2000");
      $(".post_description", this).show("2000");

    })

    $(".post_holder", this).mouseleave(function(){

      $(".post_date", this).hide("2000");
      $(".post_description", this).hide("2000");
    })


});
