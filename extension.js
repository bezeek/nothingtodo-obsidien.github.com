const St = imports.gi.St
const Main = imports.ui.main

function init() {}

let items, index
function enable() { 
	let planning = Main.panel._dateMenu._eventList.actor.get_parent()
	items = planning.get_parent().get_children()
	index = items.indexOf(planning)
	
	items[index].hide()
	items[(index == 0) ? index+1 : index-1].hide()
	Main.panel._dateMenu.menu._arrowAlignment = 0.50
}
function disable() {
	items[index].show()
	items[(index == 0) ? index+1 : index-1].show()
	Main.panel._dateMenu.menu._arrowAlignment = 0.25
}
