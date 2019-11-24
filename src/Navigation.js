import historyStack from './historyStack';

export default {
    name: 'navigation',
    render() {
        const vnode = this.$slots.default ? this.$slots.default[0] : null;

        if (vnode) {
            console.log('[navigation] backward', historyStack.isBackward());
            if (historyStack.isBackward()) {
                vnode.componentInstance = historyStack.pop().componentInstance;
                console.log('[navigation] pop component');
                historyStack.log();
            } else {
                historyStack.push(vnode);
                this.$nextTick(() => {
                    vnode.vusionNavKey = window.history.state && window.history.state.key;
                    console.log('[navigation] push component');
                    historyStack.log();
                });
            }
            vnode.data.keepAlive = true;
        }
        historyStack.setForward();

        return vnode;
    },
};
