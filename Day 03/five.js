// JQUERY executes this function once the document is loaded and ready

$(document).ready(function() {
  // JQUERY get syntax is
  // $.get(myURL, data , callback, datatype);
  // myurl: URL where the data is to be fetched
  // data: plain object or string sent to server along with the request
  // callback: function to be executed once the request has completed sucessfully
  // datatype: The type of data expected from the server

  // Set URL where the data is to be fetched
  var myURL = "https://jsonplaceholder.typicode.com/users";

  var outsideData;

  // Callback function to be executed once the request has completed sucessfully
  function getCallback(data, status) {
    console.log("Data is " + JSON.stringify(data));
    console.log("Status is " + status);

    // try to send json data outside the callback function XD
    outsideData = data;

    var html =
      "<table border='2px'><tr><th>Name</th><th>Email</th><th>Phone</th><th>City</th>";
    for (let i = 0; i < data.length; i++) {
      html += "<tr id='info'>";
      html +=
        "<td id='name'>" +
        data[i].name +
        "</td>" +
        "<td>" +
        data[i].email +
        "</td>" +
        "<td>" +
        data[i].phone +
        "</td>" +
        "<td>" +
        data[i].address.city +
        "</td>";
      html += "</tr>";
    }
    html += "</table>";

    $("#table").html(html);

    // Since the table is generated dynamically after the DOM is created, we need to call the "on"  selector to call the onclick event method

    $("#table").on("click", "td#name", function() {
      // The value of the clicked cell can be found with
      // console.log($(this).text());

      var clickedName = $(this).text();

      // To find id of the clicked name
      // We iterate the JSON data
      //(declared outside the get callback function and saved in the callback function of the JQuery get method )
      // When we find the name of the element is equal to the clicked name, we save the id in the variable declared outside the for each loop

      var clickedId;

      $.each(outsideData, function(iterator, value) {
        console.log("Iterator is " + iterator);
        console.log("Value is " + JSON.stringify(value));
        console.log("Value.name is " + value.name);
        console.log("clickedName is  " + clickedName);

        if (value.name == clickedName) {
          // alert(value.id);
          clickedId = value.id;
          return;
        }
      });

      // Now that we have the id, we can simply create a table dynamically and push it to the div created outside of the original table along with the button to close the div

      var html =
        "<button id='close-info'>X</button><table border='2px'><tr><th>Company</th><th>Website</th>";
      html += "<tr id='info'>";
      html +=
        "<td id='name'>" +
        outsideData[clickedId].company.name +
        "</td><td>" +
        outsideData[clickedId].website +
        "</td>";
      html += "</tr>";

      // Push the HTML to the new div above

      $("#info").html(html);

      // Show the element which might be hidden

      $("#info").show();
    });
  }

  // Hide the upper div on click of the close button

  $("#info").on("click", "#close-info", function() {
    $("#info").hide();
  });

  var datatype = "json";

  $.get(myURL, getCallback, datatype);
});
