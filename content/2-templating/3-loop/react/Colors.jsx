export default function Colors() {
  const colors = ["red", "green", "blue"];
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
}
