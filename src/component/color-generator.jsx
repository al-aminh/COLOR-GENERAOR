import React, { useState } from "react"

const Generator = () => {
    const [typeofColor, setTypeofColor] = useState('hex');
    const [color, setColor] = useState('#ffffff');
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
        <div style={{backgroundColor:color}} className="h-screen w-screen">
            <div>
                <button
                    onClick={() => setTypeofColor('rgb')}
                >RGB</button>
                <button 
                    onClick={() => setTypeofColor('hex')}
                >HEX</button>
                <button 
                    onClick={typeofColor === 'hex'? generateRandomHexColor:generateRandomRgbColor}
                >Generate Random {typeofColor} color</button>
            </div>
        </div>
        </>
    )
}

export default Generator