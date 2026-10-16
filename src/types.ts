import type { FC, ReactNode } from "react";
import type { BlockStyle } from "./blockStyle";

export type BlockType =
  | "hero" | "intro_prose" | "definition_answer" | "value_prop_grid"
  | "step_list" | "comparison_table" | "faq_accordion" | "proof_strip"
  | "cta_band" | "risk_reversal" | "internal_link_cluster"
  | "contact_form" | "team_bio" | "legal_prose" | "image_gallery"
  | "image_content_split" | "before_after" | "stat_banner"
  | "product_card_grid" | "colour_palette"
  | "media_list_row" | "category_tiles" | "visit_us" | "promo_banner"
  | "image_ticker" | "mf_paints_band" | "colour_visualizer"
  | "credential_strip" | "testimonial" | "app_teaser" | "landing_page";

export interface BlockProps { variant?: string; columns?: number; /** contact_form: names of extra `<input type="hidden">` fields (filled by the site's own script). */ hiddenFields?: string[]; [k: string]: unknown; }

export interface Block<C = Record<string, unknown>> {
  blockType: BlockType;
  props?: BlockProps;
  content: C;
  style?: BlockStyle;
}

export interface HeroContent { headline: string; headline_accent?: string; subhead?: string; cta_label?: string; cta_href?: string; cta_note?: string; }
export interface IntroProseContent { markdown: string; heading?: string; }
export interface DefinitionAnswerContent { question: string; answer: string; }
export interface ValuePropItem { title: string; body: string; icon?: string; }
export interface ValuePropGridContent { items: ValuePropItem[]; heading?: string; }
export interface StepItem { title: string; body: string; }
export interface StepListContent { steps: StepItem[]; heading?: string; }
export interface ComparisonTableContent { columns: string[]; rows: string[][]; eyebrow?: string; heading?: string; intro?: string; }
export interface FaqItem { q: string; a: string; }
export interface FaqAccordionContent { items: FaqItem[]; heading?: string; }
export interface ProofItem { quote: string; attribution?: string; }
export interface ProofStripContent { items: ProofItem[]; eyebrow?: string; heading?: string; }
export interface CtaBandContent { headline: string; cta_label: string; cta_href?: string; body?: string; }
export interface RiskReversalContent { markdown: string; }
export interface LinkItem { label: string; href: string; }
export interface InternalLinkClusterContent { links: LinkItem[]; }
export interface ContactFormContent { intro?: string; fields: string[]; heading?: string; submit_label?: string; }
export interface TeamBioContent { name: string; role?: string; bio: string; }
export interface LegalProseContent { markdown: string; }
export interface GalleryImage { src?: string; alt: string; }
export interface ImageGalleryContent { images: GalleryImage[]; }

export interface SplitImage { src?: string; alt: string; }
export interface ImageContentSplitContent { image: SplitImage; heading: string; body: string; cta_label?: string; cta_href?: string; }
export interface BeforeAfterContent { before: SplitImage; after: SplitImage; caption?: string; }
export interface StatItem { number: string; label: string; }
export interface StatBannerContent { items: StatItem[]; heading?: string; }
export interface CredentialItem { figure: string; label: string; note?: string; }
export interface CredentialStripContent { items: CredentialItem[]; heading?: string; }
export interface TestimonialAggregate { score: string; count?: string; }
export interface TestimonialItem { quote: string; name?: string; town?: string; role?: string; }
export interface TestimonialContent { items: TestimonialItem[]; heading?: string; aggregate?: TestimonialAggregate; }
export interface ProductCardItem { name: string; image?: string; tagline: string; features: string[]; cta_label: string; cta_href?: string; }
export interface ProductCardGridContent { items: ProductCardItem[]; }
export interface SwatchItem { name: string; hex?: string; family?: string; }
export interface ColourPaletteContent { swatches: SwatchItem[]; heading?: string; body?: string; }

export interface MediaListRowItem {
  image?: { src?: string; alt?: string };
  name: string;
  tagline?: string;
  meta?: string[];
  price?: string;
  cta_label?: string;
  cta_href?: string;
}
export interface MediaListRowContent { heading?: string; eyebrow?: string; items: MediaListRowItem[]; }

export interface CategoryTile { title: string; blurb?: string; image?: { src?: string; alt?: string }; href?: string; }
export interface CategoryTilesContent { heading?: string; eyebrow?: string; items: CategoryTile[]; }

export interface VisitUsHours { days: string; time: string; }
export interface VisitUsContent {
  heading?: string;
  eyebrow?: string;
  address?: string[];
  phone?: string;
  email?: string;
  hours?: VisitUsHours[];
  cta_label?: string;
  cta_href?: string;
  map_image?: { src?: string; alt?: string };
  map_embed?: string;
}

export interface PromoBannerContent { text: string; icon?: string; cta_label?: string; cta_href?: string; }

export interface ImageTickerItem { src: string; alt: string; colour: string; room?: string; hex: string; }
export interface ImageTickerContent { items: ImageTickerItem[]; eyebrow?: string; }

export interface MfPaintsBandContent {
  paint_can?: string;
  chips?: string[];
  eyebrow?: string;
  heading: string;
  body: string;
  points?: string[];
  cta_label?: string;
  cta_href?: string;
}

export interface ColourVisualizerSwatch { name: string; hex: string; family: string; }
export interface ColourVisualizerContent {
  image: string;
  swatches: ColourVisualizerSwatch[];
  eyebrow?: string;
  heading?: string;
  subhead?: string;
}

export interface AppTeaserContent {
  /** Screenshot / preview of the tool being promoted. */
  image: string;
  image_alt?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  cta_label?: string;
  /** Used when the teaser links out; ignored when a client override supplies onActivate. */
  cta_href?: string;
}

/** A link or button target on a landing page: the words and where they go (a tel: link, an in-page anchor, a page). */
export interface LandingCta { label: string; href: string; }
export interface LandingItem { title: string; body: string; }
/** One landing page section, in the order the page shows it. Proof is a stored review or rating: text and who said it. */
export type LandingSection =
  | { kind: "benefits"; heading: string; items: LandingItem[] }
  | { kind: "process"; heading: string; items: LandingItem[] }
  | { kind: "proof"; heading: string; items: Array<{ text: string; author?: string | null }> }
  | { kind: "faq"; heading: string; items: Array<{ question: string; answer: string }> }
  | { kind: "service_area"; heading: string; body: string };
/**
 * A landing page's parts, any subset, rendered in this order: hero, sections, form, links, closing. One page may hold several
 * instances (the parts before and after its form). SEO lives in the page meta, not here.
 */
export interface LandingPageContent {
  hero?: { h1: string; subheading: string; primary_cta: LandingCta; trust_line?: string | null };
  sections?: LandingSection[];
  form?: { heading: string; intro: string };
  /** Filled only by a client renderer that composes this block with its own wired lead form. Stored content never carries it. */
  formSlot?: ReactNode;
  links?: Array<{ anchor: string; href: string }>;
  closing?: { heading: string; body: string; button: string; href: string };
}

export interface PageMeta { title: string; description: string; }
export interface Page {
  slug: string; page_type: string; tier: number; title?: string;
  meta: PageMeta; blocks: Block[]; internal_links?: LinkItem[];
}

export type BlockComponent<C = any> = FC<C & { props?: BlockProps }>;
export type VariantMap = { default: BlockComponent } & Record<string, BlockComponent>;
export type Registry = Partial<Record<BlockType, Partial<VariantMap>>>;
