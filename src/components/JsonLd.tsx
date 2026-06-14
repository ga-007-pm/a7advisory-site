export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Guy Assedou",
    jobTitle: "Fractional CPO & Strategic Product Advisor",
    url: "https://a7advisory.ai",
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
          text: "You get senior product leadership — strategy, execution, and team development — without the six-month search, 12-month ramp, equity dilution, or full-time cost. Engagements are scoped to what you actually need, and can scale up or down as the business evolves.",
        },
      },
      {
        "@type": "Question",
        name: "What does a typical engagement look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the engagement. A focused workshop can be a single day. Advisory retainers run month-to-month. Owning a single initiative runs two to four months. Embedded fractional CPO work runs three to six months with a weekly operating cadence.",
        },
      },
      {
        "@type": "Question",
        name: "What's the minimum engagement length?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fractional CPO work runs a minimum of three months. Advisory retainers run month-to-month. Coaching and workshops can be as short as a single session.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically within 1–2 weeks. The first step is a 30-minute call to understand the situation and see if it's a good fit.",
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
