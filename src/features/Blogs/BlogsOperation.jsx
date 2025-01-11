import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

/////****  This Blogs operation Component is to show case all the blogs related operations that you can perform

function BlogOperations() {
  return (
    <div className="mx-auto my-5 flex max-w-3xl flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md">
      <Filter
        filterField="tag"
        options={[
          { value: "all", label: "All" },
          { value: "React", label: "React" },
          { value: "Web Development", label: "Web Development" },
        ]}
      />

      <SortBy
        options={[
          { value: "createdAt-desc", label: "Sort by date (recent first)" },
          { value: "createdAt-asc", label: "Sort by date (earlier first)" },
        ]}
      />
    </div>
  );
}

export default BlogOperations;
