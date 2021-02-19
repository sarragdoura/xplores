import React, { useEffect, useState } from 'react'
import Serie_Description from './Serie_Description';
import Serie_Labelisation from './Serie_Labelisation';
import Serie_table from './Serie_table'
import Serie_validation from './Serie_validation';
import Serie_Image from './Serie_Image';

const scroll = {
  margin: "4px , 4px",
  padding: "4px",
  height: "680px",
  width:"100%",
  overflowX: "scroll",
  overflowY: "scroll",
  whiteSpace: "nowrap",

}
const fullscreen = {
  height: "101vh",
  width: "169.5vh"
}
const data = [
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  }, {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  }, {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '1',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },
  {
    SerieName: 'Serie 1',
    ProtocoleName: 'protocole 4',
    NbrImage: '9',
    NbrRegion: '2',
    Comment: 'no',
    VueAnatomique: 'vue',
    Injection: 'Injecte',
    Filtres: 'Filtre poumon',
    TempsInjection: 'Temps pulmonaire',
    Respiration: 'Expire',
    AM: 'true',
    Statuts: 'valide',
    PatientName: 'Tiger Nixon',
    StudyName: 'Tiger Nixon',
  },

];

const Home_Page = () => {
  const [localData, setLocalData] = useState([])
  const [rowData, setRowData] = useState([])
  const [chageRow, setChageRow] = useState([])

  useEffect(() => {
    if (data) {
      setLocalData(data.map((item, index) => {
        item.key = index
        rowData.map(i => {
          if (item.key === i.key) {
            item.VueAnatomique = i.VueAnatomique
            item.Injection = i.Injection
            item.Filtres = i.Filtres
            item.Respiration=i.Respiration
            item.TempsInjection=i.TempsInjection
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

  return (
    <div style={fullscreen}>
            <div class="row" style={{height:"70%"}}>
                <div class="col-2" style={{ border: '1.5px solid #2d3e50' }}>
                    <Serie_validation />
                </div>
                <div class="col-7 " style={{ border: '1.5px solid #2d3e50' }}>

                    <div style={scroll}>
                        <Serie_table localData={localData} someHandlerProp={handler}  />
                    </div>
                </div>
                <div class="col" style={{ border: '1.5px solid #2d3e50' }}>
                    <Serie_Labelisation  rowD={rowData} setRowData={setRowData} setChageRow={change} />
                </div>
            </div>
            <div class="row" style={{height:"25%"}}>
                <div class="col-2" style={{ border: '1.5px solid #2d3e50' }}></div>
                <div class="col-7" style={{ border: '1.5px solid #2d3e50' }}>
                    <Serie_Image />
                </div>
                <div class="col" style={{ border: '1.5px solid #2d3e50' }}>
                    <Serie_Description rowD={rowData} />
                </div>
            </div>
        </div>
  )

}
console.log(data);

export default Home_Page