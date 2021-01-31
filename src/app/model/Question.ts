import {Exam} from './Exam';
import {Answer} from './Answer';
import {Category} from './Category';

export class Question{
  content?: string;
  answerList?: Answer[];
  category?: Category;
  examList?: Exam[];
}
