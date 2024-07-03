import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input({ required: true }) question!: Question;
  @Output() markAsReadEmitter: EventEmitter<Question> = new EventEmitter<Question>();

  markAsRead() {
    this.markAsReadEmitter.emit(this.question);
  }
}
