import type { CamMessage } from "../entities/CamMessageData";
import type { ICameraRepository } from "../repositories/ICameraRepository";



export class SubscribeToCameraUpdates {
    private repository: ICameraRepository;

    constructor(repository: ICameraRepository){
        this.repository = repository;
    }

    execute(
        prototypeId: string,
        onData: (data: CamMessage) => void
    ) {
        this.repository.connect(prototypeId);
        this.repository.onUpdate(onData);
    }

    stop(){
        this.repository.disconnect();
    }
}