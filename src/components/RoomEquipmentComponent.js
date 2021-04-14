// import React, {Component,/* useState*/} from 'react';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';
// import Switch from 'react-switch';
// import {makeStyles,Typography, Slider} from '@material-ui/core';
// import { withRouter } from "react-router";
// import PropTypes from "prop-types";

// const useStyles= makeStyles({
//     root: {
//       width:200
  
//     }
//   })

// // function MySlider () {

// //     const classes=useStyles()
// //     //const [value,setValue]=React.useState(0)
// //     // const handleSliderChange=(event,newValue)=>(
// //     //   setValue(newValue)
// //     // )
// //     //this.handleSliderChange = this.handleSliderChange.bind(this);

// //     // const handleSliderChange=(value)=>{
// //     //     setValue(value);
// //     //     alert(value);
// //     // setState({
// //     //       goal:value
// //     //   });
// //     //     this.props.putEquipment(this.props.equipmentId,false,this.state.goal)
  
// //     //   }

// //     return(
// //       <div className={classes.roo}>
// //       <div style={{width:200,margin:20}}>
// //             <Slider
// //                 min={0}
// //                 max={10}
// //                 value={value}
// //                 onChange={handleSliderChange}
// //                 />
// //                 <Typography className="slider">Intensity: {value}</Typography>
// //                 </div>
// //     </div>
// //     );
// // }
  
  
   
// class EquipmentForm extends Component {
//     constructor(props) {
//       super(props);

//       this.turnOn=this.turnOn.bind(this);
//       //this.handleSliderChange = this.handleSliderChange.bind(this);
//       //this.turnOn1=this.turnOn1.bind(this);

//     //   this.state = {
//     //     turnedOn: false,
//     //     goal: 0
//     //   };

//     this.state = {
//         turnedOn: this.props.equipmentState,
//         goal: this.props.equipmentGoal,
//         // auto: this.props.equipmentAuto
//     }

//     }



//     turnOn(){
//         this.setState({
//             turnedOn: !this.state.turnedOn
//         });
//         this.props.putEquipment(this.props.equipmentId, this.state.turnedOn,this.state.goal,this.state.auto)
//     }

//     // turnOn1(){
//     //     this.setState({
//     //         auto: !this.state.auto
//     //     });
//     //     this.props.putEquipment(this.props.equipmentId, this.state.turnedOn,this.state.goal,this.state.auto)
//     // }

//     // handleSliderChange(value){
//     //     //setValue(value);
//     //     alert(value);
//     //     this.setState({
//     //       goal:value
//     //     });
//     //     this.props.putEquipment(this.props.equipmentId,false,this.state.goal,false)
  
//     //   }


  
   
    
//     render() {
//         // if (this.props.equipmentName === "Lamp"){
//         //     return(
//         //         <div>
//         //         {/* Auto Switch On/Off:
//         //         <Switch className="react-switch" onChange={this.turnOn1}/> */}
                
//         //         <div > {//key={equipment._id}>
//         //         }
//         //         Swith On/Off:
//         //             <Switch className="react-switch" onChange={this.turnOn}/>
//         //             <p className="Labelclass">The equipment is <b>{this.state.turnedOn ? 'on' : 'off'}</b> !</p>
//         //             {/* <div >
//         //                 <div style={{width:200,margin:20}}>
//         //                         <Slider
//         //                             min={0}
//         //                             max={10}
//         //                             goal={this.goal}
//         //                             onChange={this.handleSliderChange}
//         //                             />
//         //                             <Typography className="slider">Intensity: {this.goal}</Typography>
//         //                             </div>
//         // </div>
//         //          */}
//         //         </div>
//         //         </div>
//         //     )

            
//         // }

//         // //const classes=useStyles();
//         // else {
//         return (
//             <div > {//key={equipment._id}>
//             }
//             Swith On/Off:
//                 <Switch className="react-switch" onChange={this.turnOn}/>
//                 <p className="Labelclass">The equipment is <b>{this.state.turnedOn ? 'on' : 'off'}</b> !</p>
//                 {/* <div >
//                     <div style={{width:200,margin:20}}>
//                             <Slider
//                                 min={0}
//                                 max={10}
//                                 goal={this.goal}
//                                 onChange={this.handleSliderChange}
//                                 />
//                                 <Typography className="slider">Intensity: {this.goal}</Typography>
//                                 </div>
//     </div>
//              */}
//             </div>
            
//         )};
//     }
// //}

// function RenderRoomEquipment ({equipment,equipmentId,putEquipment}) {
    

//     if (equipment != null)
//     return (
//         <div className="slider">
            
//             <div>
//                 {equipment.map((equipment)=>{
                    
//                     return (
//                         <div key={equipment._id}>
//                             <h3 className="Labelclass">{equipment.equipmentTypeId.name}</h3>
//                             <img className="imageclass" src={baseUrl + equipment.equipmentTypeId.imagePath} alt={equipment.equipmentTypeId.name} />
//                             <EquipmentForm equipmentState={equipment.turnedOn} equipmentGoal={equipment.goal} equipmentAuto={equipment.auto} equipmentId={equipmentId} equipmentName={equipment.equipmentTypeId.name} putEquipment={putEquipment}></EquipmentForm >
                        
                        
//                         </div>
//                     );
                    
//                 })}
//             </div>
//     </div>

//     ); 
// }

// const EquipmentList = (props) => {
//     if (props.isLoading) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.equipment.errMess) {
//         return(
//             <div className="container">
//                 <div className="row"> 
//                     <div className="col-12">
//                         <h4>{props.equipment.errMess}</h4>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <h1 className="slider">Equipment</h1>
//                         <hr />
//                     </div>                
//                 </div>
//                 <div className="col-12 col-md-5 m-1"  key={props.equipment._id}>
//                 <RenderRoomEquipment equipment={props.equipment.filter((equipment) => equipment._id === props.equipmentId)} equipmentId={props.equipmentId} putEquipment={props.putEquipment}/>
//                 </div>
//             </div>
//         );
//     }
// }

// // const EquipmmentList = (props) => {
// //     const apartmentList = props.apartments.apartments.map((apartment) => {
// //         return (
// //             <div className="col-12 col-md-5 m-1"  key={apartment._id}>
// //                 <RenderApartmentsItem apartment={apartment} />
// //             </div>
// //         );
        
// //     });

// //     if (props.apartments.isLoading) {
// //         return(
// //             <div className="container">
// //                 <div className="row">            
// //                     <Loading />
// //                 </div>
// //             </div>
// //         );
// //     }
// //     else if (props.apartments.errMess) {
// //         return(
// //             <div className="container">
// //                 <div className="row"> 
// //                     <div className="col-12">
// //                         <h4>{props.apartments.errMess}</h4>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }
// //     else {
// //         return (
// //             <div className="container">
// //                 <div className="row">

// //                     <div className="col-12">
// //                         <h3>ApartmentList</h3>
// //                         <hr/>
// //                     </div>                
// //                 </div>
// //                 <div className="row">
// //                     {apartmentList}
// //                 </div>
// //             </div>
// //         );
// //     }
// // }



// export default withRouter(EquipmentList);

//////////////////////////////////////////////////////////////////////////////////////////////////
import React, {Component,/* useState*/} from 'react';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
//import Switch from 'react-switch';
import {makeStyles,Typography, Slider, FormControlLabel, Switch} from '@material-ui/core';
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const useStyles= makeStyles({
    root: {
      width:200
  
    }
  })

function MySlider () {

    const classes=useStyles()
    const [value,setValue]=React.useState(0)
    const handleSliderChange=(event,newValue)=>(
      setValue(newValue)
    )
    return(
      <div className={classes.roo}>
      <div style={{width:200,margin:20}}>
            <Slider
                min={0}
                max={10}
                value={value}
                onChange={handleSliderChange}
                />
                <Typography className="slider">Intensity: {value}</Typography>
                </div>
                </div>
    );
}
  
  
   
class EquipmentForm extends Component {
    constructor(props) {
      super(props);

      this.turnOn=this.turnOn.bind(this);

    this.state = {
        turnedOn: this.props.equipmentState,
        goal: this.props.equipmentGoal
    }
    this.on= this.props.equipmentState;

    }

    turnOn(){
        this.setState((state) => ({
            turnedOn: !state.turnedOn
        }));
        this.on = !this.on;
        this.props.putEquipment(this.props.equipmentId, this.state.turnedOn,this.state.goal)
    }
  
    
    render() {

        return (
            <div > {//key={equipment._id}>
            }
                {//<Switch className="react-switch" onChange={this.turnOn} checked={this.state.turnedOn}/>
    }
                <FormControlLabel
                control={<Switch checked={this.on} onChange={this.turnOn} />}
                label="Normal"
                />
                <p className="Labelclass">The equipment is <b>{this.state.turnedOn ? 'on' : 'off'}</b> !</p>
                    {//<MySlider/>}
    }
            </div>
        );
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
//////////////////////////////////////////////////////////////////////////////////////////////

// const EquipmmentList = (props) => {
//     const apartmentList = props.apartments.apartments.map((apartment) => {
//         return (
//             <div className="col-12 col-md-5 m-1"  key={apartment._id}>
//                 <RenderApartmentsItem apartment={apartment} />
//             </div>
//         );
        
//     });

//     if (props.apartments.isLoading) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.apartments.errMess) {
//         return(
//             <div className="container">
//                 <div className="row"> 
//                     <div className="col-12">
//                         <h4>{props.apartments.errMess}</h4>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else {
//         return (
//             <div className="container">
//                 <div className="row">

//                     <div className="col-12">
//                         <h3>ApartmentList</h3>
//                         <hr/>
//                     </div>                
//                 </div>
//                 <div className="row">
//                     {apartmentList}
//                 </div>
//             </div>
//         );
//     }
// }



export default withRouter(EquipmentList);