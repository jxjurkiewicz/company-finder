"use client";

import { useState } from "react";
import "./Search.css";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValue("");

    console.log("form sent successfuly!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full py-14 background"
      id="searchForm"
    >
      <h2 className="text-4xl font-bold mb-10 text-white tracking-wide">
        Wpisz NIP firmy aby wyświetlić dane
      </h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="w-1/2 py-4 px-5 text-xl bg-background text-color rounded-md"
      />
      {/* Dorób ikonke na absolucie do inputa z react/icons */}
    </form>
  );
};
