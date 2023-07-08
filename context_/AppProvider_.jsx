import { useReducer, useState } from "react";
import { appContext_ } from "./appContext_";
import { types } from "./types_";
import { AppReducer_ } from "./AppReducer_";



const init = () => {


    let avatar

    // try {
    //      avatar = JSON.parse(localStorage.getItem('avatars'))
    // } catch {
    //      avatar = Math.floor(Math.random() * 9) + 1
    // }
    // if (LocalAvatar) {
    //     setAvatar_([LocalAvatar])
    // } else setAvatar_([Math.floor(Math.random() * 9) + 1])


    // let selectedAvatar = JSON.parse(localStorage.getItem('avatar'))


    let Tasks = JSON.parse(localStorage.getItem('tasks'))
    if (!Tasks) {
        Tasks = [{
            name: 'Prepare Presentation',
            description: 'Create a visually engaging presentation for the upcoming conference.',
            color: 3,
            image: 3,
            finished: false,
            key: '4321'
        }]
    }

    let Projects = JSON.parse(localStorage.getItem('projects'))
    if (!Projects) {
        Projects = [{
            name: 'Customer Feedback Analysis',
            description: 'Analyze customer feedback data to identify patterns and trends.',
            color: 6,
            image: 6,
            finished: false,
            key: '1234',
            total: 1,
            completed: 0,
            subtasks: [
                {
                    name: 'Collect Customer Surveys',
                    color: 5,
                    finished: false,
                    key: "1111"
                },
                {
                    name: 'Analyze Survey Responses',
                    color: 3,
                    finished: false,
                    key: "2222"
                },
                {
                    name: 'Conduct Sentiment Analysis',
                    color: 8,
                    finished: false,
                    key: "3333"
                },
            ]
        }]
    }

    let finished = JSON.parse(localStorage.getItem('taskFinished'))
    if (finished) {
        if (finished <= 0) finished = 0
    } else finished = 0

    let Theme = JSON.parse(localStorage.getItem('theme'))




    return {
        avatars: avatar,
        // avatar: selectedAvatar,
        tasks: Tasks,
        taskFinished: finished,
        projects: Projects,
        theme: Theme
    }
}

export const AppProvider_ = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer_, {}, init)


    const setAvatar = (avatar) => {
        const avatars = avatar
        const action = {
            type: types.setAvatar,
            payload: avatars
        }
        localStorage.setItem('avatars', JSON.stringify(avatars))

        dispatch(action)
    }

    const selectAvavatar = (avatar) => {
        const avatars = avatar
        const action = {
            type: types.selectAvatar,
            payload: avatars
        }
        localStorage.setItem('avatar', JSON.stringify(avatars))

        dispatch(action)
    }

    const setTasks = (tasks = []) => {
        const Tasks = tasks
        const action = {
            type: types.setTasks,
            payload: Tasks
        }
        localStorage.setItem('tasks', JSON.stringify(Tasks))

        dispatch(action)
    }

    const setFinishedTask = (finished = 0) => {
        const taskFinished = finished
        const action = {
            type: types.taskFinished,
            payload: taskFinished
        }
        localStorage.setItem('taskFinished', JSON.stringify(taskFinished))
        dispatch(action)
    }

    const setTotalTask = (total = 0) => {
        const tasktotal = total
        const action = {
            type: types.taskTotal,
            payload: tasktotal
        }
        localStorage.setItem('taskTotal', JSON.stringify(tasktotal))
        dispatch(action)
    }

    const setProjects = (projects) => {
        const Projects = projects
        const action = {
            type: types.setProject,
            payload: Projects
        }
        localStorage.setItem('projects', JSON.stringify(Projects))

        dispatch(action)
    }

    const setFinishedSubtasks = (subtasks = 0) => {
        const Subtasks = subtasks
        const action = {
            type: types.subTasksFinished,
            payload: Subtasks
        }
        localStorage.setItem('subtasksFinished', JSON.stringify(Subtasks))

        dispatch(action)
    }

    const setTotalSubtasks = (subtasks = 0) => {
        const Subtasks = subtasks
        const action = {
            type: types.totalSubtasks,
            payload: Subtasks
        }
        localStorage.setItem('subtasksTotal', JSON.stringify(Subtasks))

        dispatch(action)
    }

    const toggleTheme = (theme = true) => {
        const Theme = theme
        const action = {
            type: types.toggleTheme,
            payload: Theme
        }
        localStorage.setItem('theme', JSON.stringify(Theme))

        dispatch(action)
    }


    return (
        <appContext_.Provider value={{
            ...state,
            setAvatar,
            selectAvavatar,
            setTasks,
            setFinishedTask,
            setTotalTask,
            setProjects,
            setFinishedSubtasks,
            setTotalSubtasks,
            toggleTheme,
        }}>
            {children}
        </appContext_.Provider>
    )
}
