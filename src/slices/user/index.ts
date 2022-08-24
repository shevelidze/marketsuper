import { GraphQLClient, ClientError, gql } from 'graphql-request';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import apiConfig from '../../configs/api';
import { RootState } from '../../common/store';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string | null;
  token: string;
}

export interface UserState {
  value: User | null;
}
const initialState: UserState = { value: null };

export const readSession = createAsyncThunk<User | null>(
  'user/login',
  async () => {
    const token = localStorage.getItem(apiConfig.tokenLocalStorageKey);

    if (token === null) return null;

    const apiClient = new GraphQLClient(
      apiConfig.apiPath + '/graphql/authorized',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    try {
      const requestResult = await apiClient.request<{ getMe: User }>(gql`
        {
          getMe {
            firstName
            lastName
            email
            address
          }
        }
      `);

      return {
        ...requestResult.getMe,
        token,
      };
    } catch (e) {
      if (e instanceof ClientError && e.response.status === 401) return null;
      else throw e;
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(apiConfig.tokenLocalStorageKey);
      state.value = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readSession.fulfilled, (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    });
    builder.addCase(readSession.rejected, (state, action) => {
      throw new Error('Failed to restore session. Unknown error.');
    });
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
