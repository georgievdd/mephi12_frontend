import { http } from '@shared/api';
import { unpack } from '@shared/utils/unpack';
import { mapResponseToProblem } from './utils';
export const getTask = () => http.get('/tasks/backpack')
    .then(unpack)
    .then(mapResponseToProblem);
export const checkTask = (data) => http.put('/tasks/backpack', data, {
    params: {
        id: data.id,
    }
}).then((r) => unpack(r));
