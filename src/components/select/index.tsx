import { useState } from "react";
import {
  DropDown,
  DropDownTrigger,
  DropDownContent,
  DropDownItem,
} from "../dropdown";
import { Button } from "../button";
import styles from "./select.module.css";
import { ActionsIcons } from "../../types";

export const Select = <T,>({
  options,
  placeholder = "Select an option",
  size = "medium",
  width,
  onChange,
}: SelectProps<T>) => {
  const [selectedOption, setSelectedOption] =
    useState<OptionDataType<T> | null>(null);

  const handleSelect = (option: OptionDataType<T>) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <DropDown>
      <DropDownTrigger>
        <Button
          label={selectedOption ? selectedOption.label : placeholder}
          Righticon={ActionsIcons.DOWN}
          size={size}
          width={width}
        />
      </DropDownTrigger>
      <DropDownContent width={width}>
        {options.map((option) => (
          <DropDownItem
            key={String(option.value)}
            onClick={() => handleSelect(option)}
          >
            <span className={styles.label}>{option.label}</span>
          </DropDownItem>
        ))}
      </DropDownContent>
    </DropDown>
  );
};

interface OptionDataType<T> {
  label: string;
  value: T;
}

interface SelectProps<T> {
  options: OptionDataType<T>[];
  placeholder?: string;
  size?: "small" | "medium" | "large";
  shadow?: boolean;
  width?: string;
  onChange?: (value: T) => void;
}
