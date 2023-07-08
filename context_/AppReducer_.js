import { types } from "./types_";

export const AppReducer_ = (state = {}, action) => {

    switch (action.type) {
        case types.setAvatar:
            return {
                ...state,
                avatars: action.payload
            }

        case types.selectAvatar:
            return {
                ...state,
                avatar: action.payload
            }

        case types.setTasks:
            return {
                ...state,
                tasks: action.payload
            }

        case types.taskFinished:
            return {
                ...state,
                taskFinished: action.payload
            }

        case types.taskTotal:
            return {
                ...state,
                taskTotal: action.payload
            }

        case types.setProject:
            return {
                ...state,
                projects: action.payload
            }

        case types.subTasksFinished:
            return {
                ...state,
                subtasksFinished: action.payload
            }

        case types.totalSubtasks:
            return {
                ...state,
                subtasksTotal: action.payload
            }

        case types.toggleTheme:
            return {
                ...state,
                theme: action.payload
            }

        default:
            break;
    }
}
