import { User } from './User';

export class Admin extends User {
  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    super(id, name, email, password, phone, age);
  }

  public manageNotes(): void {
    console.log(`Admin ${this.name} is managing system notes.`);
  }
}