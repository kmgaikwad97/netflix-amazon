import React from "react";
import sdata from "./sData";
import Card from "./cards";


const All = ()=>{
    return (
        <>

{sdata.map((curval)=>{
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
        />

        <Card
            key={sdata[5].id}
            imgsrc={sdata[5].imgscr}
            title={sdata[5].title}
            sName={sdata[5].sname}
            link={sdata[5].links}
        />
        <Card
            key={sdata[6].id}
            imgsrc={sdata[6].imgscr}
            title={sdata[6].title}
            sName={sdata[6].sname}
            link={sdata[6].links}
        />
        <Card
            key={sdata[7].id}
            imgsrc={sdata[7].imgscr}
            title={sdata[7].title}
            sName={sdata[7].sname}
            link={sdata[7].links}
        />
        <Card
            key={sdata[8].id}
            imgsrc={sdata[8].imgscr}
            title={sdata[8].title}
            sName={sdata[8].sname}
            link={sdata[8].links}
        />
        <Card
            key={sdata[9].id}
            imgsrc={sdata[9].imgscr}
            title={sdata[9].title}
            sName={sdata[9].sname}
            link={sdata[9].links}
        /> */}


        </>
    );
}

export default All;