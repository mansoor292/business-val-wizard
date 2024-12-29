'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip } from '../ui/chart'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
  { name: 'Jul', value: 900 },
]

const chartConfig = {
  value: {
    color: "hsl(var(--primary))",
    label: "Monthly Revenue"
  }
}

export function MetricsChart() {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="mb-4 text-lg font-semibold">Monthly Revenue</h2>
      <ChartContainer config={chartConfig}>
        <LineChart data={data}>
          <XAxis 
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <ChartTooltip />
          <Line
            type="monotone"
            dataKey="value"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "hsl(var(--primary))" }
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}
