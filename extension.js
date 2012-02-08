const St = imports.gi.St;
const Main = imports.ui.main;

function NothingToDo() {
    this._init();
}

NothingToDo.prototype = {
    _init: function() {
        let planning = Main.panel._dateMenu._eventList.actor.get_parent();
        this.items = planning.get_parent().get_children();
        this.index = this.items.indexOf(planning);
    },
    
    enable: function() {        
        this.items[this.index].hide();
        this.items[(this.index == 0) ? this.index+1 : this.index-1].hide();
        Main.panel._dateMenu.menu._arrowAlignment=0.5;
    },
    
    disable: function() {        
        this.items[this.index].show();
        this.items[(this.index == 0) ? this.index+1 : this.index-1].show();
        Main.panel._dateMenu.menu._arrowAlignment=0.25;
    }
}

function init() {
    return new NothingToDo();
}
