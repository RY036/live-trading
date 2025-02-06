export interface RealTimeMetrics {
  ltp: number; // Last Traded Price
  open: number;
  high: number;
  low: number;
  volume: number;
}

export interface TechnicalMetrics {
  poc: number; // Point of Control
  midpoint: number;
  buy_level: number;
  sell_level: number;
}

export interface Metrics {
  real_time: RealTimeMetrics;
  technical: TechnicalMetrics;
}

export interface WebSocketData {
  ticker: string; // e.g., "BANKNIFTY25JAN47700CE"
  timestamp: string; // ISO 8601 format
  strike: number;
  spot_price: number;
  metrics: Metrics;
}

export interface WebSocketResponse {
  status: "success" | "error";
  data: WebSocketData;
}
