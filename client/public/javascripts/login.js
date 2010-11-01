var login = {

  init: function() {

    utils.getTemplate('login', function(template) {
      $.tmpl(template, {}).appendTo('#container');
    })

  }

};

login.init();  
