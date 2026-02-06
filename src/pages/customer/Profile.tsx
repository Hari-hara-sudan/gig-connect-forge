import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Camera } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function CustomerProfile() {
  return (
    <DashboardLayout role="customer">
      <div className="max-w-2xl space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-secondary border border-border p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center">
                <User size={32} className="text-muted-foreground" />
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <Camera size={12} className="text-primary-foreground" />
              </button>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Sarah Mitchell</h3>
              <p className="text-sm text-muted-foreground">Member since Jan 2025</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Full Name", value: "Sarah Mitchell", icon: User },
              { label: "Email", value: "sarah@example.com", icon: Mail },
              { label: "Phone", value: "+1 (555) 123-4567", icon: Phone },
              { label: "Location", value: "New York, NY", icon: MapPin },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{field.label}</label>
                <div className="relative">
                  <field.icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    defaultValue={field.value}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Save Changes
          </button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
