import Axios from '../helpers/Axios/Config'


export const getRequest = async (url: string) => {
    const { data }: any = await Axios.get(url)
    return data
}


export const postRequest = async (url: string, payload: any) => {
    const { data }: any = await Axios.post(url, { ...payload })
    return data
}
