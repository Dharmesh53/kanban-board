import { Button } from "../button";
import { Select } from "../select";
import {
  DropDown,
  DropDownContent,
  DropDownItem,
  DropDownTrigger,
} from "../dropdown";
import styles from "./navbar.module.css";
import { ActionsIcons, Grouping, Ordering } from "../../types";
import { useGrouping } from "../../contexts/grouping.context";
import { useOrdering } from "../../contexts/ordering.context";

export const Navbar = () => {
  const { grouping, setGrouping } = useGrouping();
  const { ordering, setOrdering } = useOrdering();

  return (
    <div className={styles.navbar}>
      <DropDown>
        <DropDownTrigger>
          <Button
            label="Display"
            Lefticon="/assets/Display.svg"
            Righticon={ActionsIcons.DOWN}
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
                placeholder={grouping[0]
                  .toUpperCase()
                  .concat(grouping.substring(1))}
                onChange={setGrouping}
                size="medium"
                width="100px"
              />
            </span>
          </DropDownItem>
          <DropDownItem>
            <span className={styles.item}>
              <label>Ordering</label>
              <Select
                options={OrderingOptions}
                placeholder={ordering[0]
                  .toUpperCase()
                  .concat(ordering.substring(1))}
                onChange={setOrdering}
                size="medium"
                width="100px"
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
  {
    label: "Priority",
    value: Grouping.PRIORITY,
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
