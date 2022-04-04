import React from 'react'
import All from './all';
import Amazon from './amazon';
import "./index.css"
import Netflix from './netflix';


// const favSeries = 'amazon';
const favSeries = prompt('netflix or amazon or All ?')

// if-else logic

const FavS = () => {
    if (favSeries === 'netflix') {
        return (
        <Netflix/>
        );
    } else if(favSeries === "amazon"){
        return (
            <Amazon/>
        );
    }else{
        return(
            <All/>
        );
    }
}





const App2 = () => (
    <>
        <h1 className='heading_style'>Top 5 Evegreen Netflix Series</h1>
        <FavS />

    </>
)



export default App2;




