import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const scroll = {
    height: "100%",
    overflowX: "scroll",
    overflowY: "scroll",
    whiteSpace: "nowrap",

}
const Region_Labelisation = ({ rowD, setRowData, setChageRow }) => {


    const Region = () => {
        setRowData(rowD.map(item => {
            item.Region = 'PMD';
            return item;
        }))
        setChageRow('PMD');
    }
    const Region1 = () => {
        setRowData(rowD.map(item => {
            item.Region = 'PMG';
            return item;
        }))
        setChageRow('PMG');
    }
    const Region2 = () => {
        setRowData(rowD.map(item => {
            item.Region = 'Coeur';
            return item;
        }))
        setChageRow('Coeur');
    }
    const Region3 = () => {
        setRowData(rowD.map(item => {
            item.Region = 'Aorte -AA';
            return item;
        }))
        setChageRow('Aorte -AA');
    }
    const Region4 = () => {
        setRowData(rowD.map(item => {
            item.Region = 'Aorte -AD';
            return item;
        }))
        setChageRow('Aorte -AD');
    }
    const Region5 = () => {
        setRowData(rowD.map(item => {
            item.Region = 'Aorte -crosse';
            return item;
        }))
        setChageRow('Aorte -crosse');
    }

    const Pathologie = () => {
        setRowData(rowD.map(item => {
            item.pathologie = 'Oui';
            return item;
        }))
        setChageRow('Oui');
    }
    const Pathologie1 = () => {
        setRowData(rowD.map(item => {
            item.pathologie = 'Non';
            return item;
        }))
        setChageRow('Non');
    }

    const TypePathologie = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Anevrisme';
            return item;
        }))
        setChageRow('Anevrisme');
    }
    const TypePathologie1 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Dissection';
            return item;
        }))
        setChageRow('Dissection');
    }
    const TypePathologie2 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Taille anormale';
            return item;
        }))
        setChageRow('Taille anormale');
    }
    const TypePathologie3 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Epaississement anormale';
            return item;
        }))
        setChageRow('Epaississement anormale');
    }
    const TypePathologie4 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Contenu (thrombus)';
            return item;
        }))
        setChageRow('Contenu (thrombus)');
    }
    const TypePathologie5 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Autres';
            return item;
        }))
        setChageRow('Autres');
    }
    const TypePathologie6 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Nodulex';
            return item;
        }))
        setChageRow('Nodulex');
    }
    const TypePathologie7 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Fibrose pulmonaire';
            return item;
        }))
        setChageRow('Fibrose pulmonaire');
    }
    const TypePathologie8 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'PID';
            return item;
        }))
        setChageRow('PID');
    }
    const TypePathologie9 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'DDB';
            return item;
        }))
        setChageRow('DDB');
    }
    const TypePathologie10 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Emphyseme';
            return item;
        }))
        setChageRow('Emphyseme');
    }
    const TypePathologie11 = () => {
        setRowData(rowD.map(item => {
            item.TypePathologie = 'Masse';
            return item;
        }))
        setChageRow('Masse');
    }
    return (
        <div class="container " style={{ marginLeft: "5px" }, scroll}  >
            <div class="row">
                <h4 style={{ color: "#00b379" }}>Regions Labelisation</h4>
            </div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <b>Region</b>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" value="" id="defaultCheck1" onChange={Region}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                PMD
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" value="" id="defaultCheck1" onChange={Region1}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                PMG
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" value="" id="defaultCheck1" onChange={Region2}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Coeur
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" value="" id="defaultCheck1" onChange={Region3}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Aorte -AA
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" value="" id="defaultCheck1" onChange={Region4}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Aorte -AD
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" value="" id="defaultCheck1" onChange={Region5}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Aorte -crosse
                        </label>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="row">
                        <b>Pathologie</b>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio1" value="" id="defaultCheck1" onChange={Pathologie}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Oui
                        </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio1" value="" id="defaultCheck1" onChange={Pathologie1}></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Non
                        </label>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <b>Type Pathologie</b>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Anevrisme
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie1}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Dissection
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie2}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Taille anormale
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie3}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Epaississement anormale
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie4}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Contenu (thrombus)
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie5}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Autres
                        </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie6}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Nodulex
                          </label>
                </div>
            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie7}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Fibrose pulmonaire
  </label>
                </div>

            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie8}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        PID
  </label>
                </div>

            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie9}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        DDB
  </label>
                </div>

            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie10}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Emphyseme
  </label>
                </div>

            </div>
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio2" value="" id="defaultCheck1" onChange={TypePathologie11}></input>
                    <label class="form-check-label" for="defaultCheck1">
                        Masse
  </label>
                </div>

            </div>
        </div>
    )

}
export default Region_Labelisation;