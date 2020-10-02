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
      // Check for white space in name for Success/Fail message
      /* if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      }); */

      /* var params = {
        title: name,
        description: message,
        footer: email
      } */

      var params = {
        username: "Three Queens®️ RolePlay",
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
