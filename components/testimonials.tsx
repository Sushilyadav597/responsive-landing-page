import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Clarity has transformed how our marketing team writes. We're producing twice the content in half the time.",
    author: "Sarah Chen",
    role: "Head of Marketing",
    company: "TechCorp",
  },
  {
    quote: "The AI suggestions are incredibly accurate. It's like having a professional editor available 24/7.",
    author: "Michael Torres",
    role: "Content Director",
    company: "MediaGroup",
  },
  {
    quote: "Finally, an AI tool that respects our privacy. The enterprise features are exactly what we needed.",
    author: "Emily Watson",
    role: "CTO",
    company: "SecureFinance",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-y border-border bg-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Testimonials</p>
          <h2
            id="testimonials-heading"
            className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Loved by writers everywhere.
          </h2>
        </header>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border bg-background">
              <CardContent className="p-6 sm:p-8">
                <blockquote>
                  <p className="text-foreground leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary" aria-hidden="true" />
                  <div>
                    <cite className="not-italic font-medium text-foreground">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
