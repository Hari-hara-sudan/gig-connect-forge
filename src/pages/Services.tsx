import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import PublicLayout from "@/components/layouts/PublicLayout";
import ServiceCard from "@/components/ServiceCard";
import { featuredServices, serviceCategories } from "@/data/mockData";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = featuredServices.filter((s) => {
    const matchSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = !selectedCategory || s.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Browse Services</h1>
          <p className="text-muted-foreground">Discover top-rated services from verified vendors</p>
        </motion.div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-56 shrink-0"
          >
            <div className="rounded-2xl bg-secondary border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal size={16} className="text-primary" />
                <h3 className="font-display font-semibold text-foreground text-sm">Filters</h3>
              </div>
              <div className="mb-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Category</p>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                      !selectedCategory ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    All
                  </button>
                  {serviceCategories.slice(0, 6).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                        selectedCategory === cat.name ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Price Range</p>
                <div className="space-y-2">
                  {["Under $50", "$50 - $100", "$100 - $200", "$200+"].map((r) => (
                    <label key={r} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                      <div className="w-4 h-4 rounded border border-border" />
                      {r}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Rating</p>
                <div className="space-y-2">
                  {[4, 3, 2].map((r) => (
                    <label key={r} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                      <div className="w-4 h-4 rounded border border-border" />
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: r }).map((_, j) => (
                          <Star key={j} size={12} className="fill-primary text-primary" />
                        ))}
                        <span className="ml-1">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
