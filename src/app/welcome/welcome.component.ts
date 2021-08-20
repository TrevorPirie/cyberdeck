import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  private route;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {}

  public goToAbout(): void {
    alert('Show about page');
  }
}
