import {Component, OnInit} from '@angular/core';

@Component({
  /*
   selector: '[app-servers]',
   equals to
      <div app-servers></div>
   */

  /*
   selector: '.app-servers',
   equals to
     <div class="app-servers></div>
   */
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  createdServerStatus = 'No servers were created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServer() {
    this.createdServerStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
