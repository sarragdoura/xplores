import React, { Component } from 'react';


const scroll = {
    height: "25vh",
    overflowX: "scroll",
    overflowY: "scroll",
    whiteSpace: "nowrap",

}
const Serie_Description = ({ rowD }) => {
        return (
            <div class="container " style={{ marginLeft: "5px" }, scroll}  >
                <div class="row">
                    <h4 style={{color:"#00b379"}}>Description Serie labels</h4>
                </div>
                
                        Vue Anatomique :{rowD.length===0 ? ("_"):(rowD[0].VueAnatomique)} <br/>
                        Injection :{rowD.length===0 ? ("_"):(rowD[0].Injection)} <br/>
                        Filtres :{rowD.length===0 ? ("_"):(rowD[0].Filtres)} <br/>
                        Temps injection :{rowD.length===0 ? ("_"):(rowD[0].TempsInjection)} <br/>
                        Respiration :{rowD.length===0 ? ("_"):(rowD[0].Respiration)} <br/>
                        Statuts series :{rowD.length===0 ? ("_"):(rowD[0].Statuts)} <br/>
                        Study Name :{rowD.length===0 ? ("_"):(rowD[0].StudyName)} <br/>
                        Serie Name :{rowD.length===0 ? ("_"):(rowD[0].SerieName)} <br/>
                        Protocole Name :{rowD.length===0 ? ("_"):(rowD[0].ProtocoleName)} <br/>
            </div>

        )
    
}
export default Serie_Description;