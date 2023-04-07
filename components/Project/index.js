import { nanoid } from "nanoid";
import { useAccount, useContractReads, useNetwork } from "wagmi";
import { contractAddress } from "../../config";
import gpadRouterABI from "../../abi/gpadRouterABI.json";
import WriteButton from "../WriteButton";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Turing from "../Turing";
import gethABI from "../../abi/gethABI.json";
const Project = (props) => {
  const id = nanoid();
  const [data, setData] = useState({});
  const [rendered, setRendered] = useState(false);
  const { chain } = useNetwork();
  const routerAddress = contractAddress[chain?.id]?.["gpadRouter"];

  const startTime = new Date();
  const endTime = new Date();
  const gid = props?.gid;
  const name = props?.name;
  const description = props?.description;
  const maxETHTVL = props?.maxETHTVL;
  const creator = props?.creator;
  const currentAddress = props?.currentAddress;
  const geth = props?.geth;
  startTime.setTime(props?.startTime * 1000);
  endTime.setTime(props?.endTime * 1000);

  const { data: read0 } = useContractReads({
    contracts: [
      {
        address: routerAddress,
        abi: gpadRouterABI,
        functionName: "gpadFunds",
        args: [gid],
      },
      {
        address: geth,
        abi: gethABI,
        functionName: "balanceOf",
        args: [currentAddress],
      },
    ],
    scopeKey: rendered,
  });

  const gpad = read0?.[0];
  const gethBalance = read0?.[1];
  const amount = gpad?.amount;
  const turing = gpad?.turing;
  const { address } = useAccount();
  const { data: read1 } = useContractReads({
    contracts: [
      {
        address: geth,
        abi: gethABI,
        functionName: "allowance",
        args: [currentAddress, turing],
      },
    ],
    scopeKey: rendered,
  });
  const allowance = read1?.[0];

  const invest = {
    buttonName: "Invest",
    data: {
      address: routerAddress,
      abi: gpadRouterABI,
      functionName: "invest",
      args: [gid],
      overrides: {
        from: address,
        value: data["invest"],
      },
    },
    callback: (confirmed) => {
      if (confirmed) {
        setRendered(nanoid());
      }
    },
  };

  const approve = {
    buttonName: "Approve Burn",
    data: {
      address: geth,
      abi: gethABI,
      functionName: "approve",
      args: [turing, ethers.constants.MaxUint256],
    },
    callback: (confirmed) => {
      if (confirmed) {
        data["confirmed"] = confirmed;
        setData({ ...data });
      }
    },
  };

  const burn = {
    buttonName: "Burn GETH",
    data: {
      address: turing,
      abi: gethABI,
      functionName: "burnFrom",
      args: [currentAddress, data["burn"]],
    },
    callback: (confirmed) => {
      if (confirmed) {
        setRendered(nanoid());
      }
    },
  };

  const setTuring = {
    buttonName: "Set Turing",
    data: {
      address: routerAddress,
      abi: gpadRouterABI,
      functionName: "setTuring",
      args: [gid, data["turing"]],
    },
    callback: (confirmed) => {
      if (confirmed) {
        setRendered(nanoid());
      }
    },
  };

  let buttonShow = 0;

  if (
    allowance < ethers.constants.MaxUint256 / 2 &&
    data["confirmed"] != true
  ) {
    buttonShow = 1;
  } else {
    buttonShow = 0;
  }

  return (
    <>
      <label htmlFor={id} className="cursor-pointer">
        <pre
          data-prefix="$"
          className="my-2 hover:bg-warning hover:text-warning-content"
        >
          <code>
            {"#" + gid} {name}
          </code>
        </pre>
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className=" text-xs" htmlFor="">
          <div className="mockup-code">
            {currentAddress == creator && (
              <pre data-prefix="$" className="my-1">
                <code>
                  <label
                    htmlFor={id + "/setting"}
                    className="btn btn-secondary btn-xs cursor-pointer"
                  >
                    <svg
                      t="1680689011297"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2839"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M896 372.7744c-62.8736-100.9984-61.8688-102.9056-61.8688-102.9056S617.0432 328.5248 576.6208 128L450.8608 128c0 0-34.688 200.8448-256.4928 141.376C130.2464 372.3712 128.0576 375.5904 128 375.648c0.0896 0.0576 173.6064 116.9024 0 275.5648l67.3792 106.7712c0 0 191.7056-79.6928 254.4896 138.016l127.2576 0c0 0 39.9168-200.064 255.5008-140.9152 61.3824-100.9856 62.368-101.952 62.368-101.952S732.2496 517.92 896 372.7744L896 372.7744zM510.9952 653.3824c-81.0176 0-146.7136-63.3024-146.7136-141.3888s65.696-141.4016 146.7136-141.4016c81.0304 0 146.7328 63.3152 146.7328 141.4016S592.0256 653.3824 510.9952 653.3824L510.9952 653.3824zM510.9952 653.3824"
                        fill="#272636"
                        p-id="2840"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="checkbox"
                    id={id + "/setting"}
                    className="modal-toggle"
                  />
                  <label
                    htmlFor={id + "/setting"}
                    className="modal cursor-pointer"
                  >
                    <div className="mockup-code">
                      <pre data-prefix="$" className="my-1">
                        <code>
                          Turing <Turing geth={geth} />
                        </code>
                      </pre>

                      <pre data-prefix="$" className="my-1">
                        <code>
                          <input
                            type="text"
                            placeholder={turing}
                            className="input input-ghost max-w-xs"
                            onChange={(e) => {
                              data["turing"] = e.target.value;
                              setData({ ...data });
                            }}
                          />
                        </code>
                      </pre>
                      <WriteButton
                        {...setTuring}
                        className="btn btn-xs btn-secondary mx-12 mt-2"
                      />
                    </div>
                  </label>
                </code>
              </pre>
            )}
            <pre data-prefix="$" className="my-1">
              <code>Project Name</code>
            </pre>
            <pre data-prefix=">" className="text-success my-1">
              <code>{name}</code>
            </pre>
            <pre data-prefix="$" className="my-1">
              <code>Project Description</code>
            </pre>
            <pre data-prefix=">" className="text-success my-1">
              <code>{description}</code>
            </pre>

            <pre data-prefix="$" className="my-1">
              <code>Time Schedule</code>
            </pre>
            <pre data-prefix=">" className="text-success my-1">
              <code>
                {startTime?.toLocaleString()} - {endTime?.toLocaleString()}
              </code>
            </pre>
            <pre data-prefix="$" className="my-1">
              <code>TVL Progress</code>
            </pre>
            <pre data-prefix=">" className="text-success my-1">
              <code>MAX ETH TVL {maxETHTVL / 1e18}</code>
            </pre>
            <pre data-prefix=">" className="text-success my-1">
              <code>
                <div
                  className="radial-progress bg-gray-500"
                  style={{ "--value": (100 * amount) / maxETHTVL }}
                >
                  {((100 * amount) / maxETHTVL).toFixed(1)} %
                </div>{" "}
                {amount?.toString() / 1e18} ETH
              </code>
            </pre>
            <pre data-prefix="$" className="my-1">
              <code>GETH Balance</code>
            </pre>
            <pre data-prefix=">" className="my-1 text-green-500">
              <code>{gethBalance / 1e18}</code>
            </pre>
            {turing != 0x0000000000000000000000000000000000000000 && (
              <>
                <pre data-prefix="$" className="my-1">
                  <code>Burn GETH</code>
                </pre>
                <pre data-prefix=">" className="text-warning my-1">
                  <code>
                    <input
                      type="number"
                      placeholder="Type Burn Amount"
                      className="input input-ghost max-w-xs"
                      onChange={(e) => {
                        if (e.target.value >= 0 && e.target.value != "") {
                          data["burn"] = ethers.utils.parseEther(
                            e.target.value
                          );
                          setData({ ...data });
                        }
                      }}
                    />
                  </code>
                </pre>
                <pre data-prefix="$" className="my-1">
                  {buttonShow == 0 && (
                    <WriteButton
                      {...burn}
                      className="btn btn-sm btn-secondary"
                    />
                  )}
                  {buttonShow == 1 && (
                    <WriteButton
                      {...approve}
                      className="btn btn-sm btn-secondary"
                    />
                  )}
                </pre>
              </>
            )}
            <pre data-prefix="$" className="my-1">
              <code>Invest</code>
            </pre>
            <pre data-prefix=">" className="text-warning my-1">
              <code>
                <input
                  type="number"
                  placeholder="Type Invest Amount"
                  className="input input-ghost max-w-xs"
                  onChange={(e) => {
                    if (e.target.value >= 0 && e.target.value != "") {
                      data["invest"] = ethers.utils.parseEther(e.target.value);
                      setData({ ...data });
                    }
                  }}
                />
              </code>
            </pre>
            <pre data-prefix="$" className="my-1">
              <WriteButton {...invest} className="btn btn-sm btn-secondary" />
            </pre>
          </div>
        </label>
      </label>
    </>
  );
};

export default Project;
