package;

import haxe.Exception;


import haxe.ui.HaxeUIApp;
import haxe.ui.containers.dialogs.Dialogs;
import haxe.ui.containers.dialogs.MessageBox.MessageBoxType;

import js.Cookie;

class Main {
	public static function main() {
		var app = new HaxeUIApp();
		app.ready(function() {
			app.addComponent(new MainView());
			app.start();
			if (!Cookie.exists("DC"))
				Cookie.set("DC", "A", 1 * 60 * 60);
            switch (Cookie.get("DC")) {
                case null:
                    Dialogs.messageBox("Please enable cookies", "Error", MessageBoxType.TYPE_ERROR);
                default:
                    
            }
		});
	}
}
