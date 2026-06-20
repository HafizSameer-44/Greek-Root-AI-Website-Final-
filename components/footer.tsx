import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { XIcon, LinkedInIcon, GitHubIcon } from "@/components/brand-icons"
const nav = [
  { href: "/", label: "Home" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

const socials = [
  { href: "https://twitter.com", label: "Twitter", icon: XIcon },
  { href: "https://www.linkedin.com/company/greekroot-ai/?viewAsMember=true", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://github.com", label: "GitHub", icon: GitHubIcon },
  { href: "mailto:greekrootai@gmail.com", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="Greek Root AI logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-base font-semibold tracking-tight">
                Greek Root <span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Intelligent automation, AI agents, and smart business systems that
              work while you sleep. Scale effortlessly with artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Connect</h4>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-around display-flex rounded-full glass text-muted-foreground transition-all hover:text-primary hover:glow-border"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a
                href="mailto:greekrootai@gmail.com"
                className="mt-5 block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                greekrootai@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Greek Root AI. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Building AI that works while you sleep.
          </p>
        </div>
      </div>
    </footer>
  )
}
