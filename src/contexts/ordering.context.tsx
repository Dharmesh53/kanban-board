import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Ordering } from "../types";

interface OrderingContextProps {
  ordering: string;
  setOrdering: React.Dispatch<React.SetStateAction<Ordering>>;
}

const OrderingContext = createContext<OrderingContextProps | null>(null);

export const OrderingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ordering, setOrdering] = useLocalStorage(
    "ordering",
    Ordering.PRIORITY
  );
  return (
    <OrderingContext.Provider value={{ ordering, setOrdering }}>
      {children}
    </OrderingContext.Provider>
  );
};

export const useOrdering = () => {
  const context = useContext(OrderingContext);
  if (!context) {
    throw new Error("You are using contecxt outside the provider");
  }
  return context;
};
