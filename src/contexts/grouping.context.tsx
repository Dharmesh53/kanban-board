import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Grouping } from "../types";

interface GroupingContextProps {
  grouping: string;
  setGrouping: React.Dispatch<React.SetStateAction<Grouping>>;
}

const GroupingContext = createContext<GroupingContextProps | null>(null);

export const useGrouping = () => {
  const context = useContext(GroupingContext);
  if (!context) {
    throw new Error("You are using contecxt outside the provider");
  }
  return context;
};

export const GroupingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [grouping, setGrouping] = useLocalStorage("grouping", Grouping.STATUS);
  return (
    <GroupingContext.Provider value={{ grouping, setGrouping }}>
      {children}
    </GroupingContext.Provider>
  );
};
