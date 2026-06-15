import type { Meta } from "@storybook/react";
import internal_link_cluster from "@/blocks/internal_link_cluster";

const sample = {
  links: [
    { label: "Roller Blinds", href: "/roller-blinds" },
    { label: "Cellular Shades", href: "/cellular-shades" },
    { label: "Custom Drapery", href: "/drapery" },
    { label: "Plantation Shutters", href: "/shutters" },
    { label: "Motorized Blinds", href: "/motorized" },
  ],
};

const meta: Meta = { title: "Blocks/InternalLinkCluster" };
export default meta;

const DefaultVariant = internal_link_cluster.default;
const ListVariant = internal_link_cluster.list;
const CardsVariant = internal_link_cluster.cards;
const InlineVariant = internal_link_cluster.inline;

export const Default = () => <DefaultVariant {...sample} />;
export const List = () => <ListVariant {...sample} />;
export const Cards = () => <CardsVariant {...sample} />;
export const Inline = () => <InlineVariant {...sample} />;
