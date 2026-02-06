import { motion } from "framer-motion";
import { Plus, Pencil, Trash2 } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { adminCategories } from "@/data/mockData";

export default function AdminCategories() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-foreground">Service Categories</h3>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus size={16} /> Add Category
          </button>
        </div>

        <div className="rounded-2xl bg-secondary border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Category</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Services</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden sm:table-cell">Vendors</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Status</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminCategories.map((c, i) => (
                <motion.tr
                  key={c.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-3 text-foreground font-medium">{c.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{c.services}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{c.vendors}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs px-2 py-0.5 rounded-full border bg-green-500/10 text-green-400 border-green-500/20">{c.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"><Pencil size={14} /></button>
                      <button className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"><Trash2 size={14} /></button>
                    </div>
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
