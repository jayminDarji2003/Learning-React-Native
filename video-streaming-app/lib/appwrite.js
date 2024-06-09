import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
// 666560ec0007cf156fc0
// 666562e6001dbe8c4c87
// 6665632c000731addced
// 6665636d000b3b512068
// 666565f5000fb4afbf28

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jdtech.aora",
    projectId: "666560ec0007cf156fc0",
    databaseId: "666562e6001dbe8c4c87",
    userCollectionId: "6665632c000731addced",
    videoCollectionId: "6665636d000b3b512068",
    storageId: "666565f5000fb4afbf28",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (username, email, password) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        // after registering, login user
        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                password,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.log("ERROR WHILE CREATING USER")
        console.log(error)
        throw new Error(error)
    }
}

// login user
export async function signIn(email, password) {
    // try {
    //     const session = await account.createEmailSession(email, password);
    //     return session;
    // } catch (error) {
    //     throw new Error(error);
    // }

    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.error("SignIn Error: ", error);
        throw new Error(error.message || 'An error occurred during sign-in');
    }
}




