"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { useGetHistoricalData } from "@/hooks/api/stock/useGetHistoricalData";
import { Button } from "@/components/ui/button";
import { parseAsString, useQueryState } from "nuqs";

export const HistoricalDataTable: React.FC = () => {
  // local state for pagination

  const [page, setPage] = React.useState(1);
  const limit = 10; // your desired page size

  const [ticker] = useQueryState(
    "ticker",
    parseAsString.withDefault("BANKNIFTY"),
  );

  // fetch data using the custom hook
  const { data, status } = useGetHistoricalData({
    queryKey: [
      "historical-data",
      {
        page,
        limit,
        tradingsymbol: ticker,
      },
    ],
  });

  const totalPages = data?.totalPages ?? 0;

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div>
      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#393B42]">
              <TableHead
                colSpan={10}
                className="text-center text-base font-semibold text-primary"
              >
                Historical Data
              </TableHead>
            </TableRow>
            <TableRow className="border-b border-[#393B42] bg-foreground">
              <TableHead className="text-sm font-medium text-zinc-400">
                Instrument Token
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Exchange Token
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Trading Symbol
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Name
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Last Price
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Strike Price
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Tick Size
              </TableHead>
              <TableHead className="text-sm font-medium text-zinc-400">
                Lot Size
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {status === "pending" ? (
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
                {data?.data?.map((item, index: number) => (
                  <TableRow
                    className="border-b border-[#393B42] even:bg-foreground"
                    key={index}
                  >
                    <TableCell>{item.instrument_type}</TableCell>
                    <TableCell>{item.exchange}</TableCell>
                    <TableCell>{item.tradingsymbol}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.last_price.toFixed(2)}</TableCell>
                    <TableCell>{item.strike}</TableCell>
                    <TableCell>{item.tick_size}</TableCell>
                    <TableCell>{item.lot_size}</TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION CONTROLS */}
      {status !== "pending" && (
        <div className="mt-4 flex items-center justify-end gap-4">
          <Button onClick={handlePrevious} disabled={page === 1}>
            Previous
          </Button>

          <div className="text-sm text-gray-200">
            Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </div>

          <Button onClick={handleNext} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
