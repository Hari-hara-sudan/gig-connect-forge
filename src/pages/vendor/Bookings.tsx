import { motion } from "framer-motion";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { vendorBookings } from "@/data/mockData";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  confirmed: "bg-green-500/10 text-green-400 border-green-500/20",
  declined: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function VendorBookings() {
  return (
    <DashboardLayout role="vendor">
      <div className="rounded-2xl bg-secondary border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">ID</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Customer</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden sm:table-cell">Service</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden md:table-cell">Date</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Status</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendorBookings.map((b, i) => (
              <motion.tr
                key={b.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <td className="px-5 py-3 text-foreground font-mono text-xs">{b.id}</td>
                <td className="px-5 py-3 text-foreground">{b.customer}</td>
                <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{b.service}</td>
                <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{b.date} {b.time}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[b.status]}`}>{b.status}</span>
                </td>
                <td className="px-5 py-3">
                  {b.status === "pending" && (
                    <div className="flex gap-1">
                      <button className="px-2 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs hover:bg-green-500/20 transition-colors">Accept</button>
                      <button className="px-2 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs hover:bg-red-500/20 transition-colors">Decline</button>
                    </div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
