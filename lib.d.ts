declare module 'badwords.js' {
    declare const ARRAY: string[];
    declare const OBJECT: {[key: string]: boolean};
    declare const JSON: string[];
    declare const REGEXP: RegExp;

    export default class Main {
        getInfo(): any;
        setOptions(options: any): void;
        isProfane(str: string): boolean;
        clear(str: string): string;
    }
}

declare module 'badwords.js/array' {
    const array: string[];
    export default array;
}

declare module 'badwords.js/json' {
    const array: string[];
    export default array;
}

declare module 'badwords.js/object' {
    const object: {[key: string]: boolean};
    export default object;
}

declare module 'badwords.js/regexp' {
    const regexp: RegExp;
    export default regexp;
}
