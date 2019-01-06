import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmitService } from './../common/service/emit.service';
import { environment } from './../../environments/environment';
// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {
  public data: any;
  public stringFilter: string;
  // Link to our api, pointing to localhost
  public API: string = 'http://localhost:3000';
  public urlGet: string = `sentences`;
  public urlDelete: string = `sentences/`;
  // Declare empty list of sentences
  sentences: any[] = [];

  constructor(private http: Http, private emitService: EmitService) {
    if(environment.production===false){
      this.urlGet = this.API + `/sentences`;
      this.urlDelete = this.API + `/sentences/`;
    }
    emitService.flagSearch.subscribe(item => {
      console.log(item);
      this.getAllSentences();

    })
  }
  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {

    this.emitService.flagFilter.subscribe((stringFilter) => {
      this.stringFilter = stringFilter;
      console.log(stringFilter)
    })
    this.getAllSentences();
  }

  deleteSentence(id) {
    this.http.delete(this.urlDelete + id)
      .map(res => res.json())
      .subscribe(() => {
        this.getAllSentences();
      })
  }



  // Get all Sentences from the API
  getAllSentences() {
    this.http.get(this.urlGet)
      .map(res => res.json())
      .subscribe(sentences => {

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

          /*  this.data = [{ 'name': 'Anil', 'anil.singh581@gmail.com': 'ssd', 'age': '34', 'city': 'Noida, UP, India' },
            { 'name': 'Anil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'Sunil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'Alok', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'Tinku', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'XYZ', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'asas', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'erer', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
            { 'name': 'jhjh', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' }
            ]
            console.log('data = ' + this.data[0].name)*/
        })
        console.log('sentences = ' + sentences[0].sentence)
        this.data = sentences;

      })
  }
}