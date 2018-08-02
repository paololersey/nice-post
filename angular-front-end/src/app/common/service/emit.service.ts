

import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class EmitService {

    public flagSearch: EventEmitter<Boolean>;

    public sentences: any[] = [];

    constructor() {
        this.flagSearch = new EventEmitter();
    }

    public startSearch(boo: Boolean ): void {
        this.flagSearch.emit(boo);
    }



}