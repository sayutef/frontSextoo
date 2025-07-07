export function serviceWeight(onData) {
  const socket = new WebSocket('wss://pybot-ws.namixcode.cc/ws/hx?prototype_id=1234aleo');

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.weight_g !== undefined) {
        onData(data.weight_g);
      }
    } catch (err) {
      console.error('Error parsing WS message:', err);
    }
  };

  socket.onerror = (err) => {
    console.error('WebSocket error:', err);
  };

  return socket;
}
