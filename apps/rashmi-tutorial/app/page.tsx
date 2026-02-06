import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    id: "step-1",
    title: "Step 1: Install Debian on Mini PC",
    bullets: [
      "Download the latest Debian ISO from debian.org",
      "Create a bootable USB (Rufus or Balena Etcher)",
      "Boot from USB and follow the installer prompts",
      "Set up your user account and enable SSH",
    ],
  },
  {
    id: "step-2",
    title: "Step 2: SSH into the Machine",
    bullets: [
      "Find the IP address with ip addr",
      "SSH from your laptop: ssh user@<ip>",
      "Generate SSH keys and add them for passwordless login",
    ],
  },
  {
    id: "step-3",
    title: "Step 3: Install Coolify",
    bullets: [
      "Run: curl -fsSL https://get.coolify.io | bash",
      "Open the dashboard at http://<ip>:8000",
      "Create your admin account",
    ],
  },
  {
    id: "step-4",
    title: "Step 4: Set up OpenClaw",
    bullets: [
      "Install Node.js 20+",
      "npm install -g openclaw",
      "Run openclaw configure and follow the wizard",
      "Connect to your preferred AI provider",
    ],
  },
  {
    id: "step-5",
    title: "Step 5: Add Cloudflare Domain",
    bullets: [
      "Add the domain in Cloudflare",
      "Create an A record pointing to your server IP",
      "Enable proxy for SSL",
      "In Coolify, attach the domain to your app",
    ],
  },
  {
    id: "step-6",
    title: "Step 6: Deploy with OpenClaw",
    bullets: [
      "OpenClaw can create apps and deploy via Coolify API",
      "Example: create a Next.js app, push to GitHub, deploy",
      "Get live URLs instantly for your team",
    ],
  },
  {
    id: "step-7",
    title: "Bonus: Agent-to-Agent (A2A)",
    bullets: [
      "Two OpenClaw instances can talk to each other",
      "Use sessions_send to message between agents",
      "Pair nodes with Tailscale for cross-machine control",
      "This enables distributed AI workflows",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffd1e8,_#ffe9f4_35%,_#fff5fa_70%)] px-4 py-12 text-pink-950 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <Card className="relative overflow-hidden rounded-3xl border-pink-200 bg-white/90 shadow-[0_20px_60px_rgba(255,105,180,0.18)]">
          <CardHeader className="gap-4">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              <span className="h-2 w-2 rounded-full bg-pink-400" />
              Hello Kitty vibes only
            </div>
            <CardTitle className="text-4xl font-bold text-pink-700 sm:text-5xl">
              Rashmi&apos;s Dev Setup Guide 🎀
            </CardTitle>
            <p className="max-w-2xl text-lg text-pink-800/80">
              A kawaii step-by-step checklist for getting your mini PC, Coolify,
              and OpenClaw ready to deploy dreamy projects in minutes.
            </p>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Button className="rounded-full bg-pink-500 px-6 text-white shadow-md hover:bg-pink-600">
              Let&apos;s get cozy ✨
            </Button>
            <div className="rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
              Pink palette: #FF69B4 • #FFB6C1 • #FFC0CB
            </div>
          </CardContent>
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 left-8 h-28 w-28 rounded-full bg-pink-300/40 blur-2xl" />
          <div className="pointer-events-none absolute bottom-6 right-10 text-4xl">🎀</div>
          <div className="pointer-events-none absolute top-6 right-6 text-3xl">💖</div>
        </Card>

        <Card className="rounded-3xl border-pink-100 bg-white/95 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pink-700">
              Tutorial Steps
            </CardTitle>
            <p className="text-sm text-pink-500">
              Tap each step for the cutest, cleanest checklist.
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="step-1">
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-pink-700">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-5 list-disc space-y-2 text-base text-pink-900/80">
                      {step.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border-pink-100 bg-white/90 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-pink-700">
                Quick Commands
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-pink-900/80">
              <div className="rounded-2xl bg-pink-50 px-4 py-3 font-mono text-pink-700">
                curl -fsSL https://get.coolify.io | bash
              </div>
              <div className="rounded-2xl bg-pink-50 px-4 py-3 font-mono text-pink-700">
                npm install -g openclaw
              </div>
              <div className="rounded-2xl bg-pink-50 px-4 py-3 font-mono text-pink-700">
                openclaw configure
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-pink-100 bg-white/90 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-pink-700">
                Sweet Finishing Touches
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-pink-900/80">
              <p>🎀 Add your domain in Cloudflare for instant SSL.</p>
              <p>💌 Save SSH keys so logins are effortless.</p>
              <p>🌸 Use OpenClaw A2A to coordinate with teammates.</p>
              <p>✨ Celebrate with a live URL and a happy dance.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-pink-500">
          Made with extra bows, hearts, and a sprinkle of Hello Kitty magic.
        </div>
      </div>
    </div>
  );
}
