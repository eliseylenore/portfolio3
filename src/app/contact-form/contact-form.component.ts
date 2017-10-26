import { Component, OnInit } from '@angular/core';4
import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  messageForm: FormGroup;
  message: any;
  name: string = '';
  comment: string = '';

  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.message = this.db.object('/messages/testMessage123')
  }

  buildForm() {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      comment: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])]
    })
  }

  createMessage(message) {
    this.name = message.name;
    this.comment = message.comment;
    this.message.update({
      name: this.name,
      comment: this.comment
    })
  }
}
