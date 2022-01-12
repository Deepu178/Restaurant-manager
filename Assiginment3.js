class restaurantManager{
    restaurantlist=[{
        id:1,
        restaurantname:'Aksay Restaurant',
        address:'Kakadeo',     
          city:'Jhansi'
    },
    {id:2,
    restaurantname:'Baba fast food',
address:'Sisamau',
city:'Varanasi'
},
{id:3,
restaurantname:'Thaggu ke Laddu',
address:'Mall road',
city:'Lucknow'},
{id:4,
restaurantname:'Biryani by kilo',
address:'Ashok Nagar',
city:'Kanpur'
}]


printAllRestaurantNames = () => {
    return this.restaurantlist.map(restaurant => restaurant.restaurantname);
}

filterRestaurantByCity = (cityName) => {
      return this.restaurantlist.filter(restaurant => restaurant.city == cityName);
}
}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames();
restaurantObj.filterRestaurantByCity('Kanpur');


const orderData = {
    'Below 500':20,
    '500-1000':29,
    '1000-1500':30,
    '1500-2000':44,
    'Above 2000':76,
};

const total = Object.values(orderData).reduce((prev, next) => prev +  next);

const headers = Object.keys(orderData);

const response = headers.map((item, index) => {
    return{
        'id': index+1,
        'restaurant': 'Punjabi Tadka',
        'order':item,
        'order  percentage': ((orderData[item] / total)*100).toFixed(2)
    }
})