// define la forma de los datos GPS que maneja el dominio (que tipos de datos se reciben del ws)
export interface GPSData {
  prototype_id: string;
  lat: number;
  lon: number;
  spd: number;
  date: string;
  UTC: string;
  alt: number;
  sats: number;
}