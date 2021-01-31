import {Exam} from './Exam';
import {User} from './User';

export class Group{
  groupName?: string;
  description?: string;
  userList?: User[];
  examList?: Exam[];
}
