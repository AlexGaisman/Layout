import React from "react";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

export const ResourceLoaderPanel=()=>{

    return (
    <>
    <ResourceLoader resourceUrl='/users/123' resourceName='user'>
        <UserInfo />
    </ResourceLoader>
    <ResourceLoader resourceUrl='/products/1234' resourceName='product'>
        <ProductInfo />
    </ResourceLoader>
    </>
    );
}