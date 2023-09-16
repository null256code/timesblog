/* eslint-disable @next/next/no-img-element */
"use client";

import { Modal, ModalDialog } from "@mui/joy";
import { useState } from "react";
import { Transition } from "react-transition-group";

export default function ImageWithModal(props: Props) {
  const [open, setOpen] = useState(false);

  const { src, alt } = props;
  return (
    <>
      <img src={src} alt={alt} onClick={() => setOpen(true)} />
      <Transition in={open} timeout={200}>
        {(state: string) => (
          <Modal
            keepMounted
            open={!["exited", "exiting"].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: "none",
                  transition: `opacity 200ms, backdrop-filter 100ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: "blur(8px)" },
                    entered: { opacity: 1, backdropFilter: "blur(8px)" },
                    exiting: { opacity: 1, backdropFilter: "blur(8px)" },
                    exited: { opacity: 1, backdropFilter: "blur(8px)" },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === "exited" ? "hidden" : "visible",
            }}
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 200ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                  exiting: { opacity: 0 },
                  exited: { opacity: 0 },
                }[state],
              }}
            >
              <img src={src} alt={alt} />
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}

type Props = {
  src: string;
  alt: string | "";
};
