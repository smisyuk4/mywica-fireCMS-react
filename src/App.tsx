import React, { useCallback, useMemo } from 'react';

import 'typeface-rubik';
import '@fontsource/jetbrains-mono';
import {
  AppBar,
  buildCollection,
  CircularProgressCenter,
  CMSView,
  Drawer,
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
import { useDataEnhancementPlugin } from '@firecms/data_enhancement';
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
import { customViews } from './views';
import { factsCollection } from './collections/Facts';
import { feedbackCollection } from './collections/Feedback';
import { subscriptionsCollection } from './collections/Subscriptions';
import { promocodesCollection } from './collections/Promocodes';
import { paymentsCollection } from './collections/Payments';
import { avatarsCollection } from './collections/Avatars';
import { adventuresCollection } from './collections/Adventures';
import { cardInfoCollection } from './collections/CardInfo';

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

  //const collectionsBuilder = useCallback(() => {
  //  // Here we define a sample collection in code.
  //  const collections = [
  //    //productsCollection,
  //    //testCollection,
	//		pagesCollection,
	//		factsCollection,
	//		feedbackCollection,
	//		subscriptionsCollection,
	//		promocodesCollection,
	//		paymentsCollection,
	//		avatarsCollection,
	//		adventuresCollection,
	//		cardInfoCollection
  //    // Your collections here
  //  ];
  //  // You can merge collections defined in the collection editor (UI) with your own collections
  //  return mergeCollections(
  //    collections,
  //    collectionConfigController.collections ?? []
  //  );
  //}, [collectionConfigController.collections]);

  // Here you define your custom top-level views
  const views: CMSView[] = useMemo(() => customViews, []);

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

  const navigationController = useBuildNavigationController({
		collections: async ({ dataSource }) => {
        const pages = await dataSource.fetchCollection({
            path: "pages",
        });
       
				const pagesCollections = pages.flatMap(page => {
					const basePath = `pages/${page.id}`;
					const groupName = page.id

					return [
							buildCollection({
							name: 'metadata',
							singularName: 'Pages',
							id: `${basePath}/metadata`,
							path: `pages/${page.id}/metadata`,
							group: groupName,
							//description: 'metadata, dataUk, dataEn, dataHe',
							icon: 'menu_book',
							properties: {
							title: {
								name: 'title',
								validation: { required: true },
								dataType: 'string',
							},
							description: {
								name: 'description',
								validation: { required: true },
								dataType: 'string',
							},
							createdAt: {
								name: 'createdAt',
								dataType: 'date',
								autoValue: "on_create"
							},
							updatedAt: {
								name: 'updatedAt',
								dataType: 'date',
								autoValue: "on_update"
							},
						},
						}),
						buildCollection({
							name: 'dataUk',
							singularName: 'Pages',
							id: `${basePath}/dataUk`,
							path: `pages/${page.id}/dataUk`,
							group: groupName,
							icon: 'menu_book',
							properties: {
								title: {
									name: 'page title',
									dataType: 'string',
								},
								text: {
									name: 'page text',
									dataType: 'string',
									markdown: true
								},
								avatar: {
									name: 'avatar',
									dataType: 'string',
									storage: {
										storagePath: (context) => `avatars/aboutUs/`,
										fileName: (context) => {
												return context.file.name;
										},
										acceptedFiles: ["image/webp"],
										metadata: {
												cacheControl: "max-age=1000000"
										},
										storeUrl: true,
										maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
									}
								},
								name: {
									name: 'name',
									dataType: 'string',
								},
								role: {
									name: 'role',
									dataType: 'string',
								},
								socialLink: {
									name: 'socialLink',
									dataType: 'string',
										validation: {
										matches: /^https?:\/\/.+$/i,
										matchesMessage: "Link must start with http:// or https://",
									}
								},
								orderProperty: {
									name: 'orderProperty',
									dataType: 'number',
								},
								id: {
									name: 'id',
									dataType: 'string',
									readOnly: true
								},	
								createdAt: {
									name: 'createdAt',
									dataType: 'date',
									autoValue: "on_create"
								},
								updatedAt: {
									name: 'updatedAt',
									dataType: 'date',
									autoValue: "on_update"
								},
							},
						}),
						buildCollection({
							name: 'dataEn',
							singularName: 'Pages',
							id: `${basePath}/dataEn`,
							path: `pages/${page.id}/dataEn`,
							group: groupName,
							icon: 'menu_book',
							properties: {
								title: {
									name: 'page title',
									dataType: 'string',
								},
								text: {
									name: 'page text',
									dataType: 'string',
									markdown: true
								},
								avatar: {
									name: 'avatar',
									dataType: 'string',
									storage: {
										storagePath: (context) => `avatars/aboutUs/`,
										fileName: (context) => {
												return context.file.name;
										},
										acceptedFiles: ["image/webp"],
										metadata: {
												cacheControl: "max-age=1000000"
										},
										storeUrl: true,
										maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
									}
								},
								name: {
									name: 'name',
									dataType: 'string',
								},
								role: {
									name: 'role',
									dataType: 'string',
								},
								socialLink: {
									name: 'socialLink',
									dataType: 'string',
										validation: {
										matches: /^https?:\/\/.+$/i,
										matchesMessage: "Link must start with http:// or https://",
									}
								},
								orderProperty: {
									name: 'orderProperty',
									dataType: 'number',
								},
								id: {
									name: 'id',
									dataType: 'string',
									readOnly: true
								},	
								createdAt: {
									name: 'createdAt',
									dataType: 'date',
									autoValue: "on_create"
								},
								updatedAt: {
									name: 'updatedAt',
									dataType: 'date',
									autoValue: "on_update"
								},
							},
						}),
						buildCollection({
							name: 'dataHe',
							singularName: 'Pages',
							id: `${basePath}/dataHe`,
							path: `pages/${page.id}/dataHe`,
							group: groupName,
							icon: 'menu_book',
							properties: {
								title: {
									name: 'page title',
									dataType: 'string',
								},
								text: {
									name: 'page text',
									dataType: 'string',
									markdown: true
								},
								avatar: {
									name: 'avatar',
									dataType: 'string',
									storage: {
										storagePath: (context) => `avatars/aboutUs/`,
										fileName: (context) => {
												return context.file.name;
										},
										acceptedFiles: ["image/webp"],
										metadata: {
												cacheControl: "max-age=1000000"
										},
										storeUrl: true,
										maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
									}
								},
								name: {
									name: 'name',
									dataType: 'string',
								},
								role: {
									name: 'role',
									dataType: 'string',
								},
								socialLink: {
									name: 'socialLink',
									dataType: 'string',
										validation: {
										matches: /^https?:\/\/.+$/i,
										matchesMessage: "Link must start with http:// or https://",
									}
								},
								orderProperty: {
									name: 'orderProperty',
									dataType: 'number',
								},
								id: {
									name: 'id',
									dataType: 'string',
									readOnly: true
								},	
								createdAt: {
									name: 'createdAt',
									dataType: 'date',
									autoValue: "on_create"
								},
								updatedAt: {
									name: 'updatedAt',
									dataType: 'date',
									autoValue: "on_update"
								},
							},
						}),
					]
				});

        return [
						factsCollection,
						feedbackCollection,
						subscriptionsCollection,
						promocodesCollection,
						paymentsCollection,
						avatarsCollection,
						adventuresCollection,
						cardInfoCollection,
            ...pagesCollections,
        ]
    },
    collectionPermissions: userManagement.collectionPermissions,
    views,
    adminViews: userManagementAdminViews,
    authController,
    dataSourceDelegate: firestoreDelegate,
  });

  /**
   * Data enhancement plugin
   */
  const dataEnhancementPlugin = useDataEnhancementPlugin({
    getConfigForPath: ({ path }) => {
      if (path === 'products') return true;
      return false;
    },
  });

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

  if (firebaseConfigLoading || !firebaseApp) {
    return <CircularProgressCenter />;
  }

  if (configError) {
    return <>{configError}</>;
  }

  return (
    <SnackbarProvider>
      <ModeControllerProvider value={modeController}>
        <FireCMS
          apiKey={import.meta.env.VITE_FIRECMS_API_KEY}
          navigationController={navigationController}
          authController={authController}
          userConfigPersistence={userConfigPersistence}
          dataSourceDelegate={firestoreDelegate}
          storageSource={storageSource}
          plugins={
            [
              dataEnhancementPlugin,
              importPlugin,
              exportPlugin,
              userManagementPlugin,
              collectionEditorPlugin,
            ]
          }
        >
          {({ context, loading }) => {
            let component;
            if (loading || authLoading) {
              component = <CircularProgressCenter size={'large'} />;
            } else {
              if (!canAccessMainView) {
                component = (
                  <FirebaseLoginView
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
                    <AppBar title={title} />
                    <Drawer />
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
