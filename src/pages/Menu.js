import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../utils/firebase';
import FirestoreService from '../utils/services/FirestoreService';
import { Table, Card, Image, Button, Modal } from 'react-bootstrap';

const { Cipher } = require("js-cipher");


const q = query(collection(db, "AlertLog"), where("Time", "!=", ""));
const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
            var Name = change.doc.get('Name')
            var Email = change.doc.get("Email")
            var Time = change.doc.get('Time')
            const date = new Date(Time.seconds, Time.nanoseconds);
            window.alert("New Alert at :\n " + convertHMS(Time.seconds * 1000) + "\n Name:\n " + JSON.stringify(Name) + "\n" + JSON.stringify(Email))
            // playAudio()
        }
        if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
            // playAudio()
        }
    });
});

function convertHMS(seconds) {
    const result = new Date(seconds * 1000).toISOString().slice(11, 19);
    console.log(result); // 👉️ "00:10:00" (hh:mm:ss)

    // ✅ if seconds are less than 1 hour and you only need mm:ss
    const result2 = new Date(seconds * 1000).toISOString().slice(14, 19);
    return result2; // 👉️ "10:00" (mm:ss)
}

function Menu(props) {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        FirestoreService.getAllMenuItems().then((response) => {
            setMenuItems(response._delegate._snapshot.docChanges);
        }).catch((e) => {
            alert("Error occured while fetching the menu item. " + e);
        })
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cipher = new Cipher();
    return (
        <>
            
            <Card style={{ margin: 24 }}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className="align-items-center" style={{ marginRight: 8 }}>
                        <Image src={'https://girlup.imgix.net/2021/11/Banner_1200x630.jpg?auto=format&fit=scale&h=538&ixlib=php-3.3.1&w=1024&wpsize=large'} style={{ width: 150 }} />
                        <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>ENDitNow</p>
                    </div>
                    <Button style={{ backgroundColor: '#BD2B2B', borderWidth: 0, }}>GBV App</Button>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Surname</th>
                                <th>National ID #</th>
                                <th>Physical Address</th>
                                <th>Email</th>
                                <th>Phone #</th>
                                <th>Perpetrator Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(menuItems) && (menuItems.map((menuItem, index) => (

                                <tr key={index}>

                                    <td>{index + 1}</td>
                                    {/* <td>{menuItem.}</td> */}
                                    <td>{menuItem.doc.data.value.mapValue.fields.FirstName.stringValue}
                                    </td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.Surname.stringValue}
                                    </td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.NationalID.stringValue}
                                    </td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.PhysicalAddress.stringValue}
                                    </td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.Email.stringValue}
                                    </td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.PhoneNumber.stringValue}
                                    </td>

                                    <td><a href={`${window.location.href}report/${cipher.encrypt(menuItem.doc.data.value.mapValue.fields.Email.stringValue, 5)}`}>{`${menuItem.doc.data.value.mapValue.fields.Perpetrator.mapValue.fields.FirstName.stringValue} ${menuItem.doc.data.value.mapValue.fields.Perpetrator.mapValue.fields.Surname.stringValue}`}</a>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>© 2022 GBV Alert App</p>
                    
                </Card.Footer>
            </Card>

        </>

    );
}
export default Menu;