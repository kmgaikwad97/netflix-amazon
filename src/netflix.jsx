import React from "react";
import sdata from "./sData";
import Card from "./cards";


const Netflix = () => {
    return (

        <>

            {sdata.map((curval) => {
                if (curval.id < 6)
                    return (
                        <Card
                            key={curval.id}
                            imgsrc={curval.imgscr}
                            title={curval.title}
                            sName={curval.sname}
                            link={curval.links}
                        />
                    );
            })}




            {/* <Card
            key={sdata[0].id}
            imgsrc={sdata[0].imgscr}
            title={sdata[0].title}
            sName={sdata[0].sname}
            link={sdata[0].links}
        />
        

        <Card
            key={sdata[1].id}
            imgsrc={sdata[1].imgscr}
            title={sdata[1].title}
            sName={sdata[1].sname}
            link={sdata[1].links}
        />
        

        <Card
            key={sdata[2].id}
            imgsrc={sdata[2].imgscr}
            title={sdata[2].title}
            sName={sdata[2].sname}
            link={sdata[2].links}
        />
        

        <Card
            key={sdata[3].id}
            imgsrc={sdata[3].imgscr}
            title={sdata[3].title}
            sName={sdata[3].sname}
            link={sdata[3].links}
        />
        

        <Card
            key={sdata[4].id}
            imgsrc={sdata[4].imgscr}
            title={sdata[4].title}
            sName={sdata[4].sname}
            link={sdata[4].links}
        /> */}
        </>
    );
}

export default Netflix;