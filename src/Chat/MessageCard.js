import ImageSms from "./ImageSms";

function MessageCard({text, time, type, inout ,date}){
    
    function rend(){
        if(type == "text")
            return text;
        else if(type == "image"){
            return <ImageSms text={text}/>
        }
    }

    function Class(){
        if (inout == "in"){
            return "massageCardAccepted ";
        }
        else{
            return "messageCardSent"
        }
    }

    function color(){
        if (inout == "in"){
            return "alert-secondary";
        }
        else{
            return "alert-dark"
        }
    }

    return(
        <div className={Class()}>
        <div className={"card " + color()}>
            <div className="card-body">
                {rend()}
            </div>
        </div>
        <span className="time_date"> {time}    |    {date}</span>
        </div>
    );
}

export default MessageCard; 