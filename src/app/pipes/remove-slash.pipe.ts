import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeSlash' })
export class RemoveSlash implements PipeTransform {
  result: any;
  transform(value: string): string {
    this.result = value.split("/", 2);
    this.result = this.result.join("");

    return this.result;
  }
}
