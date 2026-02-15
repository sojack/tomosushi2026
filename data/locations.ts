import type { Location } from './types';

export const locations: Location[] = [
  {
    id: 'richmond-hill',
    name: 'Richmond Hill',
    shortName: 'RH',
    address: '10909 Yonge St, Richmond Hill, ON L4C 3E3',
    phone: '(905) 770-8660',
    hours: {
      weekday: '11:30am - 10:00pm',
      saturday: '12:00pm - 10:00pm',
      sunday: '12:00pm - 9:30pm',
    },
    orderOnlineUrl: 'https://www.tomosushi.ca/richmondhill-online.html',
    menuSlug: 'menu',
    // To get this URL: Google Maps > search restaurant > Share > Embed a map > copy the src from the iframe
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.7594072093716!2d-79.43688722305396!3d43.86081517109306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ba5ba75ea71%3A0xfaf0ad0765dd4273!2sTomo%20Sushi%20Richmond%20Hill!5e0!3m2!1sen!2sca!4v1771171613000!5m2!1sen!2sca',
    instagramUrl: 'https://www.instagram.com/tomosushi_rh/',
  },
  {
    id: 'mississauga',
    name: 'Mississauga',
    shortName: 'MG',
    address: '377 Burnhamthorpe Rd E, Mississauga, ON L5A 3Y1',
    phone: '(905) 897-8882',
    hours: {
      weekday: '11:30am - 10:00pm',
      saturday: '12:00pm - 10:00pm',
      sunday: '12:00pm - 9:30pm',
    },
    orderOnlineUrl: 'https://www.tomosushi.ca/mississauga-online.html',
    menuSlug: 'menu-mg',
    // To get this URL: Google Maps > search restaurant > Share > Embed a map > copy the src from the iframe
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5781.661894936106!2d-79.66787942306573!3d43.56840557110634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b410d77778401%3A0xbe83b1fc28f68952!2sTomo%20Sushi%20Mississauga!5e0!3m2!1sen!2sca!4v1771172830497!5m2!1sen!2sca',
    instagramUrl: 'https://www.instagram.com/tomosushi_mg/',
  },
];

export function getLocation(id: string): Location | undefined {
  return locations.find((loc) => loc.id === id);
}

export function getLocationBySlug(slug: string): Location | undefined {
  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '-');
  return locations.find((loc) => loc.id === normalizedSlug);
}
