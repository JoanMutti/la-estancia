import React from "react";
import { Popover, Whisper, ButtonToolbar, Button,  } from "rsuite";

const speaker = (
  <Popover title="Title">
    <p>This is a default Popover </p>
    <p>Content</p>
    <p>
      <a>link</a>
    </p>
  </Popover>
);

const TriggerMethod = () => {
  const triggerRef = React.useRef();
  const open = () => triggerRef.current.open();
  const close = () => triggerRef.current.close();

  return (
    <div>
      <Whisper
        placement="top"
        speaker={speaker}
        ref={triggerRef}
        trigger="none"
      >
        <span>Click the `Open` and `Close` buttons.</span>
      </Whisper>
      <hr />
      <ButtonToolbar>
        <Button onClick={open}>Open</Button>
        <Button onClick={close}>Close</Button>
      </ButtonToolbar>
    </div>
  );
};
const Description = () => {
  return (
    <div>
      <ButtonToolbar>
        <Whisper
          placement="top"
          trigger="click"
          controlId="control-id-click"
          speaker={speaker}
        >
          <Button>Click</Button>
        </Whisper>
      </ButtonToolbar>
      <hr />
      <TriggerMethod />
    </div>
  );
};

export default Description;
