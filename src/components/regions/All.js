import rReact, { useEffect, useState } from "react";
import Region_validation from "./Region_validation";
import Region_table from "./Region_table";
import Region_Labelisation from "./Region_labelisation";
import Region_Description from "./Region_description";
import Region_Image from "./Region_Image";
import ROIs_validation from "./ROIs_validation"

const scroll = {
    margin: "4px , 4px",
    padding: "4px",
    height: "635px",
    overflowX: "scroll",
    overflowY: "scroll",
    whiteSpace: "nowrap",

}

const fullscreen = {
  height: "101vh",
  width: "169.5vh"
}
const data=[
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    {
      Region: '1',
      nbrRois: '5',
      organe: 'coeur',
      pathologie:'athérosclérose',
      TypePathologie:'AVC ',
      AM: 'AVC ',
      NbrROIsValide: '4',
      Statuts:'valide',
      PatientName:'Tiger Nixon',
      StudyName:'Tiger Nixon',
      SerieName: 'serie1258',
      ProtocoleName: 'protocole 5',
      NbrImage: '95',
      Comment:'no',
    },
    
  ];
const All = () => {
  const [localData, setLocalData] = useState([])
  const [rowData, setRowData] = useState([])
  const [chageRow, setChageRow] = useState([])

    useEffect(() => {
        if (data) {
            setLocalData(data.map((item, index) => {
                item.key = index
                rowData.map(i => {
                  if (item.key === i.key) {
                    item.Region = i.Region
                    item.pathologie = i.pathologie
                    item.TypePathologie = i.TypePathologie

                  }
                }
                )
                return item
            }))
        }
      }, [data, rowData])

    function handler(a) {
      setRowData(a)
    }
  
    function change(a) {
      setChageRow(a)
  
    }
    
       return( 
        <div style={fullscreen}>
            <div class="row" style={{height:"65%"}}>
            <div class="col-2"style={{border: '1.5px solid #2d3e50'}}> 
                <Region_validation />
            </div>
                <div class="col-7 "style={{border: '1.5px solid #2d3e50'}}>
                    
                    <div style={scroll}>
                        <Region_table localData={localData} someHandlerProp={handler}/>
                    </div>
                    </div>
                    <div class="col"style={{border: '1.5px solid #2d3e50'}}>
                    <Region_Labelisation rowD={rowData} setRowData={setRowData} setChageRow={change} />
                    </div>
                    </div>
                    <div class="row" style={{height:"30%"}}>
                    <div class="col-2"style={{border: '1.5px solid #2d3e50'}}>
                        <ROIs_validation />
                        </div>
                        <div class="col-7"style={{border: '1.5px solid #2d3e50'}}>
                        <Region_Image/>
                        </div>
                        <div class="col"style={{border: '1.5px solid #2d3e50'}}>
                        <Region_Description rowD={rowData} />
                        </div>
                    </div>
                </div>
       )
    
}
export default All;