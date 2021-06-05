/*
 * Generated by orval v5.4.6 🍺
 * Do not edit manually.
 * MMOCG
 * This is the Massive Multiplayer Online Clicker Game server behind  [emoji-clicker](https://github.com/fabjan/emoji-clicker).
 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig
} from 'axios'
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions
} from 'react-query'
export type Leaderboard = Team[];

export interface Team {
  id?: string;
  clicks?: number;
}

export type ClickParams = { count?: number };



type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


export const getLeaderboard = <Data = unknown>(
     options?: AxiosRequestConfig
 ) => {
    return axios.get<Data extends unknown ? Leaderboard : Data>(
      `/leaderboard`,options
    );
  }


export const getGetLeaderboardQueryKey = () => [`/leaderboard`]

    
export const useGetLeaderboard = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getLeaderboard>, Error>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetLeaderboardQueryKey();
  const query = useQuery<AsyncReturnType<typeof getLeaderboard>, Error>(queryKey, () => getLeaderboard<Data>(axiosOptions), queryOptions )

  return {
    queryKey,
    ...query
  }
}

export const updateTeam = <Data = unknown>(
    teamId: string, options?: AxiosRequestConfig
 ) => {
    return axios.post<Data extends unknown ? Team : Data>(
      `/team/${teamId}`,
      undefined,options
    );
  }



    export const useUpdateTeam = <
      Data extends unknown = unknown,
      Error extends unknown = unknown
    >(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof updateTeam>, Error, {teamId: string}, unknown>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<AsyncReturnType<typeof updateTeam>, Error, {teamId: string}>((props) => {
        const {teamId} = props || {};

        return  updateTeam<Data>(teamId,axiosOptions)
      }, mutationOptions)
    }
    export const getTeamById = <Data = unknown>(
    teamId: string, options?: AxiosRequestConfig
 ) => {
    return axios.get<Data extends unknown ? Team : Data>(
      `/team/${teamId}`,options
    );
  }


export const getGetTeamByIdQueryKey = (teamId: string,) => [`/team/${teamId}`]

    
export const useGetTeamById = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
 teamId: string, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getTeamById>, Error>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetTeamByIdQueryKey(teamId);
  const query = useQuery<AsyncReturnType<typeof getTeamById>, Error>(queryKey, () => getTeamById<Data>(teamId, axiosOptions), {enabled: !!(teamId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const click = <Data = unknown>(
    teamId: string,
    params?: ClickParams, options?: AxiosRequestConfig
 ) => {
    return axios.post<Data extends unknown ? Team : Data>(
      `/team/${teamId}/click`,
      undefined,
      {
        params,
    ...options },
    );
  }



    export const useClick = <
      Data extends unknown = unknown,
      Error extends unknown = unknown
    >(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof click>, Error, {teamId: string;params?: ClickParams}, unknown>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<AsyncReturnType<typeof click>, Error, {teamId: string;params?: ClickParams}>((props) => {
        const {teamId,params} = props || {};

        return  click<Data>(teamId,params,axiosOptions)
      }, mutationOptions)
    }
    