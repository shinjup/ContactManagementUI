import { Component, OnInit } from '@angular/core'
import { ContactService } from '../contact.service'
import { Contact } from '../contact.interface' // Import the Comment interface
@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contact: Contact[] = [];

  constructor(private contactService: ContactService) {}
  
  ngOnInit(): void {
  this.contactService.getComments().subscribe((contact) => {
  this.contact = contact;
});
  }
}
