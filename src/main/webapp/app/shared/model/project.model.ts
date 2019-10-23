export interface IProject {
  id?: number;
  name?: string;
  status?: string;
  txt?: string;
}

export class Project implements IProject {
  constructor(public id?: number, public name?: string, public status?: string, public txt?: string) {}
}
