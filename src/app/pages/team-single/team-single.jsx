import React from 'react';
import TeamStyle from "./team-single.module.sass";
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faLink, faPenToSquare} from"@fortawesome/free-solid-svg-icons";

function TeamSingle(){

    return(
        <div className={TeamStyle.hero}>
            <form>
                <h2>Contact Me</h2>
                <div className={TeamStyle.row}>
                    <div className={TeamStyle.group}>
                        <input type="text" name="fullname"  id="name" placeholder='FULL NAME' ></input>
                        <label for="name"><FontAwesomeIcon icon={faUser} className={TeamStyle.icon}></FontAwesomeIcon></label>
                    </div>
                    <div className={TeamStyle.group}>
                        <input type="text" name="email"id="name" placeholder='EMAIL ADDRESS' required="email"></input>
                        <label for="name"><FontAwesomeIcon icon={faEnvelope} className={TeamStyle.icon}></FontAwesomeIcon></label>
                    </div>
                </div>
                <div className={TeamStyle.row1}>
                    <div className={TeamStyle.group}>
                        <input type="tel"  name="phone" id="number" placeholder='YOUR PHONE' required="phone"></input>
                        <label for="name"><FontAwesomeIcon icon={faPhone} className={TeamStyle.icon}></FontAwesomeIcon></label>
                    </div>
                    <div className={TeamStyle.group}>
                        <input type="text" name="topic" id="name" placeholder='YOUR TOPIC'></input>
                        <label for="name"><FontAwesomeIcon icon={faLink} className={TeamStyle.icon}></FontAwesomeIcon></label>
                    </div>
                </div>
                <div className={TeamStyle.group}>
                    <textarea type="text" name="message"  row="8" placeholder='YOUR MESSAGE'></textarea>
                    <label for="name"><FontAwesomeIcon icon={faPenToSquare} className={TeamStyle.icon}></FontAwesomeIcon></label>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default TeamSingle;