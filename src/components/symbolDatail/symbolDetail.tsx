import React from "react";
import { useState, useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uiActions } from "../../features/ui/uiSlice";
// styles
import Styles from "./task.module.scss";
interface Props {
    title:string | undefined;
    priority:string | undefined;
    done:boolean | undefined;
    id:number | undefined;
}

// main component 
const SymbolDetail:React.FC<Props> = ({ title, priority, done, id }) => {
    const [priorityClassName, setPriorityClassName] = useState(Styles.high);
    // redux
    const dispatch = useDispatch();
    let tasksList:any = useSelector((store:any) => store.ui.counter);


    useEffect(() => {
        handleDynamicClassName();
    }, []);
    // handlers
    const handleCheckBox = (e:any) => {
        tasksSorter(e.target.checked);
    };
    const tasksSorter = (checkedStatus:any) => {
        let tasks:any = [...tasksList];
        if (checkedStatus) {
            // when task is become DONE
            let doneTask:any = {};
            for (let i in tasks) {
                if (tasks[i].id === id) {
                    doneTask = { ...tasks[i] };
                    doneTask.done = true;
                    tasks.splice(i, 1);
                    tasks.push(doneTask);
                    break;
                }
            }
            dispatch(uiActions.setCounter(tasks));
        } else {
            // when task is become UNDONE
            let unDoneTask:any = {};
            for (let i in tasks) {
                if (tasks[i].id === id) {
                    unDoneTask = { ...tasks[i] };
                    unDoneTask.done = false;
                    tasks.splice(i, 1);
                    tasks.unshift(unDoneTask);
                    break;
                }
            }
            dispatch(uiActions.setCounter(tasks));
        }
    };
    const handleDynamicClassName = () => {
        switch (priority) {
            case "high":
                setPriorityClassName(Styles.high);
                break;
            case "medium":
                setPriorityClassName(Styles.medium);
                break;
            case "low":
                setPriorityClassName(Styles.low);
                break;
            default:
            case "none":
                setPriorityClassName(Styles.none);
        }
    };
    const history = useHistory()
    return (
        <>
            <div className={Styles.task}>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={`anime${id}`}
                        name={`task${id}`}
                        defaultChecked={done}
                        // onChange={e => handleCheckBox(e)}
                        onChange={() =>history.push(`/Detail/:id${id}`)}
                    />
                    <label
                        className={`form-check-label ${priorityClassName}`}
                        htmlFor={`anime${id}`}
                    >
                        {id}
                    </label>
                </div>
            </div>
        </>
    );
};

export default SymbolDetail;
