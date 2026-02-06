import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const roles = [
  { label: "Customer", path: "/customer/dashboard" },
  { label: "Vendor", path: "/vendor/dashboard" },
  { label: "Admin", path: "/admin/dashboard" },
];

export default function RoleSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const currentRole = roles.find((r) => location.pathname.startsWith(r.path.split("/").slice(0, 2).join("/")));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-colors"
      >
        {currentRole?.label || "Switch Role"}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 rounded-xl bg-popover border border-border shadow-xl py-1 z-50">
          {roles.map((role) => (
            <button
              key={role.label}
              onClick={() => { navigate(role.path); setOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-colors"
            >
              {role.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
