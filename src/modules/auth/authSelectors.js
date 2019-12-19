import { createSelector } from "reselect";

const selectRaw = state => state.auth;

const selectAuthenticationUser = createSelector(
  [selectRaw],
  auth => auth.authenticationUser
);

const selectCurrentUser = createSelector([selectRaw], auth => auth.currentUser);

const selectLoading = createSelector([selectRaw], auth => !!auth.loading);

const selectLoadingInit = createSelector(
  [selectRaw],
  auth => !!auth.loadingInit
);

const selectors = {
  selectAuthenticationUser,
  selectCurrentUser,
  selectLoading,
  selectLoadingInit
};

export default selectors;
