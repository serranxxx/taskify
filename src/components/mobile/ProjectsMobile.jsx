import { Button, Col, Drawer, Form, Input, Modal, Progress, Row } from 'antd'
import React, { useContext, useEffect, useState } from 'react'

import { FaRegTrashAlt, FaTrashAlt } from "react-icons/fa";
import { appContext_ } from '../../context_/appContext_';
import { AiOutlinePlus } from 'react-icons/ai';
import { SelectImage, images_ } from '../../helpers/images';
import { BsCheckLg } from "react-icons/bs";
import { ProjectCardMobile } from './ProjectCardMobile';

export const ProjectsMobile = (props) => {

    const { setOnWrite, onWrite } = props


    const { setProjects, projects, theme, setFinishedSubtasks, setTotalSubtasks } = useContext(appContext_)
    const LocalProjects = JSON.parse(localStorage.getItem('projects'))
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
        setOnWrite(false)
        setCurrentProject(false)
        setSubtaskName(false)
        setsubTasks([])

    }

    const handleCancel = () => {
        setOnWrite(false)
        setCurrentProject(false)
        setSubtaskName(false)
        setsubTasks([])

    }

    const CreateNewProject = (values) => {
        setInfo(values)
        setReadyInfo(true)
        setOnWrite(false)
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
            <ProjectCardMobile data={projects} OnCurrentProject={OnCurrentProject} />

            

            <Drawer
                title={<p style={{ color: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 700, }}>Create new project</p>}
                placement="right"
                onClose={handleCancel}
                width='100%'
                open={onWrite}
                style={{
                    backgroundColor: `${theme ? '#E5EFE1' : '#333437'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>

                <div style={{
                    width: '100%', display: 'flex', flexDirection: 'column', marginTop: '-1vh',
                    alignItems: 'center', justifyContent: 'center', height: 'auto',
                }}>
                    <Row style={{
                        width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>

                        <div style={{
                            width: '30%'
                        }}>
                            <img src={images_.img_2} style={{ height: '100%', marginRight: '0' }} />
                        </div>


                        <Form
                            // form={form1}
                            name="myForm_3"
                            form={form}
                            onFinish={CreateNewProject}
                            style={{
                                width: '65%', height: '100%',
                                margin: '1vh 0 0 0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'column'
                            }}>


                            <Form.Item
                                name="name"
                                style={{ margin: 0, width: '100%', }}

                            >
                                <Input placeholder="Project name"
                                    className='project-inputs'
                                    style={{
                                        width: '100%',
                                        backgroundColor: `${theme ? '#f7fcf550' : '#27282c20'}`, fontWeight: 500,
                                        fontWeight: '1em', color: `${theme ? '' : '#e3e3e3'}`, border: '0px solid #000'
                                    }} />

                            </Form.Item>

                            <Form.Item
                                name="description"
                                style={{ margin: '1vh 0 0 0', width: '100%' }}
                            >
                                <Input.TextArea
                                    placeholder="Description"
                                    className='project-inputs'
                                    style={{
                                        resize: 'none', backgroundColor: `${theme ? '#f7fcf550' : '#27282c20'}`,
                                        overflow: 'auto', overflowY: 'auto', overflowX: 'hidden',
                                        color: `${theme ? '' : '#e3e3e3'}`, border: '0px solid #000',
                                        width: '100%'
                                    }}
                                    autoSize={{ minRows: 7, maxRows: 8 }}  // Ajusta automáticamente la altura según el contenido
                                    wrap="soft"  // Permite el wrap automático del texto
                                />

                            </Form.Item>


                        </Form>

                    </Row>




                    <Form
                        // form={form1}
                        name="myForm_3"
                        form={form2}
                        onFinish={AgregateSubtasks}
                        className='project-form'
                        style={{
                            width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column'
                        }}>

                        <Row style={{
                            width: '100%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', flexDirection: 'row',
                            marginTop:'3vh'
                        }}>

                            <Button
                                onClick={handleForms}
                                style={{
                                    backgroundColor: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 500,
                                    border: '0px solid #a8dadb', color: `${theme ? '#E5EFE1' : '#333437'}`,
                                    // width: '15vh',
                                    borderRadius: '3vh 0 0 3vh',
                                    // marginTop: '5vh'
                                }}>Save project</Button>

                            <Button
                                onClick={AddSubTask}
                                style={{
                                    borderRadius: '0 3vh 3vh 0', backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`, fontWeight: 500,
                                    border: theme ? '0px solid #000' : '0px solid #27282C', color: `${theme ? '#457b9d' : '#f1faee80'}`,
                                    // margin: '1vh 0 1vh 0'

                                }}>Add sub-tasks</Button>
                        </Row>




                        <div
                            // className='scrollable-div'
                            style={{
                                width: '100%', height: 'auto', display: 'flex', marginTop: '1vh',
                                flexDirection: 'column',
                            }}>

                            {
                                subTasks.map((task) => (
                                    <Row style={{
                                        display: 'flex', alignItems: 'flex-start', justifyContent: 'left',
                                        marginTop: '0.5vh', marginRight: '0vh', width: '100%',
                                    }}>
                                        <Form.Item
                                            key={task}
                                            name={`${task}`}
                                            style={{
                                                width: '100%', marginBottom: '0vh', marginTop: '1vh',
                                            }}

                                        >
                                            <Input placeholder="Type sub-task name"
                                                className='project-inputs_'
                                                style={{
                                                    backgroundColor: `${theme ? '#f7fcf550' : '#27282c20'}`, fontWeight: 400,
                                                    fontSize: '1em', height: 'auto', marginLeft: '0vh', width: '100%',
                                                    borderRadius: '3vh',
                                                    color: `${theme ? '' : '#e3e3e3'}`, border: '0px solid #000'
                                                }} />
                                        </Form.Item>

                                    </Row>


                                ))
                            }

                        </div>


                    </Form>
                </div>

            </Drawer>

            <Modal visible={subtaskName}
                onOk={() => setSubtaskName(false)}
                onCancel={() => setSubtaskName(false)}
                className={`${theme ? 'task-content' : 'task-content-dark'}`}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
                    marginTop: '15vh'
                }}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}>
                <div
                    style={{
                        height: '10vh', width: '40vh',
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
                                        width: '30vh', backgroundColor: `${theme ? '#f7fcf5' : '#333437'}`, fontWeight: 500,
                                        fontWeight: '1em', color: `${theme ? '' : '#e3e3e3'}`, border: `${theme ? '' : '0px solid #000'}`
                                    }} />

                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type='primary' htmlType="submit"
                                    style={{
                                        backgroundColor: `${currentBackground}`, fontWeight: 500, color: `${theme ? '#f7fcf4' : '#333437'}`,
                                        marginLeft: '1vh'
                                    }}>Add</Button>
                            </Form.Item>


                        </div>
                    </Form>
                </div>
            </Modal>

            <Drawer
                title={<p style={{ color: !theme ? '#27282C' : '#F1FAEE', }}>{currentName}</p>}
                placement="right"
                onClose={handleCancel}
                width='100%'
                open={currentProject}
                extra={
                    <Row style={{
                        marginTop: '2vh', marginBottom: '0vh', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                    }}>
                        <Button
                            onClick={() => CompleteProject(currentKey)}
                            className='element'
                            type='primary'
                            style={{
                                fontWeight: 700,
                                backgroundColor: !theme ? '#27282C' : '#F1FAEE',
                                // backgroundColor: currentBackground,
                                color: currentBackground, borderRadius: '2vh',
                                transition: 'all 0.25s ease-in-out', display: `${currentStatus ? 'none' : ''}`
                            }}>Finish</Button>
                        <Button
                            onClick={() => DeleteProject(currentKey)}
                            className='element'
                            style={{
                                fontWeight: 700,
                                backgroundColor: !theme ? '#27282C' : '#F1FAEE',
                                //  backgroundColor: currentBackground, 
                                borderRadius: '2vh',
                                color: currentBackground, transition: 'all 0.25s ease-in-out',
                                display: `${!currentStatus ? 'none' : ''}`
                            }}
                        >Delete</Button>

                    </Row>
                }
                style={{
                    backgroundColor: currentBackground,
                }}>


                <div
                    className='scrollable-div-'
                    style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'column'
                    }}>




                    <p style={{
                        width: '95%', height: 'auto', wordWrap: 'break-word', marginTop: '0vh',
                        color: !theme ? '#27282C' : '#F1FAEE', textAlign: 'justify',
                        // marginTop: '3vh',
                        fontSize: '1.1em'
                    }}
                    >{currentDescription}</p>



                    <div style={{
                        width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column',
                        // marginTop: '2vh'
                    }}>
                        <div
                            // className='add-sub-task'
                            style={{
                                width: '100%', borderRadius: '3vh',
                                backgroundColor: !theme ? '#27282C30' : '#F1FAEE30',
                                height: '5vh',
                                display: 'flex', alignItems: 'center', flexDirection: 'row',
                                justifyContent: 'flex-start', position: 'relative'
                            }}>
                            <p
                                // className='block-shadow'
                                style={{
                                    height: 'auto', wordWrap: 'break-word', margin: '0 0 0 10px',
                                    fontSize: '1em', fontWeight: 700, color: !theme ? '#27282C' : '#F1FAEE',
                                }}>
                                My sub-tasks</p>

                            <Button
                                // className='add-something'
                                onClick={() => setSubtaskName(true)}
                                icon={<AiOutlinePlus size={18} style={{ color: !theme ? '#27282C' : '#F1FAEE', }} />}
                                style={{
                                    backgroundColor: currentBackground,
                                    border: '0px solid #000', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    position: 'absolute', right: '3px'
                                }} />

                        </div>

                        <div
                            // className='scrollable-div-2'
                            style={{
                                width: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                flexDirection: 'column', marginTop: '2vh'
                            }}>
                            {
                                tasks.map((elemento) => (
                                    <div style={{
                                        width: '100%', height: 'auto', borderRadius: '3vh', marginBottom: '1.5vh',
                                        backgroundColor: !theme ? '#27282C30' : '#F1FAEE30',
                                        height: '5vh',
                                        // backgroundColor: `${!elemento.finished ? `${currentBackground}60` : `#E5EFE130`}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',

                                    }}>

                                        <p
                                            // className='add-something'
                                            style={{
                                                fontWeight: 500,
                                                fontSize: '1em', color: !theme ? '#27282C' : '#F1FAEE',
                                                textDecoration: `${elemento.finished ? 'line-through' : ''}`,
                                                margin: '0 0 0 10px'
                                            }} key={elemento.key}>
                                            {elemento.name}
                                        </p>
                                        {
                                            currentStatus
                                                ? <></>
                                                :
                                                <>
                                                    <Row style={{
                                                        position: 'absolute', right: '28px'
                                                    }}>
                                                        <Button
                                                            icon={<BsCheckLg style={{ color: !theme ? '#27282C' : '#F1FAEE', }} />}
                                                            onClick={() => FinishedSubtask(elemento.key)}
                                                            style={{
                                                                border: '0px solid #000',
                                                                backgroundColor: currentBackground,
                                                                cursor: `${elemento.finished ? 'auto' : 'pointer'}`,
                                                                borderRadius: '50%', marginRight: '3px',
                                                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                            }} />
                                                        <Button
                                                            onClick={() => DeleteSubTask(elemento.key)}

                                                            icon={<FaRegTrashAlt size={13} style={{ color: !theme ? '#27282C' : '#F1FAEE', }} />}
                                                            style={{
                                                                backgroundColor: currentBackground, border: '0px solid #000',
                                                                borderRadius: '50%',
                                                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                            }} />
                                                    </Row>

                                                </>
                                        }

                                    </div>

                                ))
                            }

                        </div>

                    </div>





                </div>




            </Drawer>


        </>
    )
}
