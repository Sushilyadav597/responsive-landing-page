import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 pt-20 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">AI-Powered Writing</p>
        <h1
          id="hero-heading"
          className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
        >
          Write with clarity.
          <br />
          <span className="text-muted-foreground">Communicate with impact.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
          Transform your ideas into compelling content. Clarity helps you write better emails, documents, and creative
          pieces with AI that understands your voice.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 sm:w-auto">
            Start Writing Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-border text-foreground hover:bg-secondary sm:w-auto bg-transparent"
          >
            Watch Demo
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No credit card required. Free plan available.</p>
      </div>
    </section>
  )
}
