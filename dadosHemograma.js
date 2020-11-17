   function trataWBC() {
      const campo = document.getElementById('leuc')
      campo.addEventListener('input', function () {

         document.getElementById('mono').value = ((sessionStorage.getItem("monoPorcento") / 100) * campo.value).toFixed(2)
         document.getElementById('eosi').value = ((sessionStorage.getItem("eosiPorcento") / 100) * campo.value).toFixed(2)
         document.getElementById('linf').value = ((sessionStorage.getItem("linfPorcento") / 100) * campo.value).toFixed(2)
         document.getElementById('baso').value = ((sessionStorage.getItem("basoPorcento") / 100) * campo.value).toFixed(2)
         document.getElementById('neut').value = ((sessionStorage.getItem("neutPorcento") / 100) * campo.value).toFixed(2)

      })
   }

   trataWBC()
   
   const locked = sessionStorage.getItem('locked')
   lockCheck(locked)

   function lockCheck(locked){
      if (locked == "true"){
         alert("Na série branca, preencha apenas o campo de contagem total de leucócitos, o restante será importado do diferencial.")
         document.getElementById('mono').setAttribute("disabled", "disabled")
         document.getElementById('eosi').setAttribute("disabled", "disabled")
         document.getElementById('linf').setAttribute("disabled", "disabled")
         document.getElementById('baso').setAttribute("disabled", "disabled")
         document.getElementById('neut').setAttribute("disabled", "disabled")
      }
      else{
         document.getElementById('mono').setAttribute("enabled", "enabled")
         document.getElementById('eosi').setAttribute("enabled", "enabled")
         document.getElementById('linf').setAttribute("enabled", "enabled")
         document.getElementById('baso').setAttribute("enabled", "enabled")
         document.getElementById('neut').setAttribute("enabled", "enabled")
      }
   }

   var form = document.getElementById('laudo');

   form.addEventListener('submit', function (e) {
      //Calcula Índices Hematimétricos
      let VCM = ((ht.value / hem_cont.value) * 10).toFixed(2)
      let HCM = ((hb.value / hem_cont.value) * 10).toFixed(2)
      let CHCM = ((hb.value / ht.value) * 100).toFixed(2)

      //Salva Valores no sessionstorage dos índices hematimétricos
      sessionStorage.setItem("VCM", VCM)
      sessionStorage.setItem("HCM", HCM)
      sessionStorage.setItem("CHCM", CHCM)

      ////Salva Valores Desse form no sessionstorage 
      for (atual = 0; atual < form.length; atual++) {
         if (form[atual].type === 'text' || form[atual].type === 'number' || form[atual].type === 'date' || form[atual].type === 'textarea' || form[atual].type === 'select-one') {
            sessionStorage.setItem(form[atual].name, form[atual].value)

         } else if (form[atual].type == 'radio' || form[atual].type == 'checkbox') {
            sessionStorage.setItem(form[atual].name, form[atual].checked)
         }
      }

      sessionStorage.setItem("locked", false)//desbloqueia os campos apos geração do laudo

      e.preventDefault();

      location.href = "./laudoFinal.html"

   });

