import React, { useRef, useState, useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Chats = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!user) {
            history.push('/')

            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                'project-id': '7ba5b213-42aa-4654-8f29-d19e96f4096f',
                'user-name': user.email,
                'user-secret': user.uid
            }
        }).then(() => {
            setLoading(false);
        }).catch(() => {
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.displayName);
            formData.append('secret', user.uid);
        })
    }, [user, history])

    return(
       <div>
           <ChatEngine
               height='calc(100vh - 66px)'
               projectId='7ba5b213-42aa-4654-8f29-d19e96f4096f'
               userName='.'
               userSecret='.'
           />
       </div>
    )
}

export default Chats;