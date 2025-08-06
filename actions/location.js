



export async function getLocation(){
    try{
const res=await fetch(`https://ipapi.co/json/`)
const data=await res.json()
return {
    country: data.country_name,
    state: data.region,
    city: data.city,
    latitude: parseFloat(data.latitude),
    longitude: parseFloat(data.longitude),
};

    }
catch(error){
    console.log(error)
    return null;
}

};