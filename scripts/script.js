
// "check off" specific todo by clicking or undo "check off"
$("ul").on("click", "li", function(){
  $(this).toggleClass("checked-off");
});

// "X" will delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropogation();
});

// Text input listener and makes input an li that's appended to bottom of ul
$("input[type='text']").on("keypress", function(event){
  if(event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

// toggle to show/hide the input
$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});