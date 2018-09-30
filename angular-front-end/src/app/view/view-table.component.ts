import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmitService } from './../common/service/emit.service';

// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of sentences
  sentences: any[] = [];

  constructor(private http: Http, private emitService: EmitService) {
    emitService.flagSearch.subscribe(item => {
      console.log(item);
      this.getAllSentences();

    })
  }
  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllSentences();
  }

  deleteSentence(id) {
    this.http.delete(`sentences/` + id)
      .map(res => res.json())
      .subscribe(() => {
        this.getAllSentences();
      })
  }



  // Get all Sentences from the API
  getAllSentences() {
    this.http.get(`sentences`)
      .map(res => res.json())
      .subscribe(sentences => {
        console.log(sentences)
        this.emitService.sentences = sentences;
        sentences.map((sentence) => {
          switch (sentence.name) {
            case 'Manu':
              sentence.srcPhoto = './../../assets/Manu_20180908_165339.jpg';
              break;
            case 'Noemi':
              sentence.srcPhoto = './../../assets/Noemi_20180808.jpg';
              break;
          }
        })
        this.sentences = sentences;

      })
  }
}