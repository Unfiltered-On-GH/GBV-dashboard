import {db} from '../firebase'
function getAllMenuItems() {
    return new Promise((resolve, reject) => {
        db.collection("userDetails").get().then((allMenuItems) => {
            resolve(allMenuItems);
        }).catch((e) => {
            reject(e);
        })
    })
}

export default { getAllMenuItems }