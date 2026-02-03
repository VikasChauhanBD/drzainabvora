import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dr Zainab Vora",
    description:
      "NEET PG, FMGE & INI CET exam preparation by Dr. Zainab Vora focuses on conceptual clarity, smart strategies, and high-yield learning for real exam success.",
    image: "https://drzainabvora.com/assets/ZV-logo-71QxKXJj.png",
    "@id": "https://drzainabvora.com/",
    url: "https://drzainabvora.com/",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.instagram.com/drzainabvora/",
      "https://www.youtube.com/@ConceptualRadiology/",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr Zainab Vora",
    url: "https://drzainabvora.com/",
    logo: "https://drzainabvora.com/assets/ZV-logo-71QxKXJj.png",
    sameAs: [
      "https://www.instagram.com/drzainabvora/",
      "https://www.youtube.com/@ConceptualRadiology/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
