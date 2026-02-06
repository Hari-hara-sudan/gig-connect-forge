import { motion } from "framer-motion";
import { Users, Store, Calendar, DollarSign } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatCard from "@/components/StatCard";
import { adminStats, adminUserGrowth, adminBookingTrend } from "@/data/mockData";

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Users" value={adminStats.totalUsers.toLocaleString()} icon={Users} trend="+6%" trendUp />
          <StatCard label="Total Vendors" value={adminStats.totalVendors} icon={Store} trend="+4%" trendUp />
          <StatCard label="Total Bookings" value={adminStats.totalBookings.toLocaleString()} icon={Calendar} trend="+12%" trendUp />
          <StatCard label="Revenue" value={`$${(adminStats.totalRevenue / 1000).toFixed(0)}K`} icon={DollarSign} trend="+18%" trendUp />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-secondary border border-border p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={adminUserGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(20 8% 20%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(20 6% 12%)", border: "1px solid hsl(20 8% 20%)", borderRadius: 12, color: "hsl(40 20% 95%)" }} />
                <Line type="monotone" dataKey="users" stroke="hsl(25 95% 55%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="vendors" stroke="hsl(200 80% 60%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">Bookings Trend</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={adminBookingTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(20 8% 20%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(20 10% 55%)", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(20 6% 12%)", border: "1px solid hsl(20 8% 20%)", borderRadius: 12, color: "hsl(40 20% 95%)" }} />
                <Bar dataKey="bookings" fill="hsl(25 95% 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
