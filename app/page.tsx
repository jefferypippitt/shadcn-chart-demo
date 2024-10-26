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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";

const chartData = [
  { month: "January", start: 48.16, end: 61.51 },
  { month: "February", start: 63.01, end: 79.1 },
  { month: "March", start: 82.26, end: 90.34 },
  { month: "April", start: 90.35, end: 86.03 },
  { month: "May", start: 83.03, end: 109.62 },
  { month: "June", start: 114.99, end: 123.54 },
  { month: "July", start: 124.3, end: 117.01 },
  { month: "August", start: 109.2, end: 119.36 },
  { month: "September", start: 107.99, end: 121.44 },
  { month: "October", start: 117.0, end: 141.54 },
];

const chartConfig = {
  start: {
    label: "Start",
    color: "hsl(var(--chart-nvidia-primary))",
  },
  end: {
    label: "End",
    color: "hsl(var(--chart-nvidia-secondary))",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            <Image
              src="/nvidia-color.svg"
              alt="Logo"
              width={40}
              height={40}
              className="inline mr-2"
            />
            NVIDIA Corporation (NVDA)
          </CardTitle>
          <CardDescription>Stock prices January - October 2024</CardDescription>
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
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar
                dataKey="start"
                fill="hsl(var(--chart-nvidia-primary))"
                radius={4}
              />
              <Bar
                dataKey="end"
                fill="hsl(var(--chart-nvidia-secondary))"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Stock prices varied significantly over the past months{" "}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Data sourced from Yahoo Finance
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
