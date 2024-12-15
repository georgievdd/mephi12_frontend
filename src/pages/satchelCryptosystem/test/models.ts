import { ServerProblem, Solve, SolveResponse } from '@entity/task'
import { http } from '@shared/api'
import { unpack } from '@shared/utils/unpack'
import { mapResponseToProblem } from './utils'
import { AxiosResponse } from 'axios'

export const getTask = () =>
    http.get<ServerProblem>('/tasks/backpack')
        .then(unpack)
        .then(mapResponseToProblem)

export const checkTask = (data: Solve) =>
    http.put<Solve, SolveResponse>('/tasks/backpack', data, {
        params: {
            id: data.id,
        }
    }).then((r: any) => unpack(r) as SolveResponse)