function showMenuMobile() {
  document.getElementById("dropdown-menu").classList.toggle("show-menu");
}

function showLanguageMenuMobile() {
  document.getElementById("dropdown-language").classList.toggle("hidden-dropdrown");
}

function sendMail() {
  let mail = document.getElementById("email-input");
  let phone = document.getElementById("phone-input");
  let message = document.getElementById("message-input");

  let data = {
    service_id: 'service_1oja8oo',
    template_id: 'template_m8t5f9u',
    user_id: 'user_dWidx44rU3vRX580CreLc',
    template_params: {
        'email': mail.value,
        'message': message.value,
        'phone_number': phone.value
    }
  };
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    alert('Mensaje enviado');
  }).fail(function(error) {
    alert('Intentelo nuevamente');
  });
}