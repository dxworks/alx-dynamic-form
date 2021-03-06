import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {QuestionBase} from '../../../../types/question-base';
import {QuestionControlService} from '../../../../providers/question-control.service';



@Component({
  selector: 'dxf-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input()
  questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  styleType: '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
