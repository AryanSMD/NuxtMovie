import languages from "~/constants/languages";


export function runtime(time: number|undefined) {
    if (!time)
        return '0h 00min';
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    return `${ hour }h ${ minute }min`;
}

export function formatLang(iso: string) {
    const fullLang = languages.find(lang => lang.iso_639_1 === iso)
    if (fullLang)
        return fullLang.english_name
    return iso
}

export function formatCurrency (val: number) {
    return `$${ val }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}