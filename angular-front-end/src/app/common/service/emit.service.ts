

import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class EmitService {

    public flagSearch: EventEmitter<Boolean>;
    public flagFilter: EventEmitter<String>  = new EventEmitter<String>();

    public sentences: any[] = [];

    constructor() {
        this.flagSearch = new EventEmitter();
    }

    public startSearch(boo: Boolean ): void {
        this.flagSearch.emit(boo);
    }



}