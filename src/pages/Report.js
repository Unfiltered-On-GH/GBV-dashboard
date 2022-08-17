import { Routes, Route } from "react-router-dom"
import UrlPramCheck from "../components/UrlPramCheck"
import FirestoreService from "../utils/services/FirestoreService"
import { db } from "../utils/firebase"

const book = db.collection("userDetails").doc("fK3ddutEpD2qQqRMXNW5").get();



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/report/:orderId" element={<UrlPramCheck />} />
            </Routes>
        </div>
    )
}

export default App