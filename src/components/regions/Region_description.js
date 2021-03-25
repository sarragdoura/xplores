import React, { Component } from 'react';

const scroll = {
    height: "25vh",
    overflowX: "scroll",
    overflowY: "scroll",
    whiteSpace: "nowrap",

}

    const Region_Description = ({ rowD }) => {

        return (
            <div class="container " style={{ marginLeft: "5px" }, scroll}  >
                <div class="row">
                     <h4  style={{color:"#00b379"}}>Region Description labels</h4>
                </div>
                
                        Region : {rowD.length===0 ? ("_"):(rowD[0].Region)} <br/>
                        Organe : {rowD.length===0 ? ("_"):(rowD[0].organe)}   <br/>
                        Pathologie : {rowD.length===0 ? ("_"):(rowD[0].pathologie)}   <br/>
                        Type Pathologie : {rowD.length===0 ? ("_"):(rowD[0].TypePathologie)}   <br/>
                    
                
                        Statuts region : {rowD.length===0 ? ("_"):(rowD[0].Statuts)} <br/>
                        Statuts series :  {rowD.length===0 ? ("_"):(rowD[0].Statuts)} <br/>
                        nbr ROIs valide : {rowD.length===0 ? ("_"):(rowD[0].NbrROIsValide)} <br/>
                        nbr ROId : {rowD.length===0 ? ("_"):(rowD[0].NbrROIsValide)} <br/>
            </div>

        )
}

export default Region_Description;