import { MdOutlineShortText } from "react-icons/md";

function Search({ search, setSearch }) {
  return (
    <div style={{ maxWidth: "1150px", backgroundColor: "#1a1a1a", borderRadius: "9999px", overflow: "hidden", borderWidth: "2px", borderColor: "#333333", padding: "0.375rem", paddingLeft: "1rem", paddingRight: "2rem", display: "flex", alignItems: "center" }} className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
  <div style={{ height: "1rem", width: "1rem", borderRadius: "9999px", borderWidth: "2px", flexShrink: 0 }} className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{ backgroundColor: "#1a1a1a", color: "#fff", border: "none", width: "100%", focusRing: 0, outline: "none", placeholder: "#fafafa", fontSize: "12px" }}
    className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
    placeholder="Search..."
  />

  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto">
    <div style={{ display: "flex", gap: "0.5rem", paddingRight: "1.25rem" }} className="flex space-x-2 pr-5">
      <button style={{ backgroundColor: "#282828", color: "#cecece", padding: "0.375rem 0.75rem", borderRadius: "9999px", fontSize: "12px", fontWeight: "bold", borderWidth: "2px", borderColor: "#484848" }} className="tag">Minimal</button>
      <button style={{ backgroundColor: "#282828", color: "#cecece", padding: "0.375rem 0.75rem", borderRadius: "9999px", fontSize: "12px", fontWeight: "bold", borderWidth: "2px", borderColor: "#484848" }} className="tag">House</button>
      <button style={{ backgroundColor: "#282828", color: "#cecece", padding: "0.375rem 0.75rem", borderRadius: "9999px", fontSize: "12px", fontWeight: "bold", borderWidth: "2px", borderColor: "#484848" }} className="tag">Minimal</button>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#cecece", paddingLeft: "1rem", fontSize: "12px", fontWeight: "600" }} className="flex items-center space-x-1.5 text-[#cecece] pl-4">
      <MdOutlineShortText style={{ fontSize: "1.5rem" }} className="text-2xl animate-pulse" />
      <span className="font-medium text-sm">Filters</span>
    </div>
  </div>
</div>

  );
}

export default Search;
