import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Company } from '../company';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number): void {
    this.apiService.getCompanyVacancies(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
