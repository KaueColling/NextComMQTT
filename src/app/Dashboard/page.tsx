import clientService from "@/hooks/clientService";

export default function dashboard() {
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
