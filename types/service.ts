import { IconType } from "react-icons";

export interface ServiceListProps {
    title: string;
}

export interface ServiceProps {
    id: number;
    slug?: string;
    image?: string;
    icon?: IconType | string; // ✅ FIXED
    title?: string;
    description?: string;
    content?: string;
    list?: ServiceListProps[];
    created_at?: string;
}

export interface ServiceDataType {
    data: ServiceProps;
}