	
	var emailref = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w]+\.)*\w[\w]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);

/*INDEX*/
	function inicioindex(){
		$('#inicioindex').fadeIn("slow");
		$('#fondonegro').fadeIn("slow");
	}

	function desactivarfondo(){
		$('#inicioindex').fadeOut("slow");
		$('#fondonegro').fadeOut("slow");
	}

/*FAQ*/
	var arrayfaqr = ['faqr0','faqr1','faqr2','faqr3','faqr4','faqr5','faqr6', 'faqr7'];
	var arrayfaqp = ['faqp0','faqp1','faqp2','faqp3','faqp4','faqp5','faqp6', 'faqp7'];

	function funcionfaqs(numerofaq){
	if(document.getElementById(arrayfaqr[numerofaq]).style.display == "block"){
	document.getElementById(arrayfaqr[numerofaq]).style.display = "none";
	document.getElementById(arrayfaqp[numerofaq]).style.borderRadius = "50px";
	} else{
		for(var i=0; i<8; i++){
			document.getElementById(arrayfaqr[i]).style.display = "none";
			document.getElementById(arrayfaqp[i]).style.borderRadius = "50px";
		}
	document.getElementById(arrayfaqr[numerofaq]).style.display = "block";
	document.getElementById(arrayfaqp[numerofaq]).style.borderRadius = "50px 50px 0px 0px";
	}}

/*TRIVIA*/
	var preguntanro = 0;
	var respuestascorrectas = 0;
	var arraytrivia = [['1. ¿Cuál es el nombre de este disco?', "../../img/trivia/pregunta1.jpg", 'Royal Blood', 'Day/Night', 'What Went Down', 'How Did We Get So Dark?', '1'],['2. ¿Qué banda apadrinó a Royal Blood en sus comienzos?', "../../img/trivia/pregunta2.jpg", 'Queens of the Stone Age', 'Foo Fighters', 'Arctic Monkeys', 'The Strokes', '3'],['3. ¿A qué banda pertecene este disco?', "../../img/trivia/pregunta3.jpg", 'Parcels', 'Foals', 'Gativideo', 'Babasónicos', '1'],['4. ¿Cuál de estás canciones pertenece a "Day"?', "../../img/trivia/pregunta4.jpg", 'Inside', 'Famous', 'Icallthishome', 'NowIcaresomemore', '4'],['5. ¿De qué banda es este disco?', "../../img/trivia/pregunta5.jpg", 'Limon', 'Marilina Bertoldi', 'Gativideo', 'Foals', '4'],['6. ¿Cuál es el nombre real del cantante de Usted Señalemelo?', "../../img/trivia/pregunta6.jpg", 'Juan Saieg', 'Juan Mango', 'Juan Sanchez', 'Juan Strech', '1'],['7. ¿Cuál es el nombre del cuarto disco de Babasónicos?', "../../img/trivia/pregunta7.jpg", 'Buenos Aires', 'Miami', 'Las Vegas', 'Mar del Plata', '2'],['8. ¿En qué año Marilina Bertoldi ganó el Gardel de Oro?', "../../img/trivia/pregunta8.jpg", '2019', '2020', '2021', '2018', '1'],['9. ¿Quién es este cantante?', "../../img/trivia/pregunta9.jpg", 'Willy Fishman', 'Mike Kerr', 'Renzo Montalbano', 'Adrian Dargelos', '3'],['10. ¿Cuál fue la primer canción lanzada por LIMON?', "../../img/trivia/pregunta10.jpg", 'Desnudos', '(Ya) No Existo', 'Amnesia', 'No Nos Van a Encontrar', '2']];

	function trivia(respuesta){
		if(preguntanro!=10){
			if(arraytrivia[preguntanro][6]==respuesta){
				respuestascorrectas++; 
			}
			preguntanro++;
			if(preguntanro!=10){
			preguntar();
			}else{
				$('#fondonegro').fadeIn("slow");
				$('#fintrivia').fadeIn("slow");

			if(respuestascorrectas>8){
				document.getElementById('pfintrivia').innerHTML = "Tuviste " + respuestascorrectas + " respuestas correctas. <br> Felicitaciones! Entraste en el sorteo por un par entradas al Festival Manganga 2022. Ingresá tu email para que podamos contactarte en caso de que seas el ganador.";

			}else{
				document.getElementById('pfintrivia').innerHTML = "Tuviste " + respuestascorrectas + " respuestas correctas. <br> Lamentablemente no lograste la cantidad necesaria para entrar al sorteo de entradas :( <br> Clickeá aquí para volver a intentarlo!";
					document.getElementById('formulariotrivia').style.display = "none";
			}
			}}}

	function recargarono(){
		if (document.getElementById('formulariotrivia').style.display == "none"){
			location.reload();
		}
	}

	function preguntar(){
			document.getElementById('preguntatrivia').innerHTML = arraytrivia[preguntanro][0];
			document.getElementById('imgtrivia').src = arraytrivia[preguntanro][1];
			document.getElementById('boton1').innerHTML = arraytrivia[preguntanro][2];
			document.getElementById('boton2').innerHTML = arraytrivia[preguntanro][3];
			document.getElementById('boton3').innerHTML = arraytrivia[preguntanro][4];
			document.getElementById('boton4').innerHTML = arraytrivia[preguntanro][5];
		}

	function comenzar(){
		document.getElementById('comenzar').style.display = "none";
		document.getElementById('botones').style.display = "block";
		document.getElementById('h5trivia').style.display = "none";
		preguntar();
	}

	function validartrivia(){
			emailtrivia = document.getElementById("emailtrivia").value;
			if( !(emailref.test(emailtrivia))) {
			alert("Por favor ingrese una dirección de email válida.");
			document.formulariotrivia.emailtrivia.focus();
			return false;
			}
			alert("Gracias! Muy pronto recibirás los resultados del sorteo en tu casilla de email.");
			document.formulario.submit();
	}

	/*DISCOS*/

	function spoti(disconro){
		switch(disconro){
			case 1 || 11: disco='disco1'; break;
			case 2 || 12: disco='disco2'; break;
			case 3 || 13: disco='disco3'; break;
		}
			if (disconro<10) {
			document.getElementById(disco).style.display = "flex";
		}
			if (disconro>10) {
			document.getElementById(disco).style.display = "none";
		}
	}


	/*LINEUP*/

	function lineupfx(bandanro){
		switch(bandanro){
			case 1 || 11: banda='banda1'; break;
			case 2 || 12: banda='banda2'; break;
			case 3 || 13: banda='banda3'; break;
			case 4 || 14: banda='banda4'; break;
			case 5 || 15: banda='banda5'; break;
			case 6 || 16: banda='banda6'; break;
			case 7 || 17: banda='banda7'; break;
			case 8 || 18: banda='banda8'; break;
			case 9 || 19: banda='banda9'; break;
		}
		if (bandanro<10) {
		document.getElementById(banda).style.filter = "grayscale(0%)";
		document.getElementById(banda).style.transition = "all 0.3s ease-out";

	}
		if (bandanro>10) {
		document.getElementById(banda).style.filter = "grayscale(100%)";
		document.getElementById(banda).style.transition = "all 0.3s ease-out";
		}
	}

	/*CONTACTO*/
	function validarformulario(){
		var email = document.getElementById("email").value;
		if (document.formulario.nombre.value.length<3){
			alert("Por favor ingrese su nombre.");
			document.formulario.nombre.focus();
			return false;
		}

		if( !(emailref.test(email)) ) {
			alert("Por favor ingrese una dirección de email válida.");
			document.formulario.email.focus();
			return false;
		}

		if (document.formulario.mensaje.value.length<3){
			alert("Por favor ingrese el contenido de su consulta.");
			document.formulario.mensaje.focus();
			return false;
		}

		alert("Se envió su consulta correctamente! Muy pronto recibirás una respuesta en tu casilla de email.");
		document.formulario.submit();
	}