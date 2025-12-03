import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section
      className="border-t border-border bg-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Ready to write with clarity?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg leading-relaxed">
          Join thousands of writers who have transformed their content with AI-powered assistance.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 sm:w-auto">
            Start Writing Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-border text-foreground hover:bg-secondary sm:w-auto bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
