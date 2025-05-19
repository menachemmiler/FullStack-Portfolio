import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { DataStatus, IUser, userState } from "../../utils/interfaces";
import { api } from "../../utils/axios";

const initialState: userState = {
  error: null,
  status: DataStatus.IDLE,
  user: null,
  data: null,
};

export const fetchLogin = createAsyncThunk(
  "user/login",
  async (user: IUser, thunkApi) => {
    try {
      const res = await api.post("/api/users/login", JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status != 200) {
        return thunkApi.rejectWithValue("Can't login, please try again");
      }
      const data = await res.data;
      localStorage.setItem("Authorization", data.token);
      return thunkApi.fulfillWithValue(data);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        `Can't login, please try again ${err.message}`
      );
    }
  }
);

// export const fetchRegister = createAsyncThunk(
//   "user/register",
//   async (
//     user: { username: string; password: string; isAdmin: boolean },
//     thunkApi
//   ) => {
//     try {
//       console.log(JSON.stringify(user));
//       const res = await fetch("http://localhost:4000/api/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       console.log({ res });
//       if (res.status != 201) {
//         return thunkApi.rejectWithValue(
//           "Can't create new user, please try again"
//         );
//       }
//       const data = await res.json();
//       console.log({ data });
//       return thunkApi.fulfillWithValue(data);
//     } catch (err) {
//       return thunkApi.rejectWithValue(
//         "Can't create new user, please try again"
//       );
//     }
//   }
// );

export const getProfile = createAsyncThunk(
  "user/profile",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/api/users/profile", {
        headers: {
          Authorization: localStorage.getItem("Authorization")!,
        },
      });
      if (res.status != 200) {
        return thunkApi.rejectWithValue(
          "Can't find the user, please try again"
        );
      }
      return thunkApi.fulfillWithValue(res.data);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        `Can't find the user, please try again ${err.message}`
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("Authorization");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.user = action.payload as unknown as IUser;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.user = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.user = action.payload as unknown as IUser;
      });
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice;
