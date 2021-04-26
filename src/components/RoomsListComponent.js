import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderRooms({rooms}) {
    if (rooms!=null)
        return (
            <div className="slider">
                
                <div>
            {rooms.map((room)=>{
                
                return (
                   
                <div key={room._id}>
                    <Card body inverse style={{ backgroundColor: "#000", borderColor: "#333" }}>
                    <Link to={`/rooms/${room._id}`} >
                    <CardTitle>{room.name}</CardTitle>
                        <CardImg width="100%" src={baseUrl + room.roomTypeId.imagePath} alt={room.name} />
                        {/* <CardImgOverlay> */}
                            
                        {/* </CardImgOverlay> */}
                    </Link>
                    </Card>
                    <div>
                        <p></p>

                    </div>
                
                </div>
                )
            })}
            </div>
        </div>
            
        ); 

    else {
        return <div>No Rooms to display</div>;
    }       
}

const RoomList = (props) => {

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else
    if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.rooms.errMess}</h4>
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
                        <h3 className="slider">Rooms List</h3>
                        <hr/>
                    </div>                
                </div>
                <div className="row">
                    <RenderRooms rooms={props.rooms}></RenderRooms>
        
                </div>
            </div>
        );
    }
}
 
export default RoomList;