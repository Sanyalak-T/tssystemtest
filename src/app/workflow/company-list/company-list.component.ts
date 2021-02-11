import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import {Company} from "../models/company.model";
import {CompanysService} from "../../services/companys.service";

import {Companys} from "./company-list"; //test teble by myself

@Component({
selector: 'app-company-list',
templateUrl: './company-list.component.html',
styleUrls: ['./company-list.component.css']
})



export class CompanyListComponent implements OnInit {
  //test teble by myself
  //displayedColumns: string[] = ['position', 'companyname', 'remark'];

  //dataSource = ELEMEN_DATA;
  //Companys: Companys[] = [];


  //this company use follow vdo
  companys: Company[] = [];
  private companysSub : Subscription;

  constructor(private companysService: CompanysService){}

  ngOnInit(){
    this.companysService.getCompanys();
    this.companysSub = this.companysService.getCompanyUpdateListener()
      .subscribe((companys: Company[])=>{
        this.companys = companys;
      });
  }

  ngOnDestroy() {
    this.companysSub.unsubscribe();
  }

}

//test teble by myself
//const ELEMEN_DATA: Companys[] = [
  //{position:1, companyname: "Library Soft Company", remark: "this is the first company"},
  //{position:2, companyname: "Library Soft Company branc 2", remark: "this is the second company"},
  //{position:3, companyname: "Library Soft Company branc 3", remark: "this is the third company"}
//];


