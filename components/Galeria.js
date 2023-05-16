import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {

    const size = props.size || 2
    const link = props.link || '/filmes/'

    return (
        <>
            {
                props.titulo &&
                <h2 className='mt-3'>{props.titulo}</h2>

            }

            <Row>
                {props.lista.map(item => (
                    <Col className='mb-3' md={size}>
                        <Link href={link + item.id}>
                            {
                                item[props.foto]
                                ?
                                <Card.Img variant='top' src={"https://image.tmdb.org/t/p/w500" + item[props.foto]} />
                                :
                                <Card.Img variant='top' src={"data:image/png;base64,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"} />
                            }

                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Galeria