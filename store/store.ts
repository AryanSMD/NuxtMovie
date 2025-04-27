interface States {
    title: string
}

export const useStore = defineStore('useStore', {
    state: (): States => ({
        title: 'Nuxt Movie'
    }),
    getters: {
        getTitle: state => state.title,
    }
})