import style from "./index.module.css";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const CreateTask = () =>{
    const [message,setMessage] = useState("");
    const [day,setDay]= useState("");
    const [month, setMonth] = useState("");
    const  [year,setYear] = useState("");
    const [hour,setHour] = useState("");
    const [minutes,setMinutes] = useState("");
    const params = useParams();
    const  userId = params.userId;
    const navigate = useNavigate();
    const [messageError,setMessageError] = useState("");
    const [dayError,setDayError] = useState("");
    const [monthError,setMonthError] = useState("");
    const [yearError,setYearError] = useState("");
    const [hourError,setHourError] = useState("");
    const [minError,setMinError] = useState("");

const handleCreateTask = async (e) =>{
    e.preventDefault();

try {


    const response =await fetch(`http://localhost:8181/addTask/${userId}`,{
        method :"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({message,day,month,year,hour,minutes})
    })
      const data = await response.json();
    if (response.ok){
       navigate(`/alltask/${userId}`);
       setMessageError("");
       setDayError("");
       setMonthError("");
       setYearError("");
       setMinError("");
       setHourError("");
    }
    else if (data.msgErr){
        setMessageError(data.msgErr);
    }
    else if(data.dayErr){
        setDayError(data.dayErr);
    }
    else if(data.mntErr){
        setMonthError(data.mntErr);
    }
    else if(data.yrErr){
        setYearError((data.yrErr));
    }
    else if (data.minErr){
        setMinError(data.minErr);
    }
    else if (data.hrErr){
        setHourError(data.hrErr);
    }
}catch (error){
    console.error(error);
}

}
    return(
        <>

            <form className={style.inputSection} onSubmit={handleCreateTask}>
                <div className={style.txt}>
                    <label>Task: </label>
                    <input type={"text"} placeholder={"what to do..."} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    {messageError && <span>{messageError}</span>}
                </div>

                <div className={style.dta}>
                    <label>Date: </label>
                    <input type={"date"}/>
                </div>

                <div className={style.tim}>
                    <label>Time </label>
                    <input type={"time"}/>
                </div>


                <button type={"submit"} className={style.btn}>Submit</button>



            </form>
        </>
    )
}

export default CreateTask;