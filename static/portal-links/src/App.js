import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    invoke("getLinks").then(setLinks);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F4F5F7",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              padding: "8px 12px",
              backgroundColor: "#004254",
              color: "#FFFFFF",
              border: "1px solid #DFE1E6",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;