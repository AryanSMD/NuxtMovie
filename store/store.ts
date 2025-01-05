interface States {
    test: string
}

export const useStore = defineStore('useStore', {
    state: (): States => ({
        test: 'test'
    }),
    actions: {

    },
    getters: {
        getTest: state => state.test,
    }
})