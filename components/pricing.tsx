import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals getting started",
    features: ["5,000 words/month", "Basic AI suggestions", "1 language", "Email support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professionals and teams",
    features: ["Unlimited words", "Advanced AI features", "30+ languages", "Priority support", "API access"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Everything in Pro", "Custom AI training", "SSO & SAML", "Dedicated support", "SLA guarantee"],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Pricing</p>
          <h2
            id="pricing-heading"
            className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Simple, transparent pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg">
            Start free and scale as you grow. No hidden fees.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-border bg-card ${plan.popular ? "ring-2 ring-foreground" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                  Most Popular
                </span>
              )}
              <CardHeader className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="px-6 sm:px-8">
                <ul className="space-y-3" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 sm:p-8 pt-0 sm:pt-0">
                <Button
                  className={`w-full ${plan.popular ? "bg-foreground text-background hover:bg-foreground/90" : "bg-secondary text-foreground hover:bg-secondary/80"}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
