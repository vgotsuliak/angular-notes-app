import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { HttpModule, Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'notes-component',
  templateUrl: './notes-component.component.html',
  styleUrls: ['./notes-component.component.css'],
})
export class NotesComponentComponent implements OnInit {

  private notesUrl = 'http://localhost:8080/notes';
  notes: Note[];
  text:string;

  constructor(private http:Http) { }

  ngOnInit() {
    this.getNotes().then(notes => this.notes = notes);
  }

  addNote(text:string):void {
    let note = {text: text};
    this.notes.push(note);
    this.text = '';
  }

  removeNote(index:number):void {
    this.notes.splice(index, 1);
  }

  getNotes(): Promise<Note[]> {
    return this.http.get(this.notesUrl)
      .toPromise()
      .then(response => response.json() as Note[]);
  }

}
