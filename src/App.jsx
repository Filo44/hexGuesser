import React, { useState } from 'react';
import HexDisplay from './HexDisplay';

function App() {
    function genHex(){
        let randomNum=Math.floor(Math.random()*255)
        return [randomNum,randomNum.toString(16)]
    }
    return (
        <>
            <h1 className="App--Title">Hexadecimal to Decimal Game</h1>
            <p className='App--Desc'>
                In this game we will give you a Hexadecimal number and you 
                will try to convert that number into the decimal number system more commonly used by humans.
                A hexadecimal number is a number represented using base 16. It uses the digits 0-9 and the 
                letters A-F to representvalues greater than 9. It is commonly used in computer programming 
                and in certain applications in mathematics and engineering because it is more compact than 
                decimal representation.
            </p>
            <HexDisplay genHex={genHex}/>
        </>
    );
}

export default App;