export type LocationData={name:string;address:string;latitude:number;longitude:number;phone?:string;email?:string;hours:{weekdays:string;saturday:string;sunday:string};demo?:boolean};
export const demoLocation:LocationData={name:'Sample Islamabad location',address:'F-7 Markaz, Islamabad, Pakistan (sample location)',latitude:33.7294,longitude:73.0931,email:'contact@example.com',hours:{weekdays:'9:00 AM – 6:00 PM',saturday:'10:00 AM – 4:00 PM',sunday:'Closed'},demo:true};
export function mapLinks(latitude:number,longitude:number){
 if(!Number.isFinite(latitude)||!Number.isFinite(longitude)||Math.abs(latitude)>90||Math.abs(longitude)>180)throw new Error('Invalid map coordinates');
 const point=`${latitude},${longitude}`;
 const bbox=[Math.max(-180,longitude-.015),Math.max(-90,latitude-.01),Math.min(180,longitude+.015),Math.min(90,latitude+.01)].join(',');
 return {search:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point)}`,directions:`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(point)}`,embed:`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(point)}`};
}
export function phoneHref(phone?:string){const clean=phone?.replace(/[ ()-]/g,'');return clean && /^\+?[0-9]{5,15}$/.test(clean)?`tel:${clean}`:undefined;}
export function emailHref(email?:string){return email && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)?`mailto:${email}`:undefined;}
