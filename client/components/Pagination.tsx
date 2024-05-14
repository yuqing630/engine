import styles from "../globals.module.css";

export interface PaginationProps {
    totalItems: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (page: number) => void
}

const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }: PaginationProps) => {
    const pagesCount = Math.ceil(totalItems / pageSize); // 100/10

    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    return (
        <div>
            <ul>
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            page === currentPage ? styles.pageItemActive : styles.pageItem
                        }
                    >
                        <a className={styles.pageLink} onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;