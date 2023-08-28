import React from 'react';
import TestUserList from './UserList';
import { Admin, Resource } from 'react-admin'
import fakeRestProvider from 'ra-data-fakerest';

export default {
    title: 'TestUserList',
    component: TestUserList,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};


const dataProvider = () =>
    fakeRestProvider(
        {
            users: [
                {
                    "id": 1,
                    "username": "William.Johnson",
                    "firstName": "William",
                    "lastName": "Johnson",
                    "email": "william.johnson@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 1,
                    "userGroupId": 1
                },
                {
                    "id": 2,
                    "username": "Elizabeth.Williams",
                    "firstName": "Elizabeth",
                    "lastName": "Williams",
                    "email": "elizabeth.williams@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 1,
                    "userGroupId": 1
                },
                {
                    "id": 3,
                    "username": "James.Brown",
                    "firstName": "James",
                    "lastName": "Brown",
                    "email": "james.brown@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 1,
                    "userGroupId": 4
                },
                {
                    "id": 4,
                    "username": "Emily.Smith",
                    "firstName": "Emily",
                    "lastName": "Smith",
                    "email": "emily.smith@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 1,
                    "userGroupId": 5
                },
                {
                    "id": 5,
                    "username": "Michael.Jones",
                    "firstName": "Michael",
                    "lastName": "Jones",
                    "email": "michael.jones@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 2
                },
                {
                    "id": 6,
                    "username": "Emma.Miller",
                    "firstName": "Emma",
                    "lastName": "Miller",
                    "email": "emma.miller@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 2
                },
                {
                    "id": 7,
                    "username": "David.Davis",
                    "firstName": "David",
                    "lastName": "Davis",
                    "email": "david.davis@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 2
                },
                {
                    "id": 8,
                    "username": "Olivia.Garcia",
                    "firstName": "Olivia",
                    "lastName": "Garcia",
                    "email": "olivia.garcia@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 2
                },
                {
                    "id": 9,
                    "username": "John.Rodriguez",
                    "firstName": "John",
                    "lastName": "Rodriguez",
                    "email": "john.rodriguez@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 3
                },
                {
                    "id": 10,
                    "username": "Sophia.Martinez",
                    "firstName": "Sophia",
                    "lastName": "Martinez",
                    "email": "sophia.martinez@example.com",
                    "createdAt": "2023-07-19T00:00:00Z",
                    "createdBy": 1,
                    "modifiedAt": "2023-07-19T00:00:00Z",
                    "modifiedBy": 1,
                    "isActive": true,
                    "organizationId": 3
                },
            ],
            events: [],
            performances: [],
        },
        process.env.NODE_ENV !== 'test'
    );

    export const Test = () => (
        <Admin dataProvider={dataProvider()}>
            <Resource name="users" list={TestUserList} />
        </Admin>
    )