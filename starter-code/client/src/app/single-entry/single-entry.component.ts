import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry: Object;

  constructor(
    private myRoute: ActivatedRoute,
    private servizzle: JournalEntriesService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getDatEntrizzleDizzle(params['id']);
    });
  }

  getDatEntrizzleDizzle(idizzle) {
    this.servizzle.getOneEntrizzle(idizzle)
    .then((entrizzle) => {
      console.log(entrizzle)
      this.entry = entrizzle;
    })
    .catch((err) => {
      console.log("Fizzle on Javi's pizzle", err);
    });
  }

}
