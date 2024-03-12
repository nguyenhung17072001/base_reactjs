import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import fetchAPI from 'utils/fetchAPI';
import { loginFailure, loginRequest, loginSuccess } from '../slice/authSlice';
import { get } from 'lodash';
import { redirect } from 'react-router-dom';

type PayloadLogin = ReturnType<typeof loginRequest>;

interface Response {
  data?: {
    token: string;
    userInfo: Profile;
  };
  errorMessage?: string;
  errorCode: number;
}

function* handleLogin({ payload }: PayloadLogin) {
  try {
    const response: AxiosResponse<Response> = yield call(fetchAPI.request, {
      url: '/auth/login',
      method: 'POST',
      data: {
        username: payload.username,
        password: payload.password,
      },
    });
    if (response.data.errorCode === 0) {
      yield put(loginSuccess({ token: get(response, 'data.data.token', ''), userInfo: get(response, 'data.data.userinfo', {}) }));
    } else {
      yield put(loginFailure({ msg: response.data.errorMessage }));
    }
  } catch (error) {
    yield put(loginFailure({ msg: 'Lỗi hệ thống' }));
  }
}

export default function* watchLogin() {
  yield takeLatest(loginRequest, handleLogin);
}
