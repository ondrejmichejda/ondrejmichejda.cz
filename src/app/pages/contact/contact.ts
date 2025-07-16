import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  mail = signal<string>('ondra.michejda@gmail.com');
  mailTo = computed(() => {
    return 'mailto:' + this.mail();
  })

}
