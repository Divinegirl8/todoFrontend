import style from "./index.module.css";
import { useNavigate } from "react-router-dom";
import React from 'react'; //

const AddTask = () => {
    const navigate = useNavigate();

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8181/api/v1/createTask", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const  data = await response.json()
                navigate(`/create/${data.id}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.mainCont}>
            <form className={style.btnCont} onSubmit={handleAddTask}>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
