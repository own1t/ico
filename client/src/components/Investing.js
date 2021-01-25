import React, { useEffect, useState } from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState((state) => state);

  const [tokenAmount, setTokenAmount] = useState(0);

  useEffect(() => {
    const init = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await drizzle.contracts.ICO.methods.buy().send({
        from: state.accounts[0],
        value: tokenAmount.toString(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="card-body border-bottom">
        <h3 className="">Price (Wei)</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="price"
        />
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Min Purchase</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="minPurchase"
        />
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Max Purchase</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="maxPurchase"
        />
      </div>
      <div className="card-body border-bottom">
        <h3 className="">Available Tokens</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="availableTokens"
        />
      </div>

      <div className="card-body border-bottom">
        <h3>Investment</h3>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ICO"
          method="getSale"
          methodArgs={[state.accounts[0]]}
        />
      </div>
      <div className="card-body border-bottom mb-3">
        <h3>Buy</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="tokenAmount"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
