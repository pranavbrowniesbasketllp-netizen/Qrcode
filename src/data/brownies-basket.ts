// Brownie Basket LLP — editable QR experience content.
// Replace URLs, asset paths and product fields with official content.
import pChoco from "@/assets/p-choco-brownie.jpg";
import pNutty from "@/assets/p-nutty-brownie.jpg";
import giftbox from "@/assets/g-giftbox.jpg";
import baker from "@/assets/g-baker.jpg";
import packaging from "@/assets/g-packaging.jpg";
import closeup from "@/assets/g-closeup.jpg";
import lifestyle from "@/assets/g-lifestyle.jpg";
import hero from "@/assets/hero-brownies.jpg";
import heroVideo from "@/assets/hero-product.mp4.asset.json";

export const brand = {
  name: "Brownie Basket",
  legal: "Brownie Basket LLP",
  tagline: "Handcrafted in Bengaluru",
  thankYou: "Thank you for choosing Brownie Basket",
  intro:
    "Handcrafted brownies made with premium ingredients and lots of love.",
  story: {
    eyebrow: "Our story",
    title: "Small batches. Honest craft. Real chocolate.",
    body:
      "Brownie Basket is a homegrown bakery from Bengaluru. Every batch is mixed by hand, baked in small trays, and packed the same day — never mass produced. We use Belgian cocoa, French butter, free-range eggs and real dark chocolate, because the difference is something you can taste in the very first bite.",
    pillars: [
      { label: "Handcrafted daily", desc: "Hand-mixed, hand-cut, baked in small trays." },
      { label: "Premium ingredients", desc: "Belgian cocoa. Real chocolate. No shortcuts." },
      { label: "No preservatives", desc: "Just butter, sugar, eggs and time." },
    ],
  },
};

// EDITABLE — replace with official URLs
export const socials = {
  website: "https://browniesbasket.com",
  instagram: "https://instagram.com/browniesbasket",
  facebook: "https://facebook.com/browniesbasket",
  youtube: "https://youtube.com/@browniesbasket",
  whatsapp: "https://wa.me/919999999999",
  email: "mailto:hello@browniesbasket.com",
  phone: "tel:+919999999999",
  instagramHandle: "@browniesbasket",
  facebookHandle: "/browniesbasket",
  youtubeHandle: "@browniesbasket",
  whatsappHandle: "+91 99999 99999",
};

export const company = {
  address: "Dodda Kammanahalli, Bengaluru, Karnataka 560068, India",
  phone: "+91 99999 99999",
  email: "hello@browniesbasket.com",
  hours: "Mon – Sat · 10:00 to 19:00 IST",
  fssai: "10000000000000",
  cin: "LLP ABZ-5254",
};

// EDITABLE — the product the customer scanned the QR for
export const product = {
  name: "Choco Chip Brownie",
  tagline: "Our signature — fudgy centre, crackle top, loaded with chips.",
  image: pChoco,
  altImage: pNutty,
  video: heroVideo.url,
  poster: hero,
  flavor:
    "Deep, almost-molten dark chocolate, balanced by sweet pockets of melting chips and a whisper of vanilla.",
  texture:
    "Crisp paper-thin top that crackles to a dense, fudgy centre — never cakey.",
  serving: [
    "Warm 10 seconds in a microwave for the just-baked feel.",
    "Pair with a scoop of vanilla ice cream and a drizzle of espresso.",
    "Best enjoyed with a hot cup of filter coffee or a tall glass of cold milk.",
    "Slice into bite-sized squares for sharing — if you can bear to.",
  ],
};

export const info = [
  {
    label: "Ingredients",
    value:
      "Refined wheat flour, dark chocolate (cocoa solids 55%), unsalted butter, cane sugar, free-range eggs, cocoa powder, choco chips, vanilla extract, salt.",
  },
  {
    label: "Nutritional Facts",
    value:
      "Per 100 g — Energy 445 kcal · Protein 5.2 g · Carbs 52 g (Sugars 38 g) · Fat 24 g (Sat. 14 g) · Fibre 2.1 g · Sodium 180 mg.",
  },
  { label: "Net Weight", value: "50 g" },
  { label: "Manufacturing Date", value: "See base of pack" },
  { label: "Shelf Life", value: "Best within 7 days of manufacture" },
  {
    label: "Storage",
    value: "Store in a cool, dry place. Refrigerate after opening, consume within 3 days.",
  },
  {
    label: "Allergens",
    value: "Contains wheat (gluten), milk, eggs. May contain traces of nuts and soy.",
  },
  { label: "Diet", value: "Vegetarian — contains egg" },
  { label: "FSSAI Lic.", value: company.fssai },
  { label: "Batch No.", value: "See base of pack" },
];

export const enjoy = [
  {
    title: "Warm it gently",
    desc: "10 seconds in the microwave brings back that just-out-of-the-oven softness.",
  },
  {
    title: "Pair with coffee",
    desc: "A strong filter coffee or espresso cuts beautifully through the chocolate.",
  },
  {
    title: "Pair with milk",
    desc: "A tall glass of cold milk — the classic, comforting combination.",
  },
  {
    title: "Perfect for gifting",
    desc: "Drop us a note on WhatsApp for hand-tied hampers for every occasion.",
  },
];

export const gallery = [
  { src: closeup, alt: "Fudgy brownie close-up", h: "tall" as const },
  { src: giftbox, alt: "Brownie gift box with gold ribbon", h: "med" as const },
  { src: baker, alt: "Baker dusting cocoa over fresh brownies", h: "tall" as const },
  { src: packaging, alt: "Brownie Basket craft packaging", h: "med" as const },
  { src: lifestyle, alt: "Friends sharing brownies at a cafe", h: "short" as const },
  { src: pChoco, alt: "Choco chip brownie plated", h: "short" as const },
];
