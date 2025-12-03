import { Sparkles, Zap, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description:
      "Get intelligent recommendations that match your writing style and tone. Our AI learns from your preferences.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time suggestions as you type. No waiting, no interruptions. Just seamless writing assistance.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your content is encrypted and never used for training. Enterprise-grade security for peace of mind.",
  },
  {
    icon: Globe,
    title: "30+ Languages",
    description:
      "Write confidently in any language. Clarity supports translation, localization, and multilingual content.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Features</p>
          <h2
            id="features-heading"
            className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Everything you need to write better.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed sm:text-lg">
            Powerful tools that help you create compelling content without the complexity.
          </p>
        </header>

        <div className="mt-12 grid gap-px bg-border sm:mt-16 sm:grid-cols-2 2xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="bg-background p-6 sm:p-8 lg:p-10">
              <feature.icon className="h-8 w-8 text-foreground" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-foreground sm:text-xl">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed sm:text-base">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
