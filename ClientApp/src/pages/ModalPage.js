import React from "react";
import { Modal } from "../Modal";
import { NumberedList } from "../NumberedList";
import { LargeProductListItem } from "../products/LargeProductListItem";
import { products } from "../products/products";

export const ModalPage=()=>{
    return (
        <div>
        <Modal>
            <NumberedList 
            items={products}
            resourceName="product"
            itemComponent={LargeProductListItem}
            />
        </Modal> 
        </div>
    )
}