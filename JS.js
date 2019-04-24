var myUrl = 'file:///C:/Users/nickw/Documents/AngularTest/test-app/SoftGreen/test.json';
//  But if you make it from a browser, then it will work without problem ...

// However to make it work, we are going to use the cors-anywhere free service to bypass this
var proxy = 'https://cors-anywhere.herokuapp.com/';

// Execute request
var oReq = new XMLHttpRequest();

oReq.addEventListener("load", function () {
    console.log(this.responseText);
});
// Or post, etc
oReq.open("GET", proxy + myUrl);
oReq.send();
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'test.json', true);
  xobj.onreadystatechange = function() {
    if (xobj.readystate == 4 && xobj.status == "200"){
      callback(xobj.responseText);
    }
  };
xobj.send(null);
}

function init() {
  loadJSON(function(response) {
    var actual_JSON = JSON.parse(response);
  });
}
