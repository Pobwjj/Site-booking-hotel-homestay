import React, { useState } from "react"
import { Modal, Button, Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
function Room({ room }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="row bs">
            <div className="col-md-4">
                <img src={room.imageurls[0]} alt="" className="smallimg" />
            </div>
            <div className="col-md-7 ">
                <h1>{room.name}</h1>
                <b>
                    <p>Số lượng phòng còn: {room.maxcount}</p>
                    <p>Số điện thoại: {room.phonenumber}</p>
                    <p>Loại phòng: {room.type}</p>
                </b>

                <div style={{ float: 'right' }}>
                    <Link to={`/book/${room._id}`}>
                        <button className="btn btn-primary m-2">Đặt phòng</button>
                    </Link>
                    <button className="btn btn-primary" onClick={handleShow}>Xem chi tiết</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel prevLabel='' nextLabel=''>
                        {room.imageurls.map((url, index) => {
                            return <Carousel.Item key={index}>
                                <img className="d-block w-100 bigimg"
                                    src={url}
                                    alt="" />
                            </Carousel.Item>
                        })}
                    </Carousel>
                    <p>{room.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Room