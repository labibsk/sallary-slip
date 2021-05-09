import store from './store';
import {
    updateArrearsError,
    updateSaving
} from './actions';
import isFormValid from './validation';

const onSaveClick = () => {

    if (!isFormValid(store)) {
        return;
    }

    store.dispatch(updateArrearsError(false));
    store.dispatch(updateSaving(true));
};

export default onSaveClick;