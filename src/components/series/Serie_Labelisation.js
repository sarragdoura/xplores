import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const scroll = {
    height: "100%",
    overflowX: "scroll",
    overflowY: "scroll",
    whiteSpace: "nowrap",
}
const Serie_Labelisation = ({ rowD, setRowData, setChageRow }) => {

    const VueAnatomique = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'TDM thoracique';
            return item;
        }))
        setChageRow('TDM thoracique');
    }
    const VueAnatomique1 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'Angio-scanner thoracique';
            return item;
        }))
        setChageRow('Angio-scanner thoracique');
    }
    const VueAnatomique2 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'TDM thoraco-abdominale';
            return item;
        }))
        setChageRow('TDM thoraco-abdominale');
    }
    const VueAnatomique3 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'TDM thoraco-abdomino-pelvien';
            return item;
        }))
        setChageRow('TDM thoraco-abdomino-pelvien');
    }
    const VueAnatomique4 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'TDM cervico-thoraco-abdomino-pelvien';
            return item;
        }))
        setChageRow('TDM cervico-thoraco-abdomino-pelvien');
    }
    const VueAnatomique5 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'Angio-scanner aortique';
            return item;
        }))
        setChageRow('Angio-scanner aortique');
    }
    const VueAnatomique6 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'Coroscanner';
            return item;
        }))
        setChageRow('Coroscanner');
    }
    const VueAnatomique7 = () => {
        setRowData(rowD.map(item => {
            item.VueAnatomique = 'TDM abdomino-pelvien';
            return item;
        }))
        setChageRow('TDM abdomino-pelvien');
    }



    const Injection1 = () => {
        setRowData(rowD.map(item => {
            item.Injection = 'Non Injecté';
            return item;
        }))
        setChageRow('Non Injecté');
    }


    const Injection = () => {
        setRowData(rowD.map(item => {
            item.Injection = 'Injecté';
            return item;
        }))
        setChageRow('Injecté');
    }

    const Filtres1 = () => {
        setRowData(rowD.map(item => {
            item.Filtres = 'Filtre standard';
            return item;
        }))
        setChageRow('Filtre standard');
    }
    const Filtres = () => {
        setRowData(rowD.map(item => {
            item.Filtres = 'Filtre poumon';
            return item;
        }))
        setChageRow('Filtre poumon');
    }

    const Respiration = () => {
        setRowData(rowD.map(item => {
            item.Respiration = 'Expiré';
            return item;
        }))
        setChageRow('Expiré');
    }

    const Respiration1 = () => {
        setRowData(rowD.map(item => {
            item.Respiration = 'Inspiré';
            return item;
        }))
        setChageRow('Inspiré');
    }


    const Tempsdinjection = () => {
        setRowData(rowD.map(item => {
            item.TempsInjection = 'Temps pulmonaire';
            return item;
        }))
        setChageRow('Temps pulmonaire');
    }

    const Tempsdinjection1 = () => {
        setRowData(rowD.map(item => {
            item.TempsInjection = 'Temps aortique';
            return item;
        }))
        setChageRow('Temps aortique');
    }

    const Tempsdinjection2 = () => {
        setRowData(rowD.map(item => {
            item.TempsInjection = 'Temps mixte';
            return item;
        }))
        setChageRow('Temps mixte');
    }
    const Tempsdinjection3 = () => {
        setRowData(rowD.map(item => {
            item.TempsInjection = 'Non';
            return item;
        }))
        setChageRow('Non');
    }







    return (
        <div class="container " style={{ marginLeft: "5px", paddingRight: 0 }, scroll}  >
            <div class="row">
                <h4 style={{ color: "#00b379" }}>Series Labelisation</h4>
            </div>
            <div class="row">
                <b>Vue Anatomique</b>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        TDM thoracique
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique1}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Angio-scanner thoracique
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique2}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        TDM thoraco-abdominale
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique3}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        TDM thoraco-abdomino-pelvien
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique4}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        TDM cervico-thoraco-abdomino-pelvien
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique5}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Angio-scanner aortique
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique6}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Coroscanner
                          </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="" name="Vue Anatomique" id="defaultCheck1" onChange={VueAnatomique7}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        TDM abdomino-pelvien
  </label>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <b>Injection</b>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Injection" id="defaultCheck1" onChange={Injection}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Injecté
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Injection" id="defaultCheck1" onChange={Injection1}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Non Injecté
                        </label>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <b>Filtres</b>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Filtres" id="defaultCheck1" onChange={Filtres}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Filtre poumon
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Filtres" id="defaultCheck1" onChange={Filtres1}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Filtre standard
                        </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <b>Respiration</b>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Respiration" id="defaultCheck1" onChange={Respiration}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Expiré
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Respiration" id="defaultCheck1" onChange={Respiration1}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Inspiré
                        </label>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <b>Temps d'injection</b>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Temps d'injection" id="defaultCheck1" onChange={Tempsdinjection}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Temps pulmonaire
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Temps d'injection" id="defaultCheck1" onChange={Tempsdinjection1}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Temps aortique
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Temps d'injection" id="defaultCheck1" onChange={Tempsdinjection2}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Temps mixte
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" name="Temps d'injection" id="defaultCheck1" onChange={Tempsdinjection3}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Non
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Serie_Labelisation

