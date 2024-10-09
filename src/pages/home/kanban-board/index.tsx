import styles from "./kanban.module.css";
import { QUICKSELL_API_URL } from "../../../lib";
import { useState, useEffect } from "react";
import { Data } from "../../../types";
import { Board } from "./board";

export const KanbanBoard = () => {
  const { data, loading, fetcher } = useKanbanBoardStates();

  useEffect(() => {
    fetcher();
  }, []);

  if (loading) {
    return <div className={styles.board}>Loading...</div>;
  }

  return (
    <div className={styles.board}>
      {data && <Board cards={data.tickets} users={data.users} />}
    </div>
  );
};

export const useKanbanBoardStates = () => {
  const [data, setData] = useState<Data | null>(null);
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

  return { data, setData, loading, setLoading, fetcher };
};
