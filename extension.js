const St = imports.gi.St
const Main = imports.ui.main

function init() {}

let dateMenu, calendarEventsArea, oldAlignment

function enable() {
	dateMenu = Main.panel.statusArea.dateMenu
	calendarEventsArea = dateMenu._eventList.actor.get_parent()
	oldAlignment = dateMenu.menu._arrowAlignment
	calendarEventsArea.hide()
	dateMenu.menu._arrowAlignment = 0.50
}
function disable() {
	calendarEventsArea.show()
	dateMenu.menu._arrowAlignment = oldAlignment
}
