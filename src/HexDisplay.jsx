import React, { useState } from 'react';

function HexDisplay({genHex}) {
    const [input,setInput]=useState("")
    const [winAmount,setWinAmount]=useState(parseInt(localStorage.getItem("wins"))||0)
    const [correctness,setCorrectness]=useState(null)
    const [hex,setHex]=useState({
        hex:"",
        num:69
    })

    React.useEffect(()=>{
        setGenNewHex()
    },[])

    React.useEffect(()=>{
        localStorage.setItem("wins",winAmount)
    },[winAmount])

    function setGenNewHex(){
        let [num,hex]=genHex()
        console.log(hex)
        console.log(num)
        setHex({
            hex:hex,
            num:num
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(input)
        console.log(hex.num)
        if(input==hex.num){
            setWinAmount(prevAmount=>prevAmount+1)
            setCorrectness(true)
            setGenNewHex()
            setInput("")
        }else{
            setCorrectness(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {correctness===true && <div className='HexD--Correctness HexD--Right'>You are correct!</div>}
                {correctness===false && <div className='HexD--Correctness HexD--Wrong'>You were wrong! 😞</div>}
                <h1 className='HexD--Hex'>{hex.hex}</h1>
                <input 
                    className='HexD--Input'
                    type="text"
                    value={input}
                    onChange={(event)=>setInput(event.target.value)}
                />
                <button className='HexD--Submit'>Submit</button>
            </form>
            <div className='HexD--Wins'>Correct: {winAmount}</div>
        </>
    );
}

export default HexDisplay;