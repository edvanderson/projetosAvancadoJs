var campos = [
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor")

];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
	event.preventDefault();

	var tr = document.createElement('tr');// cria um elemento html
	campos.forEach(function(campo){
		var td = document.createElement('td');
		//criando o nó de texto
		//var texto = document.createTextNode(campo.value);
    	td.textContent = campo.value;
    	tr.appendChild(td);// elemento efetivamente será inserido

	})
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;

	tr.appendChild(tdVolume);

	tbody.appendChild(tr);
	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;
	campos[0].focus();
	

})