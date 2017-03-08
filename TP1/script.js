function checkAge() {
	var age = document.getElementById("age").value;
	return (age >= 18);
}

function checkId() {
	var identifiant = document.getElementById("identifiant").value;
	var regexp = new RegExp("[a-zA-Z]{1,12}");
	return (regexp.test(identifiant));
}

// Ne fonctionne pas
function checkMdp() {
	var mdp = document.getElementById("mdp").value;
	return /(([a-z]+)|([A-Z]+)|([0-9]+)|(\W+)){8,}/.test(mdp);
}

function forceMdp() {
	var mdp = document.getElementById("mdp").value;
	console.log("taille : " + mdp.length );
	var cpt = 0;
	if(/[a-z]+/.test(mdp))
		cpt += 20;
	if(/[A-Z]+/.test(mdp))
		cpt += 20;
	if(/[0-9]+/.test(mdp))
		cpt += 20;
	if(/\W+/.test(mdp))
		cpt += 20;
	if(mdp.length >= 8)
		cpt += 20;
	return cpt;
}

function checkMdp2() {
	var mdp = document.getElementById("mdp").value;
	var mdp2 = document.getElementById("mdp2").value;
	return (mdp === mdp2);
}

function checkNames() {
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	return (!/^(\w+\S+)$/.test(nom) && !/^(\w+\S+)$/.test(prenom) );
}

function checkCgu() {
	return document.getElementById("cgu").checked;
}

window.addEventListener("load", function ()
{
	document.getElementById("valider").disabled = true;
	document.getElementById("leformulaire").addEventListener("input", function()
	{
		if( checkAge() ) document.getElementById("ageErrorMajority").hidden = true;
		if( checkMdp2() ) document.getElementById("mdp2ErrorDifferents").hidden = true;
		if( checkId() ) document.getElementById("idError").hidden = true;
		
		if( !checkAge() ) {
			document.getElementById("ageErrorMajority").hidden = false;
		}
		
		if( !checkId() ) {
			document.getElementById("idError").hidden = false;
		}
		
		if( !checkMdp()) {
			document.getElementById("mdpMessageForce").hidden = false;
		}
		document.getElementById("forceMdp").textContent = ""+forceMdp() ;
		
		if( !checkMdp2() ) {
			document.getElementById("mdp2ErrorDifferents").hidden = false;
		}
		
		if(checkAge() && checkId() && checkMdp() && checkMdp2() && checkCgu() ) {
			document.getElementById("valider").disabled = false;
		}
	});
});