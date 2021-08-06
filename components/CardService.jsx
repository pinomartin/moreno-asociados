import React from 'react';
import { Card , CardImg, ListGroup } from 'react-bootstrap';
import styles from "../styles/Home.module.css";




export const CardService = ({title,imgSrc,imgAlt,serviceInfo}) => {
 
    return (
        
          <Card className={['bg-light', styles.cardBody]}>
                <CardImg src={imgSrc} alt={imgAlt} className={['bg-light', styles.serviceIcon]}/>
                <Card.Body>
                <Card.Title> <h2 className="text-center mb-4">{ title }</h2> </Card.Title>
                    <Card.Text>
                        <ListGroup> 
                        {
                            <>
                            <ListGroup.Item className={styles.listItem__effect} key={serviceInfo.i1}>{serviceInfo.i1}</ListGroup.Item>  
                            <ListGroup.Item className={styles.listItem__effect} key={serviceInfo.i2}>{serviceInfo.i2}</ListGroup.Item>  
                            <ListGroup.Item className={styles.listItem__effect} key={serviceInfo.i3}>{serviceInfo.i3}</ListGroup.Item>  
                            <ListGroup.Item className={styles.listItem__effect} key={serviceInfo.i4}>{serviceInfo.i4}</ListGroup.Item>  
                            <ListGroup.Item className={styles.listItem__effect} key={serviceInfo.i5}>{serviceInfo.i5}</ListGroup.Item>  
                            </>
                        }
                    </ListGroup>
                    </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
          </Card>  
        
        
    )
}
