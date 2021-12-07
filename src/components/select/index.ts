export interface ISelectProps {
    options: { id: string; value: string }[];
    value: string;
    setShowOptions: (name: string) => void;
    name: string;
    showOptions: boolean;
    selectOption: (name: string, value: string) => void;
  }