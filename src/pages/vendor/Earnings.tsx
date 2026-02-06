import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatCard from "@/components/StatCard";
import { vendorEarnings } from "@/data/mockData";

const transactions = [
  { id: "TX001", service: "Premium Haircut", amount: 45, date: "Feb 6, 2026", type: "credit" },
  { id: "TX002", service: "Platform Fee", amount: -4.5, date: "Feb 6, 2026", type: "debit" },
  { id: "TX003", service: "Hair Coloring", amount: 85, date: "Feb 5, 2026", type: "credit" },
  { id: "TX004", service: "Payout", amount: -320, date: "Feb 4, 2026", type: "debit" },
  { id: "TX005", service: "Beard Trim", amount: 25, date: "Feb 4, 2026", type: "credit" },
];

export default function VendorEarnings() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard label="Total Earnings" value="$18,400" icon={DollarSign} trend="+15%" trendUp />
          <StatCard label="This Month" value="$3,800" icon={TrendingUp} trend="+8%" trendUp />
          <StatCard label="Pending Payout" value="$450" icon={DollarSign} />
        </div>

        <div className="rounded-2xl bg-secondary border border-border p-5">
          <h3 className="font-display font-semibold text-foreground mb-4">Earnings Trend</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={vendorEarnings}>
              <defs>
                <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(25 95% 55%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(25 95% 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(20 8% 20%)" />
              <XAxis dataKey="month" tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
              <Tooltip contentStyle={{ background: "hsl(20 6% 12%)", border: "1px solid hsl(20 8% 20%)", borderRadius: 12, color: "hsl(40 20% 95%)" }} />
              <Area type="monotone" dataKey="earnings" stroke="hsl(25 95% 55%)" fill="url(#earnGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl bg-secondary border border-border p-5">
          <h3 className="font-display font-semibold text-foreground mb-4">Transaction History</h3>
          <div className="space-y-2">
            {transactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.type === "credit" ? "bg-green-500/10" : "bg-red-500/10"}`}>
                    {t.type === "credit" ? <ArrowUpRight size={14} className="text-green-400" /> : <ArrowDownRight size={14} className="text-red-400" />}
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{t.service}</p>
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${t.type === "credit" ? "text-green-400" : "text-red-400"}`}>
                  {t.type === "credit" ? "+" : ""}${Math.abs(t.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
