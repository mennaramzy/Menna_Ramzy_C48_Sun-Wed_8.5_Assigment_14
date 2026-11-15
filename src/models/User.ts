import { NoteBook } from './NoteBook';

export class User {
  protected id: number;
  protected name: string;
  protected email: string;
  private password: string;
  protected phone: string;
  protected age: number;
  public notebooks: NoteBook[] = [];

  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  public displayInfo(): void {
    console.log(`User Info [ID: ${this.id}]: Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Phone: ${this.phone}`);
  }

  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  public getId(): number {
    return this.id;
  }
}