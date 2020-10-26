window.onload = function () {
   var form = document.getElementById('laudo');

   form.addEventListener('submit', function (e) {
      //Calcula Índices Hematimétricos
      let VCM = ((ht.value / hem_cont.value) * 10).toFixed(2)
      let HCM = ((hb.value / hem_cont.value) * 10).toFixed(2)
      let CHCM = ((hb.value / ht.value) * 100).toFixed(2)

      //Salva Valores no localstorage dos índices hematimétricos
      localStorage.setItem("VCM", VCM)
      localStorage.setItem("HCM", HCM)
      localStorage.setItem("CHCM", CHCM)

      ////Salva Valores Desse form no localstorage 
      for (atual = 0; atual < form.length; atual++) {
         if (form[atual].type === 'text' || form[atual].type === 'number' || form[atual].type === 'date' || form[atual].type === 'textarea' || form[atual].type === 'select-one') {
            localStorage.setItem(form[atual].name, form[atual].value)

         } else if (form[atual].type == 'radio' || form[atual].type == 'checkbox') {
            localStorage.setItem(form[atual].name, form[atual].checked)
         }
      }

      // impede o envio do form

      e.preventDefault();

      location.href = "/laudoFinal.html"

   });
}