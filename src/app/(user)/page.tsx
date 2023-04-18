import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { previewData } from "next/headers";



export default function HomePage() {


    if (previewData()) {
        console.log('Não existe previewData')
        return (<div><h1>Preview mode...</h1></div>)
    }
    else console.log('não entrou')



    return (
        <>


            <h1>
                Home!
            </h1>

        </>
    );


}
