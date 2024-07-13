import { SignInInfo, SignUpInfo } from '@/types/types';
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '668496be0015fbc53292',
  databaseId: '6685e01a00332b9683cf',
  usersCollectionId: '6685e05600056724edb9',
  videosId: '6685e0910007a2e7136b',
  storageId: '6685e27c00117a7680ce',
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async ({ email, password, username }: SignUpInfo) => {
  try {
    try {
      await account.deleteSession('current');
    } catch (error) {
      // Ignore error if no session is active
    }

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );

    if (!newAccount) {
      throw new Error();
    }

    const avatarUrl = avatars.getInitials(username);

    await signIn({ email, password });

    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      },
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
};

export async function signIn({ email, password }: SignInInfo) {
  try {
    try {
      await account.deleteSession('current');
    } catch (error) {
      // Ignore error if no session is active
    }

    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) {
      throw Error;
    }

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal('accountId', currentAccount.$id)],
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0];
  } catch (err) {
    throw new Error((err as Error).message);
  }
}
