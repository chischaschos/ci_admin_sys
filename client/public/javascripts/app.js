var application = {
  session: null
};

var home = {

  init: function() {
    if (application.session == null) {
      utils.getScript('login')  
    }
  }

};



$(document).ready(home.init);
