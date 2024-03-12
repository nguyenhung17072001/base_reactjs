import { createAction } from '@reduxjs/toolkit';

export interface ListUserPayload {
  onSucceed: (data: any) => void;
  params: {
    offset?: number;
  };
}

export const getListUsers = createAction('GET_LIST_USERS', ({ onSucceed, params }: ListUserPayload) => ({
  payload: {
    onSucceed,
    params,
  },
}));
