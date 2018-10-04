export interface IJsonPatch {
    op: "replace" | "add" | "remove"
    path: string
    value?: any
}