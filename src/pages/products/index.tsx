import React, { useState, useEffect } from "react";
import _axios from "@/api";
export default function Products() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const raw = await fetch("https://api-test.innoloft.com/product/6781/");
      const res = await raw.json();
      // setData(res);
      console.table(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      {/* main */}
      <section></section>

      {/* details */}
      <section></section>
    </section>
  );
}
