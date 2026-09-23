import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import LinkButton from "./shared/components/LinkButton";

function App() {
  const [config, setConfig] = useState({
    defaultColour: "#004254",
    links: []
  });

  useEffect(() => {
    invoke("getConfig").then(setConfig);
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
          gap: "8px"
        }}
      >
        {config.links.map((link) => (

          <LinkButton
          key={link.name}
          link={link}
          defaultColour={config.defaultColour}
          />

        ))}
      </div>
    </div >
  );
}

export default App;