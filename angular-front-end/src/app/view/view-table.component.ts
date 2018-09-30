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
  public data : any
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
    /*this.data = [{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
    {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
    ]*/

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