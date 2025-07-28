
import { SubscribeToCameraUpdates } from "../../domain/use-cases/GetLatestCameraData";
import { WebSocketCameraRepository } from "../../infrastructure/ws/WebSocketCameraRepository";

export const cameraService = new SubscribeToCameraUpdates(new WebSocketCameraRepository());
