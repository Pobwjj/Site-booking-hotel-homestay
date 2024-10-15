import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
// const override = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// }
function Loader() {
    // let [loading] = useState(true);
    // let [color] = useState("#ffffff");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="sweet-loading ">
                <HashLoader
                    color="#D0021B"
                    loading={loading}
                    size={50}
                />
            </div>
        </div>
    )
}
export default Loader;
// import React, { useEffect, useState } from 'react';
// export default function SPLoader() {
//     const [text, setText] = useState('')
//     const [showImg, setShowImg] = useState(true)
//     useEffect(() => {
//         setTimeout(() => {
//             setShowImg(false)
//             setText('Đang tải...')

//         }, 5000)
//     }, [])
//     return (
//         <div >
//             {
//                 showImg ? (
//                     <img src="../loading.svg" alt="/" />
//                 ) : (
//                     <h3>{text}</h3>
//                 )
//             }
//         </div>
//     )
// }