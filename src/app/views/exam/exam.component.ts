import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer, Timestamp} from 'rxjs';
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
        name: 'What does HTML stand for?',
        answer: [
          {
            id: 1,
            name: 'Hyperlinks and Text Markup Language',
            check: true,
          },
          {
            id: 2,
            name: 'Hyper Text Markup Language',
            check: false,
          },
          {
            id: 3,
            name: 'Home Tool Markup Language',
            check: false,
          },
          {
            id: 4,
            name: 'Home Tool Markup Language',
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
export class ExamComponent implements OnInit, OnDestroy {
  favoriteSeason: string | undefined;
  fakeExam = DATAFAKE.questionList;
  questions: any;
  index = 0;
  lastQuestion = true;


  countDown!: Subscription;
  counter = 1800; // seconds: 1800
  tick = 1000;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.questions = this.fakeExam;
    this.startCountDown();
  }
  startCountDown(): void {
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter;
      if (this.counter <= 0) {
        console.log('Stopppp.....');
        this.countDown.unsubscribe();
      }
    });
  }

  checkLast(): any {
    this.lastQuestion = this.fakeExam.length !== this.index + 1;
  }

  nextQuestion(): any {
    if (this.fakeExam.length > this.index + 1) {
      this.index++;
      this.questions = this.fakeExam[this.index];
      this.checkLast();
    }
  }

  prevQuestion(): any {
    this.index--;
    if (this.fakeExam[this.index] != null) {
      this.questions = this.fakeExam[this.index];
      this.lastQuestion = true;
    } else {
      this.index++;
    }
  }

  changeQuestion(id: number): void {
    this.questions = this.fakeExam[id];
    this.index = id;
    this.checkLast();
  }

  resultExam(): void {
    this.router.navigate(['result-exam']);
  }

  ngOnDestroy(): void {
    this.countDown.unsubscribe();
  }
}
