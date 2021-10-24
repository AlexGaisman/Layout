import React from "react";

import { RegularList } from "../RegularList";
import { NumberedList } from "../NumberedList";
import { SmallPersonListItem } from "../people/SmallPersonListItem";
import { LargePersonListItem } from "../people/LargePersonListItem";
import { SmallProductListItem } from "../products/SmallProductListItem";
import { LargeProductListItem } from "../products/LargeProductListItem";

import { people } from "../people/people";
import { products } from "../products/products";

export const ListPage=()=>{
    return (
        <>
        <RegularList 
    items={people}
    resourceName="person"
    itemComponent={SmallPersonListItem}
      />
    <RegularList 
      items={people}
      resourceName="person"
      itemComponent={LargePersonListItem}
      />
        <NumberedList 
      items={products}
      resourceName="product"
      itemComponent={SmallProductListItem}
      />
              <NumberedList 
      items={products}
      resourceName="product"
      itemComponent={LargeProductListItem}
      />
      </>
    )
}