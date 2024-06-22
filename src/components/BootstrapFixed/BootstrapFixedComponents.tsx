import Badge from "react-bootstrap/Badge";
import {FC, PropsWithChildren, ReactNode} from "react";
import {Form, NavDropdown, Pagination, Spinner} from "react-bootstrap";

const BadgeFixed = Badge as unknown as FC<PropsWithChildren<{ children: ReactNode, bg: string }>>;
const FormCheckFixed = Form.Check as unknown as FC<PropsWithChildren<{ type: string, id: string, label: string }>>;
const SpinnerFixed = Spinner as unknown as FC<PropsWithChildren<{ children: ReactNode, animation: string }>>;
const PaginationFixed = Pagination as unknown as FC<PropsWithChildren<{ children: ReactNode }>>;
const PaginationItemFixed = Pagination.Item as unknown as FC<PropsWithChildren<{
    children: ReactNode,
    active?: boolean,
    disabled?: boolean
}>>
const PaginationEllipsisFixed = Pagination.Ellipsis as unknown as FC;
const PaginationFirstFixed = Pagination.First as unknown as FC;
const PaginationPrevFixed = Pagination.Prev as unknown as FC;
const PaginationNextFixed = Pagination.Next as unknown as FC;
const PaginationLastFixed = Pagination.Last as unknown as FC;
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

    FormCheckFixed,

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