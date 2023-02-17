export const getStoredCreds=()=>{


    const auth_data= localStorage.getItem('auth_data');
    return auth_data?JSON.parse(auth_data):null
}