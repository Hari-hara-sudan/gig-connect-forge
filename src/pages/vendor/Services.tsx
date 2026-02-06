import { motion } from "framer-motion";
import { Plus, MoreVertical, Pause, Play } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { vendorServices } from "@/data/mockData";

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-400 border-green-500/20",
  paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function VendorServices() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-foreground">My Services</h3>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus size={16} /> Add Service
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {vendorServices.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-secondary border border-border p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-foreground">{s.name}</h4>
                  <p className="text-sm text-muted-foreground">{s.duration} — {s.bookings} bookings</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[s.status]}`}>{s.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-display font-bold text-foreground">${s.price}</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    {s.status === "active" ? <Pause size={14} className="text-muted-foreground" /> : <Play size={14} className="text-muted-foreground" />}
                  </button>
                  <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <MoreVertical size={14} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
