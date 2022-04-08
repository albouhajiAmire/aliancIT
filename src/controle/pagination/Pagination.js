import React from "react";

function Pagination() {
  return (
    <>
      <div className="text-start py-4">
        <div className="custom-pagination">
          <a href="#" className="prevv">
            Prevous
          </a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#" className="nextt">
            Next
          </a>
        </div>
      </div>
    </>
  );
}

export default Pagination;
