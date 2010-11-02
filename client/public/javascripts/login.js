var login = {

  init: function() {

    utils.getScript('jquery/jquery.validate.min', function() {
      utils.getTemplate('login', function(template) {
        var loginWindow = utils.modalFor($.tmpl(template, {}), {id: 'login'});
        loginWindow.find('form').validate();
        loginWindow.jqmShow();
      });
    });

  }

};

login.init();  
