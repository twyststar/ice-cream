$(document).ready(function() {
  $("button").click(function(){
    $(".toBeRemoved").remove();
    var creams = ["chocolate", "vanilla", "cakebatter", "coffee"]
    creams.forEach(function(cream) {
      $(".favorite").append($("<li class='toBeRemoved'>").text(cream + " Is my favorite"));

    });
  });

});
