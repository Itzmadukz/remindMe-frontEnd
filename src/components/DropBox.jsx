import Layout from "./Layout"
import placholderImage from "../assets/placeholder.png"
import { useEffect, useState } from "react"

function DropBox({ headerRef, setHighlight, handleSubmit }) {
    const [imageSrc, setImageSrc] = useState({
        placholderImage: placholderImage,
        rawFile: null,
        error: false
    })
    const [showAskButton, setShowAskButton] = useState(false)
    const MAX_FILE_SIZE = 6 * 1024 * 1024 // 6 MB in bytes


    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        console.log(file)
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setImageSrc(prevState => ({
                    ...prevState,
                    error: true
                }))
                return
            }
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageSrc(prevState => ({
                    ...prevState,
                    placholderImage: reader.result,
                    rawFile: file,
                    error: false
                }))
            }
            reader.readAsDataURL(file)
            setShowAskButton(true)
            console.log(reader)
        }
    }


    return (
        <>
            <Layout>
                {imageSrc.error && <div className="w-1/2 bg-red-300 p-4 m-auto rounded">
                    <p>image size to large</p>
                </div>}

                <div className="flex justify-center p-5">
                    <div className="h-1/2 w-1/2">
                        <img className="" src={imageSrc.placholderImage} alt="placeholder image" />
                    </div>
                </div>
                <div className="flex justify-center mb-8">
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-center text-gray-500 file:mr-4 
                            file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm 
                            file:font-semibold file:bg-blue-50 file:text-blue-700
                             hover:file:bg-blue-100"
                        />
                    </div>
                </div>
                {showAskButton && <div className="flex justify-center mb-8">
                    <button onClick={(event) => { handleSubmit(event,imageSrc) }} className="w-1/4 bg-blue-200">🤔 Ask</button>
                </div>
                }

            </Layout>
        </>
    )
}

export default DropBox


