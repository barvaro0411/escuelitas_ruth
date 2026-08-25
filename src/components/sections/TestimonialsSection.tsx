import { Quote } from "lucide-react";
import { familyTestimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  const testimonials = familyTestimonials.slice(0, 4);
  if (testimonials.length === 0) return null;

  return (
    <section
      className="border-b border-border bg-surface py-16 sm:py-20"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Comunidad
          </p>
          <h2
            id="testimonials-title"
            className="mt-2 font-display font-extrabold text-ink text-3xl sm:text-4xl"
          >
            Lo que dicen nuestras familias
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {testimonial.attribution}
                {testimonial.year ? ` · ${testimonial.year}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
