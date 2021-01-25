import React, { useEffect, useState } from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData } = newContextComponents;

const ICOInfo = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState((state) => state);

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");

  const [contractAddress, setContractAddress] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      try {
        const tokenName = await drizzle.contracts.ICO.methods
          .tokenName()
          .call();
        const tokenSymbol = await drizzle.contracts.ICO.methods
          .tokenSymbol()
          .call();
        const contractAddress = await drizzle.contracts.ICO.options.address;

        setTokenName(tokenName);
        setTokenSymbol(tokenSymbol);
        setContractAddress(contractAddress);
      } catch (err) {
        console.log(err);
      }
    };
    init();
  }, []);

  return (
    <div className="ist-group list-group-flush">
      <div className="card-body border-bottom">
        <h1 className="">
          {tokenName} ({tokenSymbol})
        </h1>
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Contract Address</h3>
        <span>{contractAddress}</span>
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Admin Address</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="admin"
        />
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Token Address</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="token"
        />
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Closing Date</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="end"
          render={(end) => {
            if (end === 0) return "Not Started Yet";
            return new Date(parseInt(end) * 1000).toLocaleString();
          }}
        />
      </div>

      <div className="card-body border-bottom">
        <h3 className="">Released</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="released"
        />
      </div>
    </div>
  );
};

export default ICOInfo;
