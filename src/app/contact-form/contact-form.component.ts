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
      name: new FormControl(),
      comment: new FormControl()
    })
  }

  createMessage() {
    const form = this.messageForm.value;
    const name = form.name;
    const comment = form.comment;
    this.message.update({ 
      name: name,
      comment: comment
    })
  }
}
