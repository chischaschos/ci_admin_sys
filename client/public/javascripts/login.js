var login = {

  init: function() {

    utils.getTemplate('login', function(template) {
      utils.modalFor($.tmpl(template, {}), {id: 'login'});
    })

  }

};

login.init();  
