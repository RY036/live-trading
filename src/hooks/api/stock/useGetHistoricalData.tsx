import { http } from "@/lib/http";
import { QueryOptions } from "@/types/common";
import { useQuery } from "@tanstack/react-query";

interface History {
  tradingsymbol: string;
  name: string;
  last_price: number;
  expiry: string;
  strike: number;
  tick_size: number;
  lot_size: number;
  instrument_type: string;
  segment: string;
  exchange: string;
}

export const useGetHistoricalData = (
  queryOptions?: QueryOptions<
    History[],
    [
      "historical-data",
      {
        page: number;
        limit: number;
        tradingsymbol: string;
      },
    ]
  >,
) => {
  return useQuery({
    queryKey: [
      "historical-data",
      {
        page: 1,
        limit: 10,
        tradingsymbol: "BANKNIFTY",
      },
    ],
    queryFn: async (query) => {
      const params = query.queryKey[1];
      const { data } = await http.get("/historical-data", {
        params,
      });
      return data;
    },
    ...queryOptions,
  });
};
