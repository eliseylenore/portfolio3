import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = "Dashboard";
  name= "Elise St Hilaire";
  url: String;

  constructor(router: Router, private location:Location) {
    router.events.subscribe((event) => {
            this.url = this.location.path();

        });
  }

  ngOnInit() {
  }

}
