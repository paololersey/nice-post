import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild, ElementRef } from '@angular/core';
import { EmitService } from '../common/service/emit.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilterSearchComponent implements OnInit {
  
  constructor(private emitService: EmitService) { }
  
  public filter: string;

  @ViewChild('filterFrontEnd') filterFrontEnd: ElementRef;

  ngOnInit() {
  }

  @HostListener('change') sendFilter() {
     this.emitService.flagFilter.emit(this.filterFrontEnd.nativeElement.value);
  }
}
