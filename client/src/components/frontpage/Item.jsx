import React, { useEffect, useState } from "react";
import Productsdata from "../productsItems.json";
import Cards  from ".././cards";
// import Card from '@mui/material/Card';
import "../cards.css";
// import CardContent from '@mui/material/CardContent';

const Item = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(Productsdata));
      setProducts(Productsdata);
    } else {
      const productsItems = JSON.parse(localStorage.getItem("products"));
      setProducts(productsItems);
    }
  }, []);
  console.log(products);
  return (
    <div className="Itemsss">
      {Productsdata &&
        Productsdata.map((records) => {
          return (<>
            {/* <div className="session-title">
                <h1>NEW ARRIVAL</h1>
            </div> */}
            <Cards key={records.id}
            name={records.name}
            rate={records.rating}
            price={records.price}
            url={records.url}
            />
            </>
          );
        })}
    </div>
  );
};

export default Item;

// <div>

//   products.map((item,key)=>{
//     return()
//   }

//         <li>
//             {item?.name}
//         </li>

//     )

// </div>
