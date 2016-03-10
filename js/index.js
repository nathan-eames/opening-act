// opens the drawer

$(".open").click(function(){
  // slides out the drawer
  $("nav").toggleClass("openNav");
  // 
  $(".nav-screen").toggleClass("is-visible");
});
	
$(".close, .nav-screen").click(function(){
  
	$("nav").toggleClass("openNav");
  $(".nav-screen").removeClass("is-visible");
});


// nav drop downs

$( document ).ready(function() {
    $(".main-nav").click(function() {
      var $this = $(this).parent();
      //if this active
      if ($this.hasClass("active")) {
        $this
          .removeClass("active")
           // find child "slide"
          .find(".slide")
          // animate it up
          .slideUp("slow");
      } else {
        $(".with-sub")
          // remove all classes with active
          .removeClass("active")
          .find(".slide")
          // animate / slide all up
          .slideUp("slow");
        // get current clicked and slide down
        $this
          .addClass("active")
          .find(".slide")
          .slideDown("slow");
      }

    });

});


