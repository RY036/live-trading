import { http } from "@/lib/http";
import { QueryOptions } from "@/types/common";
import { useQuery } from "@tanstack/react-query";

export type EOD = {
  tkr: string; // Ticker symbol
  td: string; // Trading date (ISO format)
  op: number; // Opening price
  hp: number; // Highest price
  lp: number; // Lowest price
  cp: number; // Closing price
  vol: number; // Trading volume
  oi: number; // Open interest
  eod: boolean; // End of day flag
};

export const useGetTickerEOD = (
  queryOptions?: QueryOptions<EOD[], ["ticker-eod"]>,
) => {
  return useQuery({
    ...queryOptions,
    queryKey: ["ticker-eod"],
    queryFn: async () => {
      const { data } = await http.post("/ticker_eod_data", {
        ticker: "NIFTY-1",
        start_date: "20200828",
        end_date: "20200901",
      });

      return data;
    },
  });
};
