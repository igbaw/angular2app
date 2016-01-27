import {Component} from 'angular2/core';
import { ContactListComponent } from './contact/contact-list.component';

@Component({
    selector: 'app',
    template: `
                <div class="main">
                    <contact-list></contact-list>
                </div>
                `
                ,
     directives: [ContactListComponent]
})
export class AppComponent {
  
}