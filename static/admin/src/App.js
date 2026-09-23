import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";

import { styles } from "./shared/styles";

function App() {
  const [config, setConfig] = useState({
    defaultColour: "#004254",
    links: []
  });
  const [saveText, setSaveText] = useState("Save");
  const [saving, setSaving] = useState(false);

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
    setSaving(true);
    try {
      await invoke("saveConfig", config);

      setSaveText("✅ Saved");

      setTimeout(() => {
        setSaveText("Save");
      }, 3000);
    } finally {
      setSaving(false);
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
              Remove
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
              value={link.colour || "#004254"}
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
          disabled={saving}
          style={styles.saveButton(saving)}
        >
          {saving ? "Saving..." : saveText}
        </button>
      </div>

    </div>
  );
}

export default App;