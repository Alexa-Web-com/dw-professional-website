interface IDictLanguage {
    [key: string]: string | string[],
}

export interface IDict {
    [key: string]: IDictLanguage,
}