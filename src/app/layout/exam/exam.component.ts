import {Component, OnInit} from '@angular/core';
import {Timestamp} from 'rxjs';

export interface Exam {
  id: number;
  name: string;
  users: [{}];
  soccer: number;
  questionList: any;
  appGroupList: [];
}

const DATAFAKE: Exam =
  {
    id: 1,
    name: 'Hydrogen',
    users: [{id: 1, name: 'tung'}],
    soccer: 5,
    questionList: [
      {
        id: 1,
        name: 'abc',
        answer: [
          {
            id: 1,
            name: 'answer1',
            check: true,
          },
          {
            id: 2,
            name: 'answer2',
            check: false,
          },
          {
            id: 3,
            name: 'answer3',
            check: false,
          },
          {
            id: 4,
            name: 'answer4',
            check: false,
          },
        ]
      },
      {
        id: 2,
        name: 'abc2',
        answer: [
          {
            id: 1,
            name: 'answer1',
            check: true,
          },
          {
            id: 2,
            name: 'answer2',
            check: false,
          },
          {
            id: 3,
            name: 'answer3',
            check: false,
          },
          {
            id: 4,
            name: 'answer4',
            check: false,
          },
        ]
      }
    ],
    appGroupList: []
  };

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  fakeExam = DATAFAKE.questionList;
  question: any;
  index = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.question = this.fakeExam[this.index];
  }


  nextQuestion(): any {
    this.index++;
    if (this.fakeExam[this.index] != null) {
      this.question = this.fakeExam[this.index];
    } else {
      this.index--;
    }
  }

  prevQuestion(): any {
    this.index--;
    if (this.fakeExam[this.index] != null) {
      this.question = this.fakeExam[this.index];
    } else {
      this.index++;
    }
  }

  changeQuestion(id: number): void {
    this.question = this.fakeExam[id];
    this.index = id;
  }
}
