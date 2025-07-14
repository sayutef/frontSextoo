import type { GPSData } from "../entities/GPSData";
import type { IGPSRepository } from "../repositories/IGPSRepository";

// aquí es la lógica del negocio en este caso, hace que la suscripción dirija a actualizaciones GPS usnado un repositorio
export class SubscribeToGPSUpdates {
  private repository: IGPSRepository;

  constructor(repository: IGPSRepository) {
    this.repository = repository;
  }

  execute(
    prototypeId: string,
    onData: (data: GPSData) => void
  ) {
    this.repository.connect(prototypeId);
    this.repository.onUpdate(onData);
  }

  stop() {
    this.repository.disconnect();
  }
}
