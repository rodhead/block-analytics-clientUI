import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-toolbar',
  templateUrl: './home-top-toolbar.component.html',
  styleUrls: ['./home-top-toolbar.component.css']
})
export class HomeTopToolbarComponent implements OnInit {
  public now: Date = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit(): void {
  }

}
