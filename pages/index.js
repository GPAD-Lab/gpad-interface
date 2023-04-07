import { useAccount, useNetwork, useProvider } from "wagmi";
import { useGlobalContext } from "../components/Context";
import CreateGPAD from "../components/createGPAD";
import Project from "../components/Project";
import gpadRouterABI from "../abi/gpadRouterABI.json";
import { contractAddress } from "../config";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
const Index = () => {
  const [context, setContext] = useGlobalContext();
  const { chain } = useNetwork();
  const routerAddress = contractAddress[chain?.id]?.["gpadRouter"];

  const [data, setData] = useState({});

  const search = context?.["search"];

  const flush = context?.["flush"];
  const { address } = useAccount();
  const provider = useProvider();

  const showLog = async (search) => {
    const isId = search >= 0 && search != undefined && search != "";
    if (routerAddress == undefined) return;
    const contract = new ethers.Contract(
      routerAddress,
      gpadRouterABI,
      provider
    );
    if (isId) {
      const filter = contract.filters.CreateGPAD(search);
      const logs = await contract.queryFilter(filter);
      data["logs"] = logs;
    } else {
      const filter = contract.filters.CreateGPAD();
      const logs = await contract.queryFilter(filter);
      data["logs"] = logs;
    }
    setData({ ...data });
  };

  useEffect(() => {
    showLog(search);
  }, [search]);

  useEffect(() => {
    showLog("");
  }, [flush]);

  return (
    <>
      <div className="m-auto w-72 md:w-1/2 my-10">
        <CreateGPAD />

        <div className="mockup-code bg-primary text-primary-content">
          {data["logs"]?.map((item, index) => {
            const gpad = {
              name: item?.["args"]?.["_gpad"]?.["name"],
              description: item?.["args"]?.["_gpad"]?.["description"],
              maxETHTVL: item?.["args"]?.["_gpad"]?.["maxETHTVL"]?.toString(),
              startTime: item?.["args"]?.["_gpad"]?.["startTime"]?.toString(),
              endTime: item?.["args"]?.["_gpad"]?.["endTime"]?.toString(),
              gid: item?.["args"]?.["_id"]?.toString(),
              creator: item?.["args"]?.["_creator"],
              currentAddress: address,
              geth: item?.["args"]?.["_geth"],
            };

            return <Project {...gpad} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
