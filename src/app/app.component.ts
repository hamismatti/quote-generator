import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Swanson quotes';

  update: boolean = false;

  quote: any;

  constructor(updates: SwUpdate, private data: ApiService) {
    updates.available.subscribe((event) => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.swansonQuotes().subscribe((res) => {
      this.quote = res;
    });
  }
}
