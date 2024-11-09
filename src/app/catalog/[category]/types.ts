export interface FilterOption {
    value: string;
    label: string;
}

export interface FilterGroup {
    title: string;
    type: 'checkbox' | 'range';
    options: FilterOption[];
}