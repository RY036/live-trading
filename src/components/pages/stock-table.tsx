"use client";

import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import React, { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { wsClient } from "@/lib/websocket";
import { WebSocketData, WebSocketResponse } from "@/types/websocket";

// Utility function to format numbers
const formatNumber = (num: number): string => {
  return Number.isInteger(num)
    ? num.toString()
    : num.toFixed(2).replace(/\.00$/, "");
};

export const StockTable = () => {
  const [rowsMap, setRowsMap] = useState<Map<number, WebSocketData>>(new Map());

  // WebSocket logic
  useEffect(() => {
    wsClient.onMessage((response: WebSocketResponse) => {
      if (response.status === "success") {
        const newData = response.data;

        setRowsMap((prevMap) => {
          const updatedMap = new Map(prevMap);
          updatedMap.set(newData.strike, newData); // Update or add the new row
          return updatedMap;
        });
      } else {
        console.error("Error received from WebSocket:", response);
      }
    });

    return () => {
      wsClient.close();
    };
  }, []);

  // Convert Map to Array for rendering
  const rows = useMemo(() => Array.from(rowsMap.values()), [rowsMap]);

  // Define columns using TanStack's column helper
  const columnHelper = createColumnHelper<WebSocketData>();

  const columns = useMemo(
    () => [
      columnHelper.group({
        id: "calls",
        header: () => <div className="text-center">CALLS</div>, // Center-align CALLS header
        columns: [
          columnHelper.accessor("metrics.real_time.volume", {
            header: "Volume",
            cell: (info) => formatNumber(info.getValue() || 0),
          }),
          columnHelper.accessor("metrics.technical.poc", {
            header: "POC",
            cell: (info) => formatNumber(info.getValue() || 0),
          }),
          columnHelper.accessor("metrics.real_time.ltp", {
            header: "LTP",
            cell: (info) => formatNumber(info.getValue() || 0),
          }),
        ],
      }),
      columnHelper.accessor("strike", {
        header: "STRIKE",
        cell: (info) => (
          <span className="block text-center font-bold">
            {formatNumber(info.getValue() || 0)}
          </span>
        ), // Bold and center-align STRIKE values
      }),
      columnHelper.group({
        id: "puts",
        header: () => <div className="text-center">PUTS</div>, // Center-align PUTS header
        columns: [
          columnHelper.accessor("metrics.real_time.ltp", {
            header: "LTP",
            cell: (info) => formatNumber(info.getValue() || 0),
          }),
          columnHelper.accessor("metrics.technical.poc", {
            header: "POC",
            cell: (info) => formatNumber(info.getValue() || 0),
          }),
          columnHelper.accessor("metrics.real_time.volume", {
            header: "Volume",
            cell: (info) => formatNumber(info.getValue() || 0),
          }),
        ],
      }),
    ],
    [columnHelper],
  );

  // Initialize the table instance
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table className="w-full table-auto border border-gray-300">
        {/* Table Header */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border-b border-gray-300 px-4 py-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* Table Body */}

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={`${row.id}_${cell.column.id}`} // Ensure unique keys using row ID and column ID
                  className="border-b border-gray-300 px-4 py-2"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
