import { publications, type Publication } from "@/lib/data";

export const siteUrl = "https://mhaseli.github.io";

const publicationOrder = [
    "JP5",
    "JP10",
    "JP9",
    "JP7",
    "JP8",
    "JP6",
    "JP4",
    "JP3",
    "JP1",
    "JP2",
    "CP7",
    "CP5",
    "CP6",
    "CP4",
    "CP3",
    "CP2",
    "CP1",
    "Thesis",
];

export const orderedPublications = publicationOrder
    .map((id) => publications.find((publication) => publication.id === id))
    .filter((publication): publication is Publication => Boolean(publication));

export function getPublicationBySlug(slug: string) {
    return publications.find((publication) => publication.slug === slug);
}

export function getPublicationById(id: string) {
    return publications.find((publication) => publication.id === id);
}

export function getPublicationYear(publication: Publication) {
    return publication.year.match(/\d{4}/)?.[0] ?? null;
}

export function getPublicationStatus(publication: Publication) {
    const statusText = `${publication.year} ${publication.note ?? ""}`.toLowerCase();

    if (statusText.includes("submitted")) return "Submitted manuscript";
    if (statusText.includes("to appear")) return "To appear";
    if (publication.type === "thesis") return "Doctoral dissertation";
    if (publication.type === "conference") return "Conference paper";
    return "Journal article";
}

export function getPublicationTypeLabel(publication: Publication) {
    if (publication.type === "journal") return "Journal Articles";
    if (publication.type === "conference") return "Conference Proceedings";
    return "Theses";
}

export function getPublicationSectionId(publication: Publication) {
    if (publication.type === "journal") return "journals";
    if (publication.type === "conference") return "conferences";
    return "theses";
}

export function getPublicationLinks(publication: Publication) {
    const links = [...(publication.links ?? [])];

    if (publication.pdf && !links.some((link) => link.url === publication.pdf)) {
        links.unshift({ name: "PDF", url: publication.pdf });
    }

    return links;
}

export function getRelatedPublications(publication: Publication) {
    return (publication.relatedPublications ?? [])
        .map(getPublicationById)
        .filter((related): related is Publication => Boolean(related));
}

export function getAdjacentPublications(publication: Publication) {
    const index = orderedPublications.findIndex((candidate) => candidate.id === publication.id);

    return {
        previous: index > 0 ? orderedPublications[index - 1] : null,
        next: index >= 0 && index < orderedPublications.length - 1 ? orderedPublications[index + 1] : null,
    };
}
