import { Component, OnInit } from '@angular/core';
import * as SDK from 'azure-devops-extension-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-devops';

  ngOnInit(): void {
    SDK.init();
    SDK.ready().then(() => {
      // Call SDK functions to retrieve information about current user / project etcetera
    });
  }
}