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
});
