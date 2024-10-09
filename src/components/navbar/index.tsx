import { Button } from "../button";
import { Select } from "../select";
import {
  DropDown,
  DropDownContent,
  DropDownItem,
  DropDownTrigger,
} from "../dropdown";
import styles from "./navbar.module.css";

export const GroupingOptions = [
  {
    label: "Status",
    value: "status",
  },
  {
    label: "User",
    value: "user",
  },
];

export const Navbar = () => {
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
              {/* <Button
                label="Status"
                Righticon="/assets/down.svg"
                size="small"
                width={"130px"}
              /> */}
              <Select
                options={GroupingOptions}
                placeholder={"Status"}
                size="medium"
                width="130px"
              />
            </span>
          </DropDownItem>
          <DropDownItem>
            <span className={styles.item}>
              <label>Ordering</label>
              <Button
                label="Priority"
                Righticon="/assets/down.svg"
                width={"130px"}
                size="small"
              />
            </span>
          </DropDownItem>
        </DropDownContent>
      </DropDown>
    </div>
  );
};
