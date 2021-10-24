import React from "react";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

export const SimpleLoaderPanel=() => {

    return(
        <>
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
        <UserLoader userId="345">
            <UserInfo />
        </UserLoader>
        </>
    )

}