const userService = {
    login
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

function login(userid, passwd){
    const requestOptions = {
        method: 'POST',
        headers: {'content-Type:': 'application/json'},
        body: JSON.stringify({userid, passwd})
    }
    return fetch('/user/login', requestOptions)
        .then(handelResponse)
        .then(user=>{
            sessionStorage.setItem('userid', JSON.stringify(user))
            return user
        })
        .catch()
}


export default userService