import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import LinkButton from "./shared/components/LinkButton";

import { appPrimaryColor } from "./shared/styles";

function App() {

  const [config, setConfig] = useState({
    defaultColour: appPrimaryColor,
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

          <div
            key={link.name}
            style={{
              flex: "1 1 200px"
            }}
          >

            <LinkButton
              key={link.name}
              link={link}
              defaultColour={config.defaultColour}
            />
            
          </div>

        ))}
      </div>
    </div >
  );
}

export default App;