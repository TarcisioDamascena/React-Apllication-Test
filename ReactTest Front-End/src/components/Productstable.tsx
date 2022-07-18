import { Trash } from "phosphor-react";

interface propProductTable {
    onEdit: Function
    data?: {
        codigo?: number,
        descricao?: string,
        preco?: number,
        data_cadastro?: string
    }
}

export function ProductsTable(props: propProductTable) {

    return (
        <div className="flex justify-around items-center h-full max-h-28 bg-blue-primary rounded-xl mb-8 drop-shadow-md shadow-gray-900">
            <div className="flex">
                <div className="product-info">
                    <p>Codigo do produto:</p>
                    <span className="text-white">{props.data?.codigo || "Código"}</span>
                </div>
                <div className="product-info">
                    <p>Descrição:</p>
                    <span className="text-white" title="">{props.data?.descricao || "Descrição"}</span>
                </div>
                <div className="product-info">
                    <p>Preço:</p>
                    <span className="text-white">R$ {props.data?.preco || "R$ 00,00"}</span>
                </div>
                <div className="product-info">
                    <p>Data de Cadastro:</p>
                    <span className="text-white">{props.data?.data_cadastro || "22/02/2022"}</span>
                </div>
            </div>

            <div className="flex gap-10 items-center my-4 p-5">
                <button
                    className="button-generic"
                    onClick={() => props.onEdit()}
                >
                    Editar
                </button>
                <a href="#">
                    <Trash size={24} color={'#A3ABC3'} />
                </a>

            </div>
        </div>
    )
}