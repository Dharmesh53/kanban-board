import { useState } from "react";
import {
  DropDown,
  DropDownTrigger,
  DropDownContent,
  DropDownItem,
} from "../dropdown";
import { Button } from "../button";
import styles from "./select.module.css";

export const Select = ({
  options,
  placeholder = "Select an option",
  size = "medium",
  shadow = false,
  width,
  onChange,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionDataType | null>(
    null
  );

  const handleSelect = (option: OptionDataType) => {
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
          Righticon="/assets/down.svg"
          size={size}
          shadow={shadow}
          width={width}
        />
      </DropDownTrigger>
      <DropDownContent width="130px">
        {options.map((option) => (
          <Option key={option.value} option={option} onSelect={handleSelect} />
        ))}
      </DropDownContent>
    </DropDown>
  );
};

export const Option = ({ option, onSelect }: OptionProps) => {
  const handleClick = () => {
    onSelect(option);
  };

  return (
    <DropDownItem>
      <div className={styles.option}>
        <span className={styles.label}>{option.label}</span>
      </div>
    </DropDownItem>
  );
};

interface OptionDataType {
  label: string;
  value: string;
}

interface OptionProps {
  option: OptionDataType;
  onSelect: (option: OptionDataType) => void;
}

interface SelectProps {
  options: OptionDataType[];
  placeholder?: string;
  onChange?: (value: string) => void;
  size?: "small" | "medium" | "large";
  shadow?: boolean;
  width?: string;
}
