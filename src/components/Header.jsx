import { useEffect } from "react";
import Layout from "./Layout";

function Header({ headerRef, highlight, setHighlight }) {

    useEffect(() => {
        if (highlight) {
            setTimeout(() => {
                setHighlight(false);
            }, 2000); // Remove highlight after 2 seconds
        }
    }, [highlight, setHighlight])

    return (
        <>
            <div ref={headerRef} >
                <h1 className="text-7xl font-bold ">
                    remindME
                </h1>
            </div>
            <Layout>
                <div className={`min-h-[150px] rounded-md p-6 text-xl leading-loose ${highlight ? 'bg-blue-200' : ''
                    }`}>
                    <p>Ever forgoten the details about a picture you took ?
                        whether recent or days back, remindMe uses gemini to decode the contents and details of a picture</p>
                </div>
            </Layout>
        </>
    )
}

export default Header