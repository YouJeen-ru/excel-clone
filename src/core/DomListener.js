import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener!`)
        }

        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(`Method is not implemented in ${name} Component`)
            }
            console.log(method)
            // analog AddEventListener
            this.$root.on(listener, this[method].bind(this))
        })
    }

    removeDomListeners() {
        // realize!!!

    }
}
// input => onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}