interface FilterDropdownProps {
  label: string;
}

const FilterDropdown = ({ label }: FilterDropdownProps) => {
  return (
    <select className="border rounded-lg px-4 py-2">
      <option>{label}</option>
      <option>Laptop</option>
      <option>Desktop</option>
      <option>Printer</option>
      <option>Projector</option>
    </select>
  );
};

export default FilterDropdown;