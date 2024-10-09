import { createContext, useContext, useEffect, useRef, useState } from "react";
import styles from "./dropdown.module.css";

/* need to create a context for all the dropdown element to know about the state */
interface DropdownContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

interface ChildrenProp {
  children: React.ReactNode;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Something is wrong");
  }
  return context;
};

export const DropDown = ({ children }: ChildrenProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  /*Just for closing the dropdowm in case negative area is clicked*/
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div className={styles.dropdown} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropDownTrigger = ({ children }: ChildrenProp) => {
  const { toggle } = useDropdown();
  return <div onClick={toggle}>{children}</div>;
};

interface DropDownContentProps {
  children: React.ReactNode;
  width?: string;
}

export const DropDownContent = ({ children, width }: DropDownContentProps) => {
  const { isOpen } = useDropdown();

  return isOpen ? (
    <div
      className={styles.content}
      style={width ? { minWidth: width } : undefined}
    >
      {children}
    </div>
  ) : null;
};

interface DropDownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropDownItem = ({ children, onClick }: DropDownItemProps) => {
  const { close } = useDropdown();
  return (
    <div
      className={styles.item}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
};
