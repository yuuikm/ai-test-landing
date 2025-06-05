import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UploadState = {
  files: (File | null)[];
  taskId: string | null;
};

const initialState: UploadState = {
  files: [],
  taskId: localStorage.getItem('task_id') || null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setFile(state, action: PayloadAction<{ index: number; file: File }>) {
      state.files[action.payload.index] = action.payload.file;
    },
    setTaskId(state, action: PayloadAction<string>) {
      state.taskId = action.payload;
    },
  },
});

export const { setFile, setTaskId } = uploadSlice.actions;
export default uploadSlice.reducer;
