import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.ENDPOINT)
    .setProject(process.env.PROJECT_ID);

const account = new Account(client);

export const getAccount = async () => account.get();

export const createPhoneSession = async (number) => await account.createPhoneSession('unique()', number);

export const updatePhoneSession = async (userId, secret) => account.updatePhoneSession(userId, secret);

export const deleteSession = async () => account.deleteSession('current');
