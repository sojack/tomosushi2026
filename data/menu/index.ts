import type { LocationId } from '../types';
import * as richmondHill from './richmond-hill';
import * as mississauga from './mississauga';

export function getMenuData(locationId: LocationId) {
  switch (locationId) {
    case 'richmond-hill': return richmondHill;
    case 'mississauga': return mississauga;
  }
}
