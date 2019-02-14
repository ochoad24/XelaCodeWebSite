var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "xelacode";
  myform.find("button").text("Enviando...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
      Swal.fire(
        'Gracias por comunicarte!',
        'En breve recibiras la respuesta',
        'success'
      )
      var nombre=$('#from_name');
      nombre.val('');
      var email=$('#from_email');
      email.val('');
      var telefono=$('#from_telefono');
      telefono.val('');
      var subject=$('#subject');
      subject.val('');
      var message=$('#message');
      message.val('');
       myform.find("button").text("Enviar");
     }, function(err) {
       alert("Fallo al enviar el email!\r\n Respuesta:\n " + JSON.stringify(err));
       myform.find("button").text("Enviar");
    });

  return false;
});