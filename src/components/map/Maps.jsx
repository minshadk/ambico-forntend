import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";


// import Map from "react-map-gl";
import Map, { Marker, Popup } from "react-map-gl";
// import { Room, Star } from "@material-ui/icons";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;

function Maps(props) {
// const navigate = useNavigate();

const {handleCoordinates,handleClose} = props;

// handleCoordinates

  // const currentUser = "test";
  // const [showPopup, setShowPopup] = useState(true);
  // const [pins, setPins] = useState([]);
  // const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [location, setNewPlace] = useState(null);
  // const [coordinates,setCoordinates]= useState([]);




  const [viewport, setViewport] = useState({
    // latitude: 70,
    latitude: 11.00892423436592, 
    // latitude: 76.08601298174005, 
    longitude: 76.08601298174005,
    zoom: 10,
  });

  useEffect(() => {
    // const getPins = async () => {
    //   try {
    //     const res = await axios.get("/pins");
    //     setPins(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getPins();
  }, []);

  // const handleMarkerClick = (id, lat, long) => {
  //   setCurrentPlaceId(id);
  //   setViewport({ ...viewport, latitude: lat, longitude: long });
  // };

  const handleAddClick = async (e) => {
    console.log("handle add click is called")
    // console.log(e.lngLat)
    // const [longitude, latitude] = e.lngLat;
    // const {longitude, latitude} = e.lngLat;
    let longitude = e.lngLat.lng;
    let latitude = e.lngLat.lat;

    await handleCoordinates([longitude,latitude])
    // await localStorage.setItem('coordinates', JSON.stringify(coordinates));

    // console.log(`longitude = ${longitude}`)
    // console.log(localStorage.getItem('coordinates'))
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const closeModal = () => {
    handleClose()
  }

  return (
    <Map
      initialViewState={{ ...viewport }}
      style={{
        // width: 600, height: 400
        width: "100vw",
        height: "100vh",
      }}
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={"pk.eyJ1IjoibWluc2hhZGsiLCJhIjoiY2t6OGxzeWNxMWx3aDJ2b2ZiZGNtZ2M1cSJ9.CPfPxCgQaVLHIPlyoBqLgg"}
      mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      onDblClick={handleAddClick}
      transitionDuration="200"
    >


      {location && (
        <>
          <Marker
            latitude={location.lat}
            longitude={location.long}
            offsetLeft={-3.5 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
          >
            <AddLocationAltIcon
              style={{
                fontSize: 4 * viewport.zoom,
                color: "blue",
                cursor: "pointer",
              }}
            />
          </Marker>
          <Popup
            latitude={location.lat}
            longitude={location.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
            anchor="left"
          > 
          set as my location
            <div>

                <button type="submit" className="submitButton" onClick={closeModal}>
                  Set as my location
                </button>
            </div>
          </Popup>
        </>
      )}
    </Map>
  );
}

export default Maps;
