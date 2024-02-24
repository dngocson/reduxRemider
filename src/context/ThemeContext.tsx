import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Declare Type
type Theme = "dark" | "light";

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  isTrue: boolean;
  setIsTrue: Dispatch<SetStateAction<boolean>>;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
};

// Create Context
export const ThemeContext = createContext<ThemeContext | null>(null);

// Create Context Provider
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isTrue, setIsTrue] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isTrue, setIsTrue, number, setNumber }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}
