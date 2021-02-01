import { createSelector } from 'reselect';

export const selectAuth = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  (auth) => auth.currentUser
);
