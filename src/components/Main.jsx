import { content } from "../constants/copyright"

function Main (){   
    return (
        <main className="main">
            <section className="main__info">
                <h1>{content.mainScreen.mainHeader}</h1>
                <p>{content.mainScreen.description}</p>

            </section>
            <section className="main__card">

            </section>
        </main>
    )
}
export default Main 

