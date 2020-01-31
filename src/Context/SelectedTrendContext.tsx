import React from "react";

interface ContextProps {
  selectedTrend: string;
  setSelectedTrend: Function;
}
interface Props {
  children: React.ReactNode;
}

export const SelectedTrendContext = React.createContext<ContextProps>({
  selectedTrend: "",
  setSelectedTrend: () => null
});

export const SelectedTrendProvider: React.ComponentType<Props> = props => {
  const [selectedTrend, setSelectedTrend] = React.useState<string>("");
  return (
    <SelectedTrendContext.Provider value={{ selectedTrend, setSelectedTrend }}>
      {props.children}
    </SelectedTrendContext.Provider>
  );
};
