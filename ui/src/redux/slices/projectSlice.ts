import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { DataStatus, IProject, projectState } from "../../utils/interfaces";
import { api } from "../../utils/axios";

const initialState: projectState = {
  error: null,
  status: DataStatus.IDLE,
  projects: null,
};

export const getProjects = createAsyncThunk(
  "project/getProjects",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/api/projects");
      if (res.status != 200) {
        return thunkApi.rejectWithValue(
          "Can't find the user, please try again"
        );
      }
      return thunkApi.fulfillWithValue(res.data);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        `Can't get projects, please try again ${err.message}`
      );
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<projectState>) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.projects = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.projects = action.payload as unknown as IProject[];
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.projects = null;
      });
  },
});

export const { updateProjects } = projectsSlice.actions;

export default projectsSlice;
