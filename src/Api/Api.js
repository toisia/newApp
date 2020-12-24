import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL:  `https://social-network.samuraijs.com/api/1.0/`,
    headers:  {"API-KEY":"5d232cb4-0850-4256-adb1-9708e7bf1721"}
})


export const userAPI = {
    requestUsers (currentPage =1,pageSize=10 ) {
        return instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then (response => response.data);
        },
        
    Unfollow (id){
            return instance.
            delete(
                `follow/${id}`)
                .then (response => response.data);
            },
    Follow (id){
                return instance.
                post(
                    `follow/${id}`)
                    .then (response => response.data);
                }
}
export const profileAPI = {
    getProfile (userId ) {
        return instance
                .get(`profile/` + userId)
                .then (response => response.data);
        },
    getStatus (userId ) {
        return instance
                .get(`profile/status/` + userId)
                .then (response => response.data);
        },
    updateStatus (statusText ) {
        return instance
                .put(`profile/status`, {status: statusText})
                .then (response => response.data);
        }
    }
 
export const authAPI = {
    getAuth () {
        return instance
                .get(`auth/me/`)
                .then (response => response.data);
        },
    login (email, password, rememberMe = false) {
        return instance
                .post(`/auth/login`, {email, password, rememberMe})
                .then (response => response.data);
        },
    logout () {
        return instance
                .delete(`/auth/login`)
                .then (response => response.data);
        }}

        // axios
        // .get(
        //   `https://social-network.samuraijs.com/api/1.0/profile/` + userId
        // )


// export  default userAPI;
// export const  getUsers = (currentPage =1,pageSize=10 )=> {
// return instance
//         .get(`users?page=${currentPage}&count=${pageSize}`)
//         .then (response => response.data);
// };


// export const  Unfollow = (id)=> {
// return instance.
// delete(
//     `follow/${id}`)
//     .then (response => response.data);
// };

// export const  Follow = (id)=> {
// return instance.
// post(
//     `follow/${id}`,{})
//     .then (response => response.data);
// };
