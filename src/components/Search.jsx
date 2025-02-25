import React, { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [chatData, setChatData] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    setChatData((prevState) => [
      ...prevState,
      {
        text: query,
        time: new Date().toLocaleTimeString(),
        id: crypto.randomUUID(),
      },
    ]);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${query}`
      );
      const data = await response.json();
      setResults(data);
      setQuery("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {}, [chatData]); // Runs whenever chatData changes

  return (
    <div className="flex w-screen content-container">
      <div className="w-1/2 chat-container py-0 p-3">
        <ul className="chatArea">
          {chatData.map((item) => (
            <li key={item.id} className="repaly">
              <p>{item.text}</p>
              <span className="time">{item.time}</span>
            </li>
          ))}
        </ul>
        <div className="items-end w-full relative">
          <textarea
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type something here..."
            className="border-1 pr-30 p-2 w-full bg-white border-style-solid inset-shadow-2x border-gray-300 rounded h-21 max-[767px]:h-18 min-[320px]:h-18 focus:outline-0"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 flex h-20 max-[767px]:h-17 min-[320px]:h-17 absolute gap-1 cursor-pointer top-[2px] right-[2px] text-white px-4 py-6 max-[767px]:py-5 min-[320px]:py-5 rounded"
          >
            Search{" "}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-1/2 py-0 xs-widths">
        <div className="border-1 p-2 w-full mobile-height content-container bg-white border-style-solid inset-shadow-2x overflow-auto border-gray-300 focus:outline-0">
          <h2 className="text-lg font-bold mb-2">Results:</h2>
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                className="border-b border-dashed border-sky-200 py-2"
              >
                <h3 className="font-semibold text-sky-500">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
