import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'notes-component',
  templateUrl: './notes-component.component.html',
  styleUrls: ['./notes-component.component.css']
})
export class NotesComponentComponent implements OnInit {

  notes: Note[];
  text:string;

  constructor() { }

  ngOnInit() {
    this.notes = [
      {text: 'note 1'},
      {text: 'note 2'},
    ];
  }

  addNote(text:string):void {
    let note = {text: text};
    this.notes.push(note);
    this.text = '';
  }

  removeNote(index:number):void {
    this.notes.splice(index, 1);
  }

}
