import React from "react";

import Switch from 'react-switch';

import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';
class EquipmentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={ checked: false};
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({checked: event.target.checked});
    }
    handleSubmit(event){
        alert('The switch is'+ this.state.checked);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Switch: 
                    <Switch className="react-switch" checked={this.state.checked} onChange={this.handleChange}/>
                </label>
            </form>
        )
    }
}

function RenderRoomEquipment ({equipment,equipmentId,putEquipment}) {
    

    if (equipment != null)
    return (
        <div className="slider">
            
            <div>
                {equipment.map((equipment)=>{
                    return (
                        <div key={equipment._id}>
                            <h3 className="Labelclass">{equipment.equipmentTypeId.name}</h3>
                            <img className="imageclass" src={baseUrl + equipment.equipmentTypeId.imagePath} alt={equipment.equipmentTypeId.name} />
                            <EquipmentForm equipmentState={equipment.turnedOn} equipmentGoal={equipment.goal} equipmentId={equipmentId} putEquipment={putEquipment}></EquipmentForm >
                        
                        
                        </div>
                    );
                })}
            </div>
    </div>

    ); 
}

const EquipmentList = (props) => {
    console.log('prooooops', props);
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
                <RenderRoomEquipment equipment={props.equipment.filter((equipment) => equipment._id === props.equipmentId)} equipmentId={props.equipmentId} putEquipment={props.putEquipment}/>
                </div>
            </div>
        );
    }
}
export default EquipmentList;