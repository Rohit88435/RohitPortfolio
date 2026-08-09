import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../data/portfolioData";
import { SectionLabel } from "./About";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  { label: "GitHub", value: "Rohit88435", href: profile.github, icon: Github },
  {
    label: "LinkedIn",
    value: "rohit-prajapati",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "u/Rohit_8800",
    href: profile.leetcode,
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="06" title="contact.sh" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          Have a role, a project, or an idea worth building?{" "}
          <span className="text-gradient">Let's talk.</span>
        </motion.h2>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-muted"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface2 text-keyword">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      {link.label}
                    </p>
                    <p className="font-body text-sm text-ink">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
