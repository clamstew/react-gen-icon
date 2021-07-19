import * as React from "react";
import { IconContext, DefaultContext } from "./iconContext";

function Tree2Element(tree) {
  return (
    tree &&
    tree.map(function(node, i) {
      return React.createElement(
        node.tag,
        Object.assign(
          {
            key: i
          },
          node.attr
        ),
        Tree2Element(node.child)
      );
    })
  );
}

export function GenIcon(data) {
  return function(props) {
    return (
      <IconBase attr={{ ...data.attr }} {...props}>
        {Tree2Element(data.child)}
      </IconBase>
    );
  };
}

export function IconBase(props) {
  var elem = function(conf) {
    const { attr, size, title, ...svgProps } = props;
    const computedSize = size || conf.size || "1em";
    let className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;

    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...conf.attr}
        {...attr}
        {...svgProps}
        className={className}
        style={{ color: props.color || conf.color, ...conf.style, ...props.style }}
        height={computedSize}
        width={computedSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        {title && <title>{title}</title>}
        {props.children}
      </svg>
    );
  };

  return IconContext !== undefined
    ? React.createElement(IconContext.Consumer, null, function(conf) {
        return elem(conf);
      })
    : elem(DefaultContext);
}
