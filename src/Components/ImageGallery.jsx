import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { saveAs } from 'file-saver'


function ImageGallery({ Gallery }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ImageUrl, SetImageUrl] = useState("");

    const showModal = (data) => {
        setIsModalOpen(true);
        SetImageUrl(data)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const downloadImage = () => {
        saveAs(ImageUrl, 'image.jpg') // Put your image URL here.
    }

    //console.log('HeloGallery:', Gallery);
    if (!Gallery || !Array.isArray(Gallery.items) || Gallery.items.length === 0) {
        return <p className='text-center my-5'>No Record Found</p>;
    }


    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={downloadImage}>
                    Download &#8681;
                </Button>
            ]}>
                <div style={{ height: "400px", overflow: "hidden" }}>
                    <img src={ImageUrl} style={{ width: "100%", height: "100%", objectfit: "cover" }} alt="..." />
                </div>
            </Modal>
            <Row>
                {
                    Gallery.items.length > 0 ?

                        Gallery.items.map((item, index) => (

                            <Col key={index}>
                                <div className="col-md-3" style={{ width: "18rem" }} onClick={() => showModal(item.image_url)}>
                                    <img src={item.image_url} className="card-img-top" alt="..." />
                                </div>
                            </Col>
                        ))
                        :
                        <div>
                            No Record Found
                        </div>

                }
            </Row>
        </>
    )


}

export default ImageGallery
