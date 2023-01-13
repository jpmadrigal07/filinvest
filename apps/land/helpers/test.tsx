import React, { Fragment } from "react";

type Contents = {
  [k: string]: unknown;
}[];

const serializeContents = (contents?: Contents) =>
  contents?.map((content: any, i: number) => {
    if (content && content.children.length > 0) {
      const finalizedContent = content.children.map((child: any) => {
        let className = "";

        if (child.bold) {
          className += "font-bold ";
        }

        if (child.italic) {
          className += "italic ";
        }

        if (child.underline) {
          className += "underline ";
        }
        return finalizeTags(child.text, className.trim(), i, content.type);
      });

      // Handle other leaf types here...

      return <Fragment key={i}>{...finalizedContent}</Fragment>;
    }

    if (!content) {
      return null;
    }
  });

const finalizeTags = (
  content: any,
  className: string,
  i: number,
  type?: string
) => {
  switch (type) {
    case "h1":
      return (
        <h1 key={i} className={`text-jet text-6xl ${className}`}>
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 key={i} className={`text-jet text-4xl ${className}`}>
          {content}
        </h2>
      );
    case "h6":
      return (
        <h6 key={i} className={`${className}`}>
          {content}
        </h6>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className={`border-blue-ryb text-sonic-silver border-l-4 pl-6 text-xl italic ${className}`}
        >
          {content}
        </blockquote>
      );
    case "ul":
      return (
        <ul key={i} className={`${className}`}>
          {content}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className={`${className}`}>
          {content}
        </ol>
      );
    case "li":
      return (
        <li key={i} className={`${className}`}>
          {content}
        </li>
      );
    case "link":
      return (
        <a href={"test"} className={`${className}`} key={i}>
          {content}
        </a>
      );
    default:
      return (
        <p key={i} className={`text-dim-gray ${className}`}>
          {content}
        </p>
      );
  }
};

export default serializeContents;
