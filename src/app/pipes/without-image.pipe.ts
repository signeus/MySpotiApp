import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutImage'
})
export class WithoutImagePipe implements PipeTransform {

  transform(value: any): string {
    let noImage = "assets/img/noimage.png";
    if( !value ) {
      return noImage;
    }
    return ( value.length > 0 ) ? value[1].url: noImage;
  }

}
