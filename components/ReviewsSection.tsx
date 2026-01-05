"use client"

import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

export type ReviewItem = {
  name: string
  location: string
  text: string
  link?: string
}

type ReviewsSectionProps = {
  title: string
  reviews: ReviewItem[]
  rating?: {
    value: string
    label?: string
  }
  actions?: React.ReactNode
  className?: string
  containerClassName?: string
}

export function ReviewsSection({
  title,
  reviews,
  rating,
  actions,
  className,
  containerClassName,
}: ReviewsSectionProps) {
  if (reviews.length === 0) return null

  return (
    <section className={cn("py-24 bg-card border-y border-border", className)}>
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">{title}</h2>
            {rating && (
              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-foreground font-bold">{rating.value}</span>
                {rating.label && (
                  <span className="text-muted-foreground text-sm">
                    {rating.label}
                  </span>
                )}
              </div>
            )}
          </div>
          {actions}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="bg-background p-8 rounded-xl border border-border shadow-xs"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {review.location}
                  </div>
                </div>
              </div>
              {review.link && (
                <a
                  href={review.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Voir l'avis
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
