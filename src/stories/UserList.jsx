import React from "react";
import { BooleanField, Datagrid, DateField, TextField, TextInput, ReferenceField, InfiniteList, Admin, Resource } from 'react-admin';


const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
];


 const TestUserList = () => {
    return(
        <InfiniteList filters={filters} hasCreate={true}>
            <Datagrid rowClick="show">
                <TextField source="username" />
                <DateField source="createdAt" label="Created At" />                
                <DateField source="modifiedAt" label="Modified At" />                
                <BooleanField source="isActive" label="Active?" FalseIcon={null} sx={{ color: "green" }} />
            </Datagrid>
        </InfiniteList>
    )
}

export default TestUserList;
