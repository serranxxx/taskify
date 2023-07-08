import { Button, Col, Form, Input, Modal, Progress, Row } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { FaBackspace } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { appContext_ } from '../../context_/appContext_';

export const Projects = () => {


    const { setProjects, projects, theme, setFinishedSubtasks, setTotalSubtasks } = useContext(appContext_)
    const LocalProjects = JSON.parse(localStorage.getItem('projects'))
    // if (!LocalProjects) LocalProjects = []
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const [newProjectVisible, setNewProjectVisible] = useState(false)
    const [subTasks, setsubTasks] = useState([])
    const [subtasks_, setSubtasks_] = useState([])
    const [totalerTasks, setCounterTasks] = useState(0)

    const [readyInfo, setReadyInfo] = useState(false)
    const [readyTasks, setReadyTasks] = useState(false)

    const [info, setInfo] = useState({})
    const [tasks, setTasks] = useState([])

    const [data, setData] = useState(projects)

    const [selectedColor, setSelectedColor] = useState((Math.floor(Math.random() * 9) + 1));
    const [availableColor, setAvailableColor] = useState([...colors]);

    const [selectedImage, setSelectedImage] = useState((Math.floor(Math.random() * 12) + 1));
    const [availableImage, setAvailableImage] = useState([...images]);

    const [currentBackground, setCurrentBackground] = useState(8)
    const [currentImage, setCurrentImage] = useState(3)
    const [currentName, setcurrentName] = useState('')
    const [currentDescription, setcurrentDescription] = useState('')
    const [currentStatus, setCurrentStatus] = useState(false)
    const [currentKey, setCurrentKey] = useState('')
    const [currentLightColor, setCurrentLightColor] = useState('')
    const [currentTotal, setCurrentTotal] = useState(0)
    const [currentCompleted, setcurrentCompleted] = useState(0)

    const [currentProject, setCurrentProject] = useState(false)

    const [addSubTask, setAddSubTask] = useState({})
    const [addSubTask_, setAddSubTask_] = useState([])

    const [subtaskName, setSubtaskName] = useState(false)


    const colorSelector = (index) => {
        switch (index) {
            case 1:
                return '#3e92c4'
            case 2:
                return '#8ed4fd'
            case 3:
                return '#f0c145'
            case 4:
                return '#55a6d9'
            case 5:
                return '#204b98'
            case 6:
                return '#ed9cab'
            case 7:
                return '#d5ecfa'
            case 8:
                return '#89e8e0'
            case 9:
                return '#956888'
            case 10:
                return '#6edfc7'
            default:
                return '#f0c145';
        }
    }

    const customTasks = (percent) => (

        <span style={{ fontWeight: 500, color: '#f1faee' }}>
            {`${percent}%`}
        </span>
    )

    const handleOk = () => {
        setNewProjectVisible(false)
        setCurrentProject(false)
        setSubtaskName(false)
        setsubTasks([])

    }

    const handleCancel = () => {
        setNewProjectVisible(false)
        setCurrentProject(false)
        setSubtaskName(false)
        setsubTasks([])

    }

    const CreateNewProject = (values) => {
        setInfo(values)
        setReadyInfo(true)
    }

    const AgregateSubtasks = (values) => {

        console.log(values)
        SelectRandomColor()

        const newSubtask = Object.values(values).map((value) => ({
            name: value,
            color: Math.floor(Math.random() * 9) + 1,
            finished: false,
            key: generateUniqueKey(),
        }))

        setsubTasks([])
        setSubtasks_([...newSubtask])
        // // setTasks(subtasks_)
        setReadyTasks(true)
    }

    const AddSubTask = () => {
        setCounterTasks(totalerTasks + 1)
        setsubTasks([...subTasks, totalerTasks])
    }

    const handleForms = () => {
        form.submit()
        form2.submit()


    }

    const SelectRandomColor = () => {
        if (availableColor.length === 0) {
            // Todos los números han sido seleccionados, reiniciar la lista
            setAvailableColor([...colors]);
        }
        const randomIndex = Math.floor(Math.random() * availableColor.length);
        const randomValue = availableColor[randomIndex];
        // Actualizar los estados con el número seleccionado y la lista actualizada
        setSelectedColor(randomValue);
        setAvailableColor(prevNumbers => prevNumbers.filter(num => num !== randomValue));
    };

    const SelectRandomImage = () => {
        if (availableImage.length === 0) {
            // Todos los números han sido seleccionados, reiniciar la lista
            setAvailableImage([...images]);
        }
        const randomIndex = Math.floor(Math.random() * availableImage.length);
        const randomValue = availableImage[randomIndex];
        // Actualizar los estados con el número seleccionado y la lista actualizada
        setSelectedImage(randomValue);
        setAvailableImage(prevNumbers => prevNumbers.filter(num => num !== randomValue));
    };

    const generateUniqueKey = () => {
        const digits = '0123456789';
        let key = '';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            key += digits[randomIndex];
        }

        return key;
    };

    useEffect(() => {
        if (readyInfo && readyTasks) {

            SelectRandomColor()
            SelectRandomImage()

            const newData = {
                name: info.name,
                description: info.description,
                color: selectedColor,
                image: selectedImage,
                finished: false,
                key: generateUniqueKey(),
                total: subtasks_.length,
                completed: 0,
                subtasks: subtasks_
            }

            console.log(newData)

            setData([...data, newData])
            form.resetFields();
            form2.resetFields();
            setNewProjectVisible(false)
            setsubTasks([])

            setReadyInfo(false)
            setReadyTasks(false)


        }
    }, [readyInfo, readyTasks])

    useEffect(() => {
        const findProject = data.find(project => project.key === currentKey)

        if (findProject) {
            // console.log(findProject)
            const subtasks = (findProject.subtasks)
            // console.log(subtasks)
            setTasks([...subtasks])
        }
    }, [currentProject])

    useEffect(() => {
        setProjects(data)
        const Project = data.find(project => project.key === currentKey)
        console.log(Project)

    }, [data])


    const OnCurrentProject = (projectName, projectDescription, projectImage, background, projectStatus, projectKey, lightColor, total, completed) => {
        setCurrentProject(true)
        setcurrentName(projectName)
        setcurrentDescription(projectDescription)
        setCurrentImage(projectImage)
        setCurrentBackground(background)
        setCurrentStatus(projectStatus)
        setCurrentKey(projectKey)
        setCurrentLightColor(lightColor)
        setcurrentCompleted(completed)
        setCurrentTotal(total)
        setTasks([])

    }

    const FinishedSubtask = (_key) => {

        console.log(_key)
        const Project = data.find(project => project.key === currentKey)
        console.log(Project)
        const subtasks = (Project.subtasks.find(sub => sub.key === _key))
        console.log(subtasks)
        if (subtasks) {
            subtasks.finished = true
            Project.completed = Project.completed + 1
            setcurrentCompleted(Project.completed)
            // setSubTasksFinished_(subTasksFinished_ + 1)
        }
        setTasks([...Project.subtasks])
        setData([...data])


    }

    const DeleteSubTask = (_key) => {
        const Project = data.find(project => project.key === currentKey)
        const subtasks = (Project.subtasks.find(sub => sub.key === _key))
        if (subtasks) {
            Project.total = Project.total - 1
            setCurrentTotal(Project.total)
            if (subtasks.finished) {
                Project.completed = Project.completed - 1
                setcurrentCompleted(Project.completed)
            }
        }
        const subtask = Project.subtasks.filter(sub => sub.key !== _key);
        Project.subtasks = subtask
        setTasks([])
        setTasks([...Project.subtasks])
        setData([...data])

    }

    const AddSubTask_ = (values) => {

        if (values) {
            setAddSubTask({})

            const newSubtask = {
                name: values.name,
                color: Math.floor(Math.random() * 9) + 1,
                finished: false,
                key: generateUniqueKey(),
            }

            setAddSubTask(newSubtask)
            setSubtaskName(false)
        }


    }

    useEffect(() => {
        if (addSubTask) {

            console.log(addSubTask)

            const Project = data.find(project => project.key === currentKey)
            if (Project) {
                const subtask = Project.subtasks

                setAddSubTask_([])
                setAddSubTask_([...subtask, addSubTask])

            }
        }
    }, [addSubTask])

    useEffect(() => {
        if (addSubTask_) {
            console.log(addSubTask_)

            setData(prevTasks => {
                const updatedTasks = prevTasks.map(project => {
                    if (project.key === currentKey) {
                        return { ...project, subtasks: addSubTask_, total: addSubTask_.length };
                    }
                    return project;
                });
                return updatedTasks;
            });

            setTasks([])
            setTasks([...addSubTask_])
            form3.resetFields();

            // setData([...data])
        }

    }, [addSubTask_])


    const CompleteProject = (key) => {

        setData(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.key === key) {
                    setcurrentDescription('Project finished')
                    setCurrentBackground('#6edfc7')
                    setCurrentStatus(true)
                    // setTasksFinished(tasksFinished + 1)
                    return { ...task, finished: true, color: 10, description: 'Project finished', completed: 1, total: 1 };
                }
                return task;
            });
            return updatedTasks;
        });


        // setCurrentTask(false)

    };

    const DeleteProject = (key) => {

        // const taskToDelete = data.find(task => task.key === key);
        const updatedTasks = data.filter(task => task.key !== key);
        setData(updatedTasks)
        setCurrentProject(false)
        // setCurrentTask(false)

        // if (taskToDelete.finished) {
        //     setTasksFinished(tasksFinished - 1)
        // }

    };

    useEffect(() => {
        // const LocalProjects = JSON.parse(localStorage.getItem('projects'))
        let total = 0;

        for (let i = 0; i < data.length; i++) {
          const obj = data[i];
          if (obj.hasOwnProperty('subtasks')) {
            total += obj.subtasks.length;
          }
        }

        setTotalSubtasks(total)
        let completed = 0;

        for (let i = 0; i < data.length; i++) {
          const obj = data[i];
          if (obj.hasOwnProperty('subtasks')) {
            const subtasks = obj.subtasks;
            for (let j = 0; j < subtasks.length; j++) {
              if (subtasks[j].finished === true) {
                completed++;
              }
            }
          }
        }
        setFinishedSubtasks(completed)
        console.log(total)
        console.log(completed)
    
    }, [data])

    const CurrentCompleted = () => {
        const Project = data.find(project => project.key === currentKey)
        if (Project) {
            const completed = Project.completed
            return completed
        }

    }

    const CurrentTotal = () => {
        const Project = data.find(project => project.key === currentKey)
        if (Project) {
            const total = Project.total
            return total
        }

    }


    return (
        <>
            <div
                style={{
                    width: '95%', height: '7vh', borderRadius: '2vh', backgroundColor: `${theme? '#a8dadc': '#27282c'}`,
                    display: 'flex', alignItems: 'center', marginTop: '3vh', flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <p
                    style={{
                        marginLeft: '2vh', fontFamily: 'Berlin Sans FB', color: `${theme? '#1d3557': '#a8dadc'}`,
                        fontWeight: 400, fontSize: '1.5em', cursor: 'default'
                    }}>
                    My projects</p>
                <Button
                    onClick={() => setNewProjectVisible(true)}
                    style={{
                        height: '4vh', aspectRatio: '6/1', borderRadius: '1vh',
                        marginRight: '2vh', lineHeight: '0em',  backgroundColor: `${theme? '#f7fcf5': '#8cb8ba'}`,
                        marginLeft: '2vh', fontFamily: 'Berlin Sans FB', color: `${theme? '#1d3557': '#333437'}`,
                        fontWeight: 400, fontSize: '1.2em', border:'0px solid #000'
                    }}>
                    + Create new project
                </Button>
            </div>

            <div
                className={`${theme? 'scrollable-div': 'scrollable-div-dark'}`}
                style={{
                    width: '95%', marginTop: '1vh', display: 'flex', alignItems: 'left', justifyContent: 'flex-start',
                    flexDirection: 'row', flexWrap: 'wrap', marginBottom: '2vh'
                }}>
                    

                <ProjectCard data={projects} OnCurrentProject={OnCurrentProject} />


            </div>

            <Modal
                visible={newProjectVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className={`${theme? 'task-content': 'task-content-dark'}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}
            >
                <div
                    style={{
                        height: '45vh', width: '70vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column'
                    }}>

                    <div
                        style={{
                            height: '30%', width: '100%', backgroundColor: '#a8dadb',
                            borderRadius: '1vh', display: 'flex', flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'center'

                        }}>
                        <div className={`image-${11}`}
                            style={{
                                height: '100%', aspectRatio: '3/2',
                            }} />

                        <div className={`image-${12}`}
                            style={{
                                height: '100%', aspectRatio: '3/2',
                            }} />

                        <div className={`image-${4}`}
                            style={{
                                height: '100%', aspectRatio: '3/2',
                            }} />


                    </div>




                    <Row style={{
                        width: '100%', display: 'flex', flexDirection: 'row', marginTop:'-1vh',
                        alignItems: 'center', justifyContent: 'center', height: '65%'
                    }}>

                        <Form
                            // form={form1}
                            name="myForm_3"
                            form={form}
                            onFinish={CreateNewProject}
                            style={{ width: '50%', height: '100%', }}>

                            <Col style={{
                                width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'column', marginTop: '1vh',
                            }}>
                                <Form.Item
                                    name="name"
                                    style={{ marginTop: '0vh' }}

                                >
                                    <Input placeholder="Type project name"
                                        style={{
                                            width: '33vh', backgroundColor: `${theme? '#f7fcf5': '#333437'}`, fontWeight: 500,
                                            fontWeight: '1em', color:`${theme? '': '#e3e3e3'}`, border: `${theme?'':'0px solid #000'}`
                                        }} />

                                </Form.Item>

                                <Form.Item
                                    name="description"
                                    style={{ marginTop: '-2vh', marginBottom: '1vh' }}
                                >
                                    <Input.TextArea
                                        placeholder="Type task description"
                                        style={{
                                            width: '33vh', resize: 'none', backgroundColor: `${theme? '#f7fcf5': '#333437'}`,
                                            overflow: 'auto', overflowY: 'auto', overflowX: 'hidden',
                                            color:`${theme? '': '#e3e3e3'}`, border: `${theme?'':'0px solid #000'}`
                                        }}
                                        autoSize={{ minRows: 6, maxRows: 10 }}  // Ajusta automáticamente la altura según el contenido
                                        wrap="soft"  // Permite el wrap automático del texto
                                    />

                                </Form.Item>
                            </Col>

                        </Form>

                        <Form
                            // form={form1}
                            name="myForm_3"
                            form={form2}
                            onFinish={AgregateSubtasks}
                            style={{ width: '50%', height: '100%', }}>

                            <Col style={{
                                width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <Button type='primary' className='add-task-button-2'
                                    onClick={AddSubTask}
                                    style={{
                                        borderRadius: '0.5vh', backgroundColor: `${theme? '#f7fcf5': '#333437'}`, fontWeight: 500,
                                        width: '33vh', border: '1px solid #a8dadb', color: '#a8dadb',
                                        marginTop: '-1vh'
                                    }}>+ Add sub-task</Button>

                                <div className='scrollable-div'
                                    style={{
                                        width: '95%', height: '18vh', display: 'flex', marginTop: '1vh',
                                        flexDirection: 'column',
                                    }}>

                                    {
                                        subTasks.map((task) => (
                                            <Row style={{
                                                display: 'flex', alignItems: 'flex-start', justifyContent: 'left',
                                                marginTop: '0.5vh',
                                            }}>
                                                <Form.Item
                                                    key={task}
                                                    name={`${task}`}
                                                    style={{
                                                        width: '80%', marginBottom: '0vh', marginTop: '0vh',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}

                                                >
                                                    <Input placeholder="Type sub-task name"

                                                        style={{
                                                            width: '32vh', backgroundColor: `${theme? '#f7fcf5': '#333437'}`, fontWeight: 400,
                                                            fontSize: '1em', height: '4vh', marginLeft: '0vh',
                                                            color:`${theme? '': '#e3e3e3'}`, border: `${theme?'':'0px solid #000'}`
                                                        }} />
                                                </Form.Item>

                                            </Row>


                                        ))
                                    }

                                </div>

                            </Col>

                        </Form>
                    </Row>


                    <Button type='primary' className='add-task-button-2'
                        onClick={handleForms}
                        style={{
                            borderRadius: '1vh', backgroundColor: `${theme? '#f7fcf5': '#333437'}`, fontWeight: 500,
                            width: '68vh', border: '1.8px solid #a8dadb', color: '#a8dadb',
                            marginBottom: '-1vh'

                        }}>+ Create new project</Button>


                </div>

            </Modal >

            <Modal visible={subtaskName}
                onOk={handleOk}
                onCancel={handleCancel}
                className={`${theme? 'task-content': 'task-content-dark'}`}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
                    marginTop: '15vh'
                }}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}>
                <div
                    style={{
                        height: '10vh', width: '60vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
                    }}>
                    <Form
                        // form={form1}
                        name="myForm_1"
                        form={form3}
                        onFinish={AddSubTask_}
                    >

                        <div className="" style={{
                            height: '100%', width: '100%', marginTop: '2vh',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'row'
                        }}>

                            <Form.Item
                                name="name"
                                style={{}}
                                rules={[{
                                    required: true, message: 'Your task must have a name'
                                }]}
                            >
                                <Input placeholder="Type sub-task name"
                                    style={{
                                        width: '48.5vh', backgroundColor: `${theme? '#f7fcf5': '#333437'}`, fontWeight: 500,
                                        fontWeight: '1em', color:`${theme? '': '#e3e3e3'}`, border: `${theme?'':'0px solid #000'}`
                                    }} />

                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type='primary' htmlType="submit"
                                    style={{
                                        backgroundColor: `${currentBackground}`, fontWeight: 500, color: `${theme? '#f7fcf4':'#333437'}`,
                                        marginLeft: '1vh'
                                    }}>Add</Button>
                            </Form.Item>


                        </div>
                    </Form>
                </div>
            </Modal>

            <Modal
                visible={currentProject}
                onOk={handleOk}
                onCancel={handleCancel}
                // className='task-content'
                className={`${theme? 'task-content': 'task-content-dark'}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}
            >
                <div
                    style={{
                        height: '60vh', width: '70vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column'
                    }}>

                    <Row style={{
                        height: '40%', width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row',
                    }}>
                        <div className={`image-${currentImage}`}
                            style={{
                                height: '80%', width: '30%',
                                backgroundColor: `${currentBackground}`,

                                borderRadius: '1vh', display: 'flex', flexDirection: 'row',
                                alignItems: 'flex-end', justifyContent: 'center',
                                // border:'2px solid #a8dadb'

                            }} >
                            <div style={{
                                display: 'flex', alignItems: 'center', height: '20%', width: '100%',
                                justifyContent: 'center', flexDirection: 'column',
                            }}>

                                <Progress
                                    style={{ width: '90%', }}
                                    percent={parseInt(CurrentCompleted() * 100 / CurrentTotal())}
                                    format={customTasks}
                                    strokeColor={'#f1faee'}
                                    strokeWidth={6}
                                    trailColor={`${currentStatus ? '#91e5d1' : currentLightColor}`}
                                />

                            </div>
                        </div>
                        <div style={{
                            width: '65%', display: 'flex', alignItems: 'flex-start', height: '15vh',
                            justifyContent: 'flex-start', flexDirection: 'column', marginLeft: '2vh'
                        }}>
                            <div style={{
                                width: '90%', height: '40%',
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
                            }}>
                                <p
                                    style={{
                                        fontFamily: 'Berlin Sans FB',
                                        color: `${currentBackground}`,

                                        // color:'#a8dadb',
                                        fontSize: '2em',
                                        lineHeight: '0.9em',
                                        textAlign: 'left',
                                    }}>{currentName}</p>
                            </div>

                            <div style={{
                                width: '90%', height: '10%',
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
                            }}>
                                <hr style={{
                                    border: `1.8px solid ${currentBackground}`,
                                    // border: `1.8px solid #a8dadb`, 
                                    width: '100%',
                                }} />

                            </div>

                            <div style={{
                                width: '80%', height: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
                            }}>
                                <p style={{
                                    wordWrap: 'break-word',
                                    color: '#AAA', lineHeight: '1.1em',
                                }}
                                >{currentDescription}</p>
                            </div>

                        </div>
                    </Row>

                    <div style={{
                        width: '100%', height: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <div
                            style={{
                                width: '95%', height: '5vh', borderRadius: '1vh',
                                backgroundColor: `${currentBackground}80`,
                                // boxShadow:'0px 10px 20px #00000020',
                                // backgroundColor:'#a8dadb',
                                display: 'flex', alignItems: 'center', marginTop: '0vh', flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                            <p
                                style={{
                                    marginLeft: '2vh', fontFamily: 'Berlin Sans FB', color: `${theme? '#1d3557': '#e3e3e3'}`,
                                    fontWeight: 400, fontSize: '1.2em',
                                }}>
                                Sub-tasks</p>
                            <Button
                                onClick={() => setSubtaskName(true)}
                                style={{
                                    height: '3vh', aspectRatio: '6/1', borderRadius: '1vh',
                                    marginRight: '2vh', lineHeight: '0em', backgroundColor: `${theme? '#f7fcf5': `${currentBackground}`}`,
                                    marginLeft: '2vh', fontFamily: 'Berlin Sans FB', color: '#1d3557',
                                    fontWeight: 400, fontSize: '1em', border: '0px solid #000'
                                }}>
                                + Add sub-task
                            </Button>
                        </div>

                        <div
                            className='scrollable-div-2'
                            style={{
                                width: '95%', height: '40vh',
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                flexDirection: 'column', marginTop: '2vh'
                            }}>
                            {
                                tasks.map((elemento) => (
                                    <div style={{
                                        width: '98%', height: '6vh', borderRadius: '1vh', marginBottom: '1.5vh',
                                        backgroundColor: '#f7fcf5',
                                        backgroundColor: `${elemento.finished ? '#6edfc730' : `${currentBackground}30`}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                                        // border:`1.2px solid #dcdddc`
                                    }}>
                                        <div style={{
                                            height: '4vh', aspectRatio: '1/1', marginLeft: '1vh',
                                            backgroundColor: `${elemento.finished ? '#6edfc7' : colorSelector(elemento.color)}`,

                                            borderRadius: '1vh', marginRight: '1vh',
                                        }} />
                                        <p style={{
                                            fontWeight: 500, color: `${theme?'#1d3557':'#e3e3e3'}`, marginLeft: '1vh',
                                            width: '65%', height: '4vh', lineHeight: '2em', textDecoration: `${elemento.finished ? 'line-through' : ''}`
                                        }} key={elemento.key}>
                                            {elemento.name}
                                        </p>
                                        {
                                            currentStatus
                                                ? <></>
                                                :
                                                <>
                                                    <Button
                                                        // disabled={`${elemento.finished? true: false}`}
                                                        onClick={() => FinishedSubtask(elemento.key)}
                                                        style={{
                                                            width: '10vh', marginLeft: '1vh', border: '0px solid #000', color: `${elemento.finished ? 'transparent' : theme? '#f7fcf5': '#333437'}`,
                                                            backgroundColor: `${elemento.finished ? 'transparent' : currentBackground}`,
                                                            lineHeight: '0em', fontWeight: 500, cursor: `${elemento.finished ? 'auto' : 'pointer'}`
                                                        }}>Finish</Button>
                                                    <Button
                                                        onClick={() => DeleteSubTask(elemento.key)}
                                                        style={{
                                                            width: '4vh', marginLeft: '1vh', marginRight: '1vh',
                                                            backgroundColor: `${elemento.finished ? '#6edfc7' : currentBackground}`, border: '0px solid #000',
                                                        }}><FaTrashAlt style={{ color: `${theme? '#f7fcf5': '#333437'}`, marginLeft: '-1vh' }} /></Button>
                                                </>
                                        }

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                    <Row style={{
                        height: '15%', width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <Button
                            onClick={() => DeleteProject(currentKey)}
                            // disabled={edit}
                            className='element'
                            style={{
                                backgroundColor: `${theme? '#f7fcf5': '#333437'}`, border: `1px solid ${currentBackground}`,
                                color: `${currentBackground}`, fontWeight: 500, transition: 'all 0.25s ease-in-out',
                                // display: `${edit ? 'none' : ''}`
                            }}
                        >Delete project</Button>
                        <Button
                            // disabled={edit}
                            onClick={() => CompleteProject(currentKey)}
                            className='element'
                            type='primary'
                            style={{
                                marginLeft: '2vh', fontWeight: 500, backgroundColor: `${currentBackground}`,
                                transition: 'all 0.25s ease-in-out', color:`${theme?'':'#333437'}`,
                                display: `${currentStatus ? 'none' : ''}`
                            }}>Finish project</Button>
                    </Row>


                </div>
            </Modal >


        </>
    )
}
