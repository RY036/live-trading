import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface OptionData {
  strike: number;
  open: number;
  high: number;
  low: number;
  close: number;
  mp: number;
  view: string;
  poc: number;
  buy45: number;
  sell45: number;
}

export const OptionTable: React.FC<{
  title: string;
  data: OptionData[];
  color: string;
  isLoading: boolean;
}> = ({ title, data, color, isLoading }) => {
  const formatter = new Intl.NumberFormat("en-In", {});
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#393B42]">
            <TableHead
              className={cn("text-base font-semibold leading-5", color)}
              colSpan={8}
            >
              {title}
            </TableHead>
          </TableRow>
          <TableRow className="border-b border-[#393B42] bg-foreground">
            {[
              "Strike",
              "Open",
              "High",
              "Low",
              "Close",
              "MP",
              "View",
              "POC",
              "45° Buy",
              "45° Sell",
            ].map((header) => (
              <TableHead
                key={header}
                className="border-b border-[#393B42] text-start text-sm font-medium text-zinc-400"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24">
                  <Loader2 className="mx-auto animate-spin text-primary" />
                </TableCell>
              </TableRow>
            ) : (
              <>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    className={cn(
                      "border-b border-[#393B42] even:bg-foreground",
                    )}
                  >
                    <TableCell className="text-start">{row.strike}</TableCell>
                    <TableCell className="text-start">{row.open}</TableCell>
                    <TableCell className="text-start">{row.high}</TableCell>
                    <TableCell className="text-start">
                      {formatter.format(row.low)}
                    </TableCell>
                    <TableCell className="text-start">
                      {formatter.format(row.close)}
                    </TableCell>
                    <TableCell className="text-start">
                      {formatter.format(row.mp)}
                    </TableCell>
                    <TableCell
                      className={`text-start ${
                        row.view === "Buy" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {row.view}
                    </TableCell>
                    <TableCell className="text-start">
                      {formatter.format(row.poc)}
                    </TableCell>
                    <TableCell className="text-start">
                      {formatter.format(row.buy45)}
                    </TableCell>
                    <TableCell className="text-start">
                      {formatter.format(row.sell45)}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </>
        </TableBody>
      </Table>
    </div>
  );
};
