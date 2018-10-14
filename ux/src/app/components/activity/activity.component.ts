import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivityService } from '../../services/activity.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activityFormGroup: FormGroup;

  constructor(private activityService: ActivityService, private router: Router) {
        } 
        ngOnInit() {
          this.activityFormGroup = new FormGroup({
            userNameMentee: new FormControl(),
            activityType: new FormControl(),
            activityDate: new FormControl()
          });
        }

        onFormSubmit() {
          this.activityService.createActivity(this.activityFormGroup.value).subscribe(
            data => {
              this.activityFormGroup.reset();
              this.router.navigate(['/main/activity']);
              return true;
            },
            error => {
              return Observable.throw(error);
            }
          )
        }

  

}


