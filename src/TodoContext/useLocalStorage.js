import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = JSON.parse(localStorage.getItem("itemName"));
  let parseItem;
  if (!localStorageItem) {
    localStorage.setItem("itemName", JSON.stringify(initialValue));
    parseItem = initialValue;
  } else {
    parseItem = localStorageItem;
  }

  const [item, setItem] = React.useState(parseItem);

  const saveItem = (newItem) => {
    const stringifiItem = JSON.stringify(newItem);
    localStorage.setItem("itemName", stringifiItem);
    setItem(newItem);
  };

  return [item, saveItem];
}
export { useLocalStorage };
