import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  DataStatus,
  IProject,
  IProjectForm,
  projectState,
} from "../../utils/interfaces";
import { api } from "../../utils/axios";

const initialState: projectState = {
  error: null,
  status: DataStatus.IDLE,
  projects: null,
  newProject: null,
  statusNewProject: DataStatus.IDLE,
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

export const addNewProject = createAsyncThunk(
  "project/addNewProject",
  async (newProject: IProjectForm, thunkApi) => {
    try {
      console.log({ newProject });
      const formData = new FormData();
      formData.append("title", newProject.title);
      formData.append("description", newProject.description);
      formData.append("fullDescription", newProject.fullDescription);
      formData.append("image", newProject.image);
      formData.append("liveLink", newProject.liveLink);
      formData.append(
        "backendLink",
        newProject.backendLink ? newProject.backendLink : ""
      );
      console.log({ formData });
      const res = await api.post("/api/projects", formData, {
        headers: { Authorization: localStorage.getItem("Authorization")! },
      });
      if (res.status != 201) {
        return thunkApi.rejectWithValue("Can't add project, please try again");
      }
      return thunkApi.fulfillWithValue(res.data);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        `Can't add project, please try again ${err.message}`
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
    resetStatusNewProject: (state) => {
      state.statusNewProject = DataStatus.IDLE;
      state.newProject = null;
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
      })
      .addCase(addNewProject.pending, (state) => {
        state.statusNewProject = DataStatus.LOADING;
        state.error = null;
        state.newProject = null;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.statusNewProject = DataStatus.SUCCESS;
        state.error = null;
        state.newProject = action.payload as unknown as IProject;
        if (state.projects) {
          state.projects.push(action.payload);
        } else {
          state.projects = [action.payload];
        }
      })
      .addCase(addNewProject.rejected, (state, action) => {
        console.log({ action });
        state.statusNewProject = DataStatus.FAILED;
        state.error = action.error as string;
        state.newProject = null;
      });
  },
});

export const { updateProjects, resetStatusNewProject } = projectsSlice.actions;

export default projectsSlice;
