import { motion } from "framer-motion";
import { DollarSign, Calendar, Star, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatCard from "@/components/StatCard";
import { vendorEarnings, vendorBookings } from "@/data/mockData";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  confirmed: "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function VendorDashboard() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Earnings" value="$18,400" icon={DollarSign} trend="+15%" trendUp />
          <StatCard label="Total Bookings" value={342} icon={Calendar} trend="+12%" trendUp />
          <StatCard label="Avg Rating" value="4.8" icon={Star} />
          <StatCard label="This Month" value="$3,800" icon={TrendingUp} trend="+8%" trendUp />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Earnings Chart */}
          <div className="rounded-2xl bg-secondary border border-border p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">Earnings Overview</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={vendorEarnings}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(20 8% 20%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: "hsl(20 6% 12%)", border: "1px solid hsl(20 8% 20%)", borderRadius: 12, color: "hsl(40 20% 95%)" }}
                />
                <Bar dataKey="earnings" fill="hsl(25 95% 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Rating Distribution */}
          <div className="rounded-2xl bg-secondary border border-border p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">Rating Distribution</h3>
            <div className="space-y-3">
              {[
                { stars: 5, count: 186, pct: 72 },
                { stars: 4, count: 45, pct: 17 },
                { stars: 3, count: 18, pct: 7 },
                { stars: 2, count: 7, pct: 3 },
                { stars: 1, count: 2, pct: 1 },
              ].map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 w-16">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={12} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-8 text-right">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="rounded-2xl bg-secondary border border-border p-5">
          <h3 className="font-display font-semibold text-foreground mb-4">Incoming Bookings</h3>
          <div className="space-y-3">
            {vendorBookings.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border"
              >
                <div>
                  <p className="font-medium text-sm text-foreground">{b.customer} — {b.service}</p>
                  <p className="text-xs text-muted-foreground">{b.date} at {b.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[b.status]}`}>
                    {b.status}
                  </span>
                  {b.status === "pending" && (
                    <div className="flex gap-1">
                      <button className="px-3 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs font-medium hover:bg-green-500/20 transition-colors">Accept</button>
                      <button className="px-3 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors">Decline</button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
