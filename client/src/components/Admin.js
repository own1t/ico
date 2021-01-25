import React, { useState, useEffect } from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractForm } = newContextComponents;

export default () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { drizzle } = useDrizzle();
  const state = useDrizzleState((state) => state);

  useEffect(() => {
    const init = async () => {
      const admin = await drizzle.contracts.ICO.methods.admin().call();
      setIsAdmin(
        admin.toString().toLowerCase() === state.accounts[0].toLowerCase()
      );
    };
    init();
  }, []);

  if (!isAdmin) {
    return null;
  }

  return (
    <div>
      <div className="my-3">
        <h2 className="border-bottom">Start</h2>
        <ContractForm drizzle={drizzle} contract="ICO" method="start" />
      </div>
      <div className="my-3">
        <h2 className="border-bottom">Whitelist</h2>
        <ContractForm drizzle={drizzle} contract="ICO" method="addWhitelist" />
      </div>
      <div className="my-3">
        <h2 className="border-bottom">Release</h2>
        <ContractForm drizzle={drizzle} contract="ICO" method="release" />
      </div>
      <div className="my-3">
        <h2 className="border-bottom">Withdraw</h2>
        <ContractForm drizzle={drizzle} contract="ICO" method="withdraw" />
      </div>
    </div>
  );
};
