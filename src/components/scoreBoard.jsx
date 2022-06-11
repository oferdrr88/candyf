

import React from "react"
import { useState } from "react";


const ScoreBord = ({score}) =>
{


return(

    <div className="scorebord  col-6 d-flex justify-content-between  ">
      <h2 className="p-2 ">score</h2>
    <h2 className="m-3">{score}</h2>
    </div>
);

}

export default ScoreBord