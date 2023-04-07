import { useNetwork } from "wagmi";
import gpadRouterABI from "../../abi/gpadRouterABI.json";
import { contractAddress } from "../../config";
import { useState } from "react";
import WriteButton from "../WriteButton";
import { useGlobalContext } from "../Context";
import { ethers } from "ethers";
const CreateGPAD = () => {
  const [context, setContext] = useGlobalContext();
  const [data, setData] = useState({});
  const { chain } = useNetwork();
  const routerAddress = contractAddress[chain?.id]?.["gpadRouter"];

  const createGPAD = {
    buttonName: "Create GPAD",
    data: {
      address: routerAddress,
      abi: gpadRouterABI,
      functionName: "createGPAD",
      args: [data],
    },
    callback: (confirmed) => {
      if (confirmed) {
        context["flush"] = !context["flush"];
        setContext({ ...context });
      }
    },
  };
  return (
    <>
      <div className="my-1 text-right">
        <label className="btn btn-sm btn-secondary" htmlFor="createGPAD">
          + New GPAD
        </label>
      </div>
      <input type="checkbox" id="createGPAD" className="modal-toggle" />
      <label htmlFor="createGPAD" className="modal cursor-pointer">
        <label className="w-96 text-xs" htmlFor="">
          <div className="mockup-code">
            <pre data-prefix="$" className="my-2">
              <code>Project Name</code>
            </pre>
            <pre data-prefix=">" className="my-2 text-warning">
              <code>
                <input
                  type="text"
                  placeholder="Type Project Name"
                  className="input input-ghost w-full max-w-xs"
                  onChange={(e) => {
                    data["name"] = e.target.value;
                    setData({ ...data });
                  }}
                />
              </code>
            </pre>
            <pre data-prefix="$" className="my-2">
              <code>Project Description</code>
            </pre>
            <pre data-prefix=">" className="my-2 text-warning">
              <code>
                <input
                  placeholder="Type Project Description"
                  className="textarea input input-ghost w-full max-w-xs"
                  onChange={(e) => {
                    data["description"] = e.target.value;
                    setData({ ...data });
                  }}
                />
              </code>
            </pre>

            <pre data-prefix="$" className="my-2">
              <code>Start Time</code>
            </pre>
            <pre data-prefix=">" className="my-2 text-warning">
              <code>
                <input
                  type="datetime-local"
                  placeholder="Type Max ETH TVL"
                  className="input input-ghost w-full max-w-xs"
                  onChange={(e) => {
                    data["startTime"] = Date.parse(e.target.value) / 1000;
                    setData({ ...data });
                  }}
                />
              </code>
            </pre>
            <pre data-prefix="$" className="my-2">
              <code>End Time</code>
            </pre>
            <pre data-prefix=">" className="my-2 text-warning">
              <code>
                <input
                  type="datetime-local"
                  placeholder="Type Max ETH TVL"
                  className="input input-ghost w-full max-w-xs"
                  onChange={(e) => {
                    data["endTime"] = Date.parse(e.target.value) / 1000;
                    setData({ ...data });
                  }}
                />
              </code>
            </pre>
            <pre data-prefix="$" className="my-2">
              <code>Max ETH TVL</code>
            </pre>
            <pre data-prefix=">" className="my-2 text-warning">
              <code>
                <input
                  type="number"
                  placeholder="Type Max ETH TVL"
                  className="input input-ghost w-full max-w-xs"
                  onChange={(e) => {
                    if (e.target.value >= 0 && e.target.value != "") {
                      data["maxETHTVL"] = ethers.utils.parseEther(
                        e.target.value
                      );
                      setData({ ...data });
                    }
                  }}
                />
              </code>
            </pre>
            <WriteButton
              {...createGPAD}
              className="btn btn-sm btn-secondary mx-28 mt-2"
            />
          </div>
        </label>
      </label>
    </>
  );
};

export default CreateGPAD;
