import {
    /*createBrowserHistory,*/
    createHashHistory
} from 'history';

const getHistory = () => {
    //return createBrowserHistory();
    return createHashHistory();
}

export const history = getHistory();