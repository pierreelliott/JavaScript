window.addEventListener("load", function() {
	startTime();
	var nbAlarm = 0;
	document.getElementById("addAlarm").addEventListener("click", addAlarm(nbAlarm) );
});

function addAlarm(num) {
	num = num+1;
	
	var div = document.createElement("div");
	div.setAttribute("class", "alarm");
	div.setAttribute("id", "alarm"+num);
	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	var hInput = document.createElement("input");
	hInput.setAttribute("type", "number");
	hInput.setAttribute("min", "0");
	hInput.setAttribute("max", "23");
	var mInput = document.createElement("input");
	mInput.setAttribute("type", "number");
	mInput.setAttribute("min", "0");
	mInput.setAttribute("max", "59");
	var textInput = document.createElement("input");
	var soundSelect = document.createElement("select");
	// linkSound(soundSelect);
	var bRemove = document.createElement("button");
	bRemove.setAttribute("id", "btn"+num);
	bRemove.textContent = "-";
	
	div.appendChild(checkBox);
	div.appendChild(hInput);
	div.appendChild(mInput);
	div.appendChild(textInput);
	div.appendChild(soundSelect);
	div.appendChild(bRemove);
	
	var alarms = document.getElementById("alarms");
	alarms.appendChild(div);
}

function removeAlarm()
{
	
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('myClock').textContent = h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}