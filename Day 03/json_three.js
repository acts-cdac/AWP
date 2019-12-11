function downloadData() {
  var myUrl = "https://jsonplaceholder.typicode.com/posts";

  var httpReq = new XMLHttpRequest();
  httpReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var object = JSON.parse(this.responseText);
      var html =
        "<table border='2px'><tr><th>ID</th><th>Title</th><th>Body</th>";
      for (let i = 0; i < object.length; i++) {
        html += "<tr>";
        html +=
          "<td>" +
          object[i].id +
          "</td>" +
          "<td>" +
          object[i].title +
          "</td>" +
          "<td>" +
          object[i].body +
          "</td>";
        html += "</tr>";
      }
      html += "</table>";

      document.getElementById("table").innerHTML = html;
    }
  };

  httpReq.open("GET", myUrl, true);
  httpReq.send();
}
