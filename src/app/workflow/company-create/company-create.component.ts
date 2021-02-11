import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CompanysService } from "src/app/services/companys.service";

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})

export class CompanyCreateComponent {
  enteredCompanyName = '';
  enteredContent = '';


  constructor(public companyService:CompanysService) {}

  onAddCompany(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.companyService.addCompany(form.value.companyname, form.value.remark);
    form.resetForm();
  }
}
