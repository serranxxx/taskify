import React, { useContext, useEffect, useState } from 'react'
import { TaskCardMobile } from './TaskCardMobile'
import { appContext_ } from '../../context_/appContext_'
import { Button, Drawer, Form, Input } from 'antd'
import { images_ } from '../../helpers/images'

export const TasksMobile = (props) => {


    const { onWrite, setOnWrite } = props

    const { setTasks, tasks, taskFinished, setFinishedTask, setTotalTask, theme } = useContext(appContext_)
    const [form] = Form.useForm();

    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const [currentTask, setCurrentTask] = useState(false)

    const [tasksFinished, setTasksFinished] = useState(taskFinished)

    const [selectedColor, setSelectedColor] = useState((Math.floor(Math.random() * 9) + 1));
    const [availableColor, setAvailableColor] = useState([...colors]);

    const [selectedImage, setSelectedImage] = useState((Math.floor(Math.random() * 12) + 1));
    const [availableImage, setAvailableImage] = useState([...images]);

    const [data, setData] = useState(tasks)


    const handleOk = () => {
        setOnWrite(false)
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
        setOnWrite(false)

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

    // const onEdit = (values) => {
    //     setEdit(!edit)
    //     form_2.resetFields();
    //     console.log(values)

    //     setData(prevTasks => {
    //         const updatedTasks = prevTasks.map(task => {
    //             if (task.key === currentKey) {
    //                 if (values.name) {
    //                     setcurrentTitle(values.name)
    //                     return { ...task, name: values.name };
    //                 }

    //             }
    //             return task;
    //         });
    //         return updatedTasks;
    //     });

    //     setData(prevTasks => {
    //         const updatedTasks = prevTasks.map(task => {
    //             if (task.key === currentKey) {
    //                 if (values.description) {
    //                     setcurrentDescription(values.description)
    //                     return { ...task, description: values.description };
    //                 }

    //             }
    //             return task;
    //         });
    //         return updatedTasks;
    //     });

    // }

    const CompleteTask = (key) => {

        setData(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.key === key) {
                    // setcurrentDescription('Finished')
                    // setCurrentBackground('#6edfc7')
                    // setCurrentStatus(true)
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

    const handleForms = () => {
        form.submit()

    }

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
            <TaskCardMobile data={tasks} theme={theme} CompleteTask={CompleteTask} deleteTask={deleteTask} />

            <Drawer
                title={<p style={{ color: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 700, }}>Create new task</p>}
                placement="left"
                onClose={handleOk}
                width='100%'
                // extra={}
                open={onWrite}
                style={{
                    backgroundColor: `${theme ? '#E5EFE1' : '#333437'}`,
                }}>

                <div
                    style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',

                    }}>

                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', width: "80%",
                        flexDirection: 'column'
                    }}>
                        {/* <div style={{
                            height: '40vh'
                        }}>
                            <img src={images_.img_1} style={{ height: '100%', marginTop: '5vh' }} />
                        </div> */}

                        <Form
                            name="myForm_1"
                            form={form}
                            style={{
                                height: '100%', width: '100%',
                                display:'flex', alignItems:'center', justifyContent:'center',
                                flexDirection:'column'
                            }}
                            onFinish={CreateNewTask}
                        >
                            <Form.Item
                                name="name"
                                style={{ marginTop: '0', width: '100%' }}
                                rules={[{
                                    required: true, message: 'Your task must have a name'
                                }]}
                            >
                                <Input placeholder="Task name"
                                    // className='project-inputs'
                                    style={{
                                        width: '100%',
                                        backgroundColor: `${theme ? '#f7fcf550' : '#27282c20'}`, fontWeight: 500,
                                        fontWeight: '1em', color: `${theme ? '' : '#f1faee80'}`,
                                         border: '0px solid #000'
                                    }} />

                            </Form.Item>

                            <Form.Item
                                name="description"
                                style={{ marginTop: '-2vh', marginBottom: '1vh', width: '100%' }}
                            >
                                <Input.TextArea
                                    placeholder="Description"
                                    // className='project-inputs'
                                    style={{
                                        width: '100%', resize: 'none', backgroundColor: `${theme ? '#f7fcf550' : '#27282c20'}`,
                                        overflow: 'auto', overflowY: 'auto', overflowX: 'hidden', color: `${theme ? '' : '#f1faee80'}`,
                                        border: '0px solid #000'
                                    }}
                                    autoSize={{ minRows: 5, maxRows: 10 }}  // Ajusta automáticamente la altura según el contenido
                                    wrap="soft"  // Permite el wrap automático del texto
                                />

                            </Form.Item>

                            <Button
                                onClick={handleForms}
                                style={{
                                    backgroundColor: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 500,
                                    border: '0px solid #a8dadb', color: `${theme ? '#E5EFE1' : '#333437'}`, width: '15vh',
                                    borderRadius: '3vh', marginTop:'5vh'
                                }}>Add</Button>

                            {/* <Form.Item
                                className='project-inputs'
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginTop: '3vh', width: '100%'
                                }}>
                                <Button htmlType="submit"
                                    style={{
                                        backgroundColor: `${theme ? '#457b9d' : '#f1faee80'}`, fontWeight: 500,
                                        border: '0px solid #a8dadb', color: `${theme ? '#E5EFE1' : '#333437'}`, width: '15vh',
                                        borderRadius: '3vh',
                                    }}>Add</Button>
                            </Form.Item> */}



                        </Form>

                    </div>


                </div>
            </Drawer>
        </>
    )
}
