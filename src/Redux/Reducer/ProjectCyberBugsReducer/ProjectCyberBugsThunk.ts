import axios from 'axios';
import ProjectAPI from '@Services/ProjectService';
import { pageLoadingAction } from '@Redux/Reducer/LoadingReducer/LoadingAction';
import { fetchProjects } from '@Redux/Reducer/ProjectCyberBugsReducer/ProjectCyberBugsAction';
import { countdown } from '@Utils/TimeOut/countdown';
import { AppThunk } from '@Redux/store';
import { checkError } from '@Utils/Error/handleErrors';

export const fetchListProjects = (): AppThunk => {
  return async (dispatchThunk) => {
    dispatchThunk(pageLoadingAction(true));
    const result = await ProjectAPI.getAllProject();

    if (axios.isAxiosError(result)) {
      await countdown(500);
      dispatchThunk(pageLoadingAction(false));
      return checkError(result);
    }

    if (!result) {
      await countdown(500);
      dispatchThunk(pageLoadingAction(false));
      throw new Error('Fetch project category fail');
    }

    await countdown(500);
    dispatchThunk(pageLoadingAction(false));
    dispatchThunk(fetchProjects(result.data));
  };
};
