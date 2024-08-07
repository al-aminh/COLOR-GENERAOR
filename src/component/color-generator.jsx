import React, { useState } from "react"

const Generator = () => {
    const [typeofColor, setTypeofColor] = useState('hex');
    const [color, setColor] = useState('#c9daBf');
    const randomNumber = (length) => {
        return Math.floor(Math.random()*length)
    }
    const generateRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        let hexColor = '#';
        for(let i = 0; i < 6; i++){
            hexColor += hex[randomNumber(hex.length)]
        }
        setColor(hexColor);
        console.log(hexColor);
    }
    const generateRandomRgbColor = () => {
        const rgb = `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
        setColor(rgb);
        console.log(rgb);

    }
    return (
        <>
        <div style={{backgroundColor:color}} className="h-screen w-screen flex justify-center">
            <div className="flex flex-col m-6 text-white items-center gap-5 p-3">
                <div className="flex gap-5">
                <button
                    className="bg-purple-400 p-2 rounded-xl text-center font-sans font-bold shadow-md"
                    onClick={() => setTypeofColor('rgb')}
                >RGB</button>
                <button 
                    className="bg-purple-400 p-2 rounded-xl text-center font-sans font-bold shadow-md"
                    onClick={() => setTypeofColor('hex')}
                >HEX</button>
                <button 
                    className="bg-purple-400 p-2 rounded-xl text-center font-sans font-bold shadow-md"
                    onClick={typeofColor === 'hex'? generateRandomHexColor:generateRandomRgbColor}
                >Generate Random {typeofColor} color</button>
                </div>
                <div className="flex flex-col gap-5 text-cente">
                <h3 
                    className="bg-purple-400 p-2 rounded-xl text-center font-sans font-bold shadow-md"
                >Color Type: {typeofColor}</h3>
                <h3 
                    className="bg-purple-400 p-2 rounded-xl text-center font-sans font-bold shadow-md"
                >Color Code: {color}</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Generator