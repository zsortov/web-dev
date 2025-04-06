import { Component } from '@angular/core';

@Component({
  selector: 'app-vacancy-list',
  imports: [],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {

}

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: number;
}


