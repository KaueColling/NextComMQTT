import clientService from "@/hooks/clientService";
import axios from "axios";

export default function dashboard() {
    const api = axios.create({
        baseURL: "http://localhost:3001",
    });

    api.get("/messages").then((response) => {
        console.log(response);
    });
    function renderMessages() {
        return clientService.getMessages().map((message, index) => {
            return (
                <>
                    <p key={index}>{message}</p>
                </>
            );
        });
    }

    return (
        <>
            <div>
                <h1>Dashboard</h1>
                {renderMessages()}
            </div>
        </>
    );
}
