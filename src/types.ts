import type { FC } from "react";
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
  | "credential_strip" | "testimonial";

export interface BlockProps { variant?: string; columns?: number; [k: string]: unknown; }

export interface Block<C = Record<string, unknown>> {
  blockType: BlockType;
  props?: BlockProps;
  content: C;
  style?: BlockStyle;
}

export interface HeroContent { headline: string; headline_accent?: string; subhead?: string; cta_label?: string; cta_href?: string; }
export interface IntroProseContent { markdown: string; }
export interface DefinitionAnswerContent { question: string; answer: string; }
export interface ValuePropItem { title: string; body: string; icon?: string; }
export interface ValuePropGridContent { items: ValuePropItem[]; }
export interface StepItem { title: string; body: string; }
export interface StepListContent { steps: StepItem[]; }
export interface ComparisonTableContent { columns: string[]; rows: string[][]; eyebrow?: string; heading?: string; intro?: string; }
export interface FaqItem { q: string; a: string; }
export interface FaqAccordionContent { items: FaqItem[]; }
export interface ProofItem { quote: string; attribution?: string; }
export interface ProofStripContent { items: ProofItem[]; eyebrow?: string; heading?: string; }
export interface CtaBandContent { headline: string; cta_label: string; cta_href?: string; }
export interface RiskReversalContent { markdown: string; }
export interface LinkItem { label: string; href: string; }
export interface InternalLinkClusterContent { links: LinkItem[]; }
export interface ContactFormContent { intro?: string; fields: string[]; }
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

export interface PageMeta { title: string; description: string; }
export interface Page {
  slug: string; page_type: string; tier: number; title?: string;
  meta: PageMeta; blocks: Block[]; internal_links?: LinkItem[];
}

export type BlockComponent<C = any> = FC<C & { props?: BlockProps }>;
export type VariantMap = { default: BlockComponent } & Record<string, BlockComponent>;
export type Registry = Partial<Record<BlockType, Partial<VariantMap>>>;
