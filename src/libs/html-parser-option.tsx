import ImageWithModal from "@/components/ImageWithModal";
import { Element, HTMLReactParserOptions } from "html-react-parser";

export const htmlParserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.type === "tag") {
      if (domNode.name === "img") {
        // TODO: ひとつ上の <figure /> にonClickをつけるようにしたい
        const src = domNode.attribs["src"];
        const alt = domNode.attribs["alt"];
        return <ImageWithModal src={src} alt={alt} />;
      }
    }
  },
};