import { AppThunk } from '@Redux/store';
import { fetchProjectsCategory } from '@Redux/Reducer/ProjectCategoryReducer/ProjectCategoryAction';
import { pageLoadingAction } from '@Redux/Reducer/LoadingReducer/LoadingAction';
import ProjectCategoryAPI from '@Services/ProjectCategoryService';
import axios from 'axios';
import { countdown } from '@Utils/TimeOut/countdown';
import { checkError } from '@Utils/Error/handleErrors';

export const fetchProjectsCategoryThunk = (): AppThunk => {
  return async (dispatchThunk) => {
    dispatchThunk(pageLoadingAction(true));
    const result = await ProjectCategoryAPI.getProjectCategory();

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
    dispatchThunk(fetchProjectsCategory(result.data));
  };
};
