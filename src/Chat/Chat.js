import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";
import { Route, Routes } from "react-router-dom";
import $ from "jquery";
import Chatusers from "./Chatusers";
import React,{useState} from 'react'
import dataBaseMessages from "./dataBaseMessages.json"
import InputMessage from "./InputMessage";
import MessageBox from "./MessageBox";

function Chat({UserName}){

    function findIndex(){
        for(let x in dataBaseMessages.dataBaseMessages){
            if(Object.keys(dataBaseMessages.dataBaseMessages[x]) == UserName){
                return x;
            }
        }
    }

    var data = dataBaseMessages.dataBaseMessages.at(findIndex())[UserName];
    //alert(JSON.stringify(data));
    const [cardsList, setCardsList] = useState(data);
    const [changeState , setChangeState] = useState(false)
    const [contact, setContact] = useState('')

    const chooseContact = function(contact){
        setContact(contact);
        setChangeState(!changeState);
    }


    const doSearch = function(n, i){
        let newChat = {
            "nickName" : n, "img": i, "messages": []
        }
        data.push(newChat)
        setCardsList(data);
        setChangeState(!changeState)
    }

    return(
        <div className="container" id="Chat">
            <div className="row" id="ContactsRow">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4" id="leftChat">
                    <div className="row">
                     <NavBarChat doSearch={doSearch} cardsList={cardsList} UserName={UserName}/>
                    </div>
                    <div className="row">
                        <Chatusers cardsList={cardsList} chooseContact={chooseContact} />
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-8 col-8" id="rightChat"> 
                <MessageBox user={UserName} contact={contact} cardsList={cardsList} />
                <InputMessage />   
                </div>
                <div className="col-xl-0 col-lg-0 col-sm-0 col-0">
                </div>
                </div>
            </div>
    );
}

export default Chat;

