import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, DollarSign, Bell } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatCard from "@/components/StatCard";
import { customerBookings } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const statusColors: Record<string, string> = {
  upcoming: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  completed: "bg-green-500/10 text-green-400 border-green-500/20",
  cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function CustomerDashboard() {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Bookings" value={24} icon={Calendar} trend="+12%" trendUp />
          <StatCard label="Upcoming" value={3} icon={Clock} />
          <StatCard label="Completed" value={19} icon={CheckCircle} trend="+8%" trendUp />
          <StatCard label="Total Spent" value="$1,240" icon={DollarSign} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bookings */}
          <div className="lg:col-span-2 rounded-2xl bg-secondary border border-border p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">Recent Bookings</h3>
            <div className="space-y-3">
              {customerBookings.map((booking, i) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border"
                >
                  <div>
                    <p className="font-medium text-sm text-foreground">{booking.service}</p>
                    <p className="text-xs text-muted-foreground">{booking.vendor} — {booking.date} at {booking.time}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">${booking.price}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl bg-secondary border border-border p-5">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Bell size={16} className="text-primary" /> Notifications
            </h3>
            <div className="space-y-3">
              {[
                { text: "Your haircut appointment is tomorrow at 10 AM", time: "2h ago" },
                { text: "CleanPro Services confirmed your booking", time: "5h ago" },
                { text: "New review response from LensArt Studio", time: "1d ago" },
                { text: "Special offer: 20% off fitness sessions", time: "2d ago" },
              ].map((n, i) => (
                <div key={i} className="p-3 rounded-xl bg-background/50 border border-border">
                  <p className="text-sm text-foreground">{n.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
