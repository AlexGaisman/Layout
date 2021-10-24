import axios from "axios";
import React from "react";
import { DataSource } from "./DataSource";
import { UserInfo } from "./UserInfo";

const getSeverData = url => async () =>{
    const response = await axios.get(url);
    return response.data;
}

const getLocalStorage= key => () => {
    return localStorage.getItem(key);
}

const Text = ({message})=> <h1>{message}</h1>

export const DataSourcePanel=()=>{
    return (
        <>
        <DataSource getDataFunc={ getSeverData('/users/123')} resourceName='user'>
                <UserInfo />
        </DataSource>
        <DataSource getDataFunc={ getLocalStorage('message')} resourceName='message'>
            <Text/>
        </DataSource>
        </>
    );
}