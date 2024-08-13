import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetchdata
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log(MENU_API + resId , "MenuApi") ;
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json , 'json.data from menu.js');
    setResInfo(json.data);
  };
  // console.log(resInfo , 'resInfo , useMenu.js')

  return resInfo;
};

export default useRestaurantMenu;