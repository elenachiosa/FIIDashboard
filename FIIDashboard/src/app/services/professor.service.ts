import { Injectable } from '@angular/core';

@Injectable()
export class ProfessorService {

  constructor() { }

  public professors: string[] = [
    'Liviu Ciortuz',
    'Cristian Vidrascu',
    'Dragos Gavrilut',
    'Florin Olariu',
    'Laurentiu Tiplea',
    'Leahu Ioana',
    'Dan Cristea',
    'Florin Iacob'
  ];

}
