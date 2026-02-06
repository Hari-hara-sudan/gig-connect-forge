import { Bell } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const notifications = [
  { text: "Your haircut appointment is confirmed for Feb 10", time: "2 hours ago", unread: true },
  { text: "CleanPro Services accepted your booking request", time: "5 hours ago", unread: true },
  { text: "Rate your recent experience with LensArt Studio", time: "1 day ago", unread: false },
  { text: "Special offer: 20% off all fitness sessions this week", time: "2 days ago", unread: false },
  { text: "Your booking with FitLife Gym was completed successfully", time: "3 days ago", unread: false },
];

export default function CustomerNotifications() {
  return (
    <DashboardLayout role="customer">
      <div className="max-w-2xl space-y-3">
        {notifications.map((n, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
              n.unread
                ? "bg-primary/5 border-primary/20"
                : "bg-secondary border-border"
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
