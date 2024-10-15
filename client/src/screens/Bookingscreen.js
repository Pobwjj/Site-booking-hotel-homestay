import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
function Bookingscreen() {
    const { roomid } = useParams()
    const [room, setroom] = useState({});
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const { data } = await axios.get("http://localhost:5000/api/rooms/getroombyid", {
                    params: { roomid } // Thêm roomId vào query parameters
                });
                setroom(data);
                setloading(false);
            } catch (error) {
                seterror(true);
                setloading(false);
            }
        };

        fetchData();
    }, [roomid]);

    return (
        <div className='m-5'>
            {loading ? (<Loader />) : room ? (<div>
                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-6'>
                        <h1>{room.name}</h1>
                        {room.imageurls?.length > 0 && (
                            <img src={room.imageurls[0]} className='bigimg' alt="Hình ảnh phòng" />
                        )}
                    </div>
                    <div className='col-md-6'>
                        <div style={{ textAlign: 'right' }}>
                            <h1>Chi tiết đặt phòng</h1>
                            <hr />

                            <b>
                                <p>Tên: </p>
                                <p>Ngày Check-in: </p>
                                <p>Ngày Check-out: </p>
                                <p>Số phòng: {room.maxcount}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <b>
                                <h1>Số lượng</h1>
                                <hr />
                                <p>Số ngày tổng cộng:</p>
                                <p>Giá phòng: {room.rentperday}</p>
                                <h1>Thành tiền:</h1>
                            </b>
                        </div>
                        <div style={{ float: 'right' }}>
                            <button className='btn btn-primary'>Thanh toán</button>
                        </div>
                    </div>
                </div>

            </div>) : (<Error />)}
        </div>
    )
}
export default Bookingscreen


