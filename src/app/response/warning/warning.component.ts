import {Component} from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <p>Warning, you are in danger!</p>
  `,
  styles: [`
    p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }
  `]
})

export class WarningComponent {

}
