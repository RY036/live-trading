import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEBANK?interval=1m",
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching Yahoo Finance data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
