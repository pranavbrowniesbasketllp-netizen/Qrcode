import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Sparkles,
  Coffee,
  Flame,
  GlassWater,
  Gift,
  X,
  Clock,
  Leaf,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  brand,
  socials,
  company,
  product,
  info,
  enjoy,
  gallery,
} from "@/data/brownies-basket";

const WhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const socialList = [
  { key: "instagram", label: "Instagram", href: socials.instagram, handle: socials.instagramHandle, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: socials.facebook, handle: socials.facebookHandle, Icon: Facebook },
  { key: "youtube", label: "YouTube", href: socials.youtube, handle: socials.youtubeHandle, Icon: Youtube },
  { key: "whatsapp", label: "WhatsApp", href: socials.whatsapp, handle: socials.whatsappHandle, Icon: WhatsApp },
];

const enjoyIcons = [Flame, Coffee, GlassWater, Gift];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brownie Basket — Thank you for choosing us" },
      {
        name: "description",
        content:
          "Handcrafted brownies made with premium ingredients and lots of love. A premium digital card from Brownie Basket LLP, Bengaluru.",
      },
      { name: "theme-color", content: "#2a1810" },
      { property: "og:title", content: "Brownie Basket — Thank You" },
      {
        property: "og:description",
        content: "Handcrafted brownies, premium ingredients, made with love in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrolled={scrolled} />
      <Hero />
      <BrandStory />
      <ProductShowcase />
      <ProductInfo />
      <HowToEnjoy />
      <Gallery onOpen={setLightbox} />
      <Follow />
      <CustomerCare />
      <Footer />
      <Lightbox index={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "px-3 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 transition-all duration-500 ${
          scrolled
            ? "max-w-3xl rounded-full glass-dark px-3 py-2 shadow-[var(--shadow-soft)]"
            : "max-w-7xl px-5 py-4"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <Logo />
          <span className="min-w-0 truncate">
            <span className="block font-display text-base font-semibold leading-none text-cream">
              {brand.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-cream/60">
              {brand.tagline}
            </span>
          </span>
        </a>
        <nav className="flex items-center gap-0.5">
          {socialList.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full text-cream/85 transition-all hover:scale-110 hover:bg-gold/15 hover:text-gold"
            >
              <Icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <span
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
      style={{
        background: "var(--gradient-gold)",
        boxShadow: "0 6px 20px -8px oklch(0.82 0.13 75 / 0.6)",
      }}
      aria-hidden
    >
      <span className="font-display text-lg font-bold text-cocoa">B</span>
    </span>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src={product.video}
          poster={product.poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.11 0.018 35 / 0.7) 0%, oklch(0.11 0.018 35 / 0.45) 40%, oklch(0.16 0.022 35) 100%)",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Logo />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream/85 backdrop-blur"
        >
          <Sparkles className="h-3 w-3 text-gold" />
          A note from our kitchen
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
          className="font-display text-[2.4rem] font-medium leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          Thank you for
          <em
            className="block font-display italic"
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            choosing Brownie Basket
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/80 sm:text-lg"
        >
          {brand.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-9 flex items-center gap-2"
        >
          {socialList.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-cream/5 text-cream backdrop-blur transition-all hover:scale-110 hover:border-gold hover:bg-gold/15 hover:text-gold"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70"
        aria-label="Scroll"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}

/* ---------- Brand Story ---------- */
function BrandStory() {
  return (
    <section id="story" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{brand.story.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
          {brand.story.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {brand.story.body}
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {brand.story.pillars.map((p, i) => (
          <motion.li
            key={p.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-border bg-card/60 p-6 text-center backdrop-blur"
          >
            <span
              className="mx-auto grid h-1 w-10 place-items-center rounded-full"
              style={{ background: "var(--gradient-gold)" }}
            />
            <h3 className="mt-4 font-display text-lg font-semibold text-cream">{p.label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Product Showcase ---------- */
function ProductShowcase() {
  return (
    <section id="product" className="px-5 py-20 sm:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-glow)]"
            style={{ border: "1px solid color-mix(in oklab, var(--color-gold) 35%, transparent)" }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={1000}
              height={1200}
              className="block aspect-[4/5] w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -bottom-6 -right-3 hidden w-56 overflow-hidden rounded-2xl border border-gold/30 shadow-[var(--shadow-glow)] sm:block"
          >
            <video
              className="aspect-square w-full object-cover"
              src={product.video}
              poster={product.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </motion.div>

        <div>
          <Eyebrow>Inside the pack</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            {product.name}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{product.tagline}</p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Flavour
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-cream/85">{product.flavor}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Texture
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-cream/85">{product.texture}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Serving suggestions
              </dt>
              <dd className="mt-1.5">
                <ul className="space-y-1.5">
                  {product.serving.map((s) => (
                    <li key={s} className="flex gap-2 text-sm leading-relaxed text-cream/85">
                      <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product Info ---------- */
function ProductInfo() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Eyebrow>Product information</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            Everything in this box
          </h2>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((d, i) => (
            <motion.li
              key={d.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {d.label}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-cream/85">{d.value}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- How to Enjoy ---------- */
function HowToEnjoy() {
  return (
    <section className="px-5 py-20 sm:py-28" style={{ background: "var(--gradient-cocoa)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Eyebrow>How to enjoy</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            Get the very best of your bake
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {enjoy.map((e, i) => {
            const Icon = enjoyIcons[i % enjoyIcons.length];
            return (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-gold/15 bg-cream/5 p-6 backdrop-blur"
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-cocoa"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-cream">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{e.desc}</p>
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery({ onOpen }: { onOpen: (i: number) => void }) {
  const sizeClass = (h: "tall" | "med" | "short") =>
    h === "tall" ? "row-span-2" : h === "med" ? "row-span-2 sm:row-span-1" : "row-span-1";
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Eyebrow>Up close</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            A taste, in pictures
          </h2>
        </div>
        <div className="mt-10 grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => onOpen(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${sizeClass(g.h)}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-cocoa/0 transition-colors group-hover:bg-cocoa/20" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightbox({ index, onClose }: { index: number | null; onClose: () => void }) {
  const open = index !== null;
  const item = open ? gallery[index!] : null;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-4xl overflow-hidden border-0 bg-transparent p-0 shadow-none">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-cocoa/70 text-cream backdrop-blur transition hover:bg-cocoa"
        >
          <X className="h-4 w-4" />
        </button>
        {item && (
          <img
            src={item.src}
            alt={item.alt}
            className="block max-h-[85vh] w-full rounded-2xl object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ---------- Follow ---------- */
function Follow() {
  return (
    <section className="px-5 py-20 sm:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Eyebrow>Follow our journey</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            Behind every bake
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
            New flavours, kitchen stories and limited drops — first on our socials.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialList.map(({ key, label, href, handle, Icon }, i) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col gap-5 rounded-3xl border border-gold/15 bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-glow)]"
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-cocoa transition-transform group-hover:scale-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <span className="block font-display text-lg font-semibold text-cream">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-muted-foreground">
                    {handle}
                  </span>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Follow
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Customer Care ---------- */
function CustomerCare() {
  const items = [
    { Icon: Mail, label: "Email", value: company.email, href: socials.email },
    { Icon: Phone, label: "Phone", value: company.phone, href: socials.phone },
    { Icon: WhatsApp, label: "WhatsApp", value: socials.whatsappHandle, href: socials.whatsapp },
    { Icon: MapPin, label: "Visit", value: company.address, href: `https://maps.google.com/?q=${encodeURIComponent(company.address)}` },
    { Icon: Clock, label: "Hours", value: company.hours },
  ];
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Eyebrow>Customer care</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
            We're here, anytime
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, label, value, href }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <a
                href={href ?? "#"}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
                className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-gold/40"
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-cocoa"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm text-cream/90">{value}</span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-5 pb-10 pt-16 text-cream/70"
      style={{ background: "var(--cocoa-deep)" }}
    >
      <span
        aria-hidden
        className="absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.82 0.13 75 / 0.6), transparent)",
        }}
      />
      <div className="mx-auto max-w-5xl text-center">
        <Logo />
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/65">
          {brand.legal} — handcrafted brownies, baked with care in Bengaluru.
        </p>

        <div className="mt-7 flex justify-center gap-2">
          {socialList.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 bg-cream/5 text-cream transition hover:scale-110 hover:border-gold hover:bg-gold/15 hover:text-gold"
            >
              <Icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-cream/55">
          <a href="#" className="hover:text-cream">Privacy Policy</a>
          <span aria-hidden>·</span>
          <a href="#" className="hover:text-cream">Terms</a>
          <span aria-hidden>·</span>
          <span>FSSAI {company.fssai}</span>
        </div>

        <p className="mt-8 text-xs text-cream/45">
          © {new Date().getFullYear()} {brand.legal}. All rights reserved.
        </p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-cream/55">
          Made with <Heart className="h-3 w-3 fill-current text-gold" /> in Bengaluru
        </p>
      </div>
    </footer>
  );
}

/* ---------- Bits ---------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
      <span aria-hidden className="inline-block h-px w-8 bg-gold/70" />
      {children}
    </span>
  );
}

void Leaf;
