"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", start: 48.16, end: 61.51 },
  { month: "February", start: 63.01, end: 79.10 },
  { month: "March", start: 82.26, end: 90.34 },
  { month: "April", start: 90.35, end: 86.03 },
  { month: "May", start: 83.03, end: 109.62 },
  { month: "June", start: 114.99, end: 123.54 },
];

const chartConfig = {
  start: {
    label: "Start",
    color: "hsl(var(--chart-sky-500))",
  },
  end: {
    label: "End",
    color: "hsl(var(--chart-red-500))",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>NVIDIA Corporation (NVDA)</CardTitle>
        <CardDescription>Stock prices January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="start" fill="hsl(var(--chart-sky-500))" radius={4} />
            <Bar dataKey="end" fill="hsl(var(--chart-red-500))" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Stock prices varied significantly over the past months <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Data sourced from Yahoo Finance
        </div>
      </CardFooter>
    </Card>
  );
}
