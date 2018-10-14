import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { PersonService } from '../../services/person.service';
import { Sort } from '@angular/material';
import { Person } from '../../model/person';


@Component({
  selector: 'app-activityList',
  templateUrl: './activityList.component.html',
  styleUrls: ['./activityLIst.component.css']
})
export class ActivityListComponent implements OnInit {
  public activities;
  person: Person;
  public angelLevel: String;

  sortedData: String[];
  
  constructor(private activityService: ActivityService, private personService: PersonService) {
          this.sortedData = this.activities;
        } 
        ngOnInit() {
          this.getActivities();
          this.getPerson();
       
    
        }
        getActivities() {
          this.activityService.getActivities().subscribe(
            data=>{ this.activities = data},err=>{},
            () => console.log('Activities loaded')
          );
        }

        getPerson(){
          this.personService.getPersonByUserName("dmaranan").subscribe(
            data=>this.person = data
          );
          console.log('Person loaded')
        }

      

        sortData(sort: Sort) {
          const data = this.activities;
          if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
          }

          this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
              case 'userNameMentee': return compare(a.userNameMentee, b.userNameMentee, isAsc);
              case 'activityType': return compare(a.activityType, b.activityType, isAsc);
              case 'activityDate': return compare(a.activityDate, b.activityDate, isAsc);
              default: return 0;
          }
        });
      }
    }
        function compare(a, b, isAsc) {
          return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        } 
