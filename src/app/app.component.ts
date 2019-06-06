import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <tabset>
            <tab title="Address" tabId="address">
                ADDRESS
            </tab>
            <tab title="Bank Details" tabId="bankDetails" active="true">
                BANK DETAILS!
            </tab>
            <tab title="Personal" tabId="personal">
                PERSONAL HERE!
            </tab>
        </tabset>
  `,
    styles: []
})
export class AppComponent {
    title = 'tabsb';
}
