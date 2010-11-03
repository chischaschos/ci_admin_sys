var login = {

  init: function() {

    var mySubmitHandler = function(form) {
      $(form).ajaxSubmit({success: login.loginResponse, dataType: 'json'});
      return false;
    }

    /* TODO: Load secuentially following scripts */

    utils.getScript('jquery/jquery.form');
    utils.getScript('jquery/jquery.validate.min', function() {
      utils.getTemplate('login', function(template) {
        var loginWindow = utils.modalFor($.tmpl(template, {}), {id: 'login'});
        loginWindow.find('form').validate({submitHandler: mySubmitHandler});
        loginWindow.jqmShow();
      });
    });

  },

  loginResponse: function(responseText, statusText, xhr, $form) {
    responseText.success == true ? login.loginSuccessful : login.loginFailed;
  },

  loginSuccessful: function() {},

  loginFailed: function() {}

};

login.init();  
