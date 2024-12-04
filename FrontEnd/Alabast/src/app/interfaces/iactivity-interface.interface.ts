export interface IActivitiesResponse {
    data: IActivity[];
    pagination?: IPagination;
}

export interface IActivity {
    id: number;
    profiles_advertiser_users_id: number;
    title: string;
    email: string;
    tel_countrycode: number;
    tel_number: number;
    description: string;
    notes: string;
    ismarket: number;
    duration: string;
    group_min: number;
    group_max: number;
    images: string;
    active: number;
}

export interface IPagination {
    currentPage: number;
    totalPages: number;
    previousPage: number | null;
    nextPage: number;
    limit: number;
    }
