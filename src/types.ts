import type { FC } from "react";

export type BlockType =
  | "hero" | "intro_prose" | "definition_answer" | "value_prop_grid"
  | "step_list" | "comparison_table" | "faq_accordion" | "proof_strip"
  | "cta_band" | "risk_reversal" | "internal_link_cluster"
  | "contact_form" | "team_bio" | "legal_prose" | "image_gallery";

export interface BlockProps { variant?: string; columns?: number; [k: string]: unknown; }

export interface Block<C = Record<string, unknown>> {
  blockType: BlockType;
  props?: BlockProps;
  content: C;
}

export interface HeroContent { headline: string; subhead?: string; cta_label?: string; cta_href?: string; }
export interface IntroProseContent { markdown: string; }
export interface DefinitionAnswerContent { question: string; answer: string; }
export interface ValuePropItem { title: string; body: string; icon?: string; }
export interface ValuePropGridContent { items: ValuePropItem[]; }
export interface StepItem { title: string; body: string; }
export interface StepListContent { steps: StepItem[]; }
export interface ComparisonTableContent { columns: string[]; rows: string[][]; }
export interface FaqItem { q: string; a: string; }
export interface FaqAccordionContent { items: FaqItem[]; }
export interface ProofItem { quote: string; attribution?: string; }
export interface ProofStripContent { items: ProofItem[]; }
export interface CtaBandContent { headline: string; cta_label: string; cta_href?: string; }
export interface RiskReversalContent { markdown: string; }
export interface LinkItem { label: string; href: string; }
export interface InternalLinkClusterContent { links: LinkItem[]; }
export interface ContactFormContent { intro?: string; fields: string[]; }
export interface TeamBioContent { name: string; role?: string; bio: string; }
export interface LegalProseContent { markdown: string; }
export interface GalleryImage { src?: string; alt: string; }
export interface ImageGalleryContent { images: GalleryImage[]; }

export interface PageMeta { title: string; description: string; }
export interface Page {
  slug: string; page_type: string; tier: number; title?: string;
  meta: PageMeta; blocks: Block[]; internal_links?: LinkItem[];
}

export type BlockComponent<C = any> = FC<C & { props?: BlockProps }>;
export type VariantMap = { default: BlockComponent } & Record<string, BlockComponent>;
export type Registry = Partial<Record<BlockType, Partial<VariantMap>>>;
