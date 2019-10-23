import { ITicket } from 'app/shared/model/ticket.model';

export interface ILabel {
  id?: number;
  label?: string;
  status?: boolean;
  txt?: string;
  tickets?: ITicket[];
}

export class Label implements ILabel {
  constructor(public id?: number, public label?: string, public status?: boolean, public txt?: string, public tickets?: ITicket[]) {
    this.status = this.status || false;
  }
}
