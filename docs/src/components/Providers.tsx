import type { ReactNode } from "react";

// Context Imports
import { VerticalNavProvider } from "@menu/contexts/verticalNavContext";
import { HorizontalNavProvider } from "@menu/contexts/horizontalNavContext";

type ChildrenType = {
  children: ReactNode;
};

const Providers = (props: ChildrenType) => {
  // Props
  const { children } = props;

  return (
    <VerticalNavProvider>
      <HorizontalNavProvider>{children}</HorizontalNavProvider>
    </VerticalNavProvider>
  );
};

export default Providers;
