"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 ">

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div className=" items-center justify-center bg-emerald-500/15 ring-1 ring-emerald-500/20">
                
              </div>
              <Image src="/icon.png" alt="Greek Root AI logo" width={46} height={46} />

              <div>
                <h3 className="text-xl font-bold">
                  Greek Root AI
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                  AI Company
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Building intelligent AI agents, business automation,
              custom software, and modern digital solutions for
              ambitious companies worldwide.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <a
                href="https://linkedin.com"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v13h-4v-13zM8.5 8.5h3.84v1.78h.05c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.21v7.1h-4v-6.29c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32v6.4h-4v-13z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z" />
                </svg>
              </a>

              <a
                href="mailto:contact@greekroot.org"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>

          </div>

          {/* Company Links */}

          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Company
            </h4>

            <div className="mt-6 space-y-4">              <Link
                href="/"
                className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
              >
                Home
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

      <Link
  href="/why-choose-us"
  className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
>
  Why Choose Us
  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
</Link>

              <Link
                href="/services"
                className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
              >
                Services
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
              >
                Contact
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Resources
            </h4>

            <div className="mt-6 space-y-4">

              <Link
                href="/faq"
                className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
              >
                FAQ
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

              <Link
                href="/terms-of-service"
                className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
              >
                Terms of Service
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

              <Link
                href="/privacy-policy"
                className="group flex items-center justify-between text-gray-300 transition hover:text-emerald-300"
              >
                Privacy Policy
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Connect
            </h4>

            <div className="mt-6 space-y-5">              <a
                href="mailto:contact@greekroot.org"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-400/30 hover:bg-white/10"
              >
                <Mail className="mt-1 h-5 w-5 text-emerald-300" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    contact@greekroot.org
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapPin className="mt-1 h-5 w-5 text-emerald-300" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">          <div>
            <p>
              © {new Date().getFullYear()} Greek Root AI. All rights
              reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/faq"
              className="transition hover:text-emerald-300"
            >
              FAQ
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-emerald-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-emerald-300"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}