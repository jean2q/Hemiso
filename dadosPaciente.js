window.onload = function () {
	var form = document.getElementById('formPaciente');
	var dadosPaciente = new Object()

	form.addEventListener('submit', function (e) {
		////Salva Valores Desse form no localstorage 
		for (atual = 0; atual < form.length; atual++) {
			if (form[atual].type === 'text' || form[atual].type === 'number' || form[atual].type === 'date' || form[atual].type === 'textarea' || form[atual].type === 'select-one') {
				localStorage.setItem(form[atual].name, form[atual].value)

			}
			else if (form[atual].type == 'radio' || form[atual].type == 'checkbox' ) {
				localStorage.setItem(form[atual].name, form[atual].checked)
			}
		}

		// impede o envio do form

		e.preventDefault();

		location.href = "/dadosHemograma.html" //muda para proxima pagina
	});
}