import React from "react";
import sdata from "./sData";
import Card from "./cards";


const Amazon = () => {
    return (
        <>

            {sdata.map((curval) => {
                if (curval.id > 5)
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

        </>
    );
}

export default Amazon;