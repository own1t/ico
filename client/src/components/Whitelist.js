import React, { useState, useEffect } from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";

const { useDrizzle } = drizzleReactHooks;

const Whitelist = () => {
  const { drizzle } = useDrizzle();
  const [whitelist, setWhitelist] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const whitelist = await drizzle.contracts.ICO.methods
          .getWhitelist()
          .call();

        setWhitelist(whitelist);
      } catch (err) {
        console.log(err);
      }
    };
    init();
  }, []);

  return (
    <div className="card-body border-bottom">
      <h2>Whitelist</h2>
      <ul>
        {whitelist.map((address, idx) => (
          <li key={idx}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default Whitelist;
