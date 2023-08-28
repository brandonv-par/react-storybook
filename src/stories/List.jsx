import React from "react";
import { BooleanField, Datagrid, DateField, TextField, TextInput, ReferenceField, InfiniteList } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export default function List(){
    return(
        <InfiniteList filters={filters} hasCreate={true}>
            <Datagrid rowClick="show">
                <TextField source="name" />
                <ReferenceField source="organizationId" reference="organizations" link="show" />
                <DateField source="createdAt" label="Created At" />
                <ReferenceField source="createdBy" label="Created By" reference="users" link="show" />
                <DateField source="modifiedAt" label="Modified At" />
                <ReferenceField source="modifiedBy" label="Modified By" reference="users" link="show" />
                <BooleanField source="isActive" label="Active?" FalseIcon={null} sx={{ color: "green" }} />
            </Datagrid>
        </InfiniteList>
    )
}