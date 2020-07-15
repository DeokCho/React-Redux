import '../data/initialState.json'

const userService = {
    loginService
}
function handelResponse(response){
    return response.text()
        .then(text=>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status===401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
}

function loginService(userid, passwd){
    alert(`loginService 진입`)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type:': 'application/json'},
        body: JSON.stringify({userid, passwd})
    }
    return fetch('/initialState.json', requestOptions)
        .then(handelResponse)
        .then(user=>{
            alert(`thunk가 응답함`)
            localStorage.setItem('userid', JSON.stringify(userid))
        })
}


export default userService