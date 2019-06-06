import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'tabset',
    templateUrl: './tabset.component.html',
    styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    activateTab(tab: TabComponent) {
        for(let t of this.tabs.toArray()) {
            t.active = t == tab;
        }
    }
}
