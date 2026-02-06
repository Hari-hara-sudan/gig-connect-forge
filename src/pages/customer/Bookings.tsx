import { motion } from "framer-motion";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { customerBookings } from "@/data/mockData";
import { useState } from "react";

const statusColors: Record<string, string> = {
  upcoming: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  completed: "bg-green-500/10 text-green-400 border-green-500/20",
  cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function CustomerBookings() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? customerBookings : customerBookings.filter((b) => b.status === filter);

  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          {["all", "upcoming", "completed", "cancelled"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-xl text-xs font-medium capitalize transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="rounded-2xl bg-secondary border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Booking ID</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Service</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden md:table-cell">Vendor</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden sm:table-cell">Date</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Price</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => (
                <motion.tr
                  key={b.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-3 text-foreground font-mono text-xs">{b.id}</td>
                  <td className="px-5 py-3 text-foreground">{b.service}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{b.vendor}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{b.date}</td>
                  <td className="px-5 py-3 text-foreground font-medium">${b.price}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[b.status]}`}>
                      {b.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
