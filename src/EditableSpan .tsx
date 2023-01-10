import React, {ChangeEvent, useState} from 'react';


type EditableSpanType = {
    title: string
    callBack: (title: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {

    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const onDoubleClickHandler = () => {
        setEdit(!edit)
        addTask()
    }

    const addTask = () => {
        props.callBack(newTitle)
        // if (newTitle.trim()) {
        //     props.callBack(newTitle)
        // }
    }


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input value={newTitle} onBlur={onDoubleClickHandler} onChange={onChangeHandler} autoFocus/>
            : <span onDoubleClick={onDoubleClickHandler}> {props.title} </span>
    );
};
