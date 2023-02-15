import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import Link from "next/link";
import Image from "next/image";

export const testSerialize = (children: any) =>
  children.map((node: any, i: number) => {
    if (Text.isText(node)) {
      let text = (
        <span
          dangerouslySetInnerHTML={{
            __html: escapeHTML(node.text).replace(/\n/g, "<br>"),
          }}
        />
      );
      // @ts-ignore
      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }
      // @ts-ignore
      if (node.code) {
        text = <code key={i}>{text}</code>;
      }
      // @ts-ignore
      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // @ts-ignore
      if (node.underline) {
        text = <u key={i}>{text}</u>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return (
          <h1 key={i} className="text-6xl">
            {testSerialize(node.children)}
          </h1>
        );
      case "h2":
        return (
          <h2 key={i} className="text-4xl">
            {testSerialize(node.children)}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} className="text-2xl">
            {testSerialize(node.children)}
          </h3>
        );
      case "h4":
        return (
          <h4 key={i} className="text-lg">
            {testSerialize(node.children)}
          </h4>
        );
      case "h5":
        return (
          <h5 key={i} className="text-md">
            {testSerialize(node.children)}
          </h5>
        );
      case "h6":
        return (
          <h6 key={i} className="text-base">
            {testSerialize(node.children)}
          </h6>
        );
      case "quote":
        return <blockquote key={i}>{testSerialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{testSerialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{testSerialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{testSerialize(node.children)}</li>;
      case "link":
        return (
          <Link
            href={escapeHTML(node.url)}
            target={node.newTab ? "_blank" : "_self"}
            key={i}
            className="text-blue-ryb underline"
            rel="noreferrer"
          >
            {testSerialize(node.children)}
          </Link>
        );
      case "upload":
        return (
          <Image
            src={node.value.url}
            height={node.value.height}
            width={node.value.width}
            alt={node.value.alt}
          />
        );

      default:
        return <p key={i}>{testSerialize(node.children)}</p>;
    }
  });
