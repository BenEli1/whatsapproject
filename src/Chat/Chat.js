import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";
import Messages from "./Messages";
import { Route, Routes } from "react-router-dom";
import $ from "jquery";
import Chatusers from "./Chatusers";
import React,{useState} from 'react'
import dataBaseMessages from "./dataBaseMessages.json"

function Chat(){

    var data = dataBaseMessages.dataBaseMessages;
    const [cardsList, setCardsList] = useState(data);
    const [changeState , setChangeState] = useState(false)

    const doSearch = function(n, i){
        let newChat = {
            "nickName" : n, "img": i
        }
        data.push(newChat)
        setCardsList(data);
        setChangeState(!changeState)
    }

    return(
        <div className="container" id="Chat">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4" id="leftChat">
                    <div className="row">
                     <NavBarChat doSearch={doSearch} />
                    </div>
                    <div className="row">
                        <Chatusers cardsList={cardsList} />
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-8 col-8" id="rightChat">           
                </div>
                <div className="col-xl-0 col-lg-0 col-sm-0 col-0">
                </div>
            </div>
    );
}

export default Chat;
/* <Route path={`/Chat?userName=$`} element={ <Messages/>}>
              </Route>*/