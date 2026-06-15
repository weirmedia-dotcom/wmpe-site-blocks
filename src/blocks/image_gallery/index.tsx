import type { VariantMap } from "../../types";
import Default from "./Default";
import Masonry from "./Masonry";
import Carousel from "./Carousel";
import TwoUp from "./TwoUp";

const image_gallery: VariantMap = {
  default: Default,
  masonry: Masonry,
  carousel: Carousel,
  "two-up": TwoUp,
};

export default image_gallery;
