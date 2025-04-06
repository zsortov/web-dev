import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CompanyListComponent } from './company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule, 
    CompanyListComponent  
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
