import m from "mithril";

export default function IsAvailable() {
  let isAvailable = false;
  const onUpdate = () => (isAvailable = !isAvailable);

  return {
    view: () =>
      m(
        "",

        m("input", {
          id: "is-available",
          type: "checkbox",
          checked: isAvailable,
          onchange: onUpdate,
        }),
        m("label", { for: "is-available" }, "Is available")
      ),
  };
}
