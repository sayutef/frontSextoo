export interface Detection {
  cls: string;
  conf: number;
}

export interface CamData {
  prototype_id: string;
  detections: Detection[];
  image: string;
}
