import Badge from "react-bootstrap/Badge";
import {FC, PropsWithChildren, ReactNode} from "react";
import {Pagination, Spinner} from "react-bootstrap";

const BadgeFixed = Badge as unknown as FC<PropsWithChildren<{ children: ReactNode, bg: string }>>;

const SpinnerFixed = Spinner as unknown as FC<PropsWithChildren<{ children?: ReactNode, animation: string }>>;
const PaginationFixed = Pagination as unknown as FC<PropsWithChildren<{ children: ReactNode }>>;
const PaginationItemFixed = Pagination.Item as unknown as FC<PropsWithChildren<{
    children: ReactNode,
    active?: boolean,
    onClick?: (page: number) => void
    key?: number
}>>

export {
    BadgeFixed,

    SpinnerFixed,

    PaginationFixed,
    PaginationItemFixed,
}