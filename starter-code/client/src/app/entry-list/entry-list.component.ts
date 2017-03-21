import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Array<any> = [];
  errorMessage: String= '';

  constructor(private servizzle: JournalEntriesService) { }

  ngOnInit() {
    this.getListizzle();
  }

  getListizzle() {
    return this.servizzle.getEntrizzles()
    .then((allEntrizzles) => {
      this.entries = allEntrizzles;
    })
    .catch((err) => {
      console.log('Error in entry-listizzle my nizzle, get on that shizzle')
    })
  }

}
