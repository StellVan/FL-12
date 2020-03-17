import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter" })
export class FilterPipe implements PipeTransform {
  transform(list: any[], searchString: string): any[] {
    if (!list) {
      return [];
    }

    if (!searchString) {
      return list;
    }

    let text: string = searchString.toLocaleLowerCase();

    return list.filter(el => el.name.toLowerCase().includes(text));
  }
}
