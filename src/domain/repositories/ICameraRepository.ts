
import type {CamData} from "../entities/CamMessageData";

// el repository es un contrato (interfaz) que describe los métodos para conectar, desconectar y recibir datos del ws

export interface ICameraRepository {
    connect(prototypeId: string): void;
    disconnect(): void
    onUpdate(callback: (data:CamData) => void): void;
}