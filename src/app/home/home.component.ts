import { Component, OnInit } from '@angular/core';

// Specified the path for URL and Styles
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
// Placed "Welcome" string in pagetitle
  ngOnInit() {
  }
 public pageTitle: string = 'Home';
}

