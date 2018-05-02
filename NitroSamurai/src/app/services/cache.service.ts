import { Injectable } from '@angular/core';
import { Team } from '../models/Team';

@Injectable()
export class CacheService {

  teams: Team[] = [];
  constructor() { }

}
