import {Group} from './Group';
import {Question} from './Question';
import {HistoryAssignment} from './HistoryAssignment';

export class Exam{
  examName?: string;
  questionList?: Question[];
  appGroupList?: Group[];
  historyAssignmentList?: HistoryAssignment[];
}
