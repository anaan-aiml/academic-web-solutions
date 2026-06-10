import { Star, MessageSquare, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-200 border-y border-slate-200/40 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            Hear From Our Satisfied Clients
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Students and business owners from all over the world trust Academic & Web Solutions for fast turnaround timelines and pristine code delivery rates.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/85 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm transition-all hover:shadow-md relative flex flex-col justify-between"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute right-6 top-6 text-slate-100 dark:text-slate-800/50 pointer-events-none">
                <Quote size={50} className="stroke-[3]" />
              </div>

              <div>
                {/* Rating component */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ml-1.5">
                    {testimonial.category}
                  </span>
                </div>

                {/* Main Client review text quote */}
                <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-350 italic leading-relaxed mb-6 font-sans">
                  "{testimonial.text}"
                </blockquote>
              </div>

              {/* Bottom Client Card details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center font-display shadow-sm">
                  {testimonial.studentAvatarLetter}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
