import { Admin } from './models/Admin';
import { Note } from './models/Note';
import { NoteBook } from './models/NoteBook';
import { Storage } from './models/Storage';
import { User } from './models/User';

const user1 = new User(1, "Ahmed Ali", "ahmed@mail.com", "123456", "01012345678", 25);
user1.displayInfo();

const admin = new Admin(2, "Admin Boss", "admin@mail.com", "admin123", "01198765432", 35);
admin.displayInfo();
admin.manageNotes();

const note1 = new Note(1, "TypeScript OOP", "TypeScript is a strongly typed programming language...", user1);
console.log("Preview:", note1.preview());

const notebook = new NoteBook(1, "Study Notes");
notebook.addNote(note1);

user1.addNotebook(notebook);

const noteStorage = new Storage<Note>();
noteStorage.addItem(note1);
console.log("All stored notes count:", noteStorage.getAllItems().length);