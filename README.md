# react-gen-icon
A generic wrapper for any svg path to create a standardized and flexible react component, inspired and code directly taken from [react-icons](https://github.com/react-icons/react-icons).

# Example Usage

Create a new jsx file like `MdCancelIcon.js`, and take the path from any svg like [material design's cancel icon](https://github.com/google/material-design-icons/blob/224895a86501195e7a7ff3dde18e39f00b8e3d5a/navigation/svg/design/ic_cancel_24px.svg?short_path=b2dac49).  Pass into GenIcon ....

```
// Note: haven't published to npm yet!!!
import { GenIcon } from "react-gen-icon";

const MdCancelIcon = function(props) {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        }
      }
    ]
  })(props);
};

MdCancelIcon.displayName = "MdCancelIcon";
export { MdCancelIcon };
```
