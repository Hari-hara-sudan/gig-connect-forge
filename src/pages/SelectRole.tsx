import { motion } from "framer-motion";
import { User, Store, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const roles = [
  {
    label: "Customer",
    desc: "Browse and book services from top vendors near you.",
    icon: User,
    path: "/customer/dashboard",
  },
  {
    label: "Vendor",
    desc: "List your services, manage bookings, and grow your business.",
    icon: Store,
    path: "/vendor/dashboard",
  },
];

export default function SelectRole() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-dark-radial flex items-center justify-center px-4">
      <div className="gradient-glow absolute inset-0" />
      <div className="relative w-full max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Choose Your Role</h1>
          <p className="text-muted-foreground">Select how you want to use the platform</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => navigate(role.path)}
              className="card-floating p-8 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <role.icon size={28} className="text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold text-card-foreground mb-2">{role.label}</h2>
              <p className="text-sm text-muted-foreground mb-4">{role.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
        </motion.p>
      </div>
    </div>
  );
}
