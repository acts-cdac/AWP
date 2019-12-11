function downloadData() {
  var myUrl = "products.json";

  var httpReq = new XMLHttpRequest();
  httpReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("table").innerHTML = this.responseText;
    }
  };

  httpReq.open("GET", myUrl, true);
  httpReq.send();
}
