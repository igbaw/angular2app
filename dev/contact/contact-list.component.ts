import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-list',
    template: `
                  <ul>
                   <li *ngFor="#contact of contacts" 
                        (click)="onSelect(contact)"
                       [class.clicked] ="selectedContact === contact" >
                        {{contact.firstName}} {{contact.lastName}}
                    </li>
                </ul>
                <contact [contact]="selectedContact"></contact>
               `,
     directives:[ContactComponent],
     providers: [ContactService],
     styleUrls: ["../src/css/app.css"]
    
})

export class ContactListComponent{
     public contacts: Contact[];
     public selectedContact = {};
     private contactService;
     
     constructor(contactService : ContactService){}
     
     onSelect(contact){
         this.selectedContact = contact;
     }
     
     
    
}