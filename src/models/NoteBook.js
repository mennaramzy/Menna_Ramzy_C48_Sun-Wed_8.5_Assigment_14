"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteBook = void 0;
class NoteBook {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.notes = [];
    }
    addNote(note) {
        this.notes.push(note);
        console.log(`Note added to notebook: ${this.title}`);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((_, index) => index !== noteId);
        console.log(`Note removed from notebook: ${this.title}`);
    }
    getNotes() {
        return this.notes;
    }
}
exports.NoteBook = NoteBook;
