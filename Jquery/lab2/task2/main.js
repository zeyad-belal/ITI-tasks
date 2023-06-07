$(document).ready(function() {

  $(".span1, .span2").hide();

  $("main").on("mouseenter",function(){
    $("main").animate({"left" : "0px"})
  }).on("mouseleave",function(){
    $("main").animate({"left" : "-130px"})
  })

  $(".div1, .div2").on("click", function() {
    // Toggle the visibility of the span element underneath the clicked div
    $(this).next().slideToggle("slow");
  });
});