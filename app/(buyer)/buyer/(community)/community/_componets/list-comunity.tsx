import ComunityUserItem from "./comunity-users-item";
import ComunityListItem from "./comunity-list-items";
import { getAllCommunity } from "@/actions/get-all-community copy";

export const ComunityList = async () => {
  const comunity = await getAllCommunity();

  return (
    <div className="hidden  lg:block    bg-gray-100  space-y-2 w-80 h-full">
      <div className=" px-7 text-sm font-semibold bg-white  py-8 border-r-2">
        Community - {comunity.length}
      </div>
      <div className="h-[580px] overflow-y-auto p-4 ">
        {comunity.map((comunity) => (
          <div key={comunity.id} className="flex  ">
            <ComunityListItem comm={comunity} />
          </div>
        ))}
      </div>
    </div>
  );
};
