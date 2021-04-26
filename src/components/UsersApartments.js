import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';
import { Link} from 'react-router-dom';

 
function ApartmentCard(props) {
   return (
        <Link to={`/apartments/${props.apartmentId}`} >
            <Card>
                <CardImg width="100%" src={'/assets/' + props.apartmentImage} alt={props.apartmentName} />
                <CardImgOverlay>
                    <CardTitle color="black">{props.apartmentName}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
   )
}
function UsersApartment(props) {

    const [userId, setUserId] = useState();
    useEffect(() => {
        setUserId(props.auth._id);
    });
    
    const filterApartmentsByUserId = userId => {
        var res = [];
        for(let i = 0; i < props.apartments.length; i++)
        {
          var users = props.apartments[i].users.filter(user => user._id === userId);
          if(users.length > 0)
          {
            res.push(props.apartments[i]);
          }
        }

        return res;
    }

    return (
        <div>
            {filterApartmentsByUserId(userId).map(apartment => {
                console.log(apartment)
                return <ApartmentCard apartmentId={apartment._id} apartmentName={apartment.name} apartmentImage={apartment.apartmentTypeId.imagePath}></ApartmentCard>
            })}
            
        </div>
    )
}

export default UsersApartment;