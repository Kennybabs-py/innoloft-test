import { ProductType } from "@/types";
import React from "react";

type Props = {
  data: { id: number; name: string }[];
  title: string;
};
export default function MappedItems(props: Props) {
  const { data, title } = props;
  return (
    <div className="flex items-start justify-start gap-2 flex-wrap">
      <img src="" alt="" />
      <div>
        <h3 className="text-[#6B7280] font-normal text-base">{title}</h3>

        <div className="flex items-start justify-start flex-wrap gap-2">
          {data.map((item) => {
            return (
              <span
                key={item.id}
                className="inline-block bg-[#E5E7EB] px-[14px] py-[5px] text-[#6B7280] text-sm rounded-[20px]"
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
