import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";


import LinkButton from "./shared/components/LinkButton";

import { appPrimaryColor, styles } from "./shared/styles";

function App() {

  const [config, setConfig] = useState({
    defaultColour: appPrimaryColor,
    links: []
  });
  
  const [saveStatus, setSaveStatus] = useState("idle");

  useEffect(() => {
    invoke("getConfig").then(setConfig);
  }, []);

  const addLink = () => {
    setConfig({
      ...config,
      links: [
        ...config.links,
        {
          name: "",
          url: "",
          colour: config.defaultColour
        }
      ]
    });
  };

  const save = async () => {
    setSaveStatus("saving");
    try {
      await invoke("saveConfig", config);

      setSaveStatus("saved");

      setTimeout(() => {
        setSaveStatus("idle");
      }, 3000);
    }
    catch {
      setSaveStatus("error");
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px"
        }}
      >
        <label>Default Button Colour:</label>

        <input
          type="color"
          value={config.defaultColour}
          onChange={(e) =>
            setConfig({
              ...config,
              defaultColour: e.target.value
            })
          }
        />

        <button
          onClick={() => {
            setConfig({
              ...config,
              links: config.links.map(link => ({
                ...link,
                colour: config.defaultColour
              }))
            });
          }}
          style={styles.baseButton}
        >
          Apply Colour To All Links
        </button>

      </div>

      <div style={{ padding: 20 }}>

        {config.links.map((link, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 10,
            }}
          >

            <button
              onClick={() => {
                const copy = [...config.links];
                copy.splice(index, 1);

                setConfig({
                  ...config,
                  links: copy
                });
              }}
              style={styles.removeButton}
            >
              X
            </button>

            <input
              value={link.name}
              placeholder="Link Name"
              style={{ width: "200px" }}
              onChange={(e) => {
                const copy = [...config.links];
                copy[index].name = e.target.value;

                setConfig({
                  ...config,
                  links: copy
                });
              }}
            />


            <input
              type="color"
              value={link.colour || appPrimaryColor}
              onChange={(e) => {
                const copy = [...config.links];
                copy[index].colour = e.target.value;

                setConfig({
                  ...config,
                  links: copy
                });
              }}
            />

            <input
              value={link.url}
              placeholder="URL"
              style={{ width: "600px" }}
              onChange={(e) => {
                const copy = [...config.links];
                copy[index].url = e.target.value;

                setConfig({
                  ...config,
                  links: copy
                });
              }}
            />

            <LinkButton
              key={link.name}
              link={link}
              defaultColour={config.defaultColour}
            />

          </div>
        ))}

      </div>

      <div style={{ padding: 20 }}>

        <button
          onClick={addLink}
          style={styles.baseButton}
        >
          Add Link
        </button>

        <button
          onClick={save}
          disabled={saveStatus!=='idle'}
          style={styles.saveButton(saveStatus)}
        >
          {{
            idle: "Save",
            saving: "Saving...",
            saved: "✅ Saved",
            error: "❌ Error",
          }[saveStatus]}
        </button>
      </div>

    </div>
  );
}

export default App;