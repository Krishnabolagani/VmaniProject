import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Company } from './model/company';
import{FormsModule}from '@angular/forms'
import { CompanyServiceService } from './company-service.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   company: Company = {
    id: 0,
    CompanyName: "",
    CompanyRegistrationNo: "",
    AddressList: [{
      Type: '',
      HouseNo: '',
      Street: '',
      LandMark: '',
      City: '',
      State: '',
      Country: '',
      ZIPCode: ''
    }],
    HrDetailsList: [{
      FirstName: '',
      LastName: '',
      middleName: '',
      Username: '',
      Gender: '',
      DateOfBirth: new Date(),
      Email: ''
    }]
  };

  constructor(private companyServices: CompanyServiceService) {}

  addAddress() {
    this.company.AddressList.push({
      Type: '',
      HouseNo: '',
      Street: '',
      LandMark: '',
      City: '',
      State: '',
      Country: '',
      ZIPCode: ''
    });
  }

  removeAddress(index: number) {
    this.company.AddressList.splice(index, 1);
  }

  addHrDetail() {
    this.company.HrDetailsList.push({
      FirstName: '',
      LastName: '',
      middleName: '',
      Username: '',
      Gender: '',
      DateOfBirth: new Date(),
      Email: ''
    });
  }

  removeHrDetail(index: number) {
    this.company.HrDetailsList.splice(index, 1);
  }

  submitForm() {
    this.companyServices.Post(this.company).subscribe({
      next: (res) => {
        console.log("Company data submitted", res);
      },
      error: (err) => {
        console.error("Error submitting company", err);
      }
    });
  }
}