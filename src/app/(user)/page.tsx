
import { previewData } from "next/headers";



export default function HomePage() {

    if (previewData()) {
        console.log('existe previewData')
        return <div><h1>Preview mode...</h1></div>
    }


    return (
        <>


            <h1>Teste</h1>

        </>
    );


}
