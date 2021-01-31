import {Exam} from './Exam';
import {User} from './User';
import {Timestamp} from 'rxjs';

export class HistoryAssignment{
  exam?: Exam;
  user?: User;
  point?: number;
  startTime?: Timestamp<any>;
  startEnd?: Timestamp<any>;
}
