import { types } from "mobx-state-tree";

export const counterModel = types.model('Counter', {

    count: 0

}).actions((self) => ({
    increment: (payload) => {
        self.count = self.count + payload;
    },
    decrement: (payload) => {
        self.count = (self.count >= 1) ? (self.count - payload) : (self.count);
    },
    reset: () => {
        self.count = 0
    }
}))