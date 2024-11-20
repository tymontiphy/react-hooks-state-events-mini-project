// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;


// import React from "react";

// function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categories.map(category => (
//         <button
//           key={category}
//           className={category === selectedCategory ? "selected" : ""}
//           onClick={() => onSelectCategory(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryFilter;

import React from "react";

function CategoryFilter({categories,Scategory, onCategoryClick}) {

  const categoryButtons = categories.map((category)=>{
    const categoryClass = category===Scategory ? "selected" : ""
    return <button key={category} className={categoryClass} onClick={()=> onCategoryClick(category)}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;