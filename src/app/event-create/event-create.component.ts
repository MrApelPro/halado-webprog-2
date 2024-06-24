import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { EventNameValidator } from '../validators/event-name.validator';
import { regExValidator } from '../validators/regex.validator';
import { sameValueValidator } from '../validators/same-value.validator';
import { MessagesModule } from 'primeng/messages';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrl: './event-create.component.scss',
    standalone: true,
    imports: [RouterLink, FormsModule, ReactiveFormsModule, FieldsetModule, InputTextModule, CalendarModule, InputTextareaModule, ButtonModule, MessagesModule, JsonPipe, RouterModule]
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;

  messages = [
    { severity: 'error', summary: 'Vaidation error', detail: 'Don\'t be lazy! Give a proper description!' }
  ];

  constructor(private formBuilder: FormBuilder, private eventNameValidator: EventNameValidator,
  private router: Router) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      'name': ['', { validators: [Validators.required, Validators.maxLength(10),
        regExValidator(/^[a-zA-Z0-9]+$/i)], asyncValidators: this.eventNameValidator.eventNameValidatorFn(), updateOn: 'change'}],
      'start': ['', [Validators.required]],
      'description': ['', [Validators.required, Validators.maxLength(100)]]
    }, {validators: sameValueValidator}
    );
  }

  onSubmit(eventData) {
    this.eventForm.patchValue({
      name: 'pekmil'
    });
    alert('Form raw value:\n' + JSON.stringify(this.eventForm.getRawValue()));
    this.eventForm.reset();
    this.router.navigate(['/events']);
  }

  get name() { return this.eventForm.get('name'); }
  get description() { return this.eventForm.get('description'); }
  get start() { return this.eventForm.get('start'); }

  getNameErrorMessage() {
    if (this.name.dirty || this.name.touched) {
      if (this.name.hasError('required')) return 'You must enter a value!';
      if (this.name.hasError('maxlength')) return 'You can enter at most 50 characters!';
    }
    return '';
  }

  getDescriptionErrorMessage() {
    if (this.description.dirty || this.description.touched) {
      if (this.description.hasError('required')) return 'You must enter a value!';
      if (this.description.hasError('maxlength')) return 'You can enter at most 100 characters!';
    }
    return '';
  }

  getStartErrorMessage() {
    if (this.start.dirty || this.start.touched) {
      if (this.start.hasError('required')) return 'You must enter a value!';
      if (this.start.hasError('regEx')) return 'You must enter a valid date time!';
    }
    return '';
  }

}
