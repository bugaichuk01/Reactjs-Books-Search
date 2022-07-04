export interface ISelect {
    label: string;
    options: Array<{
        value: string;
    }>;
    onSelectChange: ((option: string) => void)
}