import React, {useState} from 'react'
import {Row, Col, Button, FormControl} from 'react-bootstrap'
import s from './TodoList.module.css'


function ToDoList( { todo, setTodo } ) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function statusTodo(id){
        let newTodo = [...todo].filter(item =>{
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id){
        let newTodo = [...todo].map(item =>{
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return(
        <div>
            {
                todo.map( item => (
                    <div key= {item.id} className={s.listitems} >
                        {
                            edit == item.id ?
                                <div>
                                    <input value={value} onChange={(e)=>setValue(e.target.value)} />

                                </div> :
                                    <div className={ !item.status ? s.close : ''}>{ item.title }</div>
                        }
                        {
                            edit == item.id ?
                            <div>
                                <Button onClick={ ()=>saveTodo(item.id)}>Сохранить</Button>
                            </div> :
                            <div>
                                <Button onClick= { ()=> deleteTodo(item.id)} >Удалить</Button>
                                <Button onClick= { ()=> editTodo(item.id, item.title)} className={s.btn} >Редактировать</Button>
                                <Button onClick= { ()=> statusTodo(item.id)} className={s.btn}>Закрыть/Открыть</Button>
                            </div>

                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList