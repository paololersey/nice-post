import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arrayInput: any, filterString: string): any {
    if (arrayInput.length === 0 || !filterString) {
      return arrayInput;
    }
    
    const resultArray = [] ;
    for (const item of arrayInput) {
      if(item.sentence.indexOf(filterString)>-1 || item.name.indexOf(filterString)>-1){
        resultArray.push(item);
      }
     /* if(item.sentence.indexOf('glice')>-1){
        resultArray.push(item);
      }*/
    }
    return resultArray;
  }

}
