## FireCMS PRO starter template

Welcome to FireCMS!

This is a starter template for your next project. It includes the basic
configuration to get you started.

In order to run this project, you will need to create a Firebase project,
create a web app and copy the configuration to the `firebase_config.ts`.
(but it is likely it was configured for you already).

### Running the project

Install the dependencies:

```bash
yarn
```

And run the project locally:

```bash
yarn dev
```

### Building the project

Make sure you update your `package.json` `build` script with the correct
project name. Then run:

```bash
yarn build
```

## Firestore rules

This project reads and writes data to Firestore.

The FireCMS PRO plugins store some configuration in `__FIRECMS`. FireCMS users and
roles are stored under this path. You probably want to grant access initially
to your user to this path:

```
match /__FIRECMS/{document=**} {
    allow read: if true;
    allow write: if true;
}
```

After that, you can restrict your rules so only registered users can access:

```
match /{document=**} {
    allow read: if isFireCMSUser();
    allow write: if isFireCMSUser();
}

function isFireCMSUser(){
    return exists(/databases/$(database)/documents/__FIRECMS/config/users/$(request.auth.token.email));
}
```

### Deploying the project

You can deploy the project to Firebase hosting by following [these instructions](https://firecms.co/docs/pro/deployment).
In order to deploy the project, you need to have a valid FireCMS PRO license.
You can create one in the [FireCMS subscriptions](https://app.firecms.co/subscriptions).
When you get your API key, you can set it in the `.env` file.

## documents

- [NavigationRoutes](https://firecms.co/docs/self/main_components#props-3)
- [Advanced permissions](https://firecms.co/docs/collections/permissions#advanced-permissions)
- [google icons](https://fonts.google.com/icons)
- [firecms icons](https://firecms.co/docs/icons)
