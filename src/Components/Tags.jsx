import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import ImageGallery from './ImageGallery';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Tags(props) {

    const [Gallery, SetGallery] = useState({ items: [] })
    const [CurrentTag, SetCurrentTag] = useState(1)
    // console.log(props.IsSafe)
    // props.SetGetImageByTag(GetImageByTag)

    async function GetImageByTag(TagId) {
        SetCurrentTag(TagId)
        try {
            props.setProgress(10)
            const response = await fetch(`https://api.nekosapi.com/v3/images/tags/${TagId}/images`);
            props.setProgress(50)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const NewData = data.items.filter((items, index) => {
                //console.log(props.IsSafe);
                if (!props.IsSafe) {
                    return items.rating === "safe";
                }
                else {
                    return items;
                }

            })
            props.setProgress(70)
            //console.log(NewData);
            SetGallery({ items: NewData });
            props.setProgress(100)

        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }

    }


    const [Tags, setTages] = useState([]);
    const [TagId, setTageId] = useState([]);

    useEffect(() => {
        fetch(`https://api.nekosapi.com/v3/images/tags`, {
            method: "GET",
        }).then(res => res.json())
            .then(data => {
                var TagSet = [];
                var TagIdSet = [];
                data.items.map((items, index) => {
                    if (!TagSet.includes(items.name)) {
                        TagSet.push(items.name);
                        TagIdSet.push(items.id);
                    }

                })


                setTages(TagSet)
                setTageId(TagIdSet)

            })
        GetImageByTag(CurrentTag)
    }, [props.refresh])

    useEffect(() => {
        if (Tags.length > 0) {
            GetImageByTag(CurrentTag);
        }
    }, [props.refresh, Tags]);
    return (
        <>
            <Row>


                <Col sm={3} className='bg-dark text-white' style={{ height: "100vh" }}>

                    <div className='my-2 w-100' direction="horizontal" gap={5} style={{ position: 'sticky', top: "10px", left: "10px" }}>
                        {Tags.map((tag, i) => (

                            <Badge key={TagId[i]} onClick={() => GetImageByTag(TagId[i])} className='mx-1 my-1' pill bg="primary">
                                {tag}
                            </Badge>

                        ))}
                    </div>

                </Col>
                <Col sm={9} className='bg-dark text-white' style={{ height: "100vh", overflowY: "scroll", cursor: "pointer" }}>
                    <ImageGallery Gallery={Gallery} />
                </Col>
            </Row >
        </>
    )
}

export default Tags
