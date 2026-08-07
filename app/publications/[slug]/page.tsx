import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    Award,
    BookOpen,
    ChevronRight,
    Code2,
    ExternalLink,
    FileText,
    GraduationCap,
    Play,
} from "lucide-react";
import { publications, type Link as PublicationLink } from "@/lib/data";
import {
    getAdjacentPublications,
    getPublicationBySlug,
    getPublicationLinks,
    getPublicationSectionId,
    getPublicationStatus,
    getPublicationTypeLabel,
    getPublicationYear,
    getRelatedPublications,
    siteUrl,
} from "@/lib/publications";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return publications.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const publication = getPublicationBySlug(slug);

    if (!publication) return {};

    const canonical = `${siteUrl}/publications/${publication.slug}/`;
    const description = publication.abstract
        ? `${publication.abstract.slice(0, 190).trimEnd()}…`
        : `${publication.title} by ${publication.authors}.`;
    const year = getPublicationYear(publication);
    const pdfUrl = publication.pdf
        ? publication.pdf.startsWith("/")
            ? `${siteUrl}${publication.pdf}`
            : publication.pdf
        : undefined;
    const citationMetadata: Record<string, string | string[]> = {
        citation_title: publication.title,
        citation_author: publication.authors.split(",").map((author) => author.trim()),
    };
    if (publication.type === "journal") {
        citationMetadata.citation_journal_title = publication.journal ?? publication.venue;
    } else if (publication.type === "conference") {
        citationMetadata.citation_conference_title = publication.conference ?? publication.venue;
    } else {
        citationMetadata.citation_dissertation_institution = publication.venue;
    }
    if (publication.publicationDate ?? year) {
        citationMetadata.citation_publication_date = publication.publicationDate ?? year!;
    }
    if (publication.volume) citationMetadata.citation_volume = publication.volume;
    if (publication.issue) citationMetadata.citation_issue = publication.issue;
    if (publication.doi) citationMetadata.citation_doi = publication.doi;
    const [firstPage, lastPage] = publication.pages?.split("-") ?? [];
    if (firstPage) citationMetadata.citation_firstpage = firstPage;
    if (lastPage) citationMetadata.citation_lastpage = lastPage;
    if (publication.articleNumber) citationMetadata.citation_firstpage = publication.articleNumber;
    if (pdfUrl) citationMetadata.citation_pdf_url = pdfUrl;

    return {
        title: publication.title,
        description,
        alternates: { canonical },
        openGraph: {
            type: "article",
            url: canonical,
            title: publication.title,
            description,
            ...(publication.publicationDate ? { publishedTime: publication.publicationDate } : {}),
            images: [
                {
                    url: "/images/profile_photo.png",
                    width: 400,
                    height: 400,
                    alt: "Masih Haseli",
                },
            ],
        },
        twitter: {
            card: "summary",
            title: publication.title,
            description,
            images: ["/images/profile_photo.png"],
        },
        other: citationMetadata,
    };
}

function LinkIcon({ link }: { link: PublicationLink }) {
    const name = link.name.toLowerCase();
    if (name.includes("pdf") || name.includes("journal version")) return <FileText size={17} aria-hidden="true" />;
    if (name.includes("code")) return <Code2 size={17} aria-hidden="true" />;
    if (name.includes("youtube") || name.includes("video")) return <Play size={17} aria-hidden="true" />;
    return <ExternalLink size={17} aria-hidden="true" />;
}

export default async function PublicationPage({ params }: PageProps) {
    const { slug } = await params;
    const publication = getPublicationBySlug(slug);

    if (!publication) notFound();

    const links = getPublicationLinks(publication);
    const relatedPublications = getRelatedPublications(publication);
    const adjacentPublications = getAdjacentPublications(publication);
    const year = getPublicationYear(publication);
    const canonical = `${siteUrl}/publications/${publication.slug}/`;
    const journalSeries = publication.journal
        ? {
              "@type": "Periodical",
              name: publication.journal,
          }
        : null;
    const journalVolume = journalSeries && publication.volume
        ? {
              "@type": "PublicationVolume",
              volumeNumber: publication.volume,
              isPartOf: journalSeries,
          }
        : journalSeries;
    const journalIssue = journalVolume && publication.issue
        ? {
              "@type": "PublicationIssue",
              issueNumber: publication.issue,
              isPartOf: journalVolume,
          }
        : journalVolume;
    const venueStructuredData = publication.type === "journal"
        ? {
              isPartOf: journalIssue ?? {
                  "@type": "Periodical",
                  name: publication.venue,
              },
          }
        : publication.type === "conference"
            ? {
                  isPartOf: {
                      "@type": "CreativeWork",
                      name: publication.conference ?? publication.venue,
                  },
              }
            : {
                  sourceOrganization: {
                      "@type": "CollegeOrUniversity",
                      name: publication.venue,
                  },
              };
    const structuredData = {
        "@context": "https://schema.org",
        "@type": publication.type === "thesis" ? "CreativeWork" : "ScholarlyArticle",
        headline: publication.title,
        name: publication.title,
        url: canonical,
        mainEntityOfPage: canonical,
        author: publication.authors.split(",").map((author) => ({
            "@type": "Person",
            name: author.trim(),
        })),
        ...(publication.publicationDate ?? year
            ? { datePublished: publication.publicationDate ?? year }
            : {}),
        ...venueStructuredData,
        ...(publication.pages || publication.articleNumber
            ? { pagination: publication.pages ?? publication.articleNumber }
            : {}),
        ...(publication.doi
            ? {
                  identifier: {
                      "@type": "PropertyValue",
                      propertyID: "DOI",
                      value: publication.doi,
                  },
                  sameAs: `https://doi.org/${publication.doi}`,
              }
            : {}),
        ...(publication.abstract ? { abstract: publication.abstract } : {}),
        ...(publication.pdf
            ? {
                  encoding: {
                      "@type": "MediaObject",
                      contentUrl: publication.pdf.startsWith("/")
                          ? `${siteUrl}${publication.pdf}`
                          : publication.pdf,
                  },
              }
            : {}),
    };

    return (
        <article className="relative py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted">
                <Link href="/publications" className="hover:text-accent transition-colors">
                    Publications
                </Link>
                <ChevronRight size={14} aria-hidden="true" />
                <Link
                    href={`/publications#${getPublicationSectionId(publication)}`}
                    className="hover:text-accent transition-colors"
                >
                    {getPublicationTypeLabel(publication)}
                </Link>
            </nav>

            <header className="max-w-4xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent">
                        {publication.type === "thesis" ? <GraduationCap size={15} aria-hidden="true" /> : <BookOpen size={15} aria-hidden="true" />}
                        {getPublicationStatus(publication)}
                    </span>
                    {publication.award && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
                            <Award size={15} aria-hidden="true" />
                            Award-winning work
                        </span>
                    )}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground font-sans">
                    {publication.title}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted">
                    {publication.authors.split(/(M\. Haseli|Masih Haseli)/g).map((part, index) =>
                        part.match(/M\. Haseli|Masih Haseli/) ? (
                            <strong key={index} className="font-semibold text-foreground">
                                {part}
                            </strong>
                        ) : (
                            <span key={index}>{part}</span>
                        )
                    )}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <span className="font-sans italic text-foreground/90">{publication.venue}</span>
                    <span aria-hidden="true">•</span>
                    <span className="font-semibold text-foreground/80">{publication.year}</span>
                    {publication.note && (
                        <>
                            <span aria-hidden="true">•</span>
                            <span>{publication.note}</span>
                        </>
                    )}
                </div>

                {links.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-3">
                        {links.map((link, index) => (
                            <a
                                key={`${link.name}-${link.url}`}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className={
                                    index === 0
                                        ? "inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
                                        : "inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-4 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                                }
                            >
                                <LinkIcon link={link} />
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {publication.award && (
                <aside className="mt-10 flex max-w-4xl items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                        <Award size={21} aria-hidden="true" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">Recognition</p>
                        <p className="mt-1 font-semibold text-amber-950 dark:text-amber-100">{publication.award}</p>
                    </div>
                </aside>
            )}

            {publication.abstract && (
                <section className="mt-14 max-w-4xl" aria-labelledby="abstract-heading">
                    <h2 id="abstract-heading" className="text-2xl font-bold text-foreground font-sans">
                        Abstract
                    </h2>
                    <div className="mt-4 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                    <p className="mt-6 text-base leading-8 text-foreground/85">
                        {publication.abstract}
                    </p>
                </section>
            )}

            {relatedPublications.length > 0 && (
                <section className="mt-14 max-w-4xl" aria-labelledby="related-heading">
                    <h2 id="related-heading" className="text-2xl font-bold text-foreground font-sans">
                        Related work
                    </h2>
                    <div className="mt-4 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                    <div className="mt-6 grid gap-4">
                        {relatedPublications.map((related) => (
                            <Link
                                key={related.id}
                                href={`/publications/${related.slug}`}
                                className="group rounded-xl border border-border bg-background/70 p-5 hover:border-accent/50 hover:bg-accent/5 transition-colors"
                            >
                                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                                    {getPublicationStatus(related)}
                                </p>
                                <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground font-sans group-hover:text-accent transition-colors">
                                    {related.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted">{related.authors}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <nav aria-label="Adjacent publications" className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
                {adjacentPublications.previous ? (
                    <Link
                        href={`/publications/${adjacentPublications.previous.slug}`}
                        className="group rounded-xl border border-border p-4 hover:border-accent/50 transition-colors"
                    >
                        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                            <ArrowLeft size={14} aria-hidden="true" /> Previous
                        </span>
                        <span className="mt-2 block text-sm font-semibold leading-snug text-foreground group-hover:text-accent transition-colors">
                            {adjacentPublications.previous.title}
                        </span>
                    </Link>
                ) : (
                    <div />
                )}
                {adjacentPublications.next && (
                    <Link
                        href={`/publications/${adjacentPublications.next.slug}`}
                        className="group rounded-xl border border-border p-4 text-right hover:border-accent/50 transition-colors"
                    >
                        <span className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                            Next <ArrowRight size={14} aria-hidden="true" />
                        </span>
                        <span className="mt-2 block text-sm font-semibold leading-snug text-foreground group-hover:text-accent transition-colors">
                            {adjacentPublications.next.title}
                        </span>
                    </Link>
                )}
            </nav>

            <Link
                href="/publications"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to all publications
            </Link>
        </article>
    );
}
