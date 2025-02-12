import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/responsive.css']
})
export class AppComponent implements OnInit {
  title = 'MedHubNexus-UI';

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.loadUserFromLocalStorage();
  }
}
