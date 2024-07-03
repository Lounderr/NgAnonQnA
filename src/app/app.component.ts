import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from './question/question.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, QuestionComponent, CommonModule, NewQuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isNewQuestionOpen: boolean = false;

  questions: Question[] = localStorage.getItem('questions') ? JSON.parse(localStorage.getItem('questions')!) : [];

  addQuestion(question: Question) {
    this.questions.push(question);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  removeQuestion(question: Question) {
    this.questions = this.questions.filter(q => q !== question);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  openNewQuestion() {
    this.isNewQuestionOpen = true;
  }
}
