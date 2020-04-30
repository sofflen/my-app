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

  constructor() {
  }

  ngOnInit(): void {
  }

}