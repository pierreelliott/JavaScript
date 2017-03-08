window.addEventListener("load", function() {
	startTime();
	var nbAlarm = 0;
	document.getElementById("addAlarm").addEventListener("click", addAlarm );
});

function addAlarm() {
	var div = document.createElement("div");
	div.setAttribute("class", "alarm");
	
	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.addEventListener("change", removeAlarm );
	
	var hInput = document.createElement("input");
	hInput.setAttribute("type", "number");
	hInput.setAttribute("min", "0");
	hInput.setAttribute("max", "23");
	hInput.value = "0";
	
	var mInput = document.createElement("input");
	mInput.setAttribute("type", "number");
	mInput.setAttribute("min", "0");
	mInput.setAttribute("max", "59");
	mInput.value = "0";
	
	var textInput = document.createElement("input");
	
	
	var soundSelect = document.createElement("select");
	var sound1 = document.createElement("option");
	sound1.textContent = "sound1.wav";
	var sound2 = document.createElement("option");
	sound2.textContent = "sound2.wav";
	var sound3 = document.createElement("option");
	sound3.textContent = "Strange Slip.wav";
	
	soundSelect.appendChild(sound1);
	soundSelect.appendChild(sound2);
	soundSelect.appendChild(sound3);
	
	var bRemove = document.createElement("button");
	bRemove.textContent = "-";
	bRemove.addEventListener("click", function() {
		document.getElementById("alarms").removeChild(div);
	} );

	div.appendChild(checkBox);
	div.appendChild(hInput);
	div.appendChild(mInput);
	div.appendChild(textInput);
	div.appendChild(soundSelect);
	div.appendChild(bRemove);

	var alarms = document.getElementById("alarms");
	alarms.appendChild(div);
	
	
	function removeAlarm() {
		if(/blink/.test(div.className)) {
			div.classList.remove("blink");
			var texts = document.getElementById("text");
			texts.removeChild(function() {
				for(var j = 0; j < texts.childNodes.length; j++) {
					if(texts.childNodes[j].textContent == textInput.textContent)
						return texts.childNodes[j];
				}
			} );
		}
	}
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('myClock').textContent = h + ":" + m + ":" + s;
	checkAlarms(h,m,s);
	
	setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function checkAlarms(h,m,s) {
	var alarms = document.getElementsByClassName("alarm");
	var text = document.createElement("p");
	for(var i = 0; i < alarms.length; i++) {
		if(alarms[i].firstChild.checked) {
			var aH = alarms[i].childNodes[1].value;
			var aM = alarms[i].childNodes[2].value;
			if(aH == h && aM == m) {
				//document.getElementById("sound").src = alarms[i].childNodes[4].value;
				//document.getElementById("sound").autoplay = true;
				alarms[i].classList.add("blink");
				
				text.textContent = alarms[i].childNodes[3].value;
				var texts = document.getElementById("text");
				
				if((function() {
					for(var j = 0; j < texts.childNodes.length; j++) {
						if(texts.childNodes[j].textContent == textInput.textContent)
							return texts.childNodes[j];
					}
				}).textContent == text.textContent ) {
					document.getElementById("text").appendChild(text);
				}
			}
		}
	}
}