import React from "react";

interface Trend {
  [x: string]: string[];
}
interface ContextProps {
  trends: Trend[];
  setTrends: Function;
}
interface Props {
  children: React.ReactNode;
}

export const TrendsContext = React.createContext<ContextProps>({
  trends: [],
  setTrends: () => null
});

export const TrendProvider: React.ComponentType<Props> = props => {
  const [trends, setTrends] = React.useState<Trend[]>([]);
  return (
    <TrendsContext.Provider value={{ trends, setTrends }}>
      {props.children}
    </TrendsContext.Provider>
  );
};
