import { User } from './User';

export class Note {
  private id: number;
  private title: string;
  private content: string;
  private author: User;

  constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
  }

  public preview(): string {
    return this.content.length > 30 ? this.content.substring(0, 30) + "..." : this.content;
  }

  public getTitle(): string {
    return this.title;
  }
}