import {Component, OnInit} from '@angular/core';
import {Timestamp} from 'rxjs';
import {Router} from '@angular/router';

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
            qId: 1,
          },
          {
            id: 2,
            name: 'answer2',
            check: false,
            qId: 1,
          },
          {
            id: 3,
            name: 'answer3',
            check: false,
            qId: 1,
          },
          {
            id: 4,
            name: 'answer4',
            check: false,
            qId: 1,
          },
        ]
      },
      {
        id: 2,
        name: 'abc2',
        answer: [
          {
            id: 1,
            name: 'answer5',
            check: true,
            qId: 2,
          },
          {
            id: 2,
            name: 'answer6',
            check: false,
            qId: 2,
          },
          {
            id: 3,
            name: 'answer7',
            check: false,
            qId: 2,
          },
          {
            id: 4,
            name: 'answer8',
            check: false,
            qId: 2,
          },
        ]
      },
      {
        id: 3,
        name: 'abc333',
        answer: [
          {
            id: 1,
            name: '3333',
            check: true,
            qId: 3,
          },
          {
            id: 2,
            name: '3333',
            check: false,
            qId: 3,
          },
          {
            id: 3,
            name: '3333',
            check: false,
            qId: 3,
          },
          {
            id: 4,
            name: '3333',
            check: false,
            qId: 3,
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
  lastQuestion = true;
  answerTS: any = null;
  answerList: any = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.question = this.fakeExam[this.index];
  }

  checkLast(): any {
    this.lastQuestion = this.fakeExam.length !== this.index + 1;
  }

  nextQuestion(): any {
    if (this.fakeExam.length > this.index + 1) {
      this.index++;
      this.question = this.fakeExam[this.index];
      this.checkAnswer();
      this.checkLast();
    }
  }

  prevQuestion(): any {
    this.index--;
    if (this.fakeExam[this.index] != null) {
      this.question = this.fakeExam[this.index];
      this.checkAnswer();
      this.lastQuestion = true;
    } else {
      this.index++;
    }
  }

  changeQuestion(id: number): void {
    this.question = this.fakeExam[id];
    this.index = id;
    this.checkAnswer();
    this.checkLast();
  }

  resultExam(): void {
    this.checkAnswer();
    this.router.navigate(['result-exam']);
  }

  checkAnswer(): any {
    console.log(this.answerTS);
    if (this.answerTS != null) {
      if (!this.answerList.includes(this.answerTS) && !this.answerList.isEmpty) {
        for (const a of this.answerList) {
          if (a.qId === this.answerTS.qId) {
            this.answerList.splice(this.answerList.indexOf(a), 1);
            // this.answerList = this.answerList.filter((ele, index, arr) { return ele != this.answerTS});
          }
        }
        this.answerList.push(this.answerTS);
      }
      console.log(this.answerList);
    }
  }
}
