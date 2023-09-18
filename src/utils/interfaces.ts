interface IDictLanguage {
    [key: string]: string | string[],
}

export interface IDict {
    [key: string]: IDictLanguage,
}

export interface IPosition {
    logo: string;
    company: string;
    jobTitle: string;
    desc: string[];
    technologies: string[];
    dates: string;
}

