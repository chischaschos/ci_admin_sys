var utils = {

  windowTpl: null,

  getScript: function(scriptName, callback) {
    $.getScript('/javascripts/' + scriptName + '.js', callback);
  },

  getTemplate: function(templateName, callback) {
    $.get('/templates/' + templateName + '.tpl', callback);
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
    newWindow.addClass('hidden')
    newWindow.jqm({modal: true});
    newWindow.html(content);

    return newWindow;
  }
};
