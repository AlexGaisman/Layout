import { User } from "oidc-client";
import React from "react";
import { Route,Link } from "react-router-dom";


import { CurrentUserLoader } from "../Containers/CurrentUserLoader";
import { ResourceLoader } from "../Containers/ResourceLoader";
import { SimpleLoaderPanel } from "../Containers/SimpleLoaderPanel";
import { UserInfo } from "../Containers/UserInfo";
import { UserLoader } from "../Containers/UserLoader";

export const ContainerPage=()=>{

    return(
        <div>
       <Link to='/simpleloader'>Simple Loader </Link>
       <Link to='/resourceloader'>Resource Loader </Link>
       <Link to='/datasourceloader'>Data Source Loader </Link>

        </div>
    );
}