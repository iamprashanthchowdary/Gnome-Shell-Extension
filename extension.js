'use strict';

import St from 'gi://St';
import GObject from 'gi://GObject';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';

let indicator = null;

const MyIndicator = GObject.registerClass(
class MyIndicator extends PanelMenu.Button {
    _init() {
        super._init(0.0, 'My Icon');

        const icon = new St.Icon({
            icon_name: 'utilities-system-monitor-symbolic',
            style_class: 'system-status-icon'
        });

        this.add_child(icon);
				
				this.menu.addMenuItem(new PopupMenu.PopupMenuItem('test'));
				this.menu.addMenuItem(new PopupMenu.PopupMenuItem('test2'));
    }
});

export default class Extension {
    enable() {
        indicator = new MyIndicator();
        Main.panel.addToStatusArea('cpu-monitor', indicator, 1, 'right');
    }

    disable() {
        if (indicator) {
            indicator.destroy();
            indicator = null;
        }
    }
}
