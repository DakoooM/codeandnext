import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SelectMenu from "@/components/SelectMenu";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const listMenuTest = [
    {label: "Dark Mode", value: "dark", icon: <MdDarkMode/>},
    {label: "White Mode", value: "white", icon: <BsFillSunFill/>}
  ];

  if (!mounted) return <SelectMenu list={listMenuTest} extend disabled/>;

  const onChangeMode = (theme) => setTheme(theme);

  return (
    <SelectMenu list={listMenuTest} title="Selectionner" defaultValue={theme} extend onChange={(item) => onChangeMode(item.value)}/>
  )
}

export default ThemeSwitcher