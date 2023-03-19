import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Input() icon = "";
  @Input() header = "";
  @Input() link = "";
  @Input() linkDetails = "";
}
