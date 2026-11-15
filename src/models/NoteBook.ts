import { Note } from './Note';

export class NoteBook {
  private id: number;
  private title: string;
  private notes: Note[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.notes = [];
  }

  public addNote(note: Note): void {
    this.notes.push(note);
    console.log(`Note added to notebook: ${this.title}`);
  }

  public removeNote(noteId: number): void {
    this.notes = this.notes.filter((_, index) => index !== noteId);
    console.log(`Note removed from notebook: ${this.title}`);
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}