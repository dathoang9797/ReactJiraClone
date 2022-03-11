import { ReducerProjectCyberBugsInitialState } from '@Models/ProjectsCyberBugs.types';
import { ActionsProject } from './ProjectCyberBugsAction';
import { FETCH_PROJECTS } from '@Redux/Reducer/ProjectCyberBugsReducer/ProjectCyberBugsConstant';

const initialState = { projectList: [] } as ReducerProjectCyberBugsInitialState;

const ProjectCyberBugsReducer = (state = initialState, action: ActionsProject) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      return { ...state, projectList: [...action.payload.content] };
    }

    default: {
      return state;
    }
  }
};

export default ProjectCyberBugsReducer;
