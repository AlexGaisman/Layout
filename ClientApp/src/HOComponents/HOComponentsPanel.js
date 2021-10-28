import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { hOCPrintingProps } from "./HOCPrintingProps";
import { UserInfo } from "../Containers/UserInfo";
import axios from "axios";

export const withUser = (Component, userId) =>{
    return props => {
        const [user, setUser] = useState(null);

        useEffect(()=>{
            (async()=>{
                const response =await axios.get(`/users/${userId}`);
                setUser(response.data);
            })();
        },[]);
        return <Component {...props} user={user}/>
    }
}

const UserInfoWrapped = hOCPrintingProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '234');

export const HOComponentsPanel=()=>{

    return(
        <div>
        <UserInfoWrapped a={1} b='Hello' c={{name: 'Shugun'}}/>
        <UserInfoWithLoader  a={1} b='Hello' c={{name: 'Shugun'}} />
        </div>
    );
}