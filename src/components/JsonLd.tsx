export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Guy Assedou",
    jobTitle: "Fractional CPO & Strategic Product Advisor",
    url: "https://a7advisory.ai",
    image: "https://a7advisory.ai/headshot-circle.png",
    sameAs: ["https://www.linkedin.com/in/guyassedou"],
    knowsAbout: [
      "Product Strategy",
      "Fractional CPO",
      "B2B SaaS",
      "AI-native Products",
      "Product-Led Growth",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Kellogg School of Management" },
      { "@type": "CollegeOrUniversity", name: "Technion – Israel Institute of Technology" },
    ],
  }

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "A7 Advisory",
    url: "https://a7advisory.ai",
    founder: { "@type": "Person", name: "Guy Assedou" },
    description:
      "Fractional CPO and strategic product advisory for B2B SaaS companies at growth inflection points.",
    areaServed: ["United States", "Israel"],
    serviceType: [
      "Fractional CPO",
      "Product Strategy Advisory",
      "Executive Product Coaching",
      "AI-native Product Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Product Leadership Services",
      itemListElement: [
        { "@type": "Offer", name: "Fractional CPO", description: "Full ownership of the product function — strategy through execution." },
        { "@type": "Offer", name: "Strategic Advisor", description: "Pressure-test direction and sharpen decisions at the highest-stakes moments." },
        { "@type": "Offer", name: "Executive Operator", description: "Own a single strategic initiative from concept to launch." },
        { "@type": "Offer", name: "Craft Coach", description: "Raise the craft and skills of the leaders and teams already doing the work." },
      ],
    },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is this different from hiring a full-time CPO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You get senior product leadership — strategy, execution, and team development — without the six-month search, 12-month ramp, equity dilution, or full-time cost. Engagements are scoped to what you actually need, and can scale up or down as the business evolves. Not sure which model fits? The 30-minute call usually makes it clear.",
        },
      },
      {
        "@type": "Question",
        name: "What does a typical engagement look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the engagement — and that range is intentional. A focused workshop can be a single day. Advisory retainers run month-to-month with regular weekly touchpoints. Owning a single initiative runs two to four months. Embedded fractional CPO work runs three to six months with a weekly operating cadence. If you're unsure which model fits, it usually becomes very clear during the first call.",
        },
      },
      {
        "@type": "Question",
        name: "How do you manage working with multiple clients at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each engagement runs on a defined operating cadence — dedicated weekly time, not reactive availability. The structure is intentional: it forces prioritization and keeps the work high-leverage. I carry a small number of active engagements at any one time, so you get consistent, focused attention — not a fractional slice of someone stretched thin.",
        },
      },
      {
        "@type": "Question",
        name: "How do you approach AI in product strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI isn't a feature layer — it's a rethinking of what the product does and how the team operates. I help founders separate real leverage from noise: which bets to make, how to sequence them, and how to build the AI-native workflows that actually compound. I've led this work across B2B SaaS at multiple stages.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from a fractional CPO marketplace or advisory network?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most fractional models give you access to a pool — you get matched, you get hours, you get advice. I work differently. I carry a small number of engagements at any one time, embedded in your team, and invested in your success. The difference shows up in execution: I'm not an outsider, I'm in the room where the decisions get made. I operate the way I build products — focused on outcomes.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
