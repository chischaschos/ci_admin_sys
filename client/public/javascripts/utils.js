var utils = {

  windowTpl: null,

  getScript: function(scriptName) {
    $.getScript('/javascripts/' + scriptName + '.js')  
  },

  getTemplate: function(templateName, callback) {
    $.get('/templates/' + templateName + '.tpl', callback)  
  },

  initWindows: function() {
    utils.getTemplate('windowTpl', function(template) {
      $('#container').append(template);
      utils.windowTpl = utils.windowTpl || $('#windowTpl');
    })  
  },

  modalFor: function(content, options) {
    var newWindow = utils.windowTpl.clone();

    $('#container').append(newWindow);
    newWindow.attr('id', options['id']);
    newWindow.jqm({modal: true});
    newWindow.html(content);
    newWindow.jqmShow();

    return newWindow;
  }
};
