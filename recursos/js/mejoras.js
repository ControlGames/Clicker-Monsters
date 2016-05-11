var cursors = 0;
function buyCursor(){
	var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
	if(oro >= cursorCost){                                   //checks that the player can afford the cursor
		cursors = cursors + 1;                                   //increases number of cursors
		oro = oro - cursorCost;                          //removes the cookies spent
		document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
		document.getElementById('oro').innerHTML = oro;  //updates the number of cookies for the user
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
	document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var mejoraDropDeOro = 0;
var compraMejora = 1;
function mejorarDropOro(){
	var mejorarDropOroCost = Math.floor(10 * Math.pow(1.1,nivel));
	if(totaloro >= mejorarDropOroCost){
		droporo += 20;
		mejoraDropDeOro += compraMejora;
		totaloro -= mejorarDropOroCost;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,nivel));
	document.getElementById('mejorarDropOroCost').innerHTML = nextCost;
	document.getElementById('mejorasDropOroComprados').innerHTML = mejoraDropDeOro;
};
var mejoraDropDeExp = 0;
function mejorarDropExp(){
	var mejorarDropExpCost = Math.floor(10 * Math.pow(1.1,nivel));
	if(totaloro >= mejorarDropExpCost){
		dropexp += 10;
		mejoraDropDeExp += compraMejora;
		totaloro -= mejorarDropExpCost;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,nivel));
	document.getElementById('mejorarDropExpCost').innerHTML = nextCost;
	document.getElementById('mejorasDropExpComprados').innerHTML = mejoraDropDeExp;
};
var mejoraDañoComprados = 0;
$('#mejorarDaño').click(function () {
	var mejorarDañoCost = Math.floor(10 * Math.pow(1.1,nivel));
	if(totaloro >= mejorarDañoCost){
		daño += 10;
		mejoraDañoComprados += compraMejora;
		totaloro -= mejorarDañoCost;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,nivel));
	$('#mejorarDañoCost').html(nextCost);
	document.getElementById('mejorasDañoComprados').innerHTML = mejoraDañoComprados;
});