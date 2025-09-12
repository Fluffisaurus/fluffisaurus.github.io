import * as React from "react";

import { Container, SxProps, Theme } from "@mui/material";
import { ScrollArea } from "@blur-ui/scroll-area";

interface ScrollableContainerProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  sx?: SxProps<Theme>;
  className?: string | undefined;
}

const ScrollableContainer = ({
  children,
  ref,
  sx,
  className,
}: ScrollableContainerProps) => {
  return (
    <Container sx={sx} className={className} ref={ref}>
      <ScrollArea
        classNames={{
          horizontalScrollbar: "h-2.5",
          root: "w-60 h-60 text-black dark:text-white",
          scrollbar: "p-[1px]",
          thumb:
            "bg-neutral-800 dark:bg-neutral-100 rounded-full opacity-30 hover:opacity-40 transition-opacity",
          verticalScrollbar: "w-2.5",
        }}
        dir="ltr"
        orientation="vertical"
        scrollHideDelay={600}
        shadowSize={50}
        type="always"
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </ScrollArea>
    </Container>
  );
};

export default ScrollableContainer;
