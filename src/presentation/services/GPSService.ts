import { SubscribeToGPSUpdates } from "../../domain/use-cases/GetLatestGPSData";
import { WebSocketGPSRepository } from "../../infrastructure/ws/WebSocketGPSRepository";

// crea la instancia del caso de uso (SubscribeTOGPSUpdates) con el repositorio ws y la expone a la UI (en este caso al componente)
const repository = new WebSocketGPSRepository();
export const gpsService = new SubscribeToGPSUpdates(repository);