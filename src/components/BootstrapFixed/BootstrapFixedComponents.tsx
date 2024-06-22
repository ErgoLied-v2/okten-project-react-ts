import Badge from "react-bootstrap/Badge";
import {FC, PropsWithChildren, ReactNode} from "react";
import {NavDropdown, Pagination, Spinner} from "react-bootstrap";

const BadgeFixed = Badge as unknown as FC<PropsWithChildren<{ children: ReactNode, bg: string }>>;

const SpinnerFixed = Spinner as unknown as FC<PropsWithChildren<{ children: ReactNode, animation: string }>>;
const PaginationFixed = Pagination as unknown as FC<PropsWithChildren<{ children: ReactNode }>>;
const PaginationItemFixed = Pagination.Item as unknown as FC<PropsWithChildren<{
    children: ReactNode,
    active?: boolean,
    onClick?: (page: number) => void
    key?: number
}>>
const PaginationEllipsisFixed = Pagination.Ellipsis as unknown as FC<PropsWithChildren<{ className?: string, disabled:true }>>;
const PaginationFirstFixed = Pagination.First as unknown as FC<PropsWithChildren<{
    onClick: () => void,
    disabled: boolean
}>>;
const PaginationPrevFixed = Pagination.Prev as unknown as FC<PropsWithChildren<{
    onClick: () => void,
    disabled: boolean
}>>;
const PaginationNextFixed = Pagination.Next as unknown as FC<PropsWithChildren<{
    onClick: () => void,
    disabled: boolean
}>>;
const PaginationLastFixed = Pagination.Last as unknown as FC<PropsWithChildren<{
    onClick: () => void,
    disabled: boolean
}>>;;
const NavDropdownFixed = NavDropdown as unknown as FC<PropsWithChildren<{
    children: ReactNode,
    title: string,
    id: string,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    show: boolean
}>>;

export {
    BadgeFixed,

    SpinnerFixed,

    PaginationFixed,
    PaginationItemFixed,
    PaginationEllipsisFixed,
    PaginationFirstFixed,
    PaginationPrevFixed,
    PaginationNextFixed,
    PaginationLastFixed,

    NavDropdownFixed
}