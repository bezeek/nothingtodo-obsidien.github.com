const St = imports.gi.St;
const Main = imports.ui.main;

function NothingToDo() {
    this._init();
}

NothingToDo.prototype = {
    _init: function() {
        this.eventList = Main.panel._dateMenu._eventList.actor.get_parent()
    },
    
    disable: function() {
        this.eventList.show();
    },
    
    enable: function() {
        this.eventList.hide();
    }
}

function init() {
    return new NothingToDo();
}
