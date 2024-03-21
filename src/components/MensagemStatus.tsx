export type Mensagem = {
    texto: string;
};

type propsMensagemStatus = {
    mensagem: Mensagem;
};

export default function ({ mensagem }: propsMensagemStatus) {
    return (
        <>
            <div className="w-10/12 bg-stone-900">
                <p>Temperatura: {mensagem.texto}</p>
            </div>
        </>
    );
}
