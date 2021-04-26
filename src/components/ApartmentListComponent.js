import React from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';


function RenderApartmentsItem ({apartments}) {
    if (apartments !=null)
    return (
        <div className="slider">
            <h>HELLOO</h>
    <div>
        {apartments.map((apartment)=>{
                
            return (
                <div key={apartment._id}>
        <Card>
            <Link to={`/apartments/${apartment._id}`}>
            <CardTitle>{apartment.name}</CardTitle>
                <CardImg width="100%" src={baseUrl + apartment.apartmentTypeId.imagePath} alt={apartment.name} />
                {/* <CardImgOverlay> */}
                    
                {/* </CardImgOverlay> */}
            </Link>
        </Card>
                   
                   </div>
                   )
               })}
               </div>
           </div>
               
    );
    else {
        return <div>HELLOOO in else</div>;
    } 
}

const ApartmentList = (props) => {
    // const apartmentList = props.apartments.apartments.map((apartment) => {
    //     return (
    //         <div className="col-12 col-md-5 m-1"  key={apartment._id}>
    //             <RenderApartmentsItem apartment={apartment} />
    //         </div>
    //     );
        
    // });

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.apartments.errMess}</h4>
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
                        <h3>Apartment List</h3>
                        <hr/>
                    </div>                
                </div>
                <div className="row">
                    <RenderApartmentsItem apartments={props.apartments}></RenderApartmentsItem>
                </div>
            </div>
        );
    }
}

export default ApartmentList;