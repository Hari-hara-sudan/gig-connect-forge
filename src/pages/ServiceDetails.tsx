import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, ArrowLeft, User, MapPin, Calendar } from "lucide-react";
import PublicLayout from "@/components/layouts/PublicLayout";
import { featuredServices, timeSlots } from "@/data/mockData";
import { useState } from "react";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = featuredServices.find((s) => s.id === Number(id)) || featuredServices[0];
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <PublicLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-muted h-64 md:h-80 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-medium">{service.category}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">{service.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-primary text-primary" />
                  <span className="font-medium text-foreground">{service.rating}</span>
                  <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock size={14} /> {service.duration}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Experience a premium {service.title.toLowerCase()} session with our expert professionals.
                Our service includes consultation, the main session, and a follow-up to ensure complete satisfaction.
                All materials and products used are of the highest quality.
              </p>
            </motion.div>

            {/* Time Slots */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-primary" /> Available Time Slots
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedSlot === slot
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="card-floating p-6 sticky top-24">
              <div className="mb-4">
                <span className="text-3xl font-display font-bold text-card-foreground">${service.price}</span>
                <span className="text-sm text-muted-foreground ml-1">/ session</span>
              </div>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-card-foreground">
                  <span>Duration</span><span className="font-medium">{service.duration}</span>
                </div>
                <div className="flex justify-between text-card-foreground">
                  <span>Category</span><span className="font-medium">{service.category}</span>
                </div>
                {selectedSlot && (
                  <div className="flex justify-between text-card-foreground">
                    <span>Selected</span><span className="font-medium text-primary">{selectedSlot}</span>
                  </div>
                )}
              </div>
              <button className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Book Now
              </button>
            </motion.div>

            {/* Vendor Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-floating p-6">
              <h3 className="font-display font-semibold text-card-foreground mb-4 text-sm">About the Vendor</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <User size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm text-card-foreground">{service.vendor}</p>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground">{service.rating} rating</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin size={12} /> New York, NY
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
