import { getListUsers } from '../slices/userSlice';
import { call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import fetchAPI from 'utils/fetchAPI';
import { get } from 'lodash';

function* handleGetListUsers({ payload }: ReturnType<typeof getListUsers>) {
  try {
    const res: AxiosResponse = yield call(fetchAPI.request, {
      method: 'get',
      url: 'users/read',
      params: {
        ...payload.params,
        limit: 10,
      },
    });
    yield call(payload.onSucceed, res.data.data);
  } catch (err) {
    yield call(payload.onSucceed, []);
  }
}

export default function* watchGetListUsers() {
  yield takeLatest(getListUsers, handleGetListUsers);
}
