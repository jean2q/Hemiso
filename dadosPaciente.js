window.onload = function () {
	var form = document.getElementById('formPaciente');
	var dadosPaciente = new Object()

	form.addEventListener('submit', function (e) {
		////Salva Valores Desse form no sessionStorage 
		for (atual = 0; atual < form.length; atual++) {
			if (form[atual].type === 'text' || form[atual].type === 'number' || form[atual].type === 'date' || form[atual].type === 'textarea' || form[atual].type === 'select-one') {
				sessionStorage.setItem(form[atual].name, form[atual].value)

			}
			else if (form[atual].type == 'radio' || form[atual].type == 'checkbox' ) {
				sessionStorage.setItem(form[atual].name, form[atual].checked)
			}
		}

		// impede o envio do form

		e.preventDefault();

		location.href = "/dadosHemograma.html" //muda para proxima pagina
	});
}