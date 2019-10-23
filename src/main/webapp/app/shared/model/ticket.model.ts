import { Moment } from 'moment';
import { IProject } from 'app/shared/model/project.model';
import { IUser } from 'app/core/user/user.model';
import { ILabel } from 'app/shared/model/label.model';

export interface ITicket {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: Moment;
  done?: boolean;
  status?: boolean;
  txt?: string;
  project?: IProject;
  assignedTo?: IUser;
  labels?: ILabel[];
}

export class Ticket implements ITicket {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public dueDate?: Moment,
    public done?: boolean,
    public status?: boolean,
    public txt?: string,
    public project?: IProject,
    public assignedTo?: IUser,
    public labels?: ILabel[]
  ) {
    this.done = this.done || false;
    this.status = this.status || false;
  }
}
