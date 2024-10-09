import styles from "./kanban.module.css";
import { QUICKSELL_API_URL } from "../../../lib";
import { useState, useEffect } from "react";
import { Data, Grouping } from "../../../types";
import useLocalStorage from "../../../hooks/useLocalStorage";

export const KanbanBoard = () => {
  const [data, setData] = useState<Data | null>(null);
  const [grouping, setGrouping] = useLocalStorage("grouping", Grouping.STATUS);
  const [loading, setLoading] = useState<boolean>(true);

  const fetcher = async () => {
    try {
      const response = await fetch(QUICKSELL_API_URL, {
        method: "GET",
      });
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (error: any) {
      console.log("Error during fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  if (loading) {
    return <div className={styles.board}>Loading...</div>;
  }

  return (
    <div className={styles.board}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
