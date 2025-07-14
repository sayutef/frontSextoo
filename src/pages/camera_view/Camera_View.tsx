import React, { useEffect, useState } from 'react';

interface Detection {
  cls: string;
  conf: number;
}

interface CamMessage {
  prototype_id: string;
  detections: Detection[];
  image: string;
}

const CameraView: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [detections, setDetections] = useState<Detection[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://pybot-ws.namixcode.cc/ws/cam?prototype_id=1234aleo');

    socket.onopen = () => {
      console.log('Conectado al WebSocket jeje');
    };

    socket.onmessage = (event) => {
      try {
        const data: CamMessage = JSON.parse(event.data);

        const imageBase64 = data.image.startsWith('data:image')
          ? data.image
          : `data:image/jpeg;base64,${data.image}`;

        setImageSrc(imageBase64);
        setDetections(data.detections);
      } catch (error) {
        console.error('Error al parsear el mensaje:', error);
      }
    };

    socket.onerror = (error) => {
      console.error('Error en el WebSocket:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket cerrado');
    };

    return () => {
      socket.close();
    };
  }, []);

 
  return (
    <div style={{ maxWidth: 840, margin: '0 auto' }}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="streaming"
          style={{ width: '100%', border: '2px solid #000', borderRadius: '8px' }}
        />
      ) : (
        <p>Esperando video...</p>
      )}

      {detections.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Detecciones:</strong>
          <ul>
            {detections.map((det, index) => (
              <li key={index}>
                Clase: {det.cls}, Confianza: {det.conf.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CameraView;

