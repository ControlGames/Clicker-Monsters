/* Variables */
var totaloro = 0,
	totalexp = 0,
	expnecesitas = 100,
	vida = 100,
	vida2 = 99,
	mana = 100,
	mana2 = 99,
	vidaMonstruo = 100,
	dañoMonstruo = 10,
	daño = 10,
	dropexp = 10,
	droporo = 20,
	monstruosMuertos = 0,
	nivel = 1,
	subidaNivel = 1,
	incrementarMonstruosMuertos = 1,
	curacionVida = 1,
	curacionMana = 1,
	nombre = "",
	totalClicks = 0,
	totalOroSiempre = 0,
	zero = 0;

/*Update All Values*/
function updateValues() {
     $('#total_oro').html(totaloro);
	 $('#total_exp').html(totalexp);
     $('#vida').html(vida);
	 $('#mana').html(mana);
	 $('#daño').html(daño);
	 $('#vida_monstruo').html(vidaMonstruo);
	 $('#daño_monstruo').html(dañoMonstruo);	
	 $('#monstruos_muertos').html(monstruosMuertos);
	 $('#nivel').html(nivel);
	 $('#drop_oro').html(droporo);
	 $('#exp_necesitas').html(expnecesitas);
     $('.barra-exp').css('width', totalexp+'%').attr('aria-valuenow', totalexp);
	 $('.barra-vida').css('width', vida+'%').attr('aria-valuenow', vida);
	 $('.barra-mana').css('width', mana+'%').attr('aria-valuenow', mana);
	 $('#nombre').html(nombre);
	 $('#total_clicks').html(totalClicks);
	 $('#total_oro_siempre').html(totalOroSiempre);
}

/* Buy AutoClickers */
$('#pocionDeVida').click(function () {
	if (vida <= vida2){
		var precioPocionVida = 10,
			pocionVida = 20;
		if (mana >= precioPocionVida) {
			mana -= precioPocionVida;
			vida += pocionVida;
			updateValues();
		};
	};
});

/* Click to Increment */
$('#click').click(function () {
	vida -= dañoMonstruo;
	vidaMonstruo -= daño;
	totalClicks += subidaNivel;
	if (vidaMonstruo <= 0) {
		totalexp += dropexp;
		monstruosMuertos += incrementarMonstruosMuertos;
		vidaMonstruo = + (Math.floor(20 * Math.pow(2, nivel)));
		totaloro += droporo;
		totalOroSiempre += droporo;
	};
	if (totalexp >= expnecesitas) {
			totalexp -= totalexp;
			nivel += subidaNivel;
			daño += (Math.floor(10 * Math.pow(2, nivel)));
			vida += (Math.floor(10 * Math.pow(2, nivel)));
			expnecesitas += (Math.floor(10 * Math.pow(1.5, nivel)));
			vidaMonstruo += (Math.floor(20 * Math.pow(1.5, nivel)));
			droporo += (mejoraDropDeOro + 20);
	};
	if (vida <= 0) {
		window.alert("Has sido eliminado");
		$('.btn2').disabled(disabled);
	};
    updateValues();
});

function regeneracion() {
	if (vida <= vida2) {
		vida += curacionVida;
	};
	if (mana <= mana2) {
		mana += curacionMana;
	};
};


window.setInterval(function(){
	regeneracion();
}, 2000);
window.setInterval(function(){
	updateValues();
	$('#vida').html(vida);
	$('#mana').html(mana);
	$('#total_oro').html(totaloro);
	$('#drop_oro').html(droporo);
}, 100);
/*Upgrades*/
/*Two Clicks Per Click*/
$('#upgradeTwoClicks').click(function(){
    if (totalClicks >= 20) {
        totalClicks -= 20;
        clickIncrement = 2;
        $(this).addClass('hidden');
        $('#upgradeFiveClicks').removeClass('hidden');
        updateValues();
    }
});

/*Five Clicks Per Click*/
$('#upgradeFiveClicks').click(function(){
    if (totalClicks >= 100) {
        totalClicks -= 100;
        clickIncrement = 5;
        $(this).addClass('hidden');
        updateValues();
    }
});

/*Two Clicks Per Autoclicker*/
$('#upgradeTwoAutoClicks').click(function(){
    if (totalClicks >= 20) {
        totalClicks -= 20;
        autoClicker.increment = 2;
        $(this).addClass('hidden');
        updateValues();
    }
});

$(document).ready(function(){ 
    $("#myTab a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
});

$(document).ready(function () {
    $('#onLoadModal').modal();
	
	$('#modalClose').click(function () {
    nombre = document.getElementById('nombre').value;
    document.getElementById("nombre2").innerHTML = nombre;
    });
});