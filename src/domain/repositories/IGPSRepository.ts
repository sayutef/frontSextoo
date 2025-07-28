import type { GPSData } from "../entities/GPSData";

// el repository es un contrato (interfaz) que describe los métodos para conectar, desconectar y recibir datos del ws
export interface IGPSRepository {
  connect(prototypeId: string): void;
  disconnect(): void;
  onUpdate(callback: (data: GPSData) => void): void;
}