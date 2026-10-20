import PaginationButton from "@/app/components/paginationButton"

export default function PaginationControls() {
    return (
        <div className="container">
            <div className="row">
                <PaginationButton page={1} />
                <PaginationButton page={2} />
                <PaginationButton page={3} />
                <PaginationButton page={4} />
            </div>
        </div>
    )
}