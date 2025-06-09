import React, { useMemo } from 'react';

import 'typeface-rubik';
import '@fontsource/jetbrains-mono';
import {
  AppBar,
  //buildCollection,
  CircularProgressCenter,
  //CMSView,
  //Drawer,
  FireCMS,
  ModeControllerProvider,
  NavigationRoutes,
  Scaffold,
  SideDialogs,
  SnackbarProvider,
  useBuildLocalConfigurationPersistence,
  useBuildModeController,
  useBuildNavigationController,
  useValidateAuthenticator,
} from '@firecms/core';
import {
  FirebaseAuthController,
  FirebaseLoginView,
  FirebaseSignInProvider,
  useFirebaseAuthController,
  useFirebaseStorageSource,
  useFirestoreDelegate,
  useInitialiseFirebase,
} from '@firecms/firebase';

import { firebaseConfig } from './firebase_config';
//import { useDataEnhancementPlugin } from '@firecms/data_enhancement';
import {
  useBuildUserManagement,
  userManagementAdminViews,
  useUserManagementPlugin,
} from '@firecms/user_management';
import { useImportPlugin } from '@firecms/data_import';
import { useExportPlugin } from '@firecms/data_export';
import { useFirestoreCollectionsConfigController } from '@firecms/collection_editor_firebase';
import {
  useCollectionEditorPlugin,
} from '@firecms/collection_editor';
import logo from '../public/logo.png';
//import { customViews } from './views';
import { factsCollection } from './collections/Facts';
import { feedbackCollection } from './collections/Feedback';
import { subscriptionsCollection } from './collections/Subscriptions';
import { promocodesCollection } from './collections/Promocodes';
import { paymentsCollection } from './collections/Payments';
import { avatarsCollection } from './collections/Avatars';
import { adventuresCollection } from './collections/Adventures';
import { cardInfoCollection } from './collections/CardInfo';
import { buildDataEnCollection, buildDataHeCollection, buildDataUkCollection, buildMetadataCollection, pagesCollection } from './collections/Pages';
import { usersCollection } from './collections/Users';

const PAGES_WITHOUT_DATA = [
	'home',
	'video',
	'playerСhats',
	'adventures',
	'collection',
	'feedback'
]

export function App() {
  const title = 'Mywica CMS';

  if (!firebaseConfig?.projectId) {
    throw new Error(
      'Firebase config not found. Please check your `firebase_config.ts` file and make sure it is correctly set up.'
    );
  }

  const { firebaseApp, firebaseConfigLoading, configError } =
    useInitialiseFirebase({
      firebaseConfig,
    });

  // Uncomment this to enable App Check
  // const { error: appCheckError } = useAppCheck({
  //     firebaseApp,
  //     options: {
  //         provider: new ReCaptchaEnterpriseProvider(process.env.VITE_RECAPTCHA_SITE_KEY as string)
  //     }
  // });

  /**
   * Controller used to save the collection configuration in Firestore.
   * Note that this is optional and you can define your collections in code.
   */
  const collectionConfigController = useFirestoreCollectionsConfigController({
    firebaseApp,
  });

  const signInOptions: FirebaseSignInProvider[] = ['google.com', 'password'];

  /**
   * Controller used to manage the dark or light color mode
   */
  const modeController = useBuildModeController();

  /**
   * Delegate used for fetching and saving data in Firestore
   */
  const firestoreDelegate = useFirestoreDelegate({
    firebaseApp,
		localTextSearchEnabled: true
  });

  /**
   * Controller used for saving and fetching files in storage
   */
  const storageSource = useFirebaseStorageSource({
    firebaseApp,
  });

  /**
   * Controller for managing authentication
   */
  const authController: FirebaseAuthController = useFirebaseAuthController({
    firebaseApp,
    signInOptions,
  });

  /**
   * Controller in charge of user management
   */
  const userManagement = useBuildUserManagement({
    authController,
    dataSourceDelegate: firestoreDelegate,
  });

  /**
   * Controller for saving some user preferences locally.
   */
  const userConfigPersistence = useBuildLocalConfigurationPersistence();

  /**
   * Use the authenticator to control access to the main view
   */
  const { authLoading, canAccessMainView, notAllowedError } =
    useValidateAuthenticator({
      authController,
      disabled: userManagement.loading,
      authenticator: userManagement.authenticator, // you can define your own authenticator here
      dataSourceDelegate: firestoreDelegate,
      storageSource,
    });


  /**
   * Data enhancement plugin
   */	
  //const dataEnhancementPlugin = useDataEnhancementPlugin({
	//	apiKey: import.meta.env.VITE_FIRECMS_API_KEY,
  //  getConfigForPath: ({ path }) => {
	//		if (process.env.NODE_ENV !== "production") return true;
  //    if (path === 'facts/data/uk' || path === 'facts/data/en' || path === 'facts/data/he') return true;
  //    return false;
  //  },
  //});

  /**
   * User management plugin
   */
  const userManagementPlugin = useUserManagementPlugin({ userManagement });

  /**
   * Allow import and export data plugin
   */
  const importPlugin = useImportPlugin();
  const exportPlugin = useExportPlugin();

  const collectionEditorPlugin = useCollectionEditorPlugin({
    collectionConfigController,
  });

	const navigationController = useBuildNavigationController({
		collections: async ({ dataSource }) => {
        const pages = await dataSource.fetchCollection({
            path: "pages",
        });
       
				const pagesCollections = pages.flatMap(page => {
					const pageId = page.id;
					const basePath = `pages/${pageId}`;
					const groupName = `${pageId} page`;

					if (PAGES_WITHOUT_DATA.includes(pageId)) {
						return [
							buildMetadataCollection(basePath, groupName, pageId),
						];
					}

					return [
						buildMetadataCollection(basePath, groupName, pageId),
						buildDataUkCollection(basePath, groupName),
						buildDataEnCollection(basePath, groupName),
						buildDataHeCollection(basePath, groupName),
					]
				});

        return [
						usersCollection,
						factsCollection,
						feedbackCollection,
						subscriptionsCollection,
						promocodesCollection,
						paymentsCollection,
						avatarsCollection,
						adventuresCollection,
						cardInfoCollection,
						pagesCollection,
            ...pagesCollections,
        ]
    },
    collectionPermissions: userManagement.collectionPermissions,
    //views,
    adminViews: userManagementAdminViews,
    authController,
    dataSourceDelegate: firestoreDelegate,
  });

  if (firebaseConfigLoading || !firebaseApp) {
    return <CircularProgressCenter />;
  }

  if (configError) {
    return <>{configError}</>;
  }

  return (
    <SnackbarProvider>
      <ModeControllerProvider value={modeController} >
        <FireCMS
          apiKey={import.meta.env.VITE_FIRECMS_API_KEY}
          navigationController={navigationController}
          authController={authController}
          userConfigPersistence={userConfigPersistence}
          dataSourceDelegate={firestoreDelegate}
          storageSource={storageSource}
					plugins={[
						importPlugin,
						exportPlugin,
						userManagementPlugin,
						collectionEditorPlugin,
						//dataEnhancementPlugin,
					]}
		
        >
          {({ context, loading }) => {
            let component;
            if (loading || authLoading) {
              component = <CircularProgressCenter size={'large'} />;
            } else {
              if (!canAccessMainView) {
                component = (
                  <FirebaseLoginView
										logo={logo}
										additionalComponent={
											<a href="https://mywica.com" aria-label='mywica' target="_blank" rel="noopener noreferrer">mywica.com</a>
										}
										children={<p>Welcome to MYWICA CMS</p>}
                    allowSkipLogin={false}
                    signInOptions={signInOptions}
                    firebaseApp={firebaseApp}
                    authController={authController}
                    notAllowedError={notAllowedError}
                  />
                );
              } else {
                component = (
                  <Scaffold logo={logo} autoOpenDrawer={false}>
                    <AppBar title={title}/>
                    {/*<Drawer />*/}
                    <NavigationRoutes />
                    <SideDialogs />
                  </Scaffold>
                );
              }
            }

            return component;
          }}
        </FireCMS>
      </ModeControllerProvider>
    </SnackbarProvider>
  );
}
