import { Button } from "../button";
import { Select } from "../select";
import {
  DropDown,
  DropDownContent,
  DropDownItem,
  DropDownTrigger,
} from "../dropdown";
import styles from "./navbar.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Grouping, Ordering } from "../../types";

export const Navbar = () => {
  const [grouping, setGrouping] = useLocalStorage("grouping", Grouping.STATUS);
  const [ordering, setOrdering] = useLocalStorage(
    "ordering",
    Ordering.PRIORITY
  );

  return (
    <div className={styles.navbar}>
      <DropDown>
        <DropDownTrigger>
          <Button
            label="Display"
            Lefticon="/assets/Display.svg"
            Righticon="/assets/down.svg"
            size="small"
            shadow
          />
        </DropDownTrigger>
        <DropDownContent>
          <DropDownItem>
            <span className={styles.item}>
              <label>Grouping</label>
              <Select
                options={GroupingOptions}
                placeholder={grouping}
                onChange={setGrouping}
                size="medium"
                width="130px"
              />
            </span>
          </DropDownItem>
          <DropDownItem>
            <span className={styles.item}>
              <label>Ordering</label>
              <Select
                options={OrderingOptions}
                placeholder={ordering}
                onChange={setOrdering}
                size="medium"
                width="130px"
              />
            </span>
          </DropDownItem>
        </DropDownContent>
      </DropDown>
    </div>
  );
};

export const GroupingOptions = [
  {
    label: "Status",
    value: Grouping.STATUS,
  },
  {
    label: "User",
    value: Grouping.USER,
  },
];

export const OrderingOptions = [
  {
    label: "Priority",
    value: Ordering.PRIORITY,
  },
  {
    label: "Title",
    value: Ordering.TITLE,
  },
];
