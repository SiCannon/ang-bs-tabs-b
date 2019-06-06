import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() title = '';
    @Input() tabId = '';
    @Input() active = false;
}
