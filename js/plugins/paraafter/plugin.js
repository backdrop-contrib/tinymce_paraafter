/**
 * @file
 * TinyMCE paragraph after plugin.
 */
"use strict";

tinymce.PluginManager.add('paraafter', function (editor, url) {
  editor.ui.registry.addButton('paraafter', {
    icon: 'paraafter',
    tooltip: 'Insert paragraph after',
    onAction: function (api) {
      paraafterTools.insert(editor);
    }
  });

  editor.ui.registry.addMenuItem('paraafter', {
    icon: 'paraafter',
    text: 'Insert paragraph after',
    onAction: function (api) {
      paraafterTools.insert(editor);
    }
  });
});

const paraafterTools = {}

paraafterTools.insert = function (editor) {
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
