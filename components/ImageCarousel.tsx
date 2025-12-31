"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type CarouselImageItem = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  href?: string;
};

type ImageCarouselProps = {
  items: CarouselImageItem[];
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  autoplayStopOnInteraction?: boolean;
  autoplayStopOnMouseEnter?: boolean;
};

const DEFAULT_AUTOPLAY_DELAY = 4500;

export function ImageCarousel({
  items,
  className,
  contentClassName,
  itemClassName,
  showArrows = true,
  showDots = true,
  autoplay = true,
  autoplayDelay = DEFAULT_AUTOPLAY_DELAY,
  autoplayStopOnInteraction = false,
  autoplayStopOnMouseEnter = true,
}: ImageCarouselProps) {
  const autoplayPlugin = React.useMemo(() => {
    if (!autoplay) {
      return undefined;
    }

    return Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: autoplayStopOnInteraction,
      stopOnMouseEnter: autoplayStopOnMouseEnter,
    });
  }, [
    autoplay,
    autoplayDelay,
    autoplayStopOnInteraction,
    autoplayStopOnMouseEnter,
  ]);

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={autoplayPlugin ? [autoplayPlugin] : undefined}
      className={cn("w-full", className)}
    >
      <CarouselContent className={cn(contentClassName)}>
        {items.map((item, index) => {
          const content = (
            <>
              <img
                src={item.src}
                alt={item.alt ?? item.title ?? `Image ${index + 1}`}
                className="h-full w-full rounded-sm object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </>
          );

          return (
            <CarouselItem
              key={`${item.src}-${index}`}
              className={cn(
                "relative aspect-video overflow-hidden",
                itemClassName
              )}
            >
              {item.href ? (
                <a href={item.href} className="block h-full w-full">
                  {content}
                </a>
              ) : (
                content
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {showArrows && (
        <>
          <CarouselPrevious className="bg-white/80 hover:bg-white" />
          <CarouselNext className="bg-white/80 hover:bg-white" />
        </>
      )}
      {showDots && (
        <CarouselDots className="absolute bottom-4 left-1/2 mt-0 -translate-x-1/2" />
      )}
    </Carousel>
  );
}
