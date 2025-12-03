const stats = [
  { value: "10M+", label: "Words written", company: "Fortune 500" },
  { value: "98%", label: "Accuracy rate", company: "Enterprise" },
  { value: "50%", label: "Time saved", company: "Startups" },
  { value: "4.9", label: "User rating", company: "G2 Crowd" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Platform Statistics
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className={`flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ${
              index < stats.length - 1 ? "border-r border-border" : ""
            } ${index < 2 ? "border-b border-border lg:border-b-0" : ""}`}
          >
            <p className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{stat.label}</p>
            <p className="mt-2 text-xs text-muted-foreground/60 uppercase tracking-wide">{stat.company}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
