const xhr = new XMLHttpRequest();
let show_result = document.getElementById('resultado');
let input = document.getElementById('numero');

// manejar respuesta
xhr.onreadystatechange = ()=>{
    if (xhr.readyState===4 && xhr.status === 200) {
        console.log('solicitud enviada a PHP');
        console.log(xhr.response)

        show_result.innerHTML = xhr.response;
        input.value = '';
    }
};

// envio de solicitud
const enviarNumero = ()=>{
   let numero = document.getElementById('numero').value;

   xhr.open('POST', '../controllers/AjaxController.php', true);
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   xhr.send(`number=${numero}`);
};






