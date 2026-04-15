import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Impressum — Aethera",
};

export default function ImprintPage() {
  const name = process.env.IMPRINT_NAME ?? "";
  const careOf = process.env.IMPRINT_CARE_OF ?? "";
  const street = process.env.IMPRINT_STREET ?? "";
  const city = process.env.IMPRINT_CITY ?? "";
  const country = process.env.IMPRINT_COUNTRY ?? "";
  const email = process.env.IMPRINT_EMAIL ?? "";
  const responsible = process.env.IMPRINT_RESPONSIBLE ?? "";

  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <section className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#71717A] hover:text-[#D4D4D8] transition-colors mb-10"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold text-[#D4D4D8] mb-10">Impressum</h1>

        <div className="space-y-8 text-sm text-[#71717A] leading-relaxed">

          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-[#D4D4D8]">{name}</p>
            {careOf && <p>{careOf}</p>}
            <p>{street}</p>
            <p>{city}</p>
            {country && <p>{country}</p>}
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Kontakt
            </h2>
            {email ? (
              <p>
                E-Mail:{" "}
                <a href={`mailto:${email}`} className="text-[#7C3AED] hover:underline">
                  {email}
                </a>
              </p>
            ) : (
              <p>E-Mail: –</p>
            )}
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="text-[#D4D4D8]">{responsible}</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Haftung für Links
            </h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter (z. B. GitHub, Discord), auf
              deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden
              Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber verantwortlich.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
