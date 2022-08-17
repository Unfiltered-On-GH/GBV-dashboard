import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { db, firebase } from "../utils/firebase";
import FirestoreService from '../utils/services/FirestoreService';
import { Cipher } from "js-cipher";
import { doc, onSnapshot } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function UrlPramCheck() {
    let params = useParams()
    const cipher = new Cipher();
    const x = cipher.decrypt(params.orderId, 5)

    // let y = db.collection('userDetails').doc(x).field('x').get()
    // console.log(y)

    const unsub = onSnapshot(doc(db, "userDetails", x), (doc) => {
    window.z = doc.data()
    
    
});

const details = window.z

    return (<>
    
     <Card className="text-center" style={{ margin: 24 }}>
         <h1>GBV Alert Response</h1>
      <Card.Header>Victim's Details</Card.Header>
      <Card.Body>
        <Card.Title>Identification Information</Card.Title>
        <Card.Text>
          First Name : {details.FirstName}<br/>
          Surname : {details.Surname}<br/>
          National ID # : {details.NationalID}<br/>
          Date Of Birth : {details.DOB}
        </Card.Text>
    <Card.Title>Contact Information</Card.Title>
        <Card.Text>
          Phone Number : {details.PhoneNumber}<br/>
          Physcial Address : {details.PhysicalAddress}<br/>
          Email : {details.Email}<br/>
        </Card.Text>
        <Button variant="primary">Ca</Button>
      </Card.Body>
      <Card.Header>Perpetrator's Details</Card.Header>
      <Card.Body>
        <Card.Title>Identification Information</Card.Title>
        <Card.Text>
          First Name : {details.Perpetrator.FirstName}<br/>
          Surname : {details.Perpetrator.Surname}<br/>
          Relationship : {details.Perpetrator.Relationship}<br/>
          National ID # : {details.Perpetrator.NationalID}<br/>
          Date Of Birth : {details.Perpetrator.DOB}
        </Card.Text>
        <Card.Title>Contact Information</Card.Title>
        <Card.Text>
          Phone Number : {details.Perpetrator.PhoneNumber}<br/>
          Physcial Address : {details.Perpetrator.PhysicalAddress}<br/>
          Email : {details.Email}<br/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">GBV Rapid Response System</Card.Footer>
    </Card>
    </>)
}