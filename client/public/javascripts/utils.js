var utils = {

  windowTpl: null,

  getScript: function(scriptName, callback) {
    $.getScript('/javascripts/' + scriptName + '.js', callback);
  },

  getScripts: function(scripts) {
    /* TODO: This function needs to receive an array of scripts that should be loaded sequentially */
  },

  getTemplate: function(templateName, callback) {
    $.get('/templates/' + templateName + '.tpl', callback);
  },

  getTemplates: function(templates) {
    /* TODO: This function needs to receive an array of templates that should be loaded sequentially */
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
