import React from "react";
import { router } from "@forge/bridge";
import { styles } from "../styles";

export default function LinkButton({ link, defaultColour }) {
  return (
    <button
      onClick={() => router.open(link.url)}
      style={styles.linkButton(
        link.colour || defaultColour
      )}
    >
      {link.name}
    </button>
  );
}