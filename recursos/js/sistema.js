var oro = 0;
var oroParaDar = 1;
var currentEXP = 0;
var exp = 1;
var maxEXP = 100;
var nivel = 1;
var mana = 50;
var zero = 0;
var vida = 50;
var vida2 = 49;
var daño = 5;
var monsterMatado = 0;
var dropOro = 20;
var dropExp = 10;
var muerteMonster = 1;
var dañoMonsterIncrement = 5;
var dañoIncrement = 6;
var vidaMonster = 50;
var dañoMonster = 5;
function clickOro(){
	oro += 100;
	document.getElementById("oro").innerHTML = oro;
};
function recuperarVida() {
	if(vida >= vida2){
		var pocionVida = 0;
		var manaCoste = 0
		vida = vida + pocionVida;
		document.getElementById("vida").innerHTML = vida;
	};
	if(vida <= vida2) {
		var pocionVida = 50;
		var manaCoste = 10;
		vida = vida + pocionVida;
		mana = mana - manaCoste;
		document.getElementById("vida").innerHTML = vida;
		document.getElementById("mana").innerHTML = mana;
	};
};
function nuevoMonstruo(){
	if(vidaMonster == zero){
		monsterMatado += 1;
		oro += dropOro;
		vidaMonster = 
		currentEXP += dropExp;
		dañoMonster += dañoMonsterIncrement;
		daño += dañoIncrement;
		document.getElementById('vidaMonster').innerHTML = vidaMonster;
		document.getElementById('daño').innerHTML = daño;
		document.getElementById('dañoMonster').innerHTML = dañoMonster;
		document.getElementById('vidaMonster').innerHTML = vidaMonster;
		document.getElementById("monstruosMatados").innerHTML = monsterMatado;
	};
	return;
};
function clickMonstruo(){
	if(vidaMonster == 0){
		monsterMatado += 1; 
		oro += dropOro;
		currentEXP += dropExp;
		dañoMonster += dañoMonsterIncrement;
		daño += dañoIncrement;
		vidaMonster = ( Math.floor(2 * Math.pow(1,nivel)));
		document.getElementById("vidaMonster").innerHTML = vidaMonster;
		document.getElementById('daño').innerHTML = daño;
		document.getElementById('dañoMonster').innerHTML = dañoMonster;
		document.getElementById('vidaMonster').innerHTML = vidaMonster;
		document.getElementById("monstruosMatados").innerHTML = monsterMatado;
	};
	vidaMonster -= daño;
	vida = vida - dañoMonster;
	if(currentEXP >= maxEXP){
		currentEXP = currentEXP - maxEXP;
		nivel = nivel + 1;
		maxEXP = maxEXP + ( Math.floor(10 * Math.pow(1.5,nivel)));
		exp = exp + (Math.floor(1 * Math.pow(0.3,nivel)));
		document.getElementById("exptotal").innerHTML = currentEXP;
		document.getElementById("expnecesitas").innerHTML = maxEXP;
		document.getElementById('expBar').max = maxEXP;
		document.getElementById('expBar').value=currentEXP;
	};
	if(vida <= zero){
		alert("Te han matado");
		vida = 0;
		nivel = 0;
		oro = 0;
		daño = 0;
		dañoMonster = 0;
		mana = 0;
		currentEXP = 0;
		maxEXP = 0;
		dropOro = 0;
		vidaMonster = 0;
		dropOro = 0;
		document.getElementById("oro").innerHTML = oro;
		document.getElementById("vida").innerHTML = vida;
		document.getElementById('mana').innerHTML = mana;
		document.getElementById('vidaMonster').innerHTML = vidaMonster;
		document.getElementById('daño').innerHTML = daño;
		document.getElementById('dañoMonster').innerHTML = dañoMonster;
		document.getElementById("nivel").innerHTML = nivel;
		
	};
	document.getElementById('nivel').innerHTML = nivel;
	document.getElementById("exptotal").innerHTML = currentEXP;
	document.getElementById("expnecesitas").innerHTML = maxEXP;
	document.getElementById('expBar').max = maxEXP;
	document.getElementById('expBar').value=currentEXP;
	document.getElementById("oro").innerHTML = oro;
	document.getElementById("vida").innerHTML = vida;
	document.getElementById('mana').innerHTML = mana;
	document.getElementById('vidaMonster').innerHTML = vidaMonster;
	document.getElementById('daño').innerHTML = daño;
	document.getElementById('dañoMonster').innerHTML = dañoMonster;
		return nuevoMonstruo();
};
var vidaRege = 49;
var manaRege = 49;
function regeneracion() {
	if(vida <= vidaRege){
		vida = vida + 1;
		document.getElementById("vida").innerHTML = vida;
	};
	if(mana <= manaRege) {
		mana = mana + 1;
		document.getElementById("mana").innerHTML = mana;
	};
};


window.setInterval(function(){
	vidaMonster;
	vida;
	mana;
	dañoMonster;
	document.getElementById('nivel').innerHTML = nivel;
	document.getElementById("exptotal").innerHTML = currentEXP;
	document.getElementById("expnecesitas").innerHTML = maxEXP;
	document.getElementById('expBar').max = maxEXP;
	document.getElementById('expBar').value=currentEXP;
	document.getElementById("oro").innerHTML = oro;
	document.getElementById("vida").innerHTML = vida;
	document.getElementById('mana').innerHTML = mana;
	document.getElementById('vidaMonster').innerHTML = vidaMonster;
	document.getElementById('daño').innerHTML = daño;
	document.getElementById('dañoMonster').innerHTML = dañoMonster;
}, 1000);
window.setInterval(function(){
	regeneracion();
}, 2000);
window.setInterval(function(){
	document.getElementById('nivel').innerHTML = nivel;
	document.getElementById("exptotal").innerHTML = currentEXP;
	document.getElementById("expnecesitas").innerHTML = maxEXP;
	document.getElementById('expBar').max = maxEXP;
	document.getElementById('expBar').value=currentEXP;
	document.getElementById("oro").innerHTML = oro;
	document.getElementById("vida").innerHTML = vida;
	document.getElementById('mana').innerHTML = mana;
	document.getElementById('vidaMonster').innerHTML = vidaMonster;
	document.getElementById('daño').innerHTML = daño;
	document.getElementById('dañoMonster').innerHTML = dañoMonster;
}, 1000);