import CodeBlock from "@/components/CodeBlock";
import CodeSpan from "@/components/CodeSpan";
import ImageWithModal from "@/components/ImageWithModal";
import { ElementType } from "domelementtype";
import { ChildNode } from "domhandler";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
  Text,
} from "html-react-parser";

export const htmlParserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    const tagElement = getTagElement(domNode);
    if (!tagElement) {
      return;
    }

    if (tagElement.name === "img") {
      // TODO: ひとつ上の <figure /> にonClickをつけるようにしたい
      const src = tagElement.attribs["src"];
      const alt = tagElement.attribs["alt"];
      return <ImageWithModal src={src} alt={alt} />;
    } else if (tagElement.name === "code") {
      return (
        <CodeSpan>{domToReact(tagElement.children as DOMNode[])}</CodeSpan>
      );
    } else if (tagElement.name === "pre") {
      const childTagElement = tagElement.childNodes
        .map((c) => getTagElement(c))
        .find((c) => c);
      if (!childTagElement) {
        return;
      }

      if (childTagElement.name === "code") {
        const className = childTagElement.attribs["class"];
        // https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
        const language =
          className && className.includes("language-")
            ? className.split("-")[1]
            : "plaintext";
        return (
          <CodeBlock>
            {parse(
              parseNodeToHighlightTextDOM(childTagElement.firstChild, language),
            )}
          </CodeBlock>
        );
      }
    }
  },
};

function getTagElement(node: DOMNode | ChildNode) {
  return node instanceof Element && node.type == ElementType.Tag
    ? (node as Element)
    : undefined;
}

function parseNodeToHighlightTextDOM(
  node: DOMNode | ChildNode | null,
  language: string,
) {
  if (node instanceof Text) {
    return hljs.highlight(node.data, {
      language: language,
      ignoreIllegals: true,
    }).value;
  }
  return "";
}
