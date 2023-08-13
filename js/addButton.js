AFRAME.registerComponent("create-buttons", 
{ init: function() { 
    // 1. Create the  order button
     var button1 = document.createElement("button");
      button1.innerHTML = "ORDER NOW"; 
      button1.setAttribute("id", "order-button");
       button1.setAttribute("class", "btn btn-danger ml-3 mr-3");
      // 1. Create the  bill button
      var button2 = document.createElement("button");
      button2.innerHTML = "Order SUMMARY"; 
      button2.setAttribute("id", "order-summary-button");
      button2.setAttribute("class", "btn btn-danger ml-3 mr-3");

      
    var button = document.getElementsById("Button")
    button.appendChild("button1,button2");
    }
}
    )