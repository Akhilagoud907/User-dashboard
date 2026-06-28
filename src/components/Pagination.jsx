import { PAGE_SIZES } from "../utils/constants";

export default function Pagination({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange
}) {
  return (
    <div className="pagination">
      <div className="pagination-buttons">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

      <select
        value={pageSize}
        onChange={(e) =>
          onPageSizeChange(
            Number(e.target.value)
          )
        }
      >
        {PAGE_SIZES.map((size) => (
          <option
            key={size}
            value={size}
          >
            {size} per page
          </option>
        ))}
      </select>
    </div>
  );
}