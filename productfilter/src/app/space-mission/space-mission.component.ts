import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../shared/mission.model';

@Component({
  selector: 'space-mission',
  templateUrl: './space-mission.component.html',
  styleUrls: ['./space-mission.component.scss']
})
export class SpaceMisssionComponent implements OnInit {
  @Input() mission: Mission

  detailViewActive: boolean

  constructor() {

  }

  ngOnInit() {
   
  }

}
