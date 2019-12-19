$(document).ready(() => {
  $("#display").click(async () => {
    var html = "<table>";

    await $.getJSON("products.json", function(data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        html += "<tr>";
        html +=
          "<td>" +
          data[i].Itemname +
          "</td>" +
          "<td>" +
          data[i].Price +
          "</td>";
        html += "</tr>";
        html += "Test";
      }
    });

    html += "</table>";
    $("#table").html(html);
  });
});
