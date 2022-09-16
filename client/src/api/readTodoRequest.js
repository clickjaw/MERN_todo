const API_URL = `http://localhost:8000`;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTY2MzMxMTY5N30._CYeuBP1wAnxuhDXJ8RlV7qh5nW2f3xDIT6N9bdoFt8'

export default ()=>{
    return fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
    }).then(response => response.json());
}