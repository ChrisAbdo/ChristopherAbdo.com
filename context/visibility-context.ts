import React from "react";

interface VisibilityContextInterface {
  isIntroFinished: boolean;
  setIntroFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VisibilityContext =
  React.createContext<VisibilityContextInterface | null>(null);
