import { baseApi } from "@/redux/api/baseApi";

const authapi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: "POST",
                body: userInfo
            })
        })
    })
})

export const {useLoginMutation} = authapi