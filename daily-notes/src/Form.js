
import { useRef } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from 'use-mediaquery';
import { loginData } from './Store';
import axios from 'axios';
const Form = (props) => {

    const isPC = useMediaQuery("(min-width:700px)");
    const textRef = useRef();

    const taskDispatcher = useDispatch();
    const username = useSelector((state) => state.username);
   
    const tasks = useSelector(state => state.tasksState);

    let formWidth;
    if (isPC) {
    
        formWidth = "50%";
    } else if (!isPC) {
       
        formWidth = "100%";
    }



    const onEnter = (e) => {
        
        if (e.key ==='Enter') {
           
            if (textRef.current.value.replace(/\s+/g, "").length > 0) {


                axios.post('/addNote', { text: textRef.current.value, username: username }).then(response => {


                    taskDispatcher(loginData.updateTasks({ data: [...tasks, { id: response.data.id, notes: response.data.notes }] }));


                    textRef.current.value = "";

                });

            }

        }

       



    }



    

    return (<div style={{width:formWidth, position:'fixed'}} className=" w3-container w3-card-4 w3-black w3-display-bottommiddle">
        <br />
        <input ref={textRef} onKeyPress={onEnter } className="w3-input  w3-center w3-large w3-white" type="text" placeholder="Write Task..." />
        <br/>
        <div onClick={props.cancelHandler } className="w3-red w3-wide w3-button fa fa-close w3-xxlarge w3-round-large w3-center  w3-padding-small"></div>
        <div onClick={() => { props.saveTaskHandler(textRef.current.value); textRef.current.value = ""; }} className="w3-white fa fa-save w3-xxlarge w3-round-large w3-wide w3-button w3-right  w3-padding-small"></div>
        <br /><br />

    </div>);
}


export default Form;