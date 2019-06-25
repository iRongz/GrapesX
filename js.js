var editor = grapesjs.init({
  height: '100%',
  showOffsets: 1,
  noticeOnUnload: 0,
  storageManager: {
    autoload: 0
  },
  container: '#gjs',
  fromElement: true,
  showDevices: false,
  plugins: ['grapesjs-blocks-bootstrap4'],
  pluginsOpts: {
    'grapesjs-blocks-bootstrap4': {
      blocks: {},
      blockCategories: {},
      labels: {},
      gridDevicesPanel: true,
      formPredefinedActions: null,
      optionsStringSeparator: '::'
    }
  },
  canvas: {
    styles: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    ],
    scripts: [
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
    ],
  }
});

const panelManager = editor.Panels;

var newButton = panelManager.addButton('options',[{
  id: 'canvas-clear',
  className: 'fa fa-trash-o',
  command: 'core:canvas-clear',
},{
  id: 'undo',
  className: 'fa fa-undo',
  command: 'core:undo',
},{
  id: 'redo',
  className: 'fa fa-repeat',
  command: 'core:redo',
}]);

window.editor = editor;