"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";

export interface OptionMetricsResponse {
  status: "success" | "error";
  data: OptionMetricsItem[];
}

export interface OptionMetricsItem {
  ticker: string;
  timestamp: string; // e.g. "2025-01-25T11:27:22.352105"
  strike: number;
  spot_price: number;
  metrics: {
    real_time: {
      ltp: number;
      open: number;
      high: number;
      low: number;
      volume: number;
    };
    technical: {
      poc: number;
      midpoint: number;
      buy_level: number;
      sell_level: number;
    };
  };
}

export const MainTable: React.FC = () => {
  // Intl formatter for date
  const dateFormatter = new Intl.DateTimeFormat("en-In", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Stores all items received from the WebSocket
  const [optionData, setOptionData] = useState<OptionMetricsItem[]>([]);

  // Tracks whether we are still waiting for initial data
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const socketUrl =
      "ws://localhost:8000/api/v1/calculation/ws/option_metrics";
    const ws = new WebSocket(socketUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket:", socketUrl);
      // If you need to send any subscription messages, do so here:
      // ws.send(JSON.stringify({ type: "subscribe", symbol: "XYZ" }));
    };

    ws.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data) as OptionMetricsResponse;

        if (response.status === "success") {
          // Merge new data into existing state
          setOptionData(response.data);

          // We have received data, stop showing loading indicator
          setIsLoading(false);
        } else {
          console.error("WebSocket reported an error status:", response);
        }
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed:", socketUrl);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#393B42]">
            <TableHead
              colSpan={8}
              className="text-center text-base font-semibold text-primary"
            >
              Option Metrics (Real-Time & Technical)
            </TableHead>
          </TableRow>
          <TableRow className="border-b border-[#393B42] bg-foreground">
            <TableHead className="text-sm font-medium text-zinc-400">
              Ticker
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              Timestamp
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              Strike
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              Spot Price
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              LTP
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              Volume
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              POC
            </TableHead>
            <TableHead className="text-sm font-medium text-zinc-400">
              Midpoint
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow className="w-full">
              <TableCell
                colSpan={8}
                className="h-[440px] w-full items-center justify-center"
              >
                <Loader2 className="mx-auto animate-spin text-center text-primary" />
              </TableCell>
            </TableRow>
          ) : (
            <>
              {optionData.map((item, index) => (
                <TableRow
                  className="border-b border-[#393B42] even:bg-foreground"
                  key={index}
                >
                  <TableCell>{item.ticker.split(/\d/)[0]}</TableCell>
                  <TableCell>
                    {dateFormatter
                      .format(new Date(item.timestamp))
                      .replace(/\//g, "-")}
                  </TableCell>
                  <TableCell>{item.strike}</TableCell>
                  <TableCell>{item.spot_price}</TableCell>
                  <TableCell>{item.metrics.real_time.ltp}</TableCell>
                  <TableCell>{item.metrics.real_time.volume}</TableCell>
                  <TableCell>{item.metrics.technical.poc.toFixed(2)}</TableCell>
                  <TableCell>
                    {item.metrics.technical.midpoint.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
