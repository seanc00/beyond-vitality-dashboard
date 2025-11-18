import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-primary">
          Tailwind 4 + shadcn UI
        </h1>

        <Button>
          Test Button
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>
    </main>
  )
}
