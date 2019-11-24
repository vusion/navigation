import { supportsPushState } from './utils';
import historyStack from './historyStack';
import Navigation from './Navigation';

export default {
    install(Vue, { router }) {
        let event;
        if (router.mode === 'history')
            event = 'popstate';
        else if (router.mode === 'hash')
            event = supportsPushState ? 'popstate' : 'hashchange';

        if (!event)
            throw new Error('router mode has to be history or hash!');

        window.addEventListener(event, (e) => {
            // means now go back!
            // console.log('[index]', window.history.state && window.history.state.key, e.state && e.state.key);
            if (historyStack.find((vnode) => vnode.vusionNavKey === (e.state && e.state.key))) {
                // console.log('[index] setBackward', e.state);
                historyStack.setBackward();
            }
        });
        Vue.component('navigation', Navigation);
    },
};
