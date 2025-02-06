/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import type {
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface APIResponse<T> {
  success: boolean;
  message: string;
  data: T;
  result: T;
  totalPages?: number;
  currentPage?: number;
}

export interface QueryOptions<T, K>
  extends UseQueryOptions<
    APIResponse<T>,
    AxiosError<APIResponse<unknown>>,
    APIResponse<T>,
    // @ts-expect-error
    K
  > {}

export interface MutationOptions<T, P>
  extends UseMutationOptions<
    APIResponse<T>,
    AxiosError<APIResponse<unknown>>,
    P
  > {}

export interface StockData {
  time: number; // Unix timestamp
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface Annotation {
  type: "trendline" | "rectangle";
  startX: number;
  startY: number;
  endX?: number;
  endY?: number;
}
