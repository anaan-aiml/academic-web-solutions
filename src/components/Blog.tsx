import React from "react";
import { BookOpen, Clock, Tag, X, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-200 border-y border-slate-200/40 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            SEO Scholarly Library
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            Educational Insights & Guides
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-sans">
            Read comprehensive, plagiarism-free diagnostic methodologies concerning software engineering, web development code paradigms, and thesis completions.
          </p>
        </div>

        {/* Blog Bento grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6.5xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
                    onClick={() => setSelectedPost(post)}>
                  {post.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-401 line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Tag action blocks */}
              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 text-[9px] font-bold rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-center py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-405 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  Read Article <ArrowRight size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal to preview complete Blog text */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-fade-in">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-600 dark:text-slate-350 rounded-xl transition-colors cursor-pointer"
                aria-label="Close modal dialog"
              >
                <X size={18} />
              </button>

              <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest block mb-4 w-fit">
                {selectedPost.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display mb-2 leading-snug">
                {selectedPost.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pb-5 border-b border-slate-150 dark:border-slate-800/80 mb-6">
                <span>By Academic & Web Solutions</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              {/* MD Render simulation contents */}
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-4 prose dark:prose-invert font-sans leading-relaxed">
                {selectedPost.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("###")) {
                    return <h4 key={i} className="text-sm sm:text-base font-black text-slate-900 dark:text-white pt-2 font-display">{para.replace("### ", "")}</h4>;
                  }
                  if (para.startsWith("- **")) {
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-1">
                        {para.split("\n").map((li, liIdx) => (
                          <li key={liIdx} className="list-disc">
                            <span dangerouslySetInnerHTML={{ __html: li.replace("- **", "<strong>").replace("**: ", "</strong>: ") }}></span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>

              {/* Bottom Close Call Action */}
              <div className="mt-8 pt-5 border-t border-slate-150 dark:border-slate-800/85 text-right">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl"
                >
                  Close Reading
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
