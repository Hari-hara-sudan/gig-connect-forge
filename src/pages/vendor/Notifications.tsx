import { Bell } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const notifications = [
  { text: "New booking request from Sarah M. for Premium Haircut", time: "1 hour ago", unread: true },
  { text: "Payment of $85 received for Hair Coloring service", time: "3 hours ago", unread: true },
  { text: "Emily L. left a 5-star review on Beard Trim", time: "1 day ago", unread: false },
  { text: "Weekly earnings report is ready for download", time: "2 days ago", unread: false },
];

export default function VendorNotifications() {
  return (
    <DashboardLayout role="vendor">
      <div className="max-w-2xl space-y-3">
        {notifications.map((n, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
              n.unread ? "bg-primary/5 border-primary/20" : "bg-secondary border-border"
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${n.unread ? "bg-primary/10" : "bg-muted"}`}>
              <Bell size={14} className={n.unread ? "text-primary" : "text-muted-foreground"} />
            </div>
            <div>
              <p className="text-sm text-foreground">{n.text}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
