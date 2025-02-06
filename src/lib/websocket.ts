import { WebSocketResponse } from "../types/websocket"; // Adjust path as needed

export class WebSocketClient {
  private socket: WebSocket;
  private isConnected = false;

  constructor(private _url: string) {
    this.socket = new WebSocket(_url);

    this.socket.onopen = () => {
      console.log("WebSocket connected.");
      this.isConnected = true;
    };

    this.socket.onclose = () => {
      console.log("WebSocket disconnected.");
      this.isConnected = false;
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }

  send(data: Record<string, unknown>) {
    if (this.isConnected) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error("WebSocket is not connected.");
    }
  }

  onMessage(callback: (data: WebSocketResponse) => void) {
    this.socket.onmessage = (event) => {
      try {
        const parsedData: WebSocketResponse = JSON.parse(event.data);
        callback(parsedData);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };
  }

  close() {
    this.socket.close();
  }
}

export const wsClient = new WebSocketClient(
  "ws://localhost:8000/api/v1/calculation/ws/option_metrics",
);
