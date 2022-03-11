import axios from 'axios';
import { AppThunk } from '@Redux/store';
import { createProjectAuthorAction } from '@Redux/Reducer/ProjectReducer/ProjectAction';
import { pageLoadingAction } from '@Redux/Reducer/LoadingReducer/LoadingAction';
import ProjectAPI from '@Services/ProjectService';
import { countdown } from '@Utils/TimeOut/countdown';
import { checkError } from '@Utils/Error/handleErrors';
import { FormValues } from '@Models/Global.types';

export const createProjectThunk = (project: FormValues): AppThunk => {
  return async (dispatchThunk) => {
    dispatchThunk(pageLoadingAction(true));
    const result = await ProjectAPI.createProject(project);

    if (axios.isAxiosError(result)) {
      await countdown(500);
      dispatchThunk(pageLoadingAction(false));
      return checkError(result);
    }

    if (!result) {
      await countdown(500);
      dispatchThunk(pageLoadingAction(false));
      throw new Error('Create project fail');
    }

    await countdown(500);
    dispatchThunk(pageLoadingAction(false));
    dispatchThunk(createProjectAuthorAction(result.data));
  };
};

export const createProjectAuthorThunk = (project: FormValues): AppThunk => {
  return async (dispatchThunk) => {
    dispatchThunk(pageLoadingAction(true));
    const result = await ProjectAPI.createProjectAuthorize(project);

    if (axios.isAxiosError(result)) {
      await countdown(500);
      dispatchThunk(pageLoadingAction(false));
      return checkError(result);
    }

    if (!result) {
      dispatchThunk(pageLoadingAction(false));
      await countdown(500);
      throw new Error('Create project fail');
    }

    await countdown(500);
    dispatchThunk(pageLoadingAction(false));
    dispatchThunk(createProjectAuthorAction(result.data));
  };
};
