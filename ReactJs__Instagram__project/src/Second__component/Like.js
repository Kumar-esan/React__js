import React from "react";
import Heart from "react-heart";
import useLocalStorage from "../Hooks/useLocalStorage.js";
export default function Like(props) {
  const [active, setActive] = useLocalStorage("Like", false);
  return (
    <div>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        style={{ width: "25px" }}
      />
    </div>
  );
}
