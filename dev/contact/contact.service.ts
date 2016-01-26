import {Injectable} from 'angular2/core';
import {CONTACTS} from './mock-contact.ts';

@Injectable()
export class ContactService{
    getContact(){
        return Promise.resolve(CONTACTS);
    }
}
