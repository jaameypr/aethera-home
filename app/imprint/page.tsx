import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Imprint — Aethera",
};

export default function ImprintPage() {
  const name = process.env.IMPRINT_NAME ?? "";
  const street = process.env.IMPRINT_STREET ?? "";
  const city = process.env.IMPRINT_CITY ?? "";
  const email = process.env.IMPRINT_EMAIL ?? "";

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

        <h1 className="text-3xl font-bold text-[#D4D4D8] mb-10">Imprint</h1>

        <div className="space-y-8 text-sm text-[#71717A] leading-relaxed">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Information according to § 5 TMG
            </h2>
            <p className="text-[#D4D4D8]">{name}</p>
            <p>{street}</p>
            <p>{city}</p>
          </div>

          {email && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
                Contact
              </h2>
              <a
                href={`mailto:${email}`}
                className="text-[#7C3AED] hover:underline"
              >
                {email}
              </a>
            </div>
          )}

          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#52525B] mb-3">
              Disclaimer
            </h2>
            <p>
              Despite careful content control, we assume no liability for the content of external
              links. The operators of linked pages are solely responsible for their content.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
