import React from "react";

interface Trends {
  [x: string]: string[];
}
interface ContextProps {
  parsedTrends: Trends;
  setParsedTrends: Function;
}
interface Props {
  children: React.ReactNode;
}

export const TrendsContext = React.createContext<ContextProps>({
  parsedTrends: {},
  setParsedTrends: () => null
});

export const TrendsProvider: React.ComponentType<Props> = props => {
  const [parsedTrends, setParsedTrends] = React.useState<Trends>({});
  return (
    <TrendsContext.Provider value={{ parsedTrends, setParsedTrends }}>
      {props.children}
    </TrendsContext.Provider>
  );
};
