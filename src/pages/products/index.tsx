import { useState, useEffect } from "react";
import _axios from "@/api";

import { fetchProducts } from "@/app/features/products/productsSlice";

import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { ProductType } from "@/types";
import MappedItems from "@/components/MappedItems";
import Video from "@/components/Video";

export default function Products() {
  const { products }: { products: ProductType } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="w-full max-w-[1130px] border border-solid border-black py-6 ">
      {/* main */}
      <section className="flex items-start justify-start flex-wrap gap-4 pb-5 bg-white rounded-md border border-solid border-[#E5E7EB]">
        {/* product description */}
        <div className="w-full max-w-[746px]">
          <figure className="w-full aspect-[2.5/1] border border-solid border-black">
            <img
              src={products.picture}
              alt=""
              className="object-cover block w-full h-full"
            />
          </figure>

          <div className="px-2 md:px-5">
            <h2 className="mt-5 mb-2 text-[#374151] font-semibold">
              {products.name}
            </h2>
            <p className="text-[#6B7280] text-sm leading-6 font-normal">
              {products.description}
            </p>
          </div>
        </div>

        {/* user info */}
        {products.company && (
          <div className=" w-full max-w-[382px] px-2 md:px-5">
            <h2 className="mb-5 text-[#374151] font-semibold">Offered By</h2>

            <figure className="w-full max-w-[200px] aspect-[4.34/1]">
              <img
                src={products.company.logo}
                alt={products.company.name}
                className="object-cover block w-full h-full"
              />
            </figure>
          </div>
        )}
      </section>

      {products.video && <Video video={products.video} />}

      {/* details */}
      <section className="mt-5 p-2 md:p-5 bg-white rounded-md border border-solid border-[#E5E7EB]">
        <h2 className="mb-5 text-[#374151] font-semibold">Offer Details</h2>
        <div className="flex items-start justify-start flex-wrap gap-4 lg:gap-10">
          {/* categories */}

          {products.categories && (
            <MappedItems data={products.categories} title="Categories" />
          )}

          {/* busines models */}
          {products.businessModels && (
            <MappedItems
              data={products.businessModels}
              title="Business Models"
            />
          )}

          {/* Trl */}
          {products.trl && (
            <div className="flex items-start justify-start gap-2">
              <img src="" alt="" />
              <div>
                <h3 className="text-[#6B7280] font-normal text-base">TRL</h3>

                <span className="inline-block bg-[#E5E7EB] px-[14px] py-[5px] text-[#6B7280] text-sm rounded-[20px]">
                  {products.trl.name}
                </span>
              </div>
            </div>
          )}

          {/* Costs */}
          <div className="flex items-start justify-start gap-2">
            <img src="" alt="" />
            <div>
              <h3 className="text-[#6B7280] font-normal text-base">Costs</h3>

              <span className="inline-block bg-[#E5E7EB] px-[14px] py-[5px] text-[#6B7280] text-sm rounded-[20px]">
                {products.investmentEffort}
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
