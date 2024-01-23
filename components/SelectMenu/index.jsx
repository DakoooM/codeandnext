import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function SelectMenu({
  title = "Select Menu",
  defaultValue = undefined,
  onChange = undefined,
  disabled = false,
  extend = false,
  sorted = false,
  list = []
}) {
  const choiceDefault = list?.find(item => item.value === defaultValue);
  const sortedArray = list?.sort(a => a.value === defaultValue ? -1 : 0);
  const [menuToogle, setMenuToogle] = useState(extend);
  const [selectedItem, setSelected] = useState(choiceDefault);

  const onChangedItem = (item) => {
    setSelected(item);

    if (!extend) setMenuToogle(false);
    if (extend && onChange) onChange(item);
  }

  return (
    <div className={!disabled ? "SelectMenu" : "SelectMenu disabled"}>
      <div className={menuToogle ? "menu-toogler toogle" : "menu-toogler"} onClick={() => extend || !disabled && setMenuToogle(bool => !bool)}>
        <span className="title">{!selectedItem ? title : selectedItem.label}</span>
        <FaChevronDown className="icon"/>
      </div>

      <div className={menuToogle ? "menu-container visible" : "menu-container"}>
        {
          (sorted ? sortedArray : list).map(item => {
            const cls = selectedItem?.value === item.value ? "menu-item selected" : "menu-item";

            return (
              <div className={cls} key={item.value} onClick={() => !disabled && onChangedItem(item)}>
                {item.icon ? <span className="icon">{item.icon}</span> : undefined}
                <span className="text">{item.label}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SelectMenu;