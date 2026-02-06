import { Bell } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const notifications = [
  { text: "New vendor application from Glamour Salon requires review", time: "30 min ago", unread: true },
  { text: "Monthly revenue report generated — $128K total", time: "2 hours ago", unread: true },
  { text: "User Emily L. flagged a review for moderation", time: "1 day ago", unread: false },
  { text: "System update completed successfully", time: "2 days ago", unread: false },
];

export default function AdminNotifications() {
  return (
    <DashboardLayout role="admin">
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
