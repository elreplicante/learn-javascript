var superApp = superApp || {};

(function(superApp){
  function guiComponent(){
    var self = {};

    return self;
  }

  function searchInteractor(gui, client){
    var self = {};
    gui.onClick = function() {
      var text = gui.searchBox.text();
      client.doSearch(text);
    }

    return self;
  }

  function clientProxy(parser){
    var self = {};
    self.doSearch = function(text) {
      parser.parseString(text);
    } 
    return self;
  }
  
  superApp.createInteractor = function(gui, cli){
      return searchInteractor(gui || guiComponent(), 
                          cli || client());
  };

  superApp.searchInteractor = searchInteractor;
  superApp.guiComponent = guiComponent;
  superApp.clientProxy = clientProxy;
  superApp.parser = inputParser;
}(superApp));