var ADDRESS = 'localhost';
var PORT = 8181;
var BASE_URL = 'http://' + ADDRESS + ':' + PORT; 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var obj = JSON.parse(this.responseText);
	  	var ul = document.getElementById("list-files");
	  	for(var i = 0; i < obj.length; i++){
			var file = obj[i];
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.setAttribute("href", BASE_URL + "/toDownload/" + file.fullname);
			a.appendChild(document.createTextNode(file.fullname));
			li.appendChild(a);
			ul.appendChild(li);
			ul.appendChild(document.createElement("br"));
			console.log(obj[i]);
	  	}
    }
};
xhttp.open("GET", BASE_URL + "/all", true);
xhttp.send();
