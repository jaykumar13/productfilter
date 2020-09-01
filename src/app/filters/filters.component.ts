import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input()
  launchYearFilters: any[]

  @Input()
  successfulLaunchFilters: any[]

  @Input()
  successfulLandingFilters: any[]

  @Output()
  onFilterChange = new EventEmitter<any>()


  showFilters: boolean = true;

  sideShown: boolean = false;

  selectedYearIndex:string;
  
  selectedLaunchIndex:string;

  selectedLandingIndex: string;

  constructor() { }

  ngOnInit() {
  }

  reset(successfulLandingFilters, successfulLaunchFilters){
    this.successfulLandingFilters = successfulLandingFilters;
    this.successfulLaunchFilters = successfulLaunchFilters;
    this.showFilters = false
    setTimeout(() => {
      this.showFilters = true
    });
  }

  onInputChange($event, filter, type){
    let change = $event.target.checked ? 1: -1
    this.onFilterChange.emit({
      type: type,
      filter: filter,
      isChecked: $event.target.checked,
      change: change
    })
  }
  fetchData($event, type:string, data:string){
    console.log("event is "+$event);
    console.log("type is "+type);
    console.log(" year is based on " +data);
    if(type=="year"){
      if(this.selectedYearIndex==data)
        this.selectedYearIndex="";
        else
          this.selectedYearIndex = data;
    } else if (type=="launch"){
      if(this.selectedLaunchIndex==data)
        this.selectedLaunchIndex="";
        else
        this.selectedLaunchIndex=data;

    } else if(type=="landing"){
      if(this.selectedLandingIndex==data)
        this.selectedLandingIndex="";
        else
        this.selectedLandingIndex=data;

    }
    let filterCriteria="";
    if(this.selectedLandingIndex!=""&&this.selectedLandingIndex!=undefined&&this.selectedLandingIndex!=null){
      filterCriteria="&land_success="+this.selectedLandingIndex;
    }
    if(this.selectedLaunchIndex!=""&&this.selectedLaunchIndex!=undefined&&this.selectedLaunchIndex!=null){
      filterCriteria=filterCriteria+"&launch_success="+this.selectedLaunchIndex; 
       } 
    if(this.selectedYearIndex!=""&&this.selectedYearIndex!=undefined&&this.selectedYearIndex!=null){
        filterCriteria=filterCriteria+"&launch_year="+this.selectedYearIndex;
    }
    this.onFilterChange.emit({
      filterCriteria:filterCriteria
    })


  }
}
