import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmitService } from './common/service/emit.service';

// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of sentences
  sentences: any[] = [];
  model: any = {};

  constructor(private http: Http, private emitService: EmitService) { }


  // Add one person to the API
  addSentence(model) {
    console.log(model)
    var name = model.name;
    var sentence = model.sentence;
    var time = model.time;
    this.http.post(`${this.API}/sentences`, {name, sentence, time })
      .map(res => res.json())
      .subscribe(() => {
        this.emitService.startSearch(true);
      })
  }


  // Get all Sentences from the API
  getAllSentences() {
    this.http.get(`${this.API}/sentences`)
      .map(res => res.json())
      .subscribe(sentences => {
        console.log(sentences)
        this.sentences = sentences
      })
  }
}