import React from "react";
import { BooleanField, DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const DetailScreen = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="email" />
            <DateField source="createdAt" />
            <NumberField source="createdBy" />
            <DateField source="modifiedAt" />
            <NumberField source="modifiedBy" />
            <BooleanField source="isActive" />
        </SimpleShowLayout>
    </Show>
)

export default DetailScreen;