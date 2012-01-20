const St = imports.gi.St;
const Main = imports.ui.main;

function NothingToDo() {
    this._init();
}

NothingToDo.prototype = {
    _init: function() {
        function getChildByName (a_parent, name) {
            return a_parent.get_children().filter(
                    function(elem){
                        return elem.name == name
                    })[0];
        }
        this.items = getChildByName(Main.panel._dateMenu.menu.box, 'calendarArea').get_children();
        let planning = Main.panel._dateMenu._eventList.actor.get_parent();
        this.index = this.items.indexOf(planning);
    },
    
    disable: function() {
        this.items[this.index].show();
        this.items[(this.index == 0) ? this.index+1 : this.index-1].show();
    },
    
    enable: function() {
        this.items[this.index].hide();
        this.items[(this.index == 0) ? this.index+1 : this.index-1].hide();
    }
}

function init() {
    return new NothingToDo();
}
