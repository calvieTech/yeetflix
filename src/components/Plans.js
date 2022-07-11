import React, { useEffect, useState } from "react";
import "../sass/plans.scss";
import db from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Plans() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      const products = {};
      const queryForProducts = query(
        collection(db, "products"),
        where("active", "==", true)
      );

      const productsSnapshot = await getDocs(queryForProducts);
      productsSnapshot.forEach(async (doc) => {
        products[doc.id] = doc.data();
        const queryForPrices = await collection(db, "prices");
        // console.log("queryForPrices", queryForPrices);
        queryForPrices.forEach((price) => {
          console.log("price: " + price);
          products[doc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
    };

    // db.collection("products")
    //   .where("active", "==", true)
    //   .get()
    //   .then((querySnapshot) => {
    //     const products = {};
    //     querySnapshot.forEach(async (doc) => {
    //       products[doc.id] = doc.data();
    //       const price = await doc.ref.collection("prices").get();
    //       price.docs.forEach((price) => {
    //         products[doc.id].prices = {
    //           priceId: price.id,
    //           priceData: price.data(),
    //         };
    //       });
    //     });
    //     setProducts(products);
    //   });
    fetchData();
    setProducts(products);
  }, []);
  console.log(products);
  return <div className="plans">Plans</div>;
}

export default Plans;
