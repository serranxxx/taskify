import React, { useContext, useEffect, useState } from 'react'
import { TaskCard } from './TaskCard'
import { Button, Form, Input, Modal, Row } from 'antd'
import { appContext_ } from '../../context_/appContext_'
import { AiTwotoneEdit, AiFillSave } from "react-icons/ai";

export const Tasks = () => {


    const { setTasks, tasks, taskFinished, setFinishedTask, setTotalTask, theme } = useContext(appContext_)
    const [form] = Form.useForm();
    const [form_2,] = Form.useForm();

    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


    const [visible, setVisible] = useState(false)
    const [currentBackground, setCurrentBackground] = useState(8)
    const [currentImage, setCurrentImage] = useState(3)
    const [currentTitle, setcurrentTitle] = useState('')
    const [currentDescription, setcurrentDescription] = useState('')
    const [currentStatus, setCurrentStatus] = useState(false)
    const [currentKey, setCurrentKey] = useState('')
    const [currentTask, setCurrentTask] = useState(false)

    const [tasksFinished, setTasksFinished] = useState(taskFinished)

    const [selectedColor, setSelectedColor] = useState((Math.floor(Math.random() * 9) + 1));
    const [availableColor, setAvailableColor] = useState([...colors]);



    const [selectedImage, setSelectedImage] = useState((Math.floor(Math.random() * 12) + 1));
    const [availableImage, setAvailableImage] = useState([...images]);

    const [data, setData] = useState(tasks)

    const [edit, setEdit] = useState(false)


    const OnCurrentTask = (taskName, taskDescription, taskImage, taskBackground, taskStatus, taskKey) => {
        setCurrentTask(true) // Modal
        setcurrentTitle(taskName)
        setcurrentDescription(taskDescription)
        setCurrentImage(taskImage)
        setCurrentBackground(taskBackground)
        setCurrentStatus(taskStatus)
        setCurrentKey(taskKey)

    }

    const handleOk = () => {
        setVisible(false)
        setCurrentTask(false)
    }

    const handleCancel = () => {
        setVisible(false)
        setCurrentTask(false)
    }

    const CreateNewTask = (values) => {

        console.log(values)

        SelectRandomColor()
        SelectRandomImage()
        const newTask = {
            name: values.name,
            description: values.description,
            color: selectedColor,
            image: selectedImage,
            finished: false,
            key: generateUniqueKey()
        }

        setData([...data, newTask])
        form.resetFields();
        setVisible(false)

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

    const onEdit = (values) => {
        setEdit(!edit)
        form_2.resetFields();
        console.log(values)

        setData(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.key === currentKey) {
                    if (values.name) {
                        setcurrentTitle(values.name)
                        return { ...task, name: values.name };
                    }

                }
                return task;
            });
            return updatedTasks;
        });

        setData(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.key === currentKey) {
                    if (values.description) {
                        setcurrentDescription(values.description)
                        return { ...task, description: values.description };
                    }

                }
                return task;
            });
            return updatedTasks;
        });

    }

    const CompleteTask = (key) => {

        setData(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.key === key) {
                    setcurrentDescription('Finished')
                    setCurrentBackground('#6edfc7')
                    setCurrentStatus(true)
                    setTasksFinished(tasksFinished + 1)
                    return { ...task, finished: true, color: 10, description: 'Finished' };
                }
                return task;
            });
            return updatedTasks;
        });


        // setCurrentTask(false)

    };

    const deleteTask = (key) => {

        const taskToDelete = tasks.find(task => task.key === key);
        const updatedTasks = tasks.filter(task => task.key !== key);

        setData(updatedTasks)
        setCurrentTask(false)

        if (taskToDelete.finished) {
            setTasksFinished(tasksFinished - 1)
        }

    };

    useEffect(() => {
        setTasks(data)
        setTotalTask(data.length)
        console.log(data)

    }, [data])

    useEffect(() => {
        setFinishedTask(tasksFinished)
    }, [tasksFinished])

    useEffect(() => {

        const LocalTasks = JSON.parse(localStorage.getItem('tasks'))
        if (LocalTasks) {
            setData(LocalTasks)
        }

    }, [])



    return (
        <>
            <div
                style={{
                    width: '95%', height: '7vh', borderRadius: '2vh', backgroundColor: `${theme ? '#a8dadc' : '#27282c'}`,
                    display: 'flex', alignItems: 'center', marginTop: '3vh', flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <p className='My-something'
                    style={{
                        marginLeft: '2vh', fontFamily: 'Berlin Sans FB', color: `${theme ? '#1d3557' : '#a8dadc'}`,
                        fontWeight: 400, fontSize: '1.5em', cursor: 'default'
                    }}>
                    My tasks</p>
                <Button
                    className='add-something'
                    onClick={() => setVisible(true)}
                    style={{
                        height: '4vh', aspectRatio: '5/1', borderRadius: '1vh',
                        marginRight: '2vh', lineHeight: '0em', backgroundColor: `${theme ? '#f7fcf5' : '#8cb8ba'}`,
                        marginLeft: '2vh', fontFamily: 'Berlin Sans FB',
                        color: `${theme ? '#1d3557' : '#333437'}`,
                        fontWeight: 400, border: '0px solid #000',
                        // fontSize: '1.2em', 
                    }}>
                    + Add new task
                </Button>


            </div>

            <div
                className={`${theme ? 'scrollable-div' : 'scrollable-div-dark'}`}
                style={{
                    width: '95%', marginTop: '1vh', display: 'flex', alignItems: 'left', justifyContent: 'flex-start',
                    flexDirection: 'row', flexWrap: 'wrap',
                }}>

                {
                    tasks ? <TaskCard data={tasks} OnCurrentTask={OnCurrentTask} />
                        : <p>sad</p>
                }


            </div>

            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                className={`${theme ? 'add-task-modal' : 'add-task-modal-dark'}`}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}
            >
                <div style={{
                    height: '40vh', width: '50vh', marginTop: '0vh', marginBottom: '-2vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
                }}>
                    <div
                        style={{
                            height: '50%', width: '99%', backgroundColor: '#a8dadb',
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
                    <Form
                        // form={form1}
                        name="myForm_1"
                        form={form}
                        style={{ height: '100%', width: '100%', }}
                        onFinish={CreateNewTask}>

                        <div className="" style={{ height: '100%', width: '100%' }}>


                            <Form.Item
                                name="name"
                                style={{ marginTop: '1vh' }}
                                rules={[{
                                    required: true, message: 'Your task must have a name'
                                }]}
                            >
                                <Input placeholder="Type task name"
                                    style={{
                                        width: '50vh', backgroundColor: `${theme ? '#f7fcf5' : '#333437'}`, fontWeight: 500,
                                        fontWeight: '1em', color: `${theme ? '' : '#e3e3e3'}`, border: `${theme ? '' : '0px solid #000'}`
                                    }} />

                            </Form.Item>

                            <Form.Item
                                name="description"
                                style={{ marginTop: '-2vh', marginBottom: '1vh' }}
                            >
                                <Input.TextArea
                                    placeholder="Type task description"
                                    style={{
                                        width: '50vh', height: '18vh', resize: 'none', backgroundColor: `${theme ? '#f7fcf5' : '#333437'}`,
                                        overflow: 'auto', overflowY: 'auto', overflowX: 'hidden', color: `${theme ? '' : '#e3e3e3'}`,
                                        border: `${theme ? '' : '0px solid #000'}`
                                    }}
                                    autoSize={{ minRows: 5, maxRows: 10 }}  // Ajusta automáticamente la altura según el contenido
                                    wrap="soft"  // Permite el wrap automático del texto
                                />

                            </Form.Item>

                            <Form.Item style={{ width: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Button htmlType="submit" className='add-task-button-2'
                                    style={{
                                        borderRadius: '1vh', backgroundColor: `${theme ? '#f7fcf5' : '#333437'}`, fontWeight: 500,
                                        width: '50vh', border: '1.8px solid #a8dadb', color: '#a8dadb'
                                    }}>+ Add task</Button>
                            </Form.Item>

                        </div>

                    </Form>
                </div>



            </Modal>

            <Modal
                visible={currentTask}
                onOk={handleOk}
                onCancel={handleCancel}
                className={`${theme ? 'task-content' : 'task-content-dark'}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}
            >
                <div
                    style={{
                        height: '25vh', width: '70vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                    }}>

                    <div
                        className={`task-image-${currentImage}`}
                        style={{
                            height: '24vh', aspectRatio: '1/1', backgroundColor: `${currentBackground}`,
                            borderRadius: '2vh',
                        }}>


                    </div>

                    <Form
                        name="myForm_2"
                        form={form_2}
                        onFinish={onEdit}

                        style={{
                            height: '26vh', width: '56vh',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
                        }} >

                        <Form.Item
                            name="name"
                            style={{
                                width: '100%', display: 'flex', alignItems: 'center', marginTop: '0.5vh',
                                justifyContent: 'center', flexDirection: 'column',
                                marginBottom: '0vh',
                            }}>


                            {
                                !edit
                                    ? <div style={{
                                        width: '36vh', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', flexDirection: 'column'
                                    }}>
                                        <p
                                            className='input-task-name'
                                            style={{
                                                fontFamily: 'Berlin Sans FB', color: `${currentBackground}`,
                                                // fontSize: '2em',
                                                marginBottom: '0vh', marginTop: '-1vh', lineHeight: '0.9em'
                                            }}>{currentTitle}</p>
                                        <hr style={{ border: `1.5px solid ${currentBackground}`, width: '34vh' }} />
                                    </div>
                                    : <Input placeholder={`${currentTitle}`}
                                    className='input-task-name'    
                                    style={{
                                            width: '35vh', backgroundColor: `${theme ? '#f7fcf5' : '#333437'}`, fontWeight: 500,
                                            height: '4vh', marginLeft: '-3vh',
                                            color: `${theme ? '' : '#e3e3e3'}`, border: `${theme ? '' : '0px solid #000'}`
                                        }}>

                                    </Input>
                            }

                        </Form.Item >

                        <Form.Item
                            name="description"
                            style={{
                                width: '100%', display: 'flex', alignItems: 'center', marginBottom: '0vh',
                                justifyContent: 'center', marginTop: '0.5vh',
                            }}>

                            {
                                !edit
                                    ? <p style={{
                                        width: '36vh', height: '8vh', wordWrap: 'break-word', marginTop: '0vh',
                                        color: '#AAA'
                                    }}
                                    >{currentDescription}</p>
                                    : <Input.TextArea
                                        placeholder={`${currentDescription}`}
                                        style={{
                                            width: '38vh', height: '5vh', resize: 'none', backgroundColor: `${theme ? '#f7fcf5' : '#333437'}`,
                                            overflow: 'auto', overflowY: 'auto', overflowX: 'hidden', marginBottom: '2vh',
                                            color: `${theme ? '' : '#e3e3e3'}`, border: `${theme ? '' : '0px solid #000'}`
                                            // marginLeft: '-1vh'
                                        }}
                                        autoSize={{ minRows: 4, maxRows: 10 }}  // Ajusta automáticamente la altura según el contenido
                                        wrap="soft"  // Permite el wrap automático del texto
                                    />
                            }


                        </Form.Item>

                        <Row style={{ marginTop: '0vh', marginBottom: '0vh' }}>
                            <Button
                                onClick={() => deleteTask(currentKey)}
                                disabled={edit}
                                className={`${edit ? '' : 'element'}`}
                                style={{
                                    backgroundColor: `${theme ? '#f7fcf5' : '#27282c'}`, border: `1px solid ${currentBackground}`,
                                    color: `${currentBackground}`, fontWeight: 500, transition: 'all 0.25s ease-in-out',
                                    display: `${edit ? 'none' : ''}`
                                }}
                            >Delete task</Button>
                            <Button
                                disabled={edit}
                                onClick={() => CompleteTask(currentKey)}
                                className={`${edit ? '' : 'element'}`}
                                type='primary'
                                style={{
                                    marginLeft: '2vh', fontWeight: 500, backgroundColor: `${currentBackground}`,
                                    color: `${theme ? '' : '#27282c'}`,
                                    transition: 'all 0.25s ease-in-out', display: `${!edit ? currentStatus ? 'none' : '' : 'none'}`
                                }}>Complete task</Button>
                        </Row>

                        <Form.Item style={{
                            position: 'absolute', top: `${edit ? '6vh' : '2vh'}`, right: '5vh',
                            transition: 'all 0.25s ease-in-out', display: `${currentStatus ? 'none' : ''}`
                        }}>
                            <Button
                                shape='square' htmlType="submit"
                                style={{

                                    backgroundColor: 'transparent', border: '0px solid #000',

                                }} >
                                {!edit ? <AiTwotoneEdit size={15}
                                    style={{ color: '#a8dadb' }} /> : <AiFillSave size={18}
                                        style={{ color: `${currentBackground}` }} />}

                            </Button>


                        </Form.Item>


                    </Form>


                </div>

            </Modal>

        </>
    )
}
