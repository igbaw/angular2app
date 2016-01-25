import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';

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
     styleUrls: ["../src/css/app.css"]
    
})

export class ContactListComponent{
      public contacts = [{firstName: "Adi",
                      lastName: "Wibawa",
                      phone: "234234",
                      email: "igb.adi@gmail.com"    
                      },
                      {firstName: "sd",
                      lastName: "sdsad",
                      phone: "234234234",
                      email: "igb.asd@gmail.com"    
                      },
                      {firstName: "A123123di",
                      lastName: "asdasd",
                      phone: "235324",
                      email: "asd.adi@gmail.com"    
                      },
                      {firstName: "gasdsa",
                      lastName: "fasdas",
                      phone: "234234",
                      email: "igfdfb.adi@gmail.com"    
                      },
                      {firstName: "asfaf",
                      lastName: "asdasd",
                      phone: "234234234",
                      email: "igfggb.adi@gmail.com"    
                      }
                      ];
     public selectedContact = {};
     
     onSelect(contact){
         this.selectedContact = contact;
     }
    
}