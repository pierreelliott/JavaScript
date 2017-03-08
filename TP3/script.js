window.addEventListener("load", function() {
	var text = document.createElement("p");
	var links = document.getElementById("links");
	document.getElementById("text").appendChild(text);
	
	//ajax("chapitre1.json",callback );
	
	window.onhashchange = function() {
		ajax("chapitre" + window.location.hash.substr(1) + ".json", callback );
	};
	
	function addLink(a) {
		var link = document.createElement("a");
		link.href = a.link;
		link.textContent = a.txt;
		links.appendChild(link);
	}
	
	function resetPage() {
		while (links.hasChildNodes()) {  
			links.removeChild(links.firstChild);
		}
		text.textContent = "";
	}
	
	function callback(data) {
		resetPage();
		var chapterLinks = data.links;
		text.textContent = data.txt;
		
		chapterLinks.forEach( addLink );
	}
} )

function ajax(url, callback) {
	console.log("url : " + url);
	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.onerror = function() {
		console.log("Échec de chargement "+url);
	};
	req.onload = function() {
		if (req.status === 200) {
		  var data = JSON.parse(req.responseText);
		   callback(data);
		} else {
		  console.log("Erreur " + req.status);
		}
	};
	req.send();
} 