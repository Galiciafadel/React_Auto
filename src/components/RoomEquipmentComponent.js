
import React, {useState} from 'react';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
//import Switch from 'react-switch';
import {makeStyles,Typography, Slider, FormControlLabel, Switch, Button} from '@material-ui/core';
import { withRouter } from "react-router";

const useStyles= makeStyles({
    root: {
      width:200
  
    }
  })

const EquipmentForm = (props) => {

    var [turnedOn, setTurnedOn] = useState(props.equipmentState);
    var [currentGoal, setCurrentGoal] = useState(props.equipmentGoal);
    var [auto, setAuto] = useState(props.equipmentAuto);


    const handleState = () => {
        turnedOn = !turnedOn;
        setTurnedOn(turnedOn);
        props.putEquipment(props.equipmentId, turnedOn, 0, false);
    }

    function valuetext(value) {
        setCurrentGoal(value);
        return `${value}°C`;
      }

      const handleGoal = () => {
          props.putEquipment(props.equipmentId, false, currentGoal, false);
      }

      const handleAuto = () => {
          console.log("before:", auto );
        auto = !auto;
        setAuto(auto);
        console.log("after:", auto );
        props.putEquipment(props.equipmentId, false, 0, auto);


      }
      
        return (
            <div > 
                <Button color="primary" variant="contained" onClick={handleState}>{turnedOn ? 'Turn Off' : 'Turn On'}</Button>
                <p className="Labelclass">The equipment is <b>{turnedOn ? 'on' : 'off'}</b> !</p>
                {props.equipmentType ==='Heater'  ? <div><Slider
                    defaultValue={currentGoal}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={100}
                /></div> : <div><Slider
                defaultValue={currentGoal}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={255}
            /></div> }
                <p className="Labelclass">Current Goal: {currentGoal}</p>
                <Button color="primary" variant="contained" onClick={handleGoal}>Set Goal</Button>

                {props.equipmentType==='Lamp' ? <div><Button color="primary" variant="contained" onClick={handleAuto}>{auto ? 'Turn Auto Off' : 'Turn Auto On'}</Button><p className="Labelclass">The Lamp's auto brightness is <b>{auto ? 'on' : 'off'}</b> !</p></div> : <p></p> }
                {props.equipmentType=== 'Ventilator' ? <p></p>: <div><p>The actual value of the equipment is: <b>{props.actual}</b>{props.equipmentType==='Heater' ? <b>°C</b> : <b>%</b> }</p></div>}
            </div>
        );
}

function RenderRoomEquipment ({equipment,equipmentId,putEquipment}) {

    if (equipment != null)
    return (
        <div className="slider">
            
            <div>
                {equipment.map((equipment)=>{
                        var auto = false;
                        if(equipment.auto != null)
                        {
                            auto = equipment.auto;
                        }
                        else{
                            auto = null;
                        }
                    return (
                        <div key={equipment._id}>
                            <h3 className="Labelclass">{equipment.equipmentTypeId.name}</h3>
                            <img className="imageclass" src={baseUrl + equipment.equipmentTypeId.imagePath} alt={equipment.equipmentTypeId.name} />
                            <EquipmentForm equipmentState={equipment.turnedOn} equipmentAuto={auto} actual={equipment.actual} equipmentType={equipment.equipmentTypeId.name} equipmentGoal={equipment.goal} equipmentId={equipmentId} putEquipment={putEquipment}></EquipmentForm >
                        
                        
                        </div>
                    );
                })}
            </div>
    </div>

    ); 
}

const EquipmentList = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.equipment.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.equipment.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="slider">Equipment</h1>
                        <hr />
                    </div>                
                </div>
                <div className="col-12 col-md-5 m-1"  key={props.equipment._id}>
                <RenderRoomEquipment equipmentTypes={props.equipmentTypes} equipment={props.equipment.filter((equipment) => equipment._id === props.equipmentId)} equipmentId={props.equipmentId} putEquipment={props.putEquipment}/>
                </div>
            </div>
        );
    }
}


export default withRouter(EquipmentList);