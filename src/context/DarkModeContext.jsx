import { createContext, useState } from "react";

// 데이터를 담고있는 것
export const DarkModeContext = createContext();

// umbrella - 하위 컴포넌트를 감싸주는
// 우산을 쓰게 된 하위 컴포넌트들은 우산의 데이터에 접근이 가능하다
export function DarkModeProvide({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
