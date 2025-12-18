import { languagesArray } from "../i18n/ui";

export function pathResolver(path: string): string {
    const pathValues = path.split("/").filter(Boolean);
    console.log(pathValues);
    if (!pathValues.length) {
        return "/";
    }

    if (languagesArray.includes(pathValues[0])) {
        const [_locale, ...valuesRest] = pathValues;
        const rawPath = `/${valuesRest.join("/")}`;
        return rawPath.substring(0, rawPath.length - 1);
    }
    return `${path}`;
}
