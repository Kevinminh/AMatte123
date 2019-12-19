import * as firebase from "firebase/app";
import gql from "graphql-tag";
import graphqlClient from "modules/shared/graphql/graphqlClient";

export default class AuthService {
  static onAuthStateChanged(callbackSuccess, callbackError) {
    return firebase.auth().onAuthStateChanged(callbackSuccess, callbackError);
  }

  static async signinWithSocial(provider, rememberMe = false) {
    const persistance = rememberMe
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION;

    await firebase.auth().setPersistence(persistance);

    const providers = {
      google: firebase.auth.GoogleAuthProvider,
      facebook: firebase.auth.FacebookAuthProvider
    };

    return firebase.auth().signInWithPopup(new providers[provider]());
  }

  static async fetchMe() {
    const response = await graphqlClient.query({
      query: gql`
        {
          authMe {
            id
            authenticationid
            fullName
            firstName
            lastName
            email
            roles
          }
        }
      `
    });

    return response.data.authMe;
  }

  static async reauthenticateWithStorageToken() {
    try {
      const response = await graphqlClient.query({
        query: gql`
          {
            authStorageToken
          }
        `
      });

      const token = response.data.authStorageToken;
      return firebase.auth().signInWithCustomToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  static signout() {
    return firebase.auth.signOut();
  }
}
