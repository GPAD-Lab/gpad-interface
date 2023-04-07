import { useState } from "react";
import { turingTemplate } from "../../config";
import { nanoid } from "nanoid";
import { ethers } from "ethers";
import copy from "copy-to-clipboard";
const Turing = (props) => {
  const id = nanoid();

  const [data, setData] = useState({});

  const geth = props?.geth;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return (
    <>
      <label className="btn btn-secondary btn-xs cursor-pointer" htmlFor={id}>
        Use Template Turing
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer text-black">
        <label className="modal-box" htmlFor="">
          {data["address"] && (
            <div>
              <div>Deploy turing contract to :</div>
              <div
                className="tooltip"
                data-tip="Click to copy"
                onClick={() => {
                  copy(data["address"]);
                }}
              >
                {data["address"]}
              </div>
              <div>Status:</div>
              <div
                className={
                  data["confirm"] == "Confirmed"
                    ? "text-green-500"
                    : "text-yellow-500"
                }
              >
                {data["confirm"]}
              </div>
              {data["confirm"] == "Confirmed" && (
                <button
                  className="btn btn-primary btn-xs mt-4"
                  onClick={() => {
                    setData({});
                  }}
                >
                  Return
                </button>
              )}
            </div>
          )}
          {!data["address"] && (
            <div class="grid grid-cols-2 gap-1">
              {turingTemplate?.map((item, index) => {
                return (
                  <div
                    className="card bg-base-100 shadow-xl cursor-pointer text-black  hover:bg-gray-500 hover:text-white"
                    key={index}
                    onClick={async () => {
                      const contractFactory = new ethers.ContractFactory(
                        item?.["abi"],
                        item?.["bytecode"],
                        signer
                      );
                      const TuringContract = await contractFactory.deploy(
                        geth,
                        item?.["name"],
                        item?.["name"]
                      );

                      data["address"] = TuringContract.address;
                      data["confirm"] = "Confirming";
                      setData({ ...data });
                      await TuringContract.deployed();
                      data["confirm"] = "Confirmed";
                      setData({ ...data });
                    }}
                  >
                    <figure className="px-10 pt-10">
                      <img
                        src={item?.["descriptionImage"]}
                        alt="image"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="card-title m-auto">{item?.["name"]}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </label>
      </label>
    </>
  );
};

export default Turing;
