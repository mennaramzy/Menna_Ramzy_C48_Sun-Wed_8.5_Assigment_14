"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        return this.content.length > 30 ? this.content.substring(0, 30) + "..." : this.content;
    }
    getTitle() {
        return this.title;
    }
}
exports.Note = Note;
