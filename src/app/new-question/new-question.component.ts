import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Question } from '../question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-question',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-question.component.html',
  styleUrl: './new-question.component.scss'
})
export class NewQuestionComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() addQuestionEmitter = new EventEmitter<Question>();
  content = '';
  author = '';
  isFormValid = false;
  contactForm!: FormGroup;


  onCancel() {
    this.cancel.emit();
  }

  addQuestion() {
    let question: Question = { content: this.content, date: new Date() }
    this.addQuestionEmitter.emit(question);
    this.onCancel();
  }
}
