import { motion } from "framer-motion";
import { Check, X, Eye } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { adminPendingVendors } from "@/data/mockData";

export default function AdminVendors() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h3 className="font-display font-semibold text-foreground">Vendor Approvals</h3>
        <div className="rounded-2xl bg-secondary border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Business</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden sm:table-cell">Owner</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden md:table-cell">Category</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden lg:table-cell">Applied</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminPendingVendors.map((v, i) => (
                <motion.tr
                  key={v.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-3 text-foreground font-medium">{v.name}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{v.owner}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{v.category}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden lg:table-cell">{v.date}</td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"><Check size={14} /></button>
                      <button className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"><X size={14} /></button>
                      <button className="p-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"><Eye size={14} /></button>
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
