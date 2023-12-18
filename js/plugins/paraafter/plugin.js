/**
 * @file
 * TinyMCE paragraph after plugin.
 */
(function () {

  'use strict';

  const paraafterInsert = function (editor) {
    let node = editor.selection.getNode();
    let parent = node;
    while (node = node.parentNode) {
      if (node.nodeName == 'BODY') {
        break;
      }
      parent = node;
    }
    let p = editor.dom.create('p', {}, '&nbsp;');
    editor.dom.insertAfter(p, parent);
    editor.selection.setCursorLocation(p, 0);
  }

  tinymce.PluginManager.add('paraafter', function (editor, url) {
    editor.ui.registry.addButton('paraafter', {
      icon: 'paraafter',
      tooltip: editor.options.get('paraafterTooltip'),
      onAction: function (api) {
        paraafterInsert(editor);
      }
    });

    editor.ui.registry.addMenuItem('paraafter', {
      icon: 'paraafter',
      text: editor.options.get('paraafterTooltip'),
      onAction: function (api) {
        paraafterInsert(editor);
      }
    });
  });

})();
