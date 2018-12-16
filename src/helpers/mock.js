export function getAlert(alert = {}) {
  return Object.assign({}, {
    isOpen: true,
    title: "this is title",
    content: "this is content",
    level: "this is level",
    icon: "",
    allowHTML: false,
    timeout: 0
  }, alert);
}
