import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  // console.log(CDN_URL + cloudinaryImageId , 'image id') ;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          
          alt="Biryani"
        />
      </div>

      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4 className="avg-rating">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="item-price">
          <span style={{ marginLeft: '4px' }}></span>
          <span>{costForTwo}</span>
        </h4>
        <h4 className="time">
          <span className="icons">
            <FiClock />
          </span>
          <span>{resData.info.sla.deliveryTime} minutes</span>
        </h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

// * Higher Order Component

// * input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;