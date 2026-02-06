import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: number;
  title: string;
  vendor: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  duration: string;
  image: string;
}

export default function ServiceCard({ id, title, vendor, price, rating, reviews, category, duration }: ServiceCardProps) {
  return (
    <Link to={`/service/${id}`}>
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="card-floating overflow-hidden group cursor-pointer"
      >
        <div className="h-44 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display font-semibold text-card-foreground text-base mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{vendor}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-primary text-primary" />
              <span className="text-sm font-medium text-card-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-card-foreground">${price}</span>
              <span className="text-xs text-muted-foreground ml-1">/ {duration}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
