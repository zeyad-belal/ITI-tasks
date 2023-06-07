$("body").append("<form><input> <button>add</button></form>");
$("body").append("<main></main>");

$("form").on("submit" , function(e){
  e.preventDefault()
  if(($("input").val()).length > 0){
    $("main").append("<div>" + $("input").val() + "<button>delete</button>" + "</div>")
    $("input").val("")
  }
})

$("main").on("click", "button:contains('delete')", function(e) {
  e.target.parentNode.remove();
});


/