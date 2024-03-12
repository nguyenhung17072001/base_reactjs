import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  status: 'loading' | 'success' | 'idle' | 'failure';
  token: string;
  message?: string;
  userInfo?: Profile;
}

const initialState: AuthState = {
  status: 'idle',
  token: '',
  message: '',
  userInfo: {},
};

const authSlice = createSlice({
  name: '@auth',
  initialState,
  reducers: {
    loginRequest: (state, _action: PayloadAction<{ username: string; password: string }>) => {
      state.status = 'loading';
      state.token = '';
      state.message = '';
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; userInfo: Profile }>) => {
      state.status = 'success';
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    loginFailure: (state, action: PayloadAction<{ msg?: string }>) => {
      state.status = 'failure';
      state.message = action.payload.msg;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
