import { openBlock as c, createElementBlock as e } from "vue";
const _ = (n, o) => {
  const t = n.__vccOpts || n;
  for (const [r, s] of o)
    t[r] = s;
  return t;
}, f = {}, l = { class: "w-full" };
function a(n, o) {
  return c(), e("div", l, "ComponentA");
}
const u = /* @__PURE__ */ _(f, [["render", a]]), i = {}, m = { class: "w-full" };
function p(n, o) {
  return c(), e("div", m, "ComponentB");
}
const h = /* @__PURE__ */ _(i, [["render", p]]);
export {
  u as ComponentA,
  h as ComponentB
};
