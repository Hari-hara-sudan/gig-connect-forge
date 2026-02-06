import { Users } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const users = [
  { id: 1, name: "Sarah Mitchell", email: "sarah@example.com", role: "Customer", joined: "Jan 2025", status: "active" },
  { id: 2, name: "James Rodriguez", email: "james@example.com", role: "Customer", joined: "Feb 2025", status: "active" },
  { id: 3, name: "Alex Johnson", email: "alex@stylehub.com", role: "Vendor", joined: "Dec 2024", status: "active" },
  { id: 4, name: "Emily Liu", email: "emily@example.com", role: "Customer", joined: "Mar 2025", status: "suspended" },
];

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-400 border-green-500/20",
  suspended: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function AdminUsers() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h3 className="font-display font-semibold text-foreground">User Management</h3>
        <div className="rounded-2xl bg-secondary border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Name</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden sm:table-cell">Email</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Role</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs hidden md:table-cell">Joined</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground text-xs">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 text-foreground font-medium">{u.name}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{u.email}</td>
                  <td className="px-5 py-3 text-muted-foreground">{u.role}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{u.joined}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[u.status]}`}>{u.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
