import React from 'react';
import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <ReferenceInput source="organizationId" reference="organizations" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;