import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Room from '../components/Room';
import { Carousel } from "react-bootstrap"
import Loader from '../components/Loader';
import Error from '../components/Error';
//function Homescreen() {
//const [rooms, setrooms] = useState([])
// const [loading, setLoading] = useState(true);
//const [cases, setCases] = useState([]);
// const [error, setError] = useState(null);

// useEffect(() => {
//     const getRoom = async () => {

//         try {
//             const data = (await axios.get('/api/rooms/getallrooms')).data

//             setrooms(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     getRoom();
// }, [])

// useEffect(() => {
//     const getCases = async () => {
//         try {
//             const response = await axios.get('localhost:3000/api/rooms/getallrooms');
//             setCases(response.data);
//             setrooms(response.data);
//         } catch (error) {
//             setError(error)
//             console.error('Error fetching data: ', error)
//         } finally {
//             setLoading(false)
//         }
//     };
//     getCases();
// }, []);

//     const [data, setData] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {

//             try {
//                 const { data: response } = await axios.get('/api/rooms/getallrooms').data;
//                 setData(response);
//             } catch (error) {
//                 console.error(error.message);
//             }

//         }

//         fetchData();
//     }, []);
//     return (
//         <div>
//             <h1>Home screen</h1>
//             <h1>there are {data.length} rooms</h1>
//         </div>
//     )
// }

// export default Homescree

const Homescreen = () => {
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const data = (await axios.get("http://localhost:5000/api/rooms/getallrooms")).data;
                setrooms(data);
                setloading(false);
            } catch (error) {
                seterror(true);
                setloading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100 header_cal"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/82/7c/exterior-view.jpg?w=700&h=-1&s=1"
                        alt="" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100 header_cal"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/82/7c/exterior-view.jpg?w=700&h=-1&s=1"
                        alt="" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100 header_cal"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/82/7c/exterior-view.jpg?w=700&h=-1&s=1"
                        alt="" />
                </Carousel.Item>
            </Carousel>
            <div className='container'>

                <div className='row justify-content-center mt-5'>
                    {loading ? (
                        <Loader />
                    ) : rooms.length > 1 ? (
                        rooms.map((room) => {
                            return <div key={room._id} className="col-md-9 mt-3">
                                <Room room={room} />
                            </div>;
                        })
                    ) : (
                        <Error />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Homescreen;