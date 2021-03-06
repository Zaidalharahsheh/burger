

$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newdevoured = $(this).data("newdevoured");
  
      var newdevouredState = {
        devoured: newdevoured
      };
  
      // PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newdevoured);

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
      
      if ($("#Bg").val().trim()==="" || $("#Bg").val().trim()===" " || $("#Bg").val().trim()== null) {
        alert(" Enter A valid name !")  
      } else {
      var newBurger = {
        burger_name: $("#Bg").val().trim(),
      };
      //  POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");

          location.reload();
        }
      )};
    });
    
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
//DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);

          location.reload();
        }
      );
    });
  });
  