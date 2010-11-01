var utils = {

  getScript: function(scriptName) {
    $.getScript('/javascripts/' + scriptName + '.js')  
  },

  getTemplate: function(templateName, callback) {
    $.get('/templates/' + templateName + '.tpl', callback)  
  }
};
