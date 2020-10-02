$(function () {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      //var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message

      var params = {
        username: "Three Queens®️ RolePlay",
        avatar_url: "https://cdn.discordapp.com/attachments/709838595774611488/761619996484698112/3QRP.png",
        embeds: [
          {
            color: 0xffffff,
            title: 'Mensagem:',
            author: {
              name: name,
              icon_url: 'https://cdn.discordapp.com/attachments/709838595774611488/761619996484698112/3QRP.png',
            },
            description: message,
            fields: [
              {
                name: 'E-mail de Contacto:',
                value: email,
              },
            ],
            timestamp: new Date(),
            footer: {
              text: 'Three Queens®️ RolePlay - Contacto',
              icon_url: 'https://cdn.discordapp.com/attachments/709838595774611488/761619996484698112/3QRP.png',
            },
          }
        ]
      }

      sendMessage(params);
      alert('Obrigado por entrar em contacto connosco!');
      document.getElementById("contactForm").reset();
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});


/* document.getElementById('sendMessageButton').addEventListener('click', function () {
  var name = $("input#name").val();
  var email = $("input#email").val();
  var message = $("textarea#message").val();
  var params = {
    title: name,
    description: message,
    footer: email
  }
  sendMessage(params);
}); */

function sendMessage(params) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discordapp.com/api/webhooks/736265735516717060/aNJC8NYb_ABqcOvBAFFl94GyzoxhnQW9JUN_i4s5VczlGgCGSXl46l-bVgC4OG3bAfgb");

  request.setRequestHeader('Content-type', 'application/json');

  //alert("titlo: "+params.title+"\nmensagem: "+params.description+"\nemail: "+params.footer);

  request.send(JSON.stringify(params));
}
