type TStates = {
    title: string
}

export const useStore = defineStore('useStore', {
    state: (): TStates => ({
        title: 'Nuxt Movie'
    }),
    getters: {
        getTitle: state => state.title,
    }
})