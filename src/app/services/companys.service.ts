import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import { Company } from '../workflow/models/company.model';


@Injectable({providedIn: 'root'})
export class CompanysService {
  private companys: Company[] = [];
  private companysUpdated = new Subject<Company[]>();

  constructor(private http: HttpClient, private router: Router){}

  getCompanys() {
    this.http.get<{message: string, companys: Company[]}>('http://localhost:3000/api/companys')
       .subscribe((companyData) => {
         this.companys = companyData.companys;
         this.companysUpdated.next([...this.companys]);
    });
  }

  getCompanyUpdateListener() {
    return this.companysUpdated.asObservable();
  }

  addCompany(companyname: string, remark: string) {
    const company: Company = {id:null, companyname: companyname, remark: remark};
    this.http
      .post<{message: string}>("http://localhost:3000/api/companys", company)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.companys.push(company);
        this.companysUpdated.next([...this.companys]);
      });
    //this.companys.push(company);
    //this.companysUpdated.next([...this.companys]);
    //this.router.navigate(['/companylist']);
  }

}
